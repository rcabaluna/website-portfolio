import React from "react";
import "../assets/css/Footer.css"; // Adjust the path as necessary

const Footer = () => {
    return (
        <footer className="footer w-full min-h-screen bg-[#3D155F] px-6 md:px-40 py-20 flex flex-col relative overflow-hidden">
            <div className="inner-content flex flex-col justify-between w-full text-white flex-grow">

                {/* Top Section */}
                <div className="flex flex-col flex-grow justify-center">
                    <div className="footer-main flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-8">
                        <div className="space-y-4 text-left">
                            <span className="say-hello">Say Hello</span>
                            <ul>
                                <li><a href="mailto:rcabalunajr@gmail.com">rcabalunajr@gmail.com</a></li>
                                <li><a href="tel:+639453182617">+63 945-318-2617</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4 text-left">
                            <span className="say-hello mb-0">&nbsp;</span>
                            <ul>
                                <li><a href="/works">My Works</a></li>
                                <li><a href="/resume">My Resume</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#CCF381] opacity-30 my-6"></div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mt-auto">
                    <div>
                        <span className="copyright">© 2025. Ruel O. Cabaluna Jr.</span>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-6">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/ruel-cabaluna-jr-1393a1b7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-white hover:text-[#0A66C2] transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.17h.05c.53-1 1.83-2.17 3.77-2.17 4.03 0 4.78 2.65 4.78 6.1V24h-4V15.28c0-2.08-.04-4.75-2.89-4.75-2.89 0-3.33 2.26-3.33 4.6V24h-4V8z" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/rcabaluna/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-white hover:text-gray-400 transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.8 2.73 1.28 3.4.98.1-.75.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.14 11.14 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/rcabalunajr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-white hover:text-[#1877F2] transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
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
        </footer>


    );
};

export default Footer;
