'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  animation?: 'fade-up' | 'blur-slide' | 'scale' | 'wave';
  interactiveHover?: boolean;
  inline?: boolean;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.05,
  animation = 'fade-up',
  interactiveHover = true,
  inline = false,
}) => {
  const words = text.split(' ');

  const getVariants = () => {
    switch (animation) {
      case 'blur-slide':
        return {
          hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.7, y: 10 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case 'wave':
        return {
          hidden: { opacity: 0, y: 24, rotateX: 60 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariant = getVariants();

  const ContainerTag = inline ? motion.span : motion.div;

  return (
    <ContainerTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={containerVariants}
      className={`inline-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariant}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            interactiveHover
              ? {
                  y: -3,
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                }
              : undefined
          }
          className={`inline-block mr-[0.28em] whitespace-nowrap cursor-default transition-colors ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </ContainerTag>
  );
};
