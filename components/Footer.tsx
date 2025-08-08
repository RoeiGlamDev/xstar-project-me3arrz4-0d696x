import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold">{companyName}</h2>
          <p className="mt-2 text-lg">Elevate your beauty with our luxury cosmetics.</p>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Company Information</h3>
            <ul className="mt-2">
              <li className="hover:text-orange-500 transition duration-300">
                <a href="/about" aria-label="About Us">About Us</a>
              </li>
              <li className="hover:text-orange-500 transition duration-300">
                <a href="/products" aria-label="Our Products">Our Products</a>
              </li>
              <li className="hover:text-orange-500 transition duration-300">
                <a href="/contact" aria-label="Contact Us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <li key={link.name} className="hover:text-orange-500 transition duration-300">
                  <a href={link.url} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-sm text-gray-600"
        >
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;