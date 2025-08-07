// components/MainContent.jsx
import React from "react";

const MainContent = () => {
  // Work experience
const experiences = [
  {
    company: "Department of Science and Technology - Northern Mindanao",
    role: "Project Technical Specialist / Full Stack Developer",
    duration: "Nov 2021 – Jun 2025",
    tasks: [
      "Developed and maintained internal portals and request systems.",
      "Improved deployment and debugging processes for better efficiency.",
      "Provided full stack support using Laravel, React, and MySQL.",
      "Trained team members and supported IT operations.",
      "Handled schedules, documentation, procurement, and digital transformation tasks."
    ]
  },
  {
    company: "Freelance / Contract Projects",
    role: "Web Developer / Virtual Assistant",
    duration: "2018 – Present",
    tasks: [
      "Built and maintained websites for small businesses and organizations.",
      "Performed SEO, site optimization, and basic analytics setup.",
      "Managed content updates, product uploads, and customer support tasks.",
      "Used tools like Canva, Trello, Zoom, and Google Workspace for team coordination."
    ]
  }
];


  return (
    <div className="w-4/5 p-6">
      <article>
        {/* Profile Summary */}
        <header id="profile-summary">
          <h1 className="text-3xl font-bold">Ruel <br />Cabaluna Jr.</h1>
          <h2 className="text-lg font-semibold">Full Stack Developer & Virtual Assistant</h2>
          <p className="mt-4 text-sm">
            I build and support web systems that enhance team efficiency. I’m also experienced in handling day-to-day admin and technical support tasks as a virtual assistant—bringing practical and reliable solutions to the table.
          </p>
        </header>

        {/* Experience Section */}
        <section id="experience" className="mt-10">
          <h3 className="font-bold text-xl mb-4">Experience</h3>
          <p className="my-6 text-sm">
            I’ve worked on web systems and admin support projects with various organizations, including:
          </p>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <header className="mb-2">
                <h4 className="font-semibold">
                  {exp.company}
                  <span className="block text-sm font-normal">{exp.role}</span>
                </h4>
                <span className="text-xs text-gray-500">{exp.duration}</span>
              </header>
              <ul className="list-disc list-inside text-sm space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-10">
          <h3 className="font-bold text-xl mb-4">Projects</h3>
          <p className="text-sm">
            You can find some of my work at{" "}
            <a href="https://ruel.dev/projects" className="text-blue-700 underline">
              ruel.dev/projects
            </a>
            . Project demos or source code can be provided upon request.
          </p>
        </section>
      </article>
    </div>
  );
};

export default MainContent;
