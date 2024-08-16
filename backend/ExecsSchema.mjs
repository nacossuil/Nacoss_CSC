import mongoose from 'mongoose';

const execsSchema = new mongoose.Schema({
    name: String,
    email: String,
    studentId: String,
    position: String,
    session: String,
    image: {
        data: Buffer,
        contentType: String
    }
});

const Execs = mongoose.model('Executives', execsSchema);
export default Execs;