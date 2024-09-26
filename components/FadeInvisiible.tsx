import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type FadeInWhenVisibleProps = {
  children: ReactNode;
  from: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;  // Optional delay prop
};

const directionVariants = {
  top: { opacity: 0, y: -50 },
  bottom: { opacity: 0, y: 50 },
  left: { opacity: 0, x: -50 },
  right: { opacity: 0, x: 50 },
};

export const FadeInWhenVisible = ({
  children,
  from,
  delay = 0,  // Default delay is 0 if not specified
}: FadeInWhenVisibleProps) => {
  return (
    <motion.div
      initial={directionVariants[from]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: 'easeOut', 
        delay: delay,  // Apply delay to the transition
      }}
      viewport={{ once: false }}  // Trigger animation every time it enters the viewport
    >
      {children}
    </motion.div>
  );
};
