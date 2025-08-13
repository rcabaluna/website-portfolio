import React from 'react'
import experiences from "../../experiences";

const Experiences = () => {
    
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