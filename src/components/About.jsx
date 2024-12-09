import React from 'react';
import './About.css'; // Ensure you have this CSS file
import { motion } from 'framer-motion'; // Import motion from Framer Motion

function About() {
  return (
    <div className="about-container" id='about'>
      {/* Left Section: About Me */}
      <motion.div
        className="leftSection"
        initial={{ opacity: 0, x: -50 }} // Initial position: invisible and slightly left
        whileInView={{ opacity: 1, x: 0 }} // End position: fully visible and at normal position
        transition={{ duration: 0.6 }} // Animation duration
        viewport={{  amount: 0.5 }} // Trigger animation when 50% of the element is visible
      >
        <h1 className="heading">About</h1>
        <p className="paragraph">
          Hello! I am Aswin, a passionate developer who enjoys solving problems and building impactful projects. 
          My journey in the tech world has been filled with curiosity and learning, and I love working on creative 
          solutions to challenging problems.
        </p>
        <p className="paragraph">
          Outside of coding, I enjoy exploring new technologies, sharing knowledge, and continuously growing my skill set.
        </p>
      </motion.div>

      {/* Right Section: Tech Stacks */}
      <motion.div
        className="rightSection"
        initial={{ opacity: 0, x: 50 }} // Initial position: invisible and slightly right
        whileInView={{ opacity: 1, x: 0 }} // End position: fully visible and at normal position
        transition={{ duration: 0.6 }} // Animation duration
        viewport={{  amount: 0.5 }} // Trigger animation when 50% of the element is visible
      >
        <h2 className="subHeading">Tech Stacks</h2>
        <div className="techStackContainer">
          {[
            'JavaScript',
            'HTML',
            'CSS',
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'GitHub',
          ].map((tech, index) => (
            <span key={index} className="techStackItem">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
