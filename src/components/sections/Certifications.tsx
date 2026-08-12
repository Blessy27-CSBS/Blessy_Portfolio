'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-padding relative z-10 bg-[#FAFAF8] border-y border-[#E2E8F0]">
      <div className="container-custom">

        <SectionHeader
          badgeText="Verified Credentials"
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title="Certifications &"
          highlightText="Training"
          subtitle="Professional certifications and completed software engineering internship programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex flex-col"
            >
              <div className="card-lift h-full rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-elevated-sm flex flex-col justify-between overflow-hidden p-6 hover:border-[#84CC16] hover:shadow-elevated-md transition-all">
                <div className="flex-1 flex flex-col">
                  {/* Icon + badge row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] flex items-center justify-center text-[#65A30D] shadow-elevated-sm shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#84CC16] text-[#0F172A] border border-[#65A30D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F172A]" />
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & issuer */}
                  <h3 className="font-display text-2xl font-normal text-[#0F172A] leading-snug mb-1">
                    <WordReveal text={cert.title} animation="blur-slide" interactiveHover={false} />
                  </h3>

                  <p className="text-xs font-sans font-bold text-[#65A30D] mb-3">
                    {cert.issuer} &bull; {cert.date}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-[#475569] text-xs leading-relaxed font-normal mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0] mt-auto">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#F0F0EC] text-[#0F172A] font-mono text-[11px] font-semibold border border-[#E2E8F0]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
