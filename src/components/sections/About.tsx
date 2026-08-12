'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { User, Award, Brain, Code, CheckCircle2, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const itemFade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative z-10 bg-[#F0F0EC] border-y border-[#E2E8F0]">
      <div className="container-custom">

        <SectionHeader
          badgeText="Professional Profile"
          badgeIcon={<User className="w-3.5 h-3.5" />}
          title="About"
          highlightText="Maria Blessy"
          subtitle="Translating complex raw data and business logic into actionable insights, predictive ML models, and production database schemas."
        />

        {/* Animated Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 items-stretch">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <motion.div key={idx} {...itemFade(idx * 0.08)} className="h-full">
              <div className="card-lift h-full flex flex-col justify-between rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] text-center p-5 sm:p-6 hover:border-[#84CC16] transition-colors shadow-elevated-sm">
                <div className="flex flex-col items-center justify-center flex-1 mb-2">
                  <div className="text-4xl sm:text-5xl font-display font-normal text-[#0F172A] mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.18em]">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[11px] font-sans text-[#475569] leading-relaxed font-semibold">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Bento 1: Analytical Focus (Span 2) */}
          <motion.div {...itemFade(0.1)} className="lg:col-span-2">
            <GlassCard className="h-full space-y-4 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm">
              <div className="w-10 h-10 rounded-xl bg-[#84CC16] text-[#0F172A] flex items-center justify-center shadow-elevated-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-display text-3xl font-normal text-[#0F172A]">Data Analysis & Predictive ML Focus</h3>
              <p className="font-sans text-[#475569] text-sm leading-relaxed font-normal">
                I am a third-year <strong className="text-[#0F172A] font-semibold">Computer Science & Business Systems (CSBS)</strong> student at <em className="text-[#0F172A] not-italic font-medium">KGiSL Institute of Technology</em> with hands-on experience in exploratory data analysis (EDA), predictive modeling, and PostgreSQL database engineering.
              </p>
              <p className="font-sans text-[#475569] text-sm leading-relaxed font-normal">
                During my internships at <strong className="text-[#0F172A] font-semibold">Zoho Corporation</strong> and <strong className="text-[#0F172A] font-semibold">NCSP India</strong>, I built AI extensions (GLM-4.7 Flash AI) and authored schema-grounded SQL across 11 PostgreSQL production tables.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { label: 'Exploratory Data Analysis (EDA)' },
                  { label: 'Predictive Machine Learning' },
                  { label: 'PostgreSQL & Relational SQL' },
                  { label: 'Zoho CRM Extensions' },
                ].map(({ label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F0F0EC] border border-[#E2E8F0] text-[#0F172A] font-sans text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65A30D]" />
                    {label}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Bento 2: Core Philosophy */}
          <motion.div {...itemFade(0.18)}>
            <GlassCard className="h-full flex flex-col justify-between space-y-4 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#84CC16] flex items-center justify-center mb-4 shadow-elevated-sm">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-display text-3xl font-normal text-[#0F172A] mb-2">Core Philosophy</h3>
                <blockquote className="border-l-2 border-[#84CC16] pl-4 text-[#475569] italic text-sm leading-relaxed my-3 font-sans">
                  &ldquo;<WordReveal text={PORTFOLIO_DATA.personal.philosophy} animation="blur-slide" delay={0.1} />&rdquo;
                </blockquote>
              </div>
              <div className="text-xs font-mono font-bold text-[#65A30D] tracking-widest uppercase">
                — Maria Blessy R J
              </div>
            </GlassCard>
          </motion.div>

          {/* Bento 3: Key Competencies */}
          <motion.div {...itemFade(0.22)}>
            <GlassCard className="h-full flex flex-col justify-between space-y-4 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#84CC16] text-[#0F172A] flex items-center justify-center mb-3 shadow-elevated-sm">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-display text-3xl font-normal text-[#0F172A] mb-3">Key Competencies</h3>
                <ul className="space-y-2.5 text-xs text-[#475569]">
                  {[
                    { text: 'Statistical Analysis & Scikit-Learn ML', desc: 'Predictive modeling, hyperparameter tuning & EDA' },
                    { text: 'PostgreSQL Schema Triggers & Joins', desc: 'Authoring 11-table schemas & integrity business rules' },
                    { text: 'LLM RAG Systems & Vector Embeddings', desc: 'Zero-hallucination CSV document retrieval' },
                    { text: '25+ DSA Problems Solved', desc: 'Across CodeChef, LeetCode & HackerRank' },
                  ].map(({ text, desc }) => (
                    <li key={text} className="p-3 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0]">
                      <div className="flex items-center gap-2 font-sans font-semibold text-[#0F172A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] shrink-0" />
                        {text}
                      </div>
                      <div className="text-[11px] font-sans text-[#475569] mt-0.5 ml-3.5 font-medium">{desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bento 4: Education Overview (Span 2) */}
          <motion.div {...itemFade(0.26)} className="lg:col-span-2">
            <GlassCard className="h-full flex flex-col justify-between space-y-4 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#84CC16] flex items-center justify-center mb-3 shadow-elevated-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display text-3xl font-normal text-[#0F172A] mb-3">Education & Background Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { label: 'Degree & Branch', value: PORTFOLIO_DATA.education.degree },
                    { label: 'Institution', value: PORTFOLIO_DATA.education.institution },
                    { label: 'Duration & Status', value: `${PORTFOLIO_DATA.education.duration} (${PORTFOLIO_DATA.education.status})` },
                    { label: 'Primary Toolset', value: 'Python, SQL, Scikit-learn, Deluge' },
                  ].map(({ label, value }) => (
                    <div key={label} className="p-3.5 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0]">
                      <div className="text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.18em] mb-1">{label}</div>
                      <div className="font-sans font-semibold text-[#0F172A] leading-snug">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#475569]">
                <span className="px-3.5 py-1 rounded-full bg-[#F0F0EC] border border-[#E2E8F0] text-[#0F172A] font-mono">
                  🎯 Target Graduation: 2028
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#F0F0EC] border border-[#E2E8F0] text-[#0F172A] font-mono">
                  📚 Computer Science & Business Systems
                </span>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
