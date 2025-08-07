import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../assets/css/Experience.css";
import workingGIF from "../assets/images/working.gif";

const paragraphVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.2,
        },
    }),
};

const imageVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-350px" });

    return (
        <section
            ref={ref}
            className="experience w-full min-h-screen bg-[#4831D4] py-12 px-12 md:px-40 flex items-center relative overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center md:gap-12 relative z-10 w-full">
                {/* Left Column - Text */}
                <div className="basis-[45%] text-white">
                    <motion.h1
                        className="mb-4"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                        }}
                    >
                        Over the years,
                    </motion.h1>

                    {[
                        "I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.",
                        "I mainly build web apps using React and Laravel, working on both frontend and backend. My focus is on performance, reliability, and creating solutions that streamline workflows.",
                        "I also support operations—helping troubleshoot issues, improve IT infrastructure, and adapt systems to real-world use. I’ve often served as a tech support, systems advisor, or backend fixer.",
                        "In admin and project roles, I've led training, assisted in hiring process, handled schedules, inventory, procurement, and production. I make sure daily operations stay on track.",
                    ].map((text, i) => (
                        <motion.p
                            key={i}
                            className="mb-4 leading-relaxed"
                            variants={paragraphVariant}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={i}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>

                {/* Right Column - Image */}
                <motion.div
                    className="hidden md:flex basis-[55%] w-full justify-center relative"
                    variants={imageVariant}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="w-[500px] h-[500px] bg-[#CCF381] rounded-full shadow-sm flex items-center justify-center transform scale-123 translate-x-12">
                        <img
                            src={workingGIF}
                            alt="Working animation"
                            className="h-full object-contain"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
