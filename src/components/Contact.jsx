import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simulate email sending
    console.log(form);
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });

    // Clear form
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto pb-24">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
            placeholder="Subject"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-400 rounded px-4 py-2"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Contact;
