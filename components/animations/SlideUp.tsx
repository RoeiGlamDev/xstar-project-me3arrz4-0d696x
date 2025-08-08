import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-4"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;