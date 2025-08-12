import React from "react";
import { Link } from "react-router-dom";
import works from "../works";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Works = () => {
  return (
    <>
      <Header />
      <section
        className="my-works w-full md:min-h-screen 
          py-12 px-4
          sm:py-16 sm:px-6
          md:py-20 md:px-10
          lg:py-32 lg:px-20
          xl:py-40 xl:px-40
          flex flex-col md:justify-center"
      >
        <div className="text-center mb-12">
          <h1>
            <span className="text-gray-400">/</span>works
            <span className="text-gray-400">.</span>
          </h1>
          <p>Selected work I've taken on in the past.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:gap-12 md:mb-20 lg:mb-0 develop-row">
          <div className="works-container grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <Link
                key={work.slug}
                to={`/work/${work.slug}`}
                className="flex flex-col shadow-md overflow-hidden bg-white rounded-sm hover:shadow-lg transition"
              >
                <img
                  src={work.cover}
                  alt={work.title}
                  className="w-full h-68 object-cover"
                />
                <div className="flex flex-col flex-grow p-4">
                  <h6 className="text-black font-semibold mb-2">
                    {work.title}
                  </h6>

                  {/* Spacer to push tech stack down */}
                  <div className="flex-grow"></div>

                  {/* Tech stack display at bottom */}
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-1">
                      {work.techstack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 border border-gray-300 text-gray-500 rounded-full text-[10px] shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Works;
