import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: isInView ? 1 : 0, translateY: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`transition-all duration-300 ${className`}}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;