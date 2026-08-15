'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Sliders, BarChart2, Brain, Table, Trees, Scale, Bot, Database,
  GitMerge, Zap, Shield, Terminal, Code2, Cpu, Binary, Boxes,
  Globe, Github, FileCode, ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';

const getSkillIcon = (iconName: string) => {
  const map: Record<string, React.ReactNode> = {
    BarChart2: <BarChart2 className="w-4 h-4 text-[#65A30D]" />,
    Brain: <Brain className="w-4 h-4 text-[#65A30D]" />,
    Table: <Table className="w-4 h-4 text-[#65A30D]" />,
    Trees: <Trees className="w-4 h-4 text-[#65A30D]" />,
    Scale: <Scale className="w-4 h-4 text-[#65A30D]" />,
    Bot: <Bot className="w-4 h-4 text-[#65A30D]" />,
    Database: <Database className="w-4 h-4 text-[#65A30D]" />,
    GitMerge: <GitMerge className="w-4 h-4 text-[#65A30D]" />,
    Zap: <Zap className="w-4 h-4 text-[#65A30D]" />,
    Shield: <Shield className="w-4 h-4 text-[#65A30D]" />,
    Terminal: <Terminal className="w-4 h-4 text-[#65A30D]" />,
    Code2: <Code2 className="w-4 h-4 text-[#65A30D]" />,
    Cpu: <Cpu className="w-4 h-4 text-[#65A30D]" />,
    Binary: <Binary className="w-4 h-4 text-[#65A30D]" />,
    Boxes: <Boxes className="w-4 h-4 text-[#65A30D]" />,
    Globe: <Globe className="w-4 h-4 text-[#65A30D]" />,
    Github: <Github className="w-4 h-4 text-[#65A30D]" />,
  };
  return map[iconName] ?? <FileCode className="w-4 h-4 text-[#6B6B6B]" />;
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = PORTFOLIO_DATA.skillCategories;

  const displayedSkills = activeCategory === 'all'
    ? categories.flatMap((cat) => cat.skills)
    : categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding relative z-10 bg-[#F0F0EC] border-y border-[#E2E8F0]">
      <div className="container-custom">

        <SectionHeader
          badgeText="Skillset & Tools"
          badgeIcon={<Sliders className="w-3.5 h-3.5" />}
          title="Technical"
          highlightText="Skills"
          subtitle="Categorized according to applied data analysis, machine learning, database engineering, and extension frameworks."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 max-w-5xl mx-auto">
          {[{ id: 'all', name: 'All Skills' }, ...categories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wide transition-all shadow-elevated-sm ${
                activeCategory === cat.id
                  ? 'bg-[#84CC16] text-[#0F172A] border border-[#65A30D] shadow-elevated-md'
                  : 'bg-[#FFFFFF] border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#84CC16]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedSkills.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-lift rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] p-6 h-full flex flex-col justify-between group shadow-elevated-sm hover:border-[#84CC16] transition-all">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-elevated-sm">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <h4 className="text-xs sm:text-sm font-sans font-bold text-[#0F172A] flex items-center gap-1.5 leading-snug min-w-0 break-words">
                        <span className="break-words min-w-0">{skill.name}</span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] shrink-0 animate-pulse" title="Core Specialty" />
                        )}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#65A30D] bg-[#84CC16] text-[#0F172A] shrink-0 self-start">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-4 pt-2">
                  <div className="progress-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut', delay: idx * 0.03 }}
                      className="progress-fill"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DSA Badge & Profile Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated-sm relative overflow-hidden"
        >
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#84CC16] text-[#0F172A] flex items-center justify-center shrink-0 shadow-elevated-sm">
              <Binary className="w-6 h-6 text-[#0F172A] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-display text-2xl sm:text-3xl font-normal text-[#0F172A]">
                  <WordReveal text="Data Structures & Algorithm Proficiency" animation="blur-slide" />
                </h4>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0F172A] text-[#84CC16] text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-ping" />
                  25+ DSA Problems
                </span>
              </div>
              <p className="text-xs text-[#475569] font-sans font-medium">
                Solved algorithmic efficiency and data structures problems across{' '}
                <strong className="text-[#0F172A] font-semibold">CodeChef, LeetCode, and HackerRank</strong>.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-wrap items-center justify-start md:justify-end gap-3 shrink-0 relative z-10">
            <a
              href="https://www.codechef.com/users/maria_24ucb126"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-[#FAFAF8] hover:bg-[#84CC16] hover:text-[#0F172A] font-mono text-xs font-bold border border-[#1E293B] shadow-elevated-sm transition-all hover:scale-105 btn-ripple group"
            >
              <span>CodeChef Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#84CC16] group-hover:text-[#0F172A]" />
            </a>

            <a
              href="https://leetcode.com/u/Maria_Blessy/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-[#FAFAF8] hover:bg-[#84CC16] hover:text-[#0F172A] font-mono text-xs font-bold border border-[#1E293B] shadow-elevated-sm transition-all hover:scale-105 btn-ripple group"
            >
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#84CC16] group-hover:text-[#0F172A]" />
            </a>

            <a
              href="https://www.hackerrank.com/profile/rjblessy2006"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-[#FAFAF8] hover:bg-[#84CC16] hover:text-[#0F172A] font-mono text-xs font-bold border border-[#1E293B] shadow-elevated-sm transition-all hover:scale-105 btn-ripple group"
            >
              <span>HackerRank Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#84CC16] group-hover:text-[#0F172A]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
