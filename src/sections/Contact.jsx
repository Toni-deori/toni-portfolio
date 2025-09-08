import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          setIsLoading(false);
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          alert('Failed to send message. Please try again.');
          setIsLoading(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const successVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  return (
    <section
      id="contact"
      style={{ position: 'relative', zIndex: 20 }}
      className="max-w-5xl mx-auto px-6 py-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 via-[#a855f7]/10 to-[#f472b6]/10 rounded-3xl blur-3xl" />
        <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
          <motion.div variants={itemVariants} className="text-center px-8 pt-12 pb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse" />
              <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wider">
                Let's Connect
              </span>
              <div className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Get in Touch
            </h2>
          </motion.div>

          <div className="px-8 pb-12">
            {submitted ? (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-white font-medium mb-3">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 placeholder-gray-400 text-white rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-white font-medium mb-3">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 placeholder-gray-400 text-white rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-white font-medium mb-3">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 placeholder-gray-400 text-white rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </div>
        </div>

        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6366f1]/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#a855f7]/20 rounded-full blur-xl animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Contact;
