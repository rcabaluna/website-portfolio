import React from "react";
import { Link } from "react-router-dom";
import works from "../works";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Works = () => {
  return (
    <>
      <Header />
      <section className="my-works w-full md:min-h-screen 
          py-12 px-4        /* Mobile */
          sm:py-16 sm:px-6  /* Small screens */
          md:py-20 md:px-10 /* Medium screens */
          lg:py-32 lg:px-20 /* Large screens */
          xl:py-40 xl:px-40 /* Extra large screens */
          flex flex-col md:justify-center"
      >

        <div className="text-center mb-12">
          <h1><span className="text-gray-400">/</span>works<span className="text-gray-400">.</span></h1>
          <p>Selected work I've taken on in the past.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-12 md:mb-20 lg:mb-0 develop-row">
          <div className="works-container grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <Link
                key={work.slug}
                to={`/work/${work.slug}`}
                className="block shadow-md overflow-hidden bg-white rounded-sm hover:shadow-lg transition"
              >
                <img
                  src={work.cover}
                  alt={work.title}
                  className="w-full h-68 object-cover"
                />
                <div className="p-4">
                  <h6 className="text-black">{work.title}</h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      <Footer />
    </>
  );
};

export default Works;
