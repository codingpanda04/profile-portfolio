import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPen, FaLaptopCode } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl mb-4" />,
      title: 'Full Stack Development',
      description:
        'Building responsive and scalable web applications using modern technologies.',
    },
    {
      icon: <FaPen className="text-4xl mb-4" />,
      title: 'Ghostwriting',
      description:
        'Professional ghostwriting services for books, articles, and web content.',
    },
    {
      icon: <FaLaptopCode className="text-4xl mb-4" />,
      title: 'Freelance Development',
      description:
        'Custom web development solutions tailored to your specific needs.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
