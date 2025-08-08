import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Join the luxury LRP cosmetics Family",
  description = "Subscribe to our newsletter for exclusive offers, product launches, and beauty tips tailored just for you.",
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white p-10 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      {isSubmitted ? (
        <motion.div
          className="text-lg text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to luxury LRP cosmetics!
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 md:mb-0 md:mr-4"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSection;