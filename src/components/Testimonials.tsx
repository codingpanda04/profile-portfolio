import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Client',
      text: "David's web development skills are exceptional. He delivered our project on time and exceeded our expectations.",
      rating: 5,
    },
    {
      name: 'Jane Smith',
      role: 'Author',
      text: 'Working with David as a ghostwriter was amazing. He captured my voice perfectly and helped bring my story to life.',
      rating: 5,
    },
    {
      name: 'Mike Johnson',
      role: 'Client',
      text: 'The Netflix clone project David created was impressive. His attention to detail and technical expertise are outstanding.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.text}"
                </p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
