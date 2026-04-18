import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const revealThreshold = window.innerHeight * 0.1;
      
      if (scrollY > revealThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Collapse slightly after threshold to show difference
      if (scrollY > revealThreshold + 200) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
        >
          <motion.nav
            layout
            initial={false}
            animate={{
              width: isExpanded ? '100%' : 'auto',
              maxWidth: isExpanded ? '1320px' : '600px',
              minWidth: isExpanded ? 'auto' : '600px',
              backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.8)',
              borderColor: isExpanded ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 229, 255, 0.2)',
              padding: isExpanded ? '20px 40px' : '12px 32px',
              backdropFilter: isExpanded ? 'none' : 'blur(24px)'
            }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="flex items-center justify-between border items-center border-[rgba(255,255,255,0.1)] transition-colors duration-500 rounded-none mix-blend-screen overflow-hidden"
            style={{ backdropFilter: isExpanded ? 'none' : 'blur(24px)' }}
          >
            {/* Logo Zone */}
            <div className="flex items-center gap-4">
              <span className="text-display text-tf-cyan text-[24px] font-bold leading-none cyan-glow">TF</span>
              <div className="w-[2px] h-[20px] bg-tf-cyan cyan-glow" />
              <span className="text-body text-white/50 uppercase tracking-[0.3em] text-[10px] leading-none mt-1">ANTIGRAVITY</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {['PROTOCOL', 'FACTION', 'SPECIFICATIONS'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-body text-xs uppercase tracking-widest text-white/60 hover:text-tf-cyan transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button className="hidden md:block bg-tf-cyan/10 border border-tf-cyan text-tf-cyan px-4 py-2 text-xs uppercase tracking-widest hover:bg-tf-cyan hover:text-black transition-all duration-300">
              Access Terminal
            </button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
