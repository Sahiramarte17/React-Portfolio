// src/components/AboutMe.jsx
import React from 'react';
import placeholder4 from '../assets/myimage.jpg';

const AboutMe = () => {
  return (
    <section id="about" className='page-content'>
      <h2>About Me</h2>
      <br></br>
      <img src="../assets/myimage.jpg" alt="Developer" />
      <br></br>
      <p>     Sahira Marte is an experienced staffing coordinator with 12 years of expertise in workforce 
        management and a master's degree in business administration. Her career has been marked by strong 
        leadership, strategic decision-making, and an ability to optimize staffing solutions that align with 
        business goals. Passionate about software development, Sahira is dedicated to advancing her technical 
        skills and exploring innovative ways to merge her business acumen with technology. She views software 
        development as a creative avenue to solve problems and bring ideas to life, positioning herself at the intersection of business and tech.</p>
    </section>
  );
};

export default AboutMe;
