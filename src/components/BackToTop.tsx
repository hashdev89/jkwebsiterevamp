import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible &&
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-6 sm:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="flex items-center justify-center">
          
          <ArrowUpIcon size={22} strokeWidth={2.25} />
        </motion.span>
      </motion.button>
      }
    </AnimatePresence>);

};
