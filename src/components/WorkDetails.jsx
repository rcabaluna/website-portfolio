import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/WorkDetails.css";
import works from "../works";

const WorkDetails = () => {
    const { slug } = useParams();

    const project = works.find((work) => work.slug === slug);

    if (!project) {
        return (
            <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Sorry, the project you’re looking for does not exist.
                </p>
                <a
                    href="/works"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Back to Works
                </a>
            </div>
        );
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = project.images;
    const techStack = project.techstack;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Auto slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval); // cleanup on unmount
    }, [images.length]);

    return (
        <div className="work-details w-full bg-white 
            px-4 py-12           /* Mobile */
            sm:px-6 sm:py-16     /* Small */
            md:px-10 md:py-20    /* Medium */
            lg:px-20 lg:py-24    /* Large */
            xl:px-40 xl:py-20    /* Extra large */
            pt-24"
        >
            <div className="inner-content flex flex-col w-full text-gray-800">
                {/* Project Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    {project.title}
                </h1>

                {/* Image Slider */}
                <div className="relative w-full max-w-3xl mt-4 mx-auto overflow-hidden rounded-md">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full flex-shrink-0"
                            />
                        ))}
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 
                   text-3xl font-bold text-gray-700 hover:text-gray-900 
                   bg-transparent z-10"
                    >
                        &lt;
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 
                   text-3xl font-bold text-gray-700 hover:text-gray-900 
                   bg-transparent z-10"
                    >
                        &gt;
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-3 gap-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>



                {/* Project Description */}
                <div className="mx-auto text-justify leading-relaxed space-y-4">
                    <h4>Description:</h4>
                    {Array.isArray(project.description) ? (
                        project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    ) : (
                        <p>{project.description}</p>
                    )}
                </div>

                {/* Tech Stack */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Tech Stack Used:</h4>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-600 rounded-full text-xs font-medium shadow-sm hover:bg-gray-200 transition"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;
