import React from "react";

const Works = () => {
    return (
        <section className="w-full min-h-screen bg-white text-[#3D155F] px-6 md:px-12 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-4xl font-bold leading-snug">
                {/* Left Column */}
                <div>
                    <p>
                        I build &<br />
                        design stuff<br />
                        <span className="text-2xl font-medium">Open source<br />projects, web apps<br />and experimentals.</span>
                    </p>
                </div>

                {/* Right Column */}
                <div className="text-right">
                    <p>
                        I write,<br />
                        sometimes<br />
                        <span className="text-2xl font-medium">About design,<br />frontend dev,<br />learning and life.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Works;
