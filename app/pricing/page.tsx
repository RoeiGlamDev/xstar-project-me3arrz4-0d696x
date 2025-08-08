import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Glam Package',
    price: '$49',
    features: [
      'Skin Analysis',
      'Custom Foundation Match',
      'Basic Makeup Application',
      'Luxury LRP Cosmetics Gift',
    ],
  },
  {
    title: 'Deluxe Glam Package',
    price: '$99',
    features: [
      'Comprehensive Skin Analysis',
      'Custom Foundation & Concealer Match',
      'Full Makeup Application',
      'Luxury LRP Cosmetics Gift Set',
      'Personalized Skincare Consultation',
    ],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$149',
    features: [
      'In-Depth Skin Analysis',
      'Complete Makeup Application',
      'Luxury LRP Cosmetics Gift Set',
      'Personalized Skincare & Makeup Consultation',
      'Follow-Up Session',
    ],
  },
];

const FAQ = [
  {
    question: 'What is included in the Glam Packages?',
    answer: 'Each package includes a tailored experience with our luxury products, ensuring you look and feel your best.',
  },
  {
    question: 'How do I book a session?',
    answer: 'You can book a session directly through our website or contact our customer service for assistance.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Yes, all luxury LRP cosmetics products are cruelty-free and made with the highest quality ingredients.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-10">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Book Now
            </button>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-center mt-10 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mt-4">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg text-orange-600">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;