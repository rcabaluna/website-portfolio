import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ Added for animations
import "../assets/css/Hero.css";
import profilePic from "../assets/images/profile.png";

const Hero = () => {
  const words = ["WEB DEVELOPER.", "PROJECT MANAGER.", "VIRTUAL ASSISTANT."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [pauseBeforeTyping, setPauseBeforeTyping] = useState(false);

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

            {/* Roles with separate animation */}
            <span
              className="relative text-[#ccf381] flex flex-wrap gap-x-2"
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
                    {i < 2 && ","}
                    {i === 1 && " and"}
                  </motion.span>
                )
              )}
            </span>
          </motion.h1>

          {/* Typing Title */}
          <motion.h1
            className="leading-tight mb-4"
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="block text-500 mb-2 text-white">I’m a</span>
            <span className="relative">
              <span className="invisible block text-[2rem] md:text-[4rem]">
                {words.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
              <span className="absolute top-0 left-0 inline-flex items-baseline font-bold">
                <span
                  className="bg-[#ccf381] text-[#22272f] px-2 rounded text-[2.5rem] md:text-[4rem] leading-tight"
                  id="hero-typing"
                >
                  {text}
                </span>
                <span className="blinking-cursor text-white text-[2.5rem] md:text-[4rem] leading-tight">|</span>
              </span>
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

          {/* Buttons */}
          <motion.div
            className="action-buttons flex gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.8 }
              }
            }}
          >
            <motion.a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ccf381] text-[#22272f] px-6 py-3 rounded font-semibold shadow hover:bg-[#ccf381] transition-all duration-300 ease-in-out"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              My Resume
            </motion.a>

            <motion.a
              href="/works"
              id="my-work-btn-hero"
              className="border-2 border-[#ccf381] text-[#FEC601] px-6 py-3 rounded font-semibold shadow hover:bg-[#ccf381] transition-all duration-300 ease-in-out"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              My Works
            </motion.a>
          </motion.div>
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
