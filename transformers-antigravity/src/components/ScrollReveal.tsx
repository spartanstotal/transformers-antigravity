import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
