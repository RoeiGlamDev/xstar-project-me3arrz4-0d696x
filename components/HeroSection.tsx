import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: ''url(/path/to/your/luxury-background.jpg)' '}} />
      <div className="relative z-10 text-center p-8">
        <motion.div 
          className="text-6xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div 
          className="text-2xl text-white mb-8"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Elevate your beauty with our premium cosmetics crafted for the discerning individual.
        </motion.h2>
        <motion.div 
          className="text-lg text-white mb-6"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the allure of luxury with our exclusive range of cosmetics designed to enhance your natural beauty.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.div 
            className="bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
          <motion.div 
            className="bg-white text-orange-600 py-3 px-6 rounded-lg border-2 border-orange-600 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
        <div className="mt-8 text-white">
          <p className="text-sm">Trusted by beauty enthusiasts worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;