// components/Sidebar.jsx
import React from "react";
import Technologies from "./Technologies";


const Sidebar = () => {

  // Core technologies
  const coreTechnologies = [
    "HTML & CSS",
    "JavaScript",
    "JQuery",
    "Tailwind CSS",
    "Bootstrap",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "ReactJS",
    "Next.js",
    "MySQL/PostgreSQL",
    "MongoDB",
    "WordPress",
    "Shopify",
  ];


  // Tools used
  const tools = [
    "VS Code",
    "Git & GitHub",
    "Postman",
    "Google Workspace",
    "Trello / Notion",
    "Canva / Figma",
    "Adobe Creative Suite",
    "Zoom / Google Meet",
    "Slack / Discord",
    "Loom / OBS Studio",
    "Tableau / Power BI",
  ];


  return (
    <div className="w-1/5 p-4 hidden md:block">
      <div id="resume-outlines">
        {/* Contact Info */}
        <section className="mb-6">
          <a href="https://rueljr.dev" className="block font-medium">rueljr.dev</a>
          <span className="block">Cagayan de Oro City, PH</span>
          <a href="mailto:rcabalunajr@gmail.com" className="block text-sm text-blue-700">
            rcabalunajr@gmail.com
          </a>
        </section>

        {/* Core Technologies */}
        <Technologies title="Core Technologies" core={coreTechnologies} />

        {/* Tools */}
        <Technologies title="Tools" core={tools} />
      </div>
    </div>
  );
};

export default Sidebar;
