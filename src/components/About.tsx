import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={profileImg}
                alt="David Bundi"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                I'm a passionate Full Stack Developer and accomplished Author
                with expertise in creating both digital solutions and compelling
                narratives. With a unique blend of technical skills and creative
                writing abilities, I bring ideas to life through code and words.
              </p>
              <p className="text-lg mb-6">
                As a developer, I specialize in building responsive web
                applications using modern technologies. As an author and
                ghostwriter, I've published several successful novels and helped
                others tell their stories.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Skills</h3>
                  <ul className="space-y-2">
                    <li>Full Stack Development</li>
                    <li>Creative Writing</li>
                    <li>Ghostwriting</li>
                    <li>Web Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Experience</h3>
                  <ul className="space-y-2">
                    <li>5+ Years Development</li>
                    <li>3 Published Books</li>
                    <li>Freelance Writing</li>
                    <li>Technical Writing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
