import React, { useState } from "react";
import { useParams } from "react-router-dom";
import works from "../works"; // Import your works array

const WorkDetails = () => {
    const { slug } = useParams();

    // Find the project by slug
    const project = works.find((work) => work.slug === slug);

    // Show full "Not Found" page if no project is found
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

    return (
        <div className="w-full bg-white px-6 md:px-40 py-20 flex flex-col relative overflow-hidden">
            <div className="inner-content flex flex-col gap-10 w-full text-gray-800">
                {/* Project Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    {project.title}
                </h1>

                {/* Image Slider */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full transition-all duration-500"
                    />

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-opacity-70"
                    >
                        ◀
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-opacity-70"
                    >
                        ▶
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-3 gap-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex
                                    ? "bg-gray-800"
                                    : "bg-gray-400"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Project Description */}
                <div className="max-w-4xl mx-auto text-justify leading-relaxed space-y-4">
                    {Array.isArray(project.description) ? (
                        project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    ) : (
                        <p>{project.description}</p>
                    )}
                </div>


                {/* Tech Stack */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-4">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition"
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
