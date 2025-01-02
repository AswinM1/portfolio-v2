import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion'; // To detect when the component is in view
import pv2 from '../assets/images/p2.png';
import pv1 from '../assets/images/p1.png';
import pv3 from '../assets/images/ecom.png';

function Project() {
  const projects = [
    {
      name: 'Portfolio v2 ',
      link: 'https://aswin-portfolio-nv03mjigb-aswins-projects-767d9255.vercel.app/',
      description: 'A personal portfolio showcasing my projects and skills.',
      techStack: ['React', 'Css', 'framer-motion', 'frontend'],
      image: pv2,
    },
    {
      name: 'Constellations-Ecommerce',
      link: 'https://constellation-ecommerce.vercel.app/',
      description: 'A Ecommerce full stack application made with react and tailwind css supports crud operations',
      techStack: ['Reactjs', 'Mongo-DB', 'Express.js', 'fullstack'],
      image: pv3,
    },
    {
      name: 'Portfolio v1',
      link: 'https://aswin-portfolio-lilac.vercel.app/',
      description: 'A simple HTML website for a local business.',
      techStack: ['react-js', 'CSS', 'frontend'],
      image: pv1,
    },
    {
      name: 'UI Library',
      link: 'https://example.com/css-animations',
      description: 'ui component library made with tailwind and framer motion',
      techStack: ['tailwind', 'react', 'framer-motion'],
      image: pv1,
    },
  ];

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            onClick={() => window.open(project.link, '_blank')}
            initial={{ opacity: 0, y: 50 }} // Start position: invisible and offset down
            whileInView={{ opacity: 1, y: 0 }} // End position: visible and at normal position
            transition={{ duration: 0.5 }} // Animation duration
            viewport={{ amount: 0.5 }} // Trigger the animation when 50% of the element is visible
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="card-content">
              <h2>{project.name}</h2>
              <p className="description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
