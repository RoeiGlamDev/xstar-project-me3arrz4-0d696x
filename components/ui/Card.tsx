import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;