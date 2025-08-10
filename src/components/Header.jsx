import React, { useState, useRef, useEffect } from "react";
import "../assets/css/Header.css"; // Assuming you have a CSS file for styles

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
          className="text-4xl font-bold tracking-tight transition-colors duration-500"
          style={{ color: logoColor }}
        >
          {"<ruru />"}
        </span>

        {/* Toggle Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          style={{ color: logoColor }} // 🔹 match logo color dynamically
          className="hover:opacity-80 transition"
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
          className={`absolute top-full right-0 mt-6 w-72 bg-white shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${isOpen
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
            <div className="flex gap-4 text-[#474747bf]" id="social-icons">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ruel-cabaluna-jr-1393a1b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4831d4] transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66h-3.55V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/rcabaluna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4831d4] transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.48 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/rcabalunajr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4831d4] transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
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
