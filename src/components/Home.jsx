import React from 'react';
import './Home.css';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

function Home() {
  return (
    <div className="hello" id="home" >
      <div className="content-wrapper">
        {/* Text Content with Animation */}
        <motion.div
          className="text"
          initial={{ opacity: 0, y: 100, scale: 0.8 }} // Start with opacity 0, scaled down, and slightly below
          animate={{ opacity: 1, y: 0, scale: 1 }} // Fade in, move to normal position, and scale up
          transition={{
            duration: 1.2,
            ease: 'easeOut', // Smooth easing for a natural transition
          }}
          viewport={{  amount: 0.5,once:true }} // Trigger each time it enters the viewport
        >
          <p>
            <span style={{ backgroundColor: '#0aff9d', color: 'black', borderRadius: '20px' }}>Aswin</span>, Web Developer
          </p>
          <p>I Design and Build Stuff</p>
        </motion.div>

        {/* Button Section with Animation */}
        <motion.div
          className="button-container"
          initial={{ opacity: 0, y: 50 }} // Start below the normal position and hidden
          animate={{ opacity: 1, y: 0 }} // Fade in and slide to the normal position
          transition={{
            duration: 0.6,
            delay: 1.5, // Add delay to the button's appearance
            ease: 'easeInOut', // Smooth easing for the button
          }}
          viewport={{ amount: 0.5,once:true }} // Trigger each time it enters the viewport
        >
          <button
            onClick={() => (window.location.href = '/contact')} // Button redirects to the Contact Us page
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
