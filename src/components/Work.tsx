import React from 'react';
import { motion } from 'framer-motion';
import abastardsAllure from '../assets/aba.jpeg';
import assassinsRed from '../assets/tar.jpeg';
import fugitivePrin from '../assets/tfp.jpeg';
import netflixImg from '../assets/netflix.png';

const Work = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A full-stack Netflix clone built with modern technologies.',
      image: netflixImg,
      link: '#',
      category: 'Web Development',
    },
    {
      title: "A Bastard's Allure",
      description: 'A compelling novel available on Webnovel.',
      image: abastardsAllure,
      link: '#',
      category: 'Book',
    },
    {
      title: 'The Fugitive Princess',
      description: 'An exciting story of adventure and intrigue.',
      image: fugitivePrin,
      link: '#',
      category: 'Book',
    },
    {
      title: "The Assassin's Redemption",
      description: "A Princess's Journey To Forgiveness.",
      image: assassinsRed,
      link: '#',
      category: 'Book',
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-primary-600 font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
