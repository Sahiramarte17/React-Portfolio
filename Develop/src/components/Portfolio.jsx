// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';  // Assuming Project is another component that you use to render each individual project
import placeholder from '../assets/employee.jpg';
import placeholder2 from '../assets/vehicle.jpg';
import placeholder3 from '../assets/generator.jpg';
import placeholder5 from '../assets/weather.jpeg';
import placeholder6 from '../assets/jungle.jpg';
import placeholder7 from '../assets/prework.jpg';
const projects = [
  {
    title: 'Employee-Tracker',
    image: placeholder,
    githubLink: 'https://github.com/Sahiramarte17/Employee-Tracker.git',
  },
  {
    title: 'Vehicle-Builder',
    image: placeholder2,
    githubLink: 'https://github.com/Sahiramarte17/Sahira-vehicle-builder.git',
  },
  {
    title: 'Readme-Generator',
    image: placeholder3,
    githubLink: 'https://github.com/Sahiramarte17/Sahira-Professional-README-Generator.git',
  },
  {
    title: 'Weather-Dashboard',
    image: placeholder5,
    githubLink: 'https://github.com/Sahiramarte17/Weather-Dashboard.git',
  },
  {
    title: 'Jungle-Pair',
    image: placeholder6,
    githubLink: 'https://github.com/paolanayala/jungle-pairs.git',
  },
  {
    title: 'Prework-Study-guide',
    image: placeholder7,
    githubLink: 'https://github.com/Sahiramarte17/Prework-study-guide.git',
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
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
