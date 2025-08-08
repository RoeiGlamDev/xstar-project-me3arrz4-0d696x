import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    position: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Smith',
    position: 'Creative Director',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    position: 'Head of Marketing',
    image: '/images/team/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-10">
        <motion.div
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <p className="text-lg mb-5">
          Founded in the heart of the beauty industry, luxury LRP cosmetics has been dedicated to creating high-end, luxurious products that enhance natural beauty. Our journey began with a passion for quality and elegance, leading us to source the finest ingredients and develop innovative formulations that cater to the discerning customer.
        </p>
        <p className="text-lg">
          Over the years, luxury LRP cosmetics has evolved into a symbol of sophistication, offering a range of cosmetics that embody luxury and style. Our commitment to excellence is reflected in every product we create, ensuring that our customers experience the best in beauty.
        </p>
      </section>

      <section className="bg-orange-100 py-10">
        <motion.div
          className="text-3xl font-semibold text-center mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>
        <ul className="max-w-2xl mx-auto text-lg list-disc list-inside">
          <li>Quality: We prioritize the highest standards in our products.</li>
          <li>Innovation: We embrace creativity and new ideas in cosmetics.</li>
          <li>Sustainability: We are committed to eco-friendly practices.</li>
          <li>Elegance: Our brand reflects sophistication and luxury.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;