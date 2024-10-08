// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';
import placeholder from '../assets/employee.jpg';
import placeholder2 from '../assets/vehicle.jpg';
import placeholder3 from '../assets/generator.jpg';

const projects = [
  {
    title: '',
    image: placeholder,
    deployedLink: 'https://deployed-link1.com',
    githubLink: 'https://github.com/Sahiramarte17/Employee-Tracker.git',
  },
  {
    title: '',
    image: placeholder2,
    deployedLink: 'https://adorable-marigold-ff2a29.netlify.app',
    githubLink: 'https://github.com/Sahiramarte17/Sahira-vehicle-builder.git',
  },
  {
    title: '',
    image: placeholder3,
    deployedLink: 'https://adorable-marigold-ff2a29.netlify.app',
    githubLink: 'https://github.com/Sahiramarte17/Sahira-Professional-README-Generator.git',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <br></br>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
