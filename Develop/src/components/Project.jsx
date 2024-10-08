// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className='proj-img'/>
      <h3>{title}</h3>
  
      <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
    </div>
  );
};

export default Project;
