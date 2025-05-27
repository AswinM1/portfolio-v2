import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skill = [
    { text: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { text: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { text: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { text: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { text: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { text: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { text: "EC2", logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
    { text: "S3", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { text: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { text: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { text: "DSA", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" },
    { text: "OOPS", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" },
    { text: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" },
  ];

  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
  };

  return (
    <div className="px-4 ">
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="text-3xl font-sans tracking-tight font-semibold text-black dark:text-white mb-8"
      >
        Skills
      </motion.div>

      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-2"
      >
        {skill.map((val, idx) => (
          <motion.div
            key={idx}
            variants={child}
            className="flex items-center  px-2 py-2 bg-black dark:bg-neutral-300   text-white dark:text-black border border-black dark:border-white rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
          >
          
            <span className="text-sm font-medium">{val.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
