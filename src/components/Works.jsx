import React, { useRef } from "react";
import "../assets/css/Works.css";
import { motion, useInView } from "framer-motion";

import ecommerceImage from "../assets/images/projects/e-commerce.png";
import portalImage from "../assets/images/projects/portal.png";
import erpImage from "../assets/images/projects/erp.png";

const projects = [
    {
        title: "Information Management Systems",
        subtitle: "Built for fast, scalable online sales",
        image: erpImage,
    },
    {
        title: "Landing Pages",
        subtitle: "Manage HR tasks and records with ease",
        image: portalImage,
    },
    {
        title: "E-Commerce Platforms",
        subtitle: "Custom system for business operations",
        image: ecommerceImage,
    },
];

const Works = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-350px" });

    return (
        <section
            ref={ref}
            className="works w-full min-h-fit md:min-h-screen bg-[#f4f4f4] px-12 py-28 flex items-center justify-center relative"
        >
            <div className="w-full max-w-7xl mx-auto bg-white p-6 md:p-12 flex flex-col gap-14">
                {/* Header with animation */}
                <motion.div
                    className="px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h1 className="text-3xl font-bold text-gray-800">My Works</h1>
                </motion.div>

                {/* Cards in Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            className="group w-full h-[400px] bg-white overflow-hidden relative transition-all duration-300 border-b-4 border-transparent hover:border-[#CCF381]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90 group-hover:scale-102"
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + 0.3,
                                    ease: "easeOut",
                                }}
                                className="absolute bottom-0 left-0 w-full"
                            >
                                <div className="bg-[#4831D4] p-6 text-white">
                                    <h2 className="font-bold">{item.title}</h2>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="relative px-14 py-4 text-[#4831d4] font-semibold text-lg border-2 border-[#4831d4] overflow-hidden transition-all duration-300 hover:text-white group"
                    >
                        <span className="absolute inset-0 bg-[#4831d4] w-0 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
                        <span className="relative z-10 flex items-center gap-3">
                            See More
                            <svg
                                className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Works;
