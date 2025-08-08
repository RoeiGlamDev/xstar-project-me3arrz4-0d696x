import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essential Glow Package',
    price: '$99',
    features: [
      'Skin Analysis',
      'Custom Foundation Match',
      'Luxury Lip Treatment',
      'Complimentary Sample',
    ],
  },
  {
    title: 'Radiant Luxe Package',
    price: '$199',
    features: [
      'All Essential Glow Features',
      'Personalized Skincare Routine',
      'Luxury Facial Treatment',
      'Exclusive Product Discounts',
    ],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$299',
    features: [
      'All Radiant Luxe Features',
      'Full Makeup Application',
      'Private Consultation',
      'VIP Access to New Launches',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our exclusive packages designed to elevate your beauty experience.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg m-4 p-6 w-80 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">{tier.title}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                Choose Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;