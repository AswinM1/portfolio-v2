import { motion } from "framer-motion";
import pro from "../assets/images/pro.jpg"; // Replace with your actual image path

const Hero = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="py-10 px-5 flex  md:flex-row items-start md:items-center justify-between gap-6"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      {/* Left Content */}
      <motion.div className="flex-1 text-left" variants={child}>
        <motion.h1
          className=" font-serif font-medium text-2xl md:text-3xl text-black  tracking-tight  mb-3 md:mb-4 dark:text-white"
          variants={child}
        >
          Hi, I'm <motion.span variants={child} >Aswin.</motion.span>
        </motion.h1>
        <motion.ul
          className="text-neutral-700 text-base md:text-xl tracking-tight font-sans dark:text-gray-400"
          variants={child}
        >
          <motion.li variants={child}>
            I'm a Full-stack Developer, with a <span className=" text-black font-medium dark:text-white">Great eye</span> for{" "}
            <span className="text-black font-semibold dark:text-white">Design</span>, loves
            minimalism. Checkout my{" "}
            <a
              href="https://drive.google.com/file/d/17Fx6ea21ChRKhqRqDEU2o5Fi4R28fwaT/view?usp=sharing"
              className="font-sans tracking-tighter  underline font-semibold text-black transition-all duration-300 ease-in-out dark:text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>{" "}
            here.
          </motion.li>
         <li className="flex items-center gap-2 py-2">
  <motion.span 

  animate={{
    opacity:[1,0,1],
    
  }}
  transition={{
    repeat:Infinity
  }}
  className="h-2.5 w-2.5 bg-green-500 rounded-full"></motion.span>
  <span className="bg-neutral-300 p-1 rounded-md dark:bg-neutral-200 dark:text-neutral-800">Available for new opportunities</span>
</li>

        </motion.ul>
      </motion.div>

    
    </motion.section>
  );
};

export default Hero;