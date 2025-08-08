import React, { useRef } from "react";
import "../assets/css/Contact.css";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-350px" });

  return (
    <section className="contact w-full min-h-fit md:h-screen bg-[#f4f4f4] flex items-center justify-center md:px-12 md:py-20 py-6 px-12">

      <div className="text-center max-w-4xl w-full">
        <article className="cavalier" data-theme="electric">
          <div ref={textRef} className="cavalier-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Send me a message!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Got a question or proposal, or just want
              to say hello? Go ahead.
            </motion.p>
          </div>
        </article>

        {/* Contact Form */}
        <form className="space-y-6 text-left mt-8">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4831d4]"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4831d4]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4831d4]"
            ></textarea>
          </div>

          <div className="flex justify-center">
         <button
  type="submit"
  className="relative px-6 py-2 text-sm text-[#4831d4] font-semibold border-2 border-[#4831d4] overflow-hidden transition-all duration-300 hover:text-white group sm:px-14 sm:py-4 sm:text-lg"
>
  <span className="absolute inset-0 bg-[#4831d4] w-0 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
    Send Message
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6 font-extrabold transform transition-transform duration-300 group-hover:translate-x-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  </span>
</button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;