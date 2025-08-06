import React from "react";
import "../assets/css/Experience.css";
import workingGIF from "../assets/images/working.gif";


const Experience = () => {
    return (
        <section className="experience w-full min-h-screen bg-[#4831D4] text-white px-6 md:px-12 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column - Text */}
                <div>
                    <h1 className="mb-6">
                        Over the years,
                    </h1>

                    <p className="mb-4 leading-relaxed">
                        Over the years, I've built systems and tools that help teams work smarter—from e-commerce platforms and ERP systems to internal portals for HR, procurement, and event management. My work spans across full-stack development, WordPress customization, and Search Engine Optimization, with projects done in collaboration with organizaitons and institutions.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        Currently, I develop web applications using modern tech stacks like React, and Laravel. I handle both the frontend and backend, focusing on building fast, reliable, and scalable solutions that improve how people work and interact with systems.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        Beyond development, I provide IT support and consultation—helping teams troubleshoot, optimize their infrastructure, and adapt technology to fit their workflow. I've worked in environments where I wore many hats, often stepping in as a technical support, systems advisor, or backend troubleshooter.
                    </p>

                    <p className="mb-4 leading-relaxed">
                        I've also taken on project and admin support roles. As an Internal Training Manager, I conducted sessions on coding practices and tools. I've also assisted cross-functional teams with testing and interviews, helped manage calendars, procurement, inventory, and documentation during internal and stakeholders meetings.
                    </p>

                    <p className="leading-relaxed">
                        I enjoy working across disciplines—building, supporting, and coordinating to deliver real value. Whether it's code, consultation, or keeping a team on track, I focus on what works and get things done.
                    </p>
                </div>

                {/* Right Column - Placeholder Image */}
                <div className="w-full h-96 bg-[#CCF381] rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-gray-700 text-xl"><img src={workingGIF} /></span>
                </div>

            </div>
        </section>
    );
};

export default Experience;
