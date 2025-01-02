import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import { motion } from 'framer-motion'; // Import Framer Motion

function Contact() {
    const socials = [
        { name: 'GitHub', logo: <FaGithub size={40} />, link: 'https://github.com/AswinM1' },
        { name: 'LinkedIn', logo: <FaLinkedin size={40} />, link: 'https://www.linkedin.com/in/aswin-m-22073a258/' },
        { name: 'Email', logo: <FaEnvelope size={40} />, link: 'mailto:aswinheri@example.com' }, // Email link
    ];

    return (
        <div className="results" id="contact">
            {/* Section Animation */}
            <motion.div
                className="results-container"
                initial={{ opacity: 0, y: 50 }} // Start invisible and slide from below
                whileInView={{ opacity: 1, y: 0 }} // End fully visible at normal position
                transition={{ duration: 0.6 }} // Animation duration
                viewport={{  amount: 0.5 }} // Trigger animation when 50% of the element is visible
            >
                <h1>Let's Connect</h1>
                <p>Shoot me an email if you want to connect! You can also find me on LinkedIn or GitHub.</p>

                <div className="socials-container">
                  
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            initial={{ opacity: 0, scale: 0.8 }} // Start slightly smaller and invisible
                            whileInView={{ opacity: 1, scale: 1 }} // End normal size and fully visible
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation for each icon
                        >
                            {social.logo}
                        </motion.a>
                    ))}
                </div>

                <div className="button-container">
                    {/* Button to send mail */}
                    <a href="mailto:your-email@example.com">
                        <button className="send-email-btn">Send Email</button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
