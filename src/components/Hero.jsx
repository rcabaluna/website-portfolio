import React, { useEffect, useState } from "react";
import "../assets/css/Hero.css";
import profilePic from "../assets/images/profile.png";

const Hero = () => {
  const words = [
    "Web Developer.",
    "Project Manager.",
    "Virtual Assistant.",
  ];

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
    <section className="hero w-full min-h-screen bg-[#22272f] px-4 md:px-6 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-16">
        {/* Left Column */}
        <div className="text-white w-full md:w-1/2">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white block mb-2">I’m a</span>
            <div className="relative min-h-[3.5rem] w-full">
              <span className="invisible block font-bold">
                {words.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
              <span className="absolute top-0 left-0 underline bg-[#ccf381] text-[#22272f] px-2 rounded inline-block">
                {text}
              </span>
              <span className="blinking-cursor text-white">|</span>
            </div>
          </h1>
          <p className="subtitle mb-6 text-base md:text-lg leading-relaxed">
            I build practical, user-centered solutions—whether{" "}
            <br className="hidden sm:block" /> through code or everyday support.
          </p>

          <div className="mini-description flex flex-col gap-4 pt-4 text-sm">
            <ul className="list-none space-y-2">
              <li>
                I build websites, internal tools, and automated systems.
                I focus on functionality, scalability, and simplicity in every project.
              </li>
              <li>
                As a tech-savvy virtual assistant, I streamline daily tasks.
                I manage tools and support teams with speed and precision.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex justify-center">
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
