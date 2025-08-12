import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Normal Link
import "../assets/css/Hero.css";
import profilePic from "../assets/images/profile.png";

const Hero = () => {
  const words = ["WEB DEVELOPER.", "PROJECT MANAGER.", "VIRTUAL ASSISTANT."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [pauseBeforeTyping, setPauseBeforeTyping] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (pauseBeforeTyping) {
      const delay = setTimeout(() => {
        setPauseBeforeTyping(false);
      }, 1000);
      return () => clearTimeout(delay);
    }

    const type = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(100);
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setPauseBeforeTyping(true);
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed, pauseBeforeTyping]);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButtons(true);
    }, 800); // delay for fade-in
    return () => clearTimeout(buttonTimer);
  }, []);

  return (
    <section className="hero min-h-screen bg-[#22272f] px-4 md:px-6 flex items-center justify-center">
      <div id="contents" className="flex flex-col md:flex-row items-center">

        {/* Left Column */}
        <div className="md:w-4/5" id="hero-text">

          {/* Mobile Title */}
          <motion.h1
            className="leading-tight mb-4"
            id="hero-title-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-500 mb-2 text-white">I’m a</span>

            {/* Roles */}
            <span
              className="relative text-[#ccf381] text-center gap-x-2"
              id="hero-title-mobile-roles"
            >
              {["Web Developer", "Project Manager", "Virtual Assistant"].map(
                (role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.3 }}
                  >
                    {role}
                    {i < 2 && ", "}
                  </motion.span>
                )
              )}
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="subtitle text-base md:text-lg mt-10 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Providing businesses with modern web solutions and reliable assistance
            to boost efficiency, streamline operations, and achieve measurable results.
          </motion.p>

          {/* Buttons with fade-in */}
          <div
            className={`action-buttons flex gap-4 transition-opacity duration-1000 ${showButtons ? "opacity-100" : "opacity-0"
              }`}
          >
            <Link
              to="/resume"
              className="bg-[#ccf381] text-[#22272f] px-6 py-3 rounded font-semibold shadow hover:bg-[#ccf381] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out flex items-center justify-center"
            >
              My Resume
            </Link>

            <Link
              to="/works"
              id="my-work-btn-hero"
              className="border-2 border-[#ccf381] text-[#FEC601] px-6 py-3 rounded font-semibold shadow hover:bg-[#ccf381] hover:text-[#22272f] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out flex items-center justify-center"
            >
              My Works
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          className="md:w-2/5 flex justify-center"
          id="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 sm:w-80 md:w-[700px] h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
