import React from "react";
import { Link } from "react-router-dom";
import works from "../works"; // import your works data
import Footer from "../components/Footer";
import Header from "../components/Header";

const Works = () => {
  return (
    <>
      <Header />
      <div className="works-container grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <div
            key={work.slug}
            className="work-card border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition"
          >
            <img
              src={work.images[0]}
              alt={work.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{work.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Tech Stack:</strong> {work.techstack.join(", ")}
              </p>
              <Link
                to={`/work/${work.slug}`}
                className="text-blue-600 hover:underline font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Works;
