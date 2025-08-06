import React from "react";
import "../assets/css/Footer.css"; // Adjust the path as necessary

const Footer = () => {
    return (
        <footer className=" footer w-full bg-[#3D155F] text-[#CCF381] px-6 md:px-12 py-12 flex flex-col justify-between min-h-screen">

            <div className="inner-content flex flex-col justify-center w-full">
                {/* Top Section: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

                    {/* Left Column */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Say Hello</h2>
                        <p>rcabalunajr@gmail.com</p>
                        <p>+63 945-318-2617</p>
                    </div>

                    {/* Center Column */}
                    <div className="flex flex-col items-center md:items-start justify-start space-y-2">
                        <a href="#" className="hover:underline">My Work</a>
                        <a href="#" className="hover:underline">My Shelf</a>
                        <a href="#" className="hover:underline">My Résumé</a>
                    </div>

                    {/* Right Column (Empty) */}
                    <div></div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#CCF381] opacity-30 my-6"></div>

                {/* Bottom Section: 2 Columns */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    <div>© Ruel O. Cabaluna Jr. 2025</div>
                    <div>FB LN YT</div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
