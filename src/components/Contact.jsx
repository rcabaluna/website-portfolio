import React, { useRef, useState } from "react";
import "../assets/css/Contact.css";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-350px" });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Submitting state
  const [submitting, setSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-key": import.meta.env.VITE_AUTH_KEY, // match this with backend AUTH_KEY
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        alert(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <>
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
                Got a question or proposal, or just want to say hello? Go ahead.
              </motion.p>
            </div>
          </article>

          {/* Contact Form */}
          <form className="space-y-6 text-left mt-8" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={submitting}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={submitting}
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
                value={formData.message}
                onChange={handleChange}
                required
                disabled={submitting}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className={`relative px-6 py-2 text-sm font-semibold border-2 overflow-hidden transition-all duration-300 group sm:px-14 sm:py-4 sm:text-lg ${submitting
                  ? "bg-[#4831d4] text-white border-[#4831d4] cursor-not-allowed"
                  : "text-[#4831d4] border-[#4831d4] hover:text-white"
                  }`}
              >
                <span
                  className={`absolute inset-0 w-0 transition-all duration-300 ease-in-out z-0 ${submitting ? "w-full bg-[#4831d4]" : "group-hover:w-full bg-[#4831d4]"
                    }`}
                ></span>
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && (
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 font-extrabold transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popup message */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#4831d4",
            color: "white",
            padding: "15px 25px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            zIndex: 9999,
            fontWeight: "bold",
            fontSize: "16px",
            userSelect: "none",
          }}
        >
          Message has been sent!
        </div>
      )}
    </>
  );
};

export default Contact;
