import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I'm Dennis Bundi
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer | Author | Ghostwriter
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-600"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-600"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-600"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-600"
            >
              <FaInstagram />
            </a>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="btn-primary">Get in Touch</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
