import React, { useEffect, useState } from "react";
import "../assets/css/Hero.css";
import profilePic from "../assets/images/profile.png";

const Hero = () => {
  const words = ["Web Developer.", "Project Manager.", "Virtual Assistant."];
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
      }, 800);
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
      <div
        id="contents"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto space-y-10 md:space-y-0 px-32"
      >
        {/* Left Column */}
        <div className="text-white md:w-3/5">
          <h1 className="text-white font-bold leading-tight text-4xl md:text-5xl mb-4">
            <span className="block mb-2 text-white">I’m a</span>
            <span className="relative">
              {/* Invisible for height consistency */}
              <span className="invisible block font-bold text-[2.5rem] md:text-[4rem]">
                {words.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>

              {/* Typing animation */}
              <span className="absolute top-0 left-0 inline-flex items-baseline font-bold">
                <span className="bg-[#ccf381] text-[#22272f] px-2 rounded text-[2.5rem] md:text-[4rem] leading-tight">
                  {text}
                </span>
                <span className="blinking-cursor text-white text-[2.5rem] md:text-[4rem] leading-tight">
                  |
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="subtitle text-base md:text-lg mt-10 leading-relaxed mb-8">
            I build practical, user-centered solutions—whether{" "}
            <br className="hidden sm:block" /> through code or everyday support.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ccf384] text-[#22272f] px-6 py-3 rounded font-semibold shadow hover:bg-[#b4da68] transition-all duration-300 ease-in-out"
            >
              My Resume
            </a>
            <a
              href="/work"
              className="border border-[#ccf381] text-[#ccf381] px-6 py-3 rounded font-semibold shadow hover:bg-[#ccf381] hover:text-[#22272f] transition-all duration-300 ease-in-out"
            >
              My Work
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/5 flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 sm:w-80 md:w-[300px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
