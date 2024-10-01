import React, {useState} from "react";
import grid from "../assets/Grid.png";

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission delay
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setIsSubmitting(false);
            setFormStatus("Message sent successfully!");
            // Optionally, reset the form after submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 2000);
    };

    return (
        <section
            id="enquiry"
            className="relative container mx-auto flex flex-col justify-center items-center py-12 px-4 sm:px-8 md:px-16"
            style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="my-12 container mx-auto" id="events">
                <p className="text-center leading-[32px] font-bold text-[2.5rem] sm:text-[3rem] mb-8 hero-text">
                    Get in Touch with Us!
                </p>
                <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 mb-28" id="contact">
                    <h4 className="text-lg sm:text-xl text-gray-600 mb-4 text-center max-w-2xl">
                        For enquiries, support, assistance, or collaboration, feel free to reach out to us. 📞📨
                    </h4>
                    <h4 className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-2xl"> We are here to help
                        you!</h4>
                    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto mt-8 space-y-4">
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                aria-label="Your name"
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Email"
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                aria-label="Subject"
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
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
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-blue-700 hover:bg-[#29176B] text-white px-4 py-2 rounded-[30px] w-full mt-4 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                    {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
