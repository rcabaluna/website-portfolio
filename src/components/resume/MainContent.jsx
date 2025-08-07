// components/MainContent.jsx
import React from "react";

const   MainContent = () => {
  // Work experience
const experiences = [
  {
    company: "Freelance / Contract Projects",
    role: "Web Developer / Virtual Assistant",
    duration: "2018 – Present",
    summary: "I worked with small businesses to build websites, manage e-commerce platforms, and support administrative tasks.",
    tasks: [
      "Designed and built websites using WordPress for small businesses.",
      "Set up and managed e-commerce platforms including product listings, inventory, and order tracking.",
      "Performed SEO audits, keyword research, and on-page optimizations to improve search visibility.",
      "Handled data entry, customer inquiries, and admin tasks using tools.",
      "Created graphics and social media content using Canva and managed basic site updates.",
      "Uploaded product information, monitored stock levels, and coordinated with clients for inventory updates.",
      "Managed schedules, set appointments, and tracked deadlines to support smooth project delivery."
    ]
  },
  {
    company: "Department of Science and Technology - Northern Mindanao",
    role: "Project Technical Specialist / Full Stack Developer",
    duration: "2021 – 2025",
    summary: "I worked on internal systems development, process automation, and technical support to help drive the agency’s digital transformation.",
    tasks: [
      "Built and maintained internal systems for HR, procurement, and event registration, reducing manual work by around 60%.",
      "Automated reporting workflows, cutting report preparation time by 90%.",
      "Improved backend performance and reduced load times from 5s to under 1.5s through optimization and caching.",
      "Provided technical support to five departments and maintained 99.9% system uptime.",
      "Trained over 100 staff on new digital tools and supported digitalization efforts across units.",
      "Helped HR run digital exams and interviews to speed up recruitment.",
      "Coordinated tech support during national events, handling setup, troubleshooting, and participant assistance.",
      "Reviewed and recommended IT equipment and software based on needs and budget.",
      "Contributed to the Information Systems Strategic Plan to align IT projects with organizational goals."
    ]
  },
  {
    company: "E2E System and Process Experts Inc.",
    role: "Senior Full Stack Developer / Internal Training Manager",
    duration: "2019 – 2021",
    summary: "I led development teams, delivered full-stack solutions, and trained junior developers to improve team performance.",
    tasks: [
      "Led a team of developers to build custom ERP and web apps, improving client operations by up to 70%.",
      "Delivered 7+ full-stack systems for accounting, inventory, sales, and recruitment with on-time deployment and minimal issues.",
      "Trained junior developers on best practices and version control, leading to fewer bug reports and better code quality.",
      "Wrote technical documentation and user guides to help staff understand and use internal tools.",
      "Managed team documentation, training records, and meeting schedules to improve coordination.",
      "Created training materials and supported onboarding of new staff.",
      "Provided admin support for internal operations and shared client updates with the team."
    ]
  },
  {
    company: "HE and Sons Corporation",
    role: "Technical Support / Admin Assistant",
    duration: "2018 – 2019",
    summary: "I provided daily IT support and developed internal tools to improve efficiency in office operations.",
    tasks: [
      "Provided daily tech support, reducing downtime and improving staff productivity by 50%.",
      "Developed 3 internal tools to manage ICT requests, inventory, and internal communication.",
      "Wrote user guides and conducted basic IT training for non-technical staff.",
      "Reduced support ticket resolution time by 50% through proactive maintenance and user support.",
      "Helped with documentation, procurement, and inventory tasks.",
      "Assisted staff in using new systems through hands-on support and clear documentation."
    ]
  },
  {
    company: "Specialized Outsource Partners, Inc.",
    role: "WordPress Developer",
    duration: "2016 – 2017",
    summary: "I worked on WordPress development, handled site maintenance, and improved site performance and SEO for clients.",
    tasks: [
      "Designed and built WordPress landing pages and e-commerce sites.",
      "Managed content updates and handled client website maintenance.",
      "Improved site performance and SEO, increasing client traffic by 20–50%.",
      "Ensured mobile responsiveness and followed security best practices.",
      "Responded to client requests within 24 hours and handled revisions promptly.",
      "Created documentation and guides for client handoff and basic maintenance."
    ]
  }
];


  return (
    <div className="w-4/5 p-6 ihRwnH">
      <article>
        {/* Profile Summary */}
        <header id="profile-summary">
          <h1 id="name">Ruel <br />Cabaluna Jr.</h1>
          <h2 className="text-lg font-semibold">Full Stack Developer & Virtual Assistant</h2>
          <p className="mt-4">
            I build and support web systems that enhance team efficiency. I’m also experienced in handling day-to-day admin and technical support tasks as a virtual assistant—bringing practical and reliable solutions to the table.
          </p>
        </header>
          <hr />

        {/* Experience Section */}
        <section id="experience" className="mt-10">
          <h3 className="font-bold text-xl mb-4">Experience</h3>
          <p className="my-6">
            I’ve worked on web systems and admin support projects with various organizations, including:
          </p>

            <ul id="companies">

          {experiences.map((exp, index) => (
              <li key={index} className="company">
              <header><h4>{exp.company} <span>{exp.role}</span></h4><span className="period">{exp.duration}</span></header>
              <p>{exp.summary}</p>
              <ul className="points">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              </li>
          ))}
            </ul>

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
