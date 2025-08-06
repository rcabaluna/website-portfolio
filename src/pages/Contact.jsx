import React from "react";
import "../assets/css/Contact.css";
const Contact = () => {
  return (
    <section className="contact w-full h-screen bg-[#f4f4f4] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl w-full">
        {/* Heading */}
        <h1>Send me a message!</h1>
        <p className="text-lg text-gray-700 mb-10">
          Got a question or proposal, or just want <br /> to say hello? Go ahead.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Name */}
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4831d4]"
              />
            </div>

            {/* Email */}
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4831d4]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4831d4]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-[#4831d4] text-white py-3 rounded-md font-medium hover:bg-[#3722b6] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
