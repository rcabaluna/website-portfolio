import React, { useState, useRef, useEffect } from "react";

const Header = ({ logoColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 bg-transparent">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <span
          className="text-4xl font-extrabold tracking-tight transition-colors duration-500"
          style={{ color: logoColor }}
        >
          {"<ruru />"}
        </span>

        {/* Toggle Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#22272f] hover:text-[#4831d4] transition"
          aria-label="Open menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          ref={dropdownRef}
          className={`absolute top-full right-0 mt-6 w-72 bg-white shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${
            isOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg font-medium text-[#22272f]">
            <li className="flex justify-between items-center">
              <a
                href="/resume"
                target="_blank"
                className="inline-block border-b-2 border-transparent hover:border-[#4831d4] transition-all duration-300"
              >
                My Resume
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 text-xl font-bold focus:outline-none ml-4"
                aria-label="Close menu"
              >
                ×
              </button>
            </li>
            <li>
              <a
                href="#experience"
                className="inline-block border-b-2 border-transparent hover:border-[#4831d4] transition-all duration-300"
              >
                My Work
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          {/* Contact Info */}
<div className="px-6 pb-6 pt-2 text-sm text-[#474747bf]">
  <h3>SAY HELLO</h3>
  <p className="mb-1">
    <a
      href="mailto:rcabalunajr@gmail.com"
      className="hover:text-[#4831d4] transition"
    >
      rcabalunajr@gmail.com
    </a>
  </p>
  <p className="mb-4">
    <a
      href="tel:+639453182617"
      className="hover:text-[#4831d4] transition"
    >
      +63 945 318 2617
    </a>
  </p>

  {/* Social Media Icons */}
  <div className="flex gap-4 text-[#474747bf]">
    <a
      href="https://github.com/rcabalunajr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#4831d4] transition"
      aria-label="GitHub"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3..." />
      </svg>
    </a>

    <a
      href="https://linkedin.com/in/rcabalunajr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#4831d4] transition"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5..." />
      </svg>
    </a>

    <a
      href="https://twitter.com/rcabalunajr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#4831d4] transition"
      aria-label="Twitter"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.56c-.89.39-1.84.65-2.84..." />
      </svg>
    </a>
  </div>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
