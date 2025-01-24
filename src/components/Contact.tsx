import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(() => {
        setSubmitStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">
                Feel free to reach out for any inquiries about web development,
                ghostwriting, or collaboration opportunities.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+254704095959"
                  className="flex items-center space-x-3 text-lg"
                >
                  <FaPhone />
                  <span>Call Me</span>
                </a>
                <a
                  href="mailto:dbundi758@gmail.com"
                  className="flex items-center space-x-3 text-lg"
                >
                  <FaEnvelope />
                  <span>dbundi758@gmail.com</span>
                </a>
              </div>
            </div>
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border rounded-md dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border rounded-md dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full p-2 border rounded-md dark:bg-gray-700"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-500">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
