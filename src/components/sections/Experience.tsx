'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Briefcase, Building2, Warehouse, Cpu, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#1C1815]" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-[#1C1815]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#1C1815]" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-[#FAF7F3] border-y border-[#73675C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeText="Industry Work"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          title="Relevant"
          highlightText="Internships"
          subtitle="Hands-on software engineering, database architecture, and AI extension development at leading tech organizations."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 space-y-12 before:absolute before:left-2 md:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#73675C]/30">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#FAF7F3] border-2 border-[#1C1815] flex items-center justify-center group-hover:scale-125 transition-all shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#1C1815]" />
              </div>

              {/* Experience Glass Card */}
              <GlassCard className="p-6 md:p-8 bg-[#F3EFEA] border-[#73675C]/25 shadow-xs">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-[#73675C]/20">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#E8E2D9] border border-[#73675C]/20 flex items-center justify-center shrink-0">
                      {getIcon(exp.logoIcon)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif-title text-lg sm:text-xl md:text-2xl font-semibold text-[#1C1815] leading-snug break-words">{exp.role}</h3>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1C1815] break-words">{exp.company}</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E2D9] text-[#73675C] text-xs font-medium border border-[#73675C]/20">
                      <Calendar className="w-3.5 h-3.5 text-[#1C1815]" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8E2D9] text-[#1C1815] text-xs font-semibold border border-[#73675C]/20">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#73675C] text-sm leading-relaxed font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#1C1815] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#73675C] uppercase tracking-[0.18em] mr-2">Technologies:</span>
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-[#E8E2D9] text-[#1C1815] font-mono text-xs border border-[#73675C]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
