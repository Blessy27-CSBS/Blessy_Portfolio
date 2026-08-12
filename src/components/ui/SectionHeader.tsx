'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WordReveal } from './WordReveal';

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightText: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeIcon,
  title,
  highlightText,
  subtitle,
  center = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center max-w-4xl mx-auto' : ''}`}
    >
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#84CC16] border border-[#65A30D] text-[#0F172A] text-[11px] font-mono font-bold tracking-wider uppercase mb-4 shadow-elevated-sm ${center ? 'mx-auto' : ''}`}>
        {badgeIcon}
        <span>{badgeText}</span>
      </div>

      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight mb-4">
        <WordReveal text={title} inline animation="blur-slide" delay={0.05} />
        <span className="text-[#65A30D] ml-3">
          <WordReveal text={highlightText} inline animation="scale" delay={0.15} />
        </span>
      </h2>

      {subtitle && (
        <div className="font-sans text-[#475569] text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
          <WordReveal text={subtitle} animation="fade-up" delay={0.25} stagger={0.03} />
        </div>
      )}
    </motion.div>
  );
};
