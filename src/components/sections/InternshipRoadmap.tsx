'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Map,
  CheckCircle2,
  Circle,
  Building2,
  Warehouse,
  Cpu,
  Database,
  Bot,
  Boxes,
  ArrowRight,
  Star,
} from 'lucide-react';
import { WordReveal } from '@/components/ui/WordReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const roadmapSteps = [
  {
    phase: 'Phase 1',
    period: 'June 2026',
    title: 'Supply Chain & Database Engineering',
    company: 'NCSP India Software Private Limited',
    type: 'Software Engineering Intern',
    status: 'completed',
    icon: <Warehouse className="w-5 h-5 text-[#65A30D]" />,
    skills: ['PostgreSQL', 'Relational SQL', 'Triggers & Stored Procedures', 'Supply Chain Systems'],
    milestones: [
      'Authored schema-grounded SQL across 11 PostgreSQL production tables',
      'Engineered trigger-based business logic for ASN, inventory, order & LPN workflows',
      'Maintained data integrity for downstream analytics and order-fulfillment reporting',
      'Delivered a 19-slide technical architecture review to internal stakeholders',
    ],
    outcome: 'Mastered enterprise-grade PostgreSQL schema design & relational database engineering',
  },
  {
    phase: 'Phase 2',
    period: 'July 2026',
    title: 'AI-Powered CRM Extension Development',
    company: 'Zoho Corporation',
    type: 'Software Engineering Intern',
    status: 'completed',
    icon: <Building2 className="w-5 h-5 text-[#65A30D]" />,
    skills: ['Zoho Sigma', 'ZET CLI', 'Zoho Deluge', 'GLM-4.7 Flash AI', 'REST APIs', 'CRM Widgets'],
    milestones: [
      'Built "AI Promise Tracker" — Zoho CRM widget powered by GLM-4.7 Flash AI',
      'Extracted commitment summaries from customer notes & meeting transcripts automatically',
      'Developed extensions across Zoho CRM, Desk, and Bigin platforms',
      'Integrated REST APIs, Widgets, and Connectors using ZET CLI & Zoho Sigma',
    ],
    outcome: 'Gained hands-on enterprise AI integration and Zoho extension engineering experience',
  },
  {
    phase: 'Phase 3',
    period: 'Pre-Internship | 2025',
    title: 'AI & Machine Learning Foundations',
    company: 'Codec Technologies',
    type: 'AI & ML Intern',
    status: 'completed',
    icon: <Cpu className="w-5 h-5 text-[#65A30D]" />,
    skills: ['Python', 'Machine Learning', 'Scikit-Learn', 'Data Preprocessing', 'Model Evaluation'],
    milestones: [
      'Gained practical experience in supervised machine learning algorithms',
      'Applied data preprocessing, feature engineering, and model training pipelines',
      'Evaluated models using Precision, Recall, F1-Score, and ROC-AUC metrics',
      'Completed end-to-end ML project workflows and visualization tasks',
    ],
    outcome: 'Built a strong foundation in applied AI & predictive machine learning',
  },
  {
    phase: 'Phase 4',
    period: 'Target: 2027',
    title: 'Data Analyst / AI Engineer Role',
    company: 'Top Tech Company / Startup',
    type: 'Full-Time Goal',
    status: 'upcoming',
    icon: <Star className="w-5 h-5 text-[#65A30D]" />,
    skills: ['Data Analytics', 'ML Pipelines', 'AI Engineering', 'Cloud Platforms', 'System Design'],
    milestones: [
      'Apply EDA, ML modeling, and SQL skills in production data environments',
      'Contribute to AI product development and analytics engineering teams',
      'Build scalable data pipelines and intelligent business intelligence tools',
      'Join companies like Google, Zoho, Microsoft, Atlassian, or high-end startups',
    ],
    outcome: 'Land a data analyst / AI engineering role at a high-impact tech company',
  },
];

export const InternshipRoadmap: React.FC = () => {
  return (
    <section id="roadmap" className="section-padding relative z-10 bg-[#FAFAF8] border-y border-[#E2E8F0]">
      <div className="container-custom">

        <SectionHeader
          badgeText="Career Journey"
          badgeIcon={<Map className="w-3.5 h-3.5" />}
          title="Internship"
          highlightText="Roadmap"
          subtitle="A structured journey from database engineering and AI extensions to a full-time data analyst role at a top tech company."
        />

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E2E8F0] -translate-x-1/2" />

          <div className="space-y-12">
            {roadmapSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const isCompleted = step.status === 'completed';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[46%]">
                    <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-elevated-sm p-6 md:p-8 relative overflow-hidden hover:border-[#84CC16] transition-all card-lift">
                      {/* Phase Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#84CC16] text-[#0F172A] border border-[#65A30D]">
                          {step.phase} &bull; {step.period}
                        </span>
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F0F0EC] text-[#0F172A] text-xs font-sans font-semibold border border-[#E2E8F0]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#65A30D]" /> Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F0F0EC] text-[#475569] text-xs font-sans font-semibold border border-[#E2E8F0]">
                            <Circle className="w-3.5 h-3.5" /> Target
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <div className="flex items-start gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0 shadow-elevated-sm">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-normal text-[#0F172A] leading-snug">
                            <WordReveal text={step.title} animation="blur-slide" interactiveHover={false} />
                          </h3>
                          <p className="text-xs font-sans font-bold text-[#0F172A] mt-0.5">{step.company}</p>
                          <p className="text-xs text-[#475569] font-sans font-medium">{step.type}</p>
                        </div>
                      </div>

                      {/* Milestones */}
                      <ul className="space-y-2 mb-5">
                        {step.milestones.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed font-sans font-medium">
                            <ArrowRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#65A30D]" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {step.skills.map((skill, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#F0F0EC] text-[#0F172A] border border-[#E2E8F0]">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Outcome */}
                      <div className="pt-4 border-t border-[#E2E8F0]">
                        <p className="text-xs font-sans font-semibold text-[#475569] flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#65A30D]" />
                          <span className="italic">{step.outcome}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-[#84CC16] border-2 border-[#FFFFFF] shadow-elevated-sm" />
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-elevated-sm"
        >
          {[
            { label: 'Internships Completed', numeric: 3, suffix: '', icon: <Building2 className="w-5 h-5 text-[#65A30D] mx-auto mb-1" /> },
            { label: 'PG Tables Engineered', numeric: 11, suffix: '+', icon: <Database className="w-5 h-5 text-[#65A30D] mx-auto mb-1" /> },
            { label: 'AI Models Integrated', numeric: 2, suffix: '+', icon: <Bot className="w-5 h-5 text-[#65A30D] mx-auto mb-1" /> },
            { label: 'CRM Extensions Built', numeric: 3, suffix: '+', icon: <Boxes className="w-5 h-5 text-[#65A30D] mx-auto mb-1" /> },
          ].map((item, idx) => (
            <div key={idx}>
              {item.icon}
              <div className="text-3xl sm:text-4xl font-display font-normal text-[#0F172A]">
                <AnimatedCounter value={item.numeric} suffix={item.suffix} />
              </div>
              <div className="text-xs text-[#475569] font-sans font-semibold mt-0.5">{item.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
