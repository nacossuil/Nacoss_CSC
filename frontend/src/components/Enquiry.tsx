import React, { useState } from "react";
import axios from "axios";
import grid from "../assets/Grid.png";

const Enquiry = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus("");

        try {
            const response = await axios.post('https://nacoss-csc.onrender.com/api/submit-contact-form', {
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            });

            if (response.status === 200) {
                setFormStatus("Message sent successfully!");
                setFormData({
                    email: "",
                    subject: "",
                    message: "",
                });
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessages = error.response.data.errors.map(err => err.msg).join(". ");
                setFormStatus(`Error: ${errorMessages}`);
            } else {
                setFormStatus("An error occurred while sending the message. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClassName = "mt-2 p-4 w-full border rounded-md focus:ring-2 focus:ring-blue-500 text-lg";

    return (
        <section
            id="enquiry"
            className="relative w-full flex flex-col justify-center items-center pt-4 px-4 sm:px-8 md:px-16"
            style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="w-full max-w-6xl mx-auto" id="events">
                <p className="text-center leading-[32px] font-bold text-[2.5rem] sm:text-[3rem] mb-8 hero-text">
                    Get in Touch with Us!
                </p>
                <div className="flex flex-col justify-center items-center w-full mb-28" id="contact">
                    <h4 className="text-lg sm:text-xl text-gray-600 mb-4 text-center max-w-2xl">
                        For enquiries, support, assistance, or collaboration, feel free to reach out to us.📨
                    </h4>
                    <h4 className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-2xl">
                        We are here to help you!
                    </h4>
                    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address "
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Email"
                                className={inputClassName}
                            />
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Email Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                aria-label="Subject"
                                className={inputClassName}
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Message"
                                rows="6"
                                className={inputClassName}
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-blue-700 hover:bg-[#29176B] text-white px-8 py-4 rounded-[30px] w-full md:w-auto md:min-w-[200px] transition duration-300 text-lg font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                    {formStatus && (
                        <p className={`mt-6 text-lg ${formStatus.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                            {formStatus}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Enquiry;