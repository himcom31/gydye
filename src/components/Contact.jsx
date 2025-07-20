import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    // Replace with actual API call to send form data
    setStatus('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section py-10 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Contact Us</h2>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Get in Touch</h3>
            <p className="text-lg mb-4 dark:text-gray-300">
              Have questions or feedback? We’d love to hear from you! Reach out to us through any of the following methods:
            </p>
            <ul className="mb-4">
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 0A1.5 1.5 0 0 1 3 1.5h18A1.5 1.5 0 0 1 22.5 3v18a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 .5 21V3A1.5 1.5 0 0 1 1.5 1.5zM3 1.5A1.5 1.5 0 0 1 4.5 0h15A1.5 1.5 0 0 1 21 1.5v1.5H3V1.5zM21 3H3v16h18V3z"/>
                </svg>
                <a href="mailto:info@yourbookstore.com" className="text-blue-600 dark:text-blue-400">himanshurchaudhary499@gmail.com</a>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.9 4.2c.2 0 .4-.1.5-.3.1-.2.2-.4.2-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3zm-.6 1.3c-.4 0-.7.1-.9.3-.2.2-.4.5-.4.9v.7h1.7v-.7c0-.3-.1-.6-.4-.9-.2-.2-.5-.3-.9-.3zm1.1-1.6h-1c-.5 0-.9.1-1.2.4-.3.3-.5.7-.5 1.2v2.1h-1.7v1.6h1.7v3.4h1.8v-3.4h1.7v-1.6h-1.7v-2.1c0-.3.1-.6.4-.9.3-.2.7-.3 1.1-.3s.8.1 1.1.3c.3.2.4.6.4.9v2.1h1.7v1.6h-1.7v3.4h-1.8v-3.4h-1.7v-1.6h1.7v-2.1c0-.5-.2-.9-.5-1.2-.3-.3-.8-.4-1.2-.4z"/>
                </svg>
                <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400">7563883929</a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 2V3H4v1H3v16h1v-1h14v1h1V4h-1zm-5 13H8v-1h7v1zm0-3H8v-1h7v1zm0-3H8V9h7v1zm0-3H8V6h7v1z"/>
                </svg>
                <p className="text-blue-600 dark:text-blue-400">Madhubani, Bihar(India)</p>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md dark:bg-slate-900 dark:text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-md dark:bg-slate-900 dark:text-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full p-3 border rounded-md dark:bg-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-green-600 dark:text-green-400">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
