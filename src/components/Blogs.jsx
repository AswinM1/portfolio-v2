import { motion } from "framer-motion";
import { useState } from "react";

const BlogsPage = () => {
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
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  const blogs = [
    {
      title: "Understanding URL Shorteners",
      description:
        "Explore how URL shorteners work and how to implement one using Node.js and MongoDB.",
      link: "https://darkmodetailwind.hashnode.dev/understanding-url-shortners",
    },
    {
      title: "Implementing Dark mode using Tailwind CSS",
      description:
        "Implementing dark mode with the help of Tailwind CSS without using Redux and context hooks.",
      link: "https://darkmodetailwind.hashnode.dev/tailwind-darkmode",
    },
    // Add more blogs here
  ];

  return (
    <motion.section
      id="blogs"
      className="py-5 px-6"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-4xl font-sans mb-6 mt-4 font-bold tracking-tighter text-black dark:text-white"
        variants={child}
      >
        All Blogs
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <SpotlightBlogCard key={index} blog={blog} variants={child} />
        ))}
      </div>
    </motion.section>
  );
};

const SpotlightBlogCard = ({ blog, variants }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read blog: ${blog.title}`}
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      }}
      className="relative group overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black rounded-lg p-6 shadow-md transition-all duration-200"
      variants={variants}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(99, 102, 241, 1), transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-bold font-sans tracking-tight text-black dark:text-white">
          {blog.title}
        </h3>
        <p className="text-gray-800 dark:text-gray-300 pt-3 text-sm">
          {blog.description}
        </p>
      </div>
    </motion.a>
  );
};

export default BlogsPage;
