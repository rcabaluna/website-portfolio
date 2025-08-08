import React from 'react'

const Technologies = ({title, core}) => {
  return (
      <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {core.map((tech, index) => (
              <li key={index} className='text-sm'>{tech}</li>
            ))}
          </ul>
        </section>
  )
}

export default Technologies