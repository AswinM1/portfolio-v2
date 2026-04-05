import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // Required if using React Router

const Projects = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
  };

  const projects = [
    {
      name: "Snap Talk Analyser",
      description: "An AI-powered audio analyser and feedback provider",
      techStack: ["React", "Groq", "Full stack"],
      link: "https://snap-talk-wine.vercel.app/",
    },
    {
      name: "Job Mailer",
      description: "An AI-powered job mail generator. Generate job mails in seconds.",
      techStack: ["React", "Groq", "Full stack"],
      link: "https://jobmailer-io.vercel.app/",
    },
    {
      name: "ShortURL",
      description: "A URL shortener made with nanoid, with an admin dashboard to track clicks and views.",
      techStack: ["React", "MongoDB", "nanoid"],
      link: "https://url-shortner-nine-kappa.vercel.app/",
    },
    {
      name: "Constellations",
      description: "An eCommerce website made using the MERN stack and Clerk.",
      techStack: ["MongoDB", "Express", "React"],
      link: "https://constellation-ecommerce.vercel.app/",
    },
    {
      name: "Eden",
      description: "An Mordern component library with reusable nextjs components",
      techStack: ["Next.js", "Tailwind", "motion"],
      link: "https://constellation-ecommerce.vercel.app/",
    },
    {
      name: "RetrO ui",
      description: "Retro themed component library made with nextj.s",
      techStack: ["Next.js", "Tailwind", "motion"],
      link: "https://retro0.vercel.app/",
    },
    {
      name: "Bloggify",
      description: "A anonymous blogging app",
      techStack: ["Next.js", "mongoDB", "JWT"],
      link: "https://blogifyy-00.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-5 px-6"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-3xl mb-5 font-serif text-black dark:text-white font-medium tracking-tight "
        variants={child}
      >
        Projects
      </motion.h2>
      <motion.p
        className="font-sans tracking-tighter text-lg  text-neutral-800 dark:text-gray-400 mb-6 "
        variants={child}
      >
        I enjoy building user centric applications. These include projects I made throughout my journey.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-9">
        {projects.map((project, index) => (
          <SpotlightCard key={index} project={project} variants={child} />
        ))}
      </div>

      {/* See More Button */}
      <motion.div className="mt-10 text-center" variants={child}>
        {/* <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full transition hover:scale-105"
        >
          See More Projects →
        </Link> */}
      </motion.div>
    </motion.section>
  );
};

const SpotlightCard = ({ project, variants }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name}`}
      onMouseMove={handleMouseMove}
      className=" rounded-lg relative group overflow-hidden p-6 border dark:border-neutral-700 shadow-md  bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out"
      style={{
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      }}
      variants={variants}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y),	rgba(253,159,174,0.8), transparent 90%)`,
          
        }}
      />

      <div className="relative z-10">
        <h3 className="text-lg font-sans tracking-tighter text-black dark:text-white font-bold mb-2">
          {project.name}
        </h3>
        <p className="text-black dark:text-neutral-300 mb-4">
          {project.description}
        </p>
        <div className="text-black dark:text-white flex flex-wrap gap-3">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className=" font-medium bg-neutral-700 dark:bg-neutral-600 text-sm text-neutral-300 dark:text-white py-1 px-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default Projects;
