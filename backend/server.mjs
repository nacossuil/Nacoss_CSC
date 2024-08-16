import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Execs from './ExecsSchema.mjs';
import Events from './EventSchema.mjs';
import multer from 'multer';
import {newEventValidator, execsValidator} from "./validators.mjs";

const {validationResult} = await import('express-validator');

/* global process */
const app = express();
let mongoDBUrI = "mongodb+srv://username:password@cluster0.djovt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const portNumber = process.env.PORT;
const username = process.env.USERNAME;
let password = process.env.PASSWORD;
password = encodeURIComponent(password);
dotenv.config();
mongoDBUrI = mongoDBUrI.replace("username", username).replace("password", password);

//middleware
app.use(express.json()); // for parsing JSON bodies
app.use(express.urlencoded({extended: true})); // for parsing URL-encoded bodies

// multer for handling file uploads
const upload = multer();

// Connect to MongoDB
mongoose.connect(`${mongoDBUrI}`).then(() => {
    console.log("Connected successfully to MongoDB");
}).catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});

// Routes
app.get('/api/events', async (req, res) => {
    try {
        const {page = 1, limit = 10, startDate, endDate} = req.query;

        let dbQuery = {};
        if (startDate && endDate) {
            dbQuery.startDate = {$gte: new Date(startDate)};
            dbQuery.endDate = {$lte: new Date(endDate)};
        }

        const events = await Events
            .find(dbQuery)
            .skip((page - 1) * limit)
            .lean() // For better performance when you don't need Mongoose documents
            .exec();

        const count = await Events.countDocuments(dbQuery);

        res.json({
            events,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/events', newEventValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const event = new Events({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        price: req.body.price,
        location: req.body.location,
        imageUrl: req.body.imageUrl
    });
    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.get('/api/execs', async (req, res) => {
    try {
        const {email, page = 1, limit = 10} = req.query;

        let query = {};
        if (email) {
            query.email = email;
        }

        const execs = await Execs.find(query)
            .limit(limit)
            .skip((page - 1) * limit)
            .select('name email position studentId session') // Only select needed fields
            .lean()
            .exec();

        const count = await Execs.countDocuments(query);

        res.json({
            execs,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// POST route for execs
app.post('/api/execs', upload.single('image'), execsValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const exec = new Execs({
        name: req.body.name,
        email: req.body.email,
        position: req.body.position,
        studentId: req.body.studentId,
        session: req.body.session,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    });

    try {
        const newExec = await exec.save();
        res.status(201).json({
            ...newExec.toObject(),
            image: {
                contentType: newExec.image.contentType,
                size: newExec.image.data.length
            }
        });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.get('/api/events/:id', async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({message: "Event not found"});
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/events/:id', newEventValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedEvent) {
            return res.status(404).json({message: "Event not found"});
        }
        res.json(updatedEvent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.delete('/api/events/:id', async (req, res) => {
    try {
        const deletedEvent = await Events.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({message: "Event not found"});
        }
        res.json({message: "Event deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// New route to get exec image
app.get('/api/execs/:id/image', async (req, res) => {
    try {
        const exec = await Execs.findById(req.params.id);
        if (!exec || !exec.image) {
            return res.status(404).json({message: "Image not found"});
        }
        res.set('Content-Type', exec.image.contentType);
        res.send(exec.image.data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: "Something went wrong!"});
});

app.listen(portNumber, () => {
    console.log(`Server running on port ${portNumber}`);
});