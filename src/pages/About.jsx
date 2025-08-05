import React from "react";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-[#22272f] text-white px-6 md:px-12 py-72">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-sm uppercase tracking-widest text-[#0660e4] mb-2">
              About me
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              I’ve been developing systems since 2016
            </h3>
            <p className="text-[#a1a1aa] mb-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            <button className="inline-flex items-center gap-2 text-[#0660e4] font-semibold hover:underline">
              More about me
              <span className="text-lg"></span>
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            <div>
              <p className="text-4xl font-bold text-[#0660e4]">12</p>
              <p className="text-sm text-[#a1a1aa]">Years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0660e4]">150</p>
              <p className="text-sm text-[#a1a1aa]">Successful projects</p>
            </div>
            <div className="col-span-2">
              <p className="text-[#a1a1aa]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
