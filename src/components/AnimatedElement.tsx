'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
}

const AnimatedElement = ({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'fadeIn'
}: AnimatedElementProps) => {
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.5,
          delay
        }
      }
    };

    switch (animation) {
      case 'fadeIn':
        return baseVariants;
      
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay }
          }
        };
      
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay }
          }
        };
      
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5, delay }
          }
        };
      
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5, delay }
          }
        };
      
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, delay }
          }
        };
      
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 