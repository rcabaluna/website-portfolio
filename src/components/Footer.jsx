import React from "react";
import "../assets/css/Footer.css"; // Adjust the path as necessary

const Footer = () => {
    return (
        <footer className="footer w-full min-h-screen bg-[#3D155F] px-6 md:px-60 py-20 flex items-center relative overflow-hidden">
            <div className="inner-content flex flex-col justify-center w-full text-white">
                {/* Top Section: Flex with 3 columns */}
                <div className="footer-main flex flex-col md:flex-row justify-between gap-12 mb-8">

                    <div className="space-y-4">
                        <span className="say-hello">Say Hello</span>
                        <ul>
                            <li>rcabalunajr@gmail.com</li>
                            <li>+63 945-318-2617</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start justify-start space-y-2">
                        <ul>
                            <li><a href="#">My Work</a></li>
                            <li><a href="#">My Résumé</a></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-[#CCF381] opacity-30 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    <div>© Ruel O. Cabaluna Jr. 2025</div>
                    <div>FB LN YT</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
