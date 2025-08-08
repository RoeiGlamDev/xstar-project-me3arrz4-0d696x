import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for elegance and innovation.',
  },
  {
    name: 'James Chen',
    role: 'Head of Product Development',
    description: 'James specializes in creating high-quality, luxurious formulations that enhance beauty while ensuring skin health.',
  },
  {
    name: 'Olivia Patel',
    role: 'Marketing Director',
    description: 'Olivia brings a wealth of knowledge in luxury branding and marketing strategies, ensuring luxury LRP cosmetics stands out in the market.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg mb-6">
          At luxury LRP cosmetics, we believe that beauty is an art form. Our story began with a passion for creating luxurious, high-quality cosmetics that empower individuals to express their unique beauty. We are dedicated to sourcing the finest ingredients and utilizing innovative techniques to craft products that not only enhance appearance but also nourish the skin.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          Our mission at luxury LRP cosmetics is to redefine luxury in the cosmetics industry by providing products that embody elegance, quality, and sustainability. We strive to inspire confidence and self-expression in every individual, ensuring that our cosmetics are a source of joy and empowerment.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md italic">{member.role}</p>
              <p className="text-sm mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;