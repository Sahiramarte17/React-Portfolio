// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className='proj-img'/>
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Live</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
};

export default Project;
