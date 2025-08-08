import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div
          className="text-orange-500 font-bold text-2xl"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={logo} alt="luxury LRP cosmetics" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-10">
          <motion.div
            href="#about"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#services"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-5 space-y-3">
            <motion.div
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#products"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.div
              href="#services"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.div
              href="#contact"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;