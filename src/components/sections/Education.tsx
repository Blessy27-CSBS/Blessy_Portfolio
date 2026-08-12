'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="section-padding relative z-10 bg-[#F0F0EC] border-y border-[#E2E8F0]">
      <div className="container-custom">
        
        <SectionHeader
          badgeText="Academic Background"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          title="Educational"
          highlightText="Journey"
          subtitle="Formal computer science & business engineering foundation."
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-10 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center shrink-0 shadow-elevated-sm">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-normal text-[#0F172A]">
                      <WordReveal text={edu.degree} animation="blur-slide" interactiveHover={false} />
                    </h3>
                    <h4 className="text-sm font-sans font-bold text-[#0F172A]">{edu.institution}</h4>
                    <p className="text-xs text-[#475569] font-sans flex items-center gap-1.5 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#65A30D]" /> {edu.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#84CC16] text-[#0F172A] text-xs font-mono font-bold border border-[#65A30D]">
                    <Calendar className="w-3.5 h-3.5 text-[#0F172A]" />
                    {edu.duration}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-[#F0F0EC] text-[#0F172A] text-xs font-sans font-semibold border border-[#E2E8F0]">
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div className="mb-6">
                <h4 className="text-[10px] uppercase font-mono font-bold text-[#65A30D] tracking-[0.2em] mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#65A30D]" /> Core Academic Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-[#F0F0EC] text-[#0F172A] font-mono text-xs font-semibold border border-[#E2E8F0]">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Academic Achievements */}
              <div>
                <h4 className="text-[10px] uppercase font-mono font-bold text-[#65A30D] tracking-[0.2em] mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#65A30D]" /> Academic Highlights
                </h4>
                <ul className="space-y-2 text-xs text-[#475569] font-sans font-medium">
                  {edu.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
