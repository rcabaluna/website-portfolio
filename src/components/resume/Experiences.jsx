import React from 'react'


const Experiences = () => {

const experiences = [
  {
    company: "Freelance / Contract Projects",
    role: "Web Developer / Virtual Assistant",
    duration: "2018 – Present",
    summary: "I worked with small businesses to build websites, manage e-commerce platforms, and support administrative tasks.",
    tasks: [
      "Designed and built websites for business and organizations.",
      "Set up and managed e-commerce platforms including product listings, inventory, and order tracking.",
      "Performed SEO audits, keyword research, and on-page optimizations to improve search visibility.",
      "Created graphics and social media content using Canva and managed basic site updates.",
      "Handled data entry, customer inquiries, and admin tasks using tools.",
      "Uploaded product information, monitored stock levels, and coordinated with clients for inventory updates.",
      "Managed schedules, set appointments, and tracked deadlines to support smooth project delivery."
    ]
  },
  {
    company: "Department of Science and Technology - Northern Mindanao",
    role: "Project Technical Specialist / Full Stack Developer",
    duration: "November 2021 – June 2025",
    summary: "I worked on internal systems development, process automation, and technical support to help drive the agency’s digital transformation.",
    tasks: [
      "Built and maintained internal systems for HR, procurement, and event registration, reducing manual work significantly.",
      "Automated reporting workflows, cutting report preparation time drastically.",
      "Improved backend performance and reduced load times through optimization and caching.",
      "Contributed to the Information Systems Strategic Plan to align IT projects with organizational goals.",
      "Assisted HR unit to facilitate pre-employment exams and interviews to speed up recruitment.",
      "Provided technical support to multiple departments and maintained high system uptime.",
      "Trained staff on new digital tools and supported digitalization efforts across units.",
      "Coordinated tech support during national events, handling setup, troubleshooting, and participant assistance.",
      "Reviewed and recommended IT equipment and software based on needs and budget."
    ]
  },
  {
    company: "E2E System and Process Experts Inc.",
    role: "Senior Full Stack Developer / Internal Training Manager",
    duration: "August 2020 –  November 2021",
    summary: "I led development teams, delivered full-stack solutions, and trained junior developers to improve team performance.",
    tasks: [
      "Led a team of developers to build custom ERP and web apps, improving client operations.",
      "Delivered full-stack systems for accounting, inventory, sales, and recruitment with on-time deployment and minimal issues.",
      "Wrote technical documentation and user guides to help staff understand and use internal tools.",
      "Trained junior developers on best practices and version control, leading to fewer bug reports and better code quality.",
      "Created training materials and supported onboarding of new staff.",
      "Managed team documentation, training records, and meeting schedules to improve coordination.",
      "Provided admin support for internal operations and shared client updates with the team."
    ]
  },
  {
    company: "HE and Sons Corporation",
    role: "Technical Support / Admin Assistant",
    duration: "April 2018 – August 2019",
    summary: "I provided daily IT support and developed internal tools to improve efficiency in office operations.",
    tasks: [
      "Developed internal tools to manage ICT requests, inventory, and internal communication.",
      "Provided daily tech support, reducing downtime and improving staff productivity.",
      "Reduced support ticket resolution time through proactive maintenance and user support.",
      "Wrote user guides and conducted basic IT training for non-technical staff.",
      "Helped with documentation, procurement, and inventory tasks.",
      "Assisted staff in using new systems through hands-on support and clear documentation."
    ]
  },
  {
    company: "Specialized Outsource Partners, Inc.",
    role: "WordPress Developer",
    duration: "May 2016 - January 2017",
    summary: "I worked on WordPress development, handled site maintenance, and improved site performance and SEO for clients.",
    tasks: [
      "Designed and built WordPress landing pages and e-commerce sites.",
      "Managed content updates and handled client website maintenance.",
      "Improved site performance and SEO, increasing client traffic.",
      "Ensured mobile responsiveness and followed security best practices.",
      "Created documentation and guides for client handoff and basic maintenance.",
      "Responded to client requests promptly and handled revisions quickly."
    ]
  }
];


    
  return (
<section id="experience" className="mt-10">
  <h3 className="font-bold text-lg mb-4">Experiences</h3>
  <p className="my-6 text-sm">
    I’ve worked on web systems and admin support projects with various organizations, including:
  </p>
  <ul id="companies">
    {experiences.map((exp, index) => (
      <li key={index} className="company mb-6">
        <header className="md:flex md:justify-between md:items-start">
          <h4 className="font-semibold">{exp.company}</h4>
          <span className="period text-sm text-gray-500">{exp.duration}</span>
        </header>
        <p><span className="italic text-sm">{exp.role}</span></p>
        <p className="text-sm mt-1">{exp.summary}</p>
        <ul className="points list-disc list-inside text-sm mt-2 space-y-1">
          {exp.tasks.map((task, i) => (
            <li key={i} className="text-sm">{task}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</section>

  )
}

export default Experiences