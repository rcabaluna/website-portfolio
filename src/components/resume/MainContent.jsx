// components/MainContent.jsx
import React from "react";
import Experiences from "../resume/Experiences";

const MainContent = () => {
  // Work experience
  return (
    <div className="w-full md:w-4/5 p-6">
      <article>
        {/* Profile Summary */}
        <header id="profile-summary">
          <h1 id="name">Ruel <br />Cabaluna Jr.</h1>
          <h2 className="text-lg font-semibold">Full Stack Developer & Virtual Assistant</h2>
          <p className="mt-4 text-sm">
            I build and support web systems that enhance team efficiency. I’m also experienced in handling day-to-day admin and technical support tasks as a virtual assistant—bringing practical and reliable solutions to the table.
          </p>
        </header>
        <hr />

        {/* Experiences Section */}
        <Experiences />

        {/* Projects Section */}
        <section id="projects" className="mt-10">
          <h3 className="font-bold text-xl mb-4">Projects</h3>
          <p className="text-sm">
            You can find some of my works {" "}
            <a href="/works" className="text-blue-700 underline">
              here
            </a>
            . Project demos or source code can be provided upon request.
          </p>
        </section>
      </article>
    </div>
  );
};

export default MainContent;
