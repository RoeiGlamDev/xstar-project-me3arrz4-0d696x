import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'Our products are crafted with the finest ingredients to ensure luxury and quality.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Experience the allure of our beautifully designed packaging that reflects sophistication.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free',
    description: 'Luxury LRP cosmetics is committed to ethical practices, ensuring no harm to animals.',
    icon: <i className="fas fa-paw text-orange-500"></i>,
  },
  {
    title: 'Luxury Experience',
    description: 'Indulge in a luxurious experience with every application of our cosmetics.',
    icon: <i className="fas fa-crown text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of LRP Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;