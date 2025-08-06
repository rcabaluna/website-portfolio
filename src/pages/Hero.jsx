import React, { useEffect, useState } from "react";
import "../assets/css/Hero.css";
import profilePic from "../assets/images/profile.png";

const Hero = () => {
  const words = [
    "Web Developer.",
    "Project Manager.",
    "Virtual Assistant."
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
      }, 800); // delay before typing next word
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
        setPauseBeforeTyping(true); // <-- wait before typing next word
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed, pauseBeforeTyping]);

  return (
    <section className="hero w-full h-[90vh] flex items-center px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto flex h-full">
        {/* Left Column */}
        <div className="max-w-[59%] text-white flex flex-col justify-between py-12">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              <span className="text-white">I’m a</span><br />
              <span className="running-text underline bg-[#ccf381] text-[#22272f] px-2 rounded">
                {text}
              </span>
              <span className="blinking-cursor text-white">|</span>
            </h1>
            <p className="subtitle mb-8">
              I build practical, user-centered solutions—whether <br /> through code or everyday support.
            </p>
          </div>

          {/* Highlights */}
          <div className="mini-description flex justify-between gap-6 pt-8 text-sm">
            <ul className="highlights list-none w-1/2 space-y-2">
              <li>I build websites, internal tools, and automated systems. I focus on functionality, scalability, and simplicity in every project.</li>
            </ul>
            <ul className="highlights list-none w-1/2 space-y-2">
              <li>As a tech-savvy virtual assistant, I streamline daily tasks. I manage tools and support teams with speed and precision.</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          <div className="gwapo">
            <img
              src={profilePic}
              alt="Profile"
              className="max-w-[350px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
