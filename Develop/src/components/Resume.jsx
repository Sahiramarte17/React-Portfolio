// src/components/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="path-to-your-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
