'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Download, Github, Linkedin, Mail,
  MapPin, Sparkles, Terminal, Code2, Database, Brain,
  CheckCircle2, BarChart2, Cpu, Zap
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface HeroProps {
  onOpenResumeModal: () => void;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] },
});

const statItems = [
  { icon: <BarChart2 className="w-4 h-4 text-[#65A30D]" />, numericValue: 10, suffix: '+', label: 'ML Pipelines', color: 'text-[#1A1A1A] bg-[#FFFFFF] border-[#E0E0DC] shadow-soft-xs' },
  { icon: <Database className="w-4 h-4 text-[#65A30D]" />, numericValue: 11, suffix: '+', label: 'PG Tables', color: 'text-[#1A1A1A] bg-[#FFFFFF] border-[#E0E0DC] shadow-soft-xs' },
  { icon: <Cpu className="w-4 h-4 text-[#65A30D]" />, numericValue: 3, suffix: '', label: 'Internships', color: 'text-[#1A1A1A] bg-[#FFFFFF] border-[#E0E0DC] shadow-soft-xs' },
  { icon: <Zap className="w-4 h-4 text-[#65A30D]" />, numericValue: 6, suffix: '+', label: 'Projects', color: 'text-[#1A1A1A] bg-[#FFFFFF] border-[#E0E0DC] shadow-soft-xs' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_DATA.personal.roles;

  useEffect(() => {
    const role = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(role.substring(0, currentText.length + 1));
        if (currentText === role) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setCurrentText(role.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-12 sm:pt-16 pb-20 sm:pb-24 flex items-center justify-center overflow-hidden bg-[#FAFAF8] bg-hero-grid"
    >
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* ── Left Column ────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Status badges */}
            <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#84CC16] to-[#65A30D] border border-[#65A30D]/40 text-[#0F172A] text-xs font-mono font-bold shadow-elevated-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] animate-pulse" />
                {PORTFOLIO_DATA.personal.availability}
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[#475569] text-xs font-sans font-semibold shadow-elevated-sm">
                <MapPin className="w-3.5 h-3.5 text-[#65A30D]" />
                {PORTFOLIO_DATA.personal.location}
              </div>
            </motion.div>

            {/* Name headline with Anton Agency Typography */}
            <motion.div {...fadeUp(0.08)} className="space-y-2">
              <p className="text-base sm:text-lg font-sans font-bold tracking-wide text-[#65A30D] flex items-center gap-2">
                <span>Hello, I am</span>
              </p>
              <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl xl:text-[90px] font-normal tracking-tight text-[#0F172A] leading-[1.02] break-words">
                <span>
                  <WordReveal text="MARIA BLESSY" animation="blur-slide" delay={0.1} stagger={0.08} />
                </span>
                <br />
                <span className="text-[#65A30D]">
                  <WordReveal text="R J" animation="scale" delay={0.25} />
                </span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div {...fadeUp(0.16)} className="flex items-center gap-2 min-h-[44px] flex-wrap">
              <span className="text-base sm:text-2xl font-sans font-bold text-[#0F172A] tracking-wide break-words">
                {currentText}
              </span>
              <span className="w-0.5 h-6 sm:h-7 bg-[#84CC16] animate-pulse rounded-full shrink-0" />
            </motion.div>

            {/* Bio */}
            <motion.div {...fadeUp(0.22)} className="font-sans text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <WordReveal text={PORTFOLIO_DATA.personal.about} animation="fade-up" delay={0.28} stagger={0.02} />
            </motion.div>

            {/* Animated Stat Chips */}
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3">
              {statItems.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold ${s.color} hover:border-[#84CC16] transition-all card-lift shadow-elevated-sm shrink-0 whitespace-nowrap`}
                >
                  {s.icon}
                  <AnimatedCounter value={s.numericValue} suffix={s.suffix} className="text-base font-display text-[#0F172A]" />
                  <span className="font-sans font-medium text-[#475569]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.34)} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#0F172A] text-[#FAFAF8] font-sans font-bold text-xs tracking-wider uppercase shadow-elevated-md hover:bg-[#84CC16] hover:text-[#0F172A] hover:scale-[1.01] active:scale-[0.98] transition-all btn-ripple"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] font-sans font-bold text-xs tracking-wider uppercase hover:border-[#84CC16] hover:bg-[#F0F0EC] transition-all shadow-elevated-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#65A30D]" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#84CC16] hover:border-[#65A30D] font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-elevated-sm hover:shadow-elevated-md card-lift"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social strip */}
            <motion.div
              {...fadeUp(0.40)}
              className="flex items-center gap-4 pt-5 border-t border-[#E2E8F0] text-[#475569] text-xs font-medium"
            >
              <span className="tracking-[0.2em] font-mono text-[#65A30D] uppercase text-[10px] font-bold">CONNECT</span>
              <div className="flex items-center gap-3">
                {[
                  { href: PORTFOLIO_DATA.personal.githubUrl, icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                  { href: PORTFOLIO_DATA.personal.linkedinUrl, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                  { href: `mailto:${PORTFOLIO_DATA.personal.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#84CC16] hover:border-[#65A30D] transition-all shadow-elevated-sm"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Light Profile Card ─────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Card shadow glow */}
              <div className="absolute -inset-2 rounded-3xl bg-[#84CC16]/20 blur-2xl pointer-events-none" />

              {/* Pure White Card Container */}
              <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-elevated-lg p-7 overflow-hidden">

                {/* Header line */}
                <div className="flex items-center justify-between pb-3.5 mb-6 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#84CC16]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#65A30D] tracking-wider uppercase font-bold">MARIA_BLESSY.PY</span>
                </div>

                {/* Avatar & Profile */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-2xl bg-[#0F172A] p-0.5 shadow-elevated-md">
                      <div className="w-full h-full rounded-[14px] bg-[#FAFAF8] flex items-center justify-center text-[#0F172A]">
                        <Terminal className="w-10 h-10 text-[#65A30D]" />
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#84CC16] border-2 border-[#FFFFFF] flex items-center justify-center text-[#0F172A] shadow-elevated-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F172A]" />
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-normal text-[#0F172A]">{PORTFOLIO_DATA.personal.name}</h3>
                  <p className="text-xs font-sans font-semibold text-[#475569] mt-0.5 tracking-wide">{PORTFOLIO_DATA.personal.headline}</p>
                  <p className="text-[11px] text-[#65A30D] font-mono mt-1 font-semibold">{PORTFOLIO_DATA.education.institution}</p>
                </div>

                {/* Core stack */}
                <div className="space-y-3 mb-6">
                  <div className="text-[10px] font-mono font-bold text-[#475569] uppercase tracking-[0.2em]">Core Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: <Code2 className="w-3.5 h-3.5 text-[#65A30D]" />, name: 'Python' },
                      { icon: <Database className="w-3.5 h-3.5 text-[#65A30D]" />, name: 'PostgreSQL' },
                      { icon: <Brain className="w-3.5 h-3.5 text-[#65A30D]" />, name: 'Scikit-learn' },
                      { icon: <Sparkles className="w-3.5 h-3.5 text-[#65A30D]" />, name: 'Zoho Deluge' },
                    ].map(({ icon, name }) => (
                      <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F0F0EC] border border-[#E2E8F0] text-[#0F172A] font-mono text-[11px] font-semibold">
                        {icon} {name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialization badge */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] flex items-center justify-between gap-3 shadow-elevated-sm">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.2em]">Specialization</div>
                    <div className="font-display text-lg sm:text-xl font-normal text-[#0F172A] mt-0.5 leading-tight">Data & AI Engineering</div>
                    <div className="text-[10px] text-[#475569] font-sans mt-0.5 font-medium">Predictive Models & SQL Schemas</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#84CC16] border border-[#65A30D] text-[#0F172A] flex items-center justify-center shrink-0 shadow-elevated-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#0F172A]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
