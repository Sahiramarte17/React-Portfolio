// src/components/Resume.jsx
import React from 'react';
// import the Resume PDF resource
import resumePDF from '../assets/test.pdf'

const Resume = () => {
  return (
    <section id="resume" className='page-content'>
      <h2>Resume</h2>
      <a href="path-to-your-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        {/* Add more proficiencies */}
        <a href="http://www.linkedin/">Check out my Resume!</a>
        <iframe src={resumePDF} frameborder="0"></iframe>
      </ul>
    </section>
  );
};

export default Resume;
