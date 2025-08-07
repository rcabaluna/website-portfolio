// components/Sidebar.jsx
import React from "react";


const Sidebar = () => {

// Core technologies
const coreTechnologies = [
  "ReactJS", "Laravel", "Inertia.js", "Tailwind CSS", "JavaScript",
  "PHP", "MySQL", "HTML & CSS", "REST APIs"
];

// Tools used
const tools = [
  "VS Code", "Git & GitHub", "Postman", "XAMPP / Laravel Sail",
  "Google Workspace (Docs, Sheets, Forms)", "Trello / Notion / ClickUp",
  "Canva / Figma", "Zoom / Google Meet", "ChatGPT", "Slack / Discord"
];

    
  return (
    <div className="w-1/5 p-4">
      <div id="resume-outlines">
        {/* Contact Info */}
        <section className="mb-6">
          <a href="https://ruel.dev" className="block font-medium">ruel.dev</a>
          <span className="block">Cagayan de Oro City, PH</span>
          <a href="mailto:ruel@example.com" className="block text-sm text-blue-700">
            ruel@example.com
          </a>
        </section>

        {/* Core Technologies */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Core Technologies:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {coreTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Tools:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
