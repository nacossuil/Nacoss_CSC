import  { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col justify-center items-center px-52 mb-28" id="contact">
      <p className="text-center text-[1.5rem] text-[#111111] font-bold t-4">
        If you have any question or need assistance,
      </p>
      <p className="text-center text-[1.5rem] text-[#111111] font-bold t-4">
        please do not hesitate to reach out to us
      </p>
      <form onSubmit={handleSubmit} className="max-w-md w-[400px] mx-auto mt-8">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
            
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#D8A331] text-white px-4 py-2 rounded-[30px] w-full mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Enquiry;
