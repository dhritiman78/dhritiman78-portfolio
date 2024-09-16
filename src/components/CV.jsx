import React, { useState } from 'react';

const CV = () => {
  const [skills] = useState([
    { name: 'Front-end Web Development', skills: ['HTML', 'CSS', 'JavaScript'] },
    { name: 'Back-end Web Development', skills: ['PHP', 'MySQL', 'NodeJS'] },
    { name: 'Database', skills: ['MySQL', 'MongoDB'] },
    { name: 'Android Development', skills: ['Java', 'Kotlin'] },
    { name: 'Programming Languages', skills: ['Java', 'C', 'Python'] },
    { name: 'Tools', skills: ['Git', 'GitHub'] },
  ]);

  const[projects] = useState([
    {
      name: 'Hostel Fee Management System',
      description: 'Developed a comprehensive system for managing hostel fees.',
      technologies: 'PHP, MySQL',
      role: 'Full Stack Developer',
      github: 'https://github.com/dhritiman78/Hostel-fee-management-system'
    },
    {
      name: 'CEE Assam College Predictor',
      description: 'Created a college predictor website based on CEE ranks and cut-off data.',
      technologies: 'PHP, MySQL',
      role: 'Full Stack Developer',
      github: 'https://github.com/dhritiman78/cee-assam-college-predictor'
    },
    {
      name: 'Dhritishman Photographer Portfolio',
      description: 'Built a photographer portfolio for Dhritishman, allowing him to showcase and upload his photos.',
      technologies: 'PHP, MySQL',
      role: 'Backend Developer',
      github: 'https://github.com/Manash0606JB/Dhritisman-Photographer-portfolio.github.io'
    },
    {
      name: 'Shimi Gallery',
      description: 'Developed a portfolio website for my friend Sharmin Sultana (Shimi) to showcase her artwork.',
      technologies: 'NextJS, mongoose, MongoDB',
      role: 'Backend Developer',
      github: 'https://github.com/dhritiman78/Shimi-Gallery'
    },
    {
      name: 'Desi Instagram',
      description: 'Developed a prototype social media platform where users can post, text, and follow other users.',
      technologies: 'PHP, MySQL',
      role: 'Full Stack Developer',
      github: 'https://github.com/dhritimn/Desi-Instagram'
    }
  ]);

  const [languages] = useState(['English', 'Hindi', 'Assamese']);

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-2xl">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Dhritiman Saikia</h1>
        <p className="text-gray-600 sm:text-1xl text-[15px]">
          +91 7002211547 | Morikolong Chariali, Nagaon, Assam<br />
          <a href="mailto:dhritiman.saikia.11b.244@gmail.com" className="text-blue-500">dhritiman.saikia.11b.244@gmail.com</a> | 
          <a href="https://dhritiman78-portfolio.vercel.app/" className="text-blue-500">dhritiman78-portfolio.vercel.app</a>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-gray-300 pb-2">Professional Profile</h2>
        <p className="text-gray-700 mt-2">
          I am a B.Tech Computer Science Engineering student at Tezpur University, specializing in web development. I have freelancing experience in designing and implementing dynamic websites and web applications. My solid academic background and hands-on projects equip me with the skills to contribute effectively in development teams.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600 border-b-2 border-gray-300 pb-2">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <li key={index}>
              <b>{skill.name}:</b> {skill.skills.join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-gray-300 pb-2">Languages</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 grid grid-cols-2 gap-2">
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-gray-300 pb-2">Education</h2>
        <ul className="mt-2 list-disc space-y-4 list-inside">
          <li>
            <strong className="text-lg text-gray-800">Tezpur University (2023 - 2027)</strong>
            <p className="text-gray-700 mx-5">B.Tech in Computer Science & Engineering</p>
          </li>
          <li>
            <strong className="text-lg text-gray-800">Concept Senior Secondary School (2020 - 2022)</strong>
            <p className="text-gray-700 mx-5">Higher Secondary (10+2)</p>
          </li>
          <li>
            <strong className="text-lg text-gray-800">Loyola English Medium High School</strong>
            <p className="text-gray-700 mx-5">High School</p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-yellow-600 border-b-2 border-gray-300 pb-2">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index}>
              <strong className="text-lg text-gray-800">{project.name}</strong>
              <p className="text-gray-700 mx-5">{project.description}</p>
              <ul className="list-disc list-inside mx-8 text-gray-700">
                <li>Technologies: {project.technologies}</li>
                <li>Role: {project.role}</li>
                <li><a href={project.github} className="text-blue-500">GitHub Link</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-gray-300 pb-2">Volunteering</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>National Service Scheme (NSS)</li>
        </ul>
      </section>
    </div>
  );
}

export default CV;
