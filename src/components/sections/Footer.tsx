'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 bg-[#0F172A] text-[#F8FAFC] pt-16 pb-12 overflow-hidden border-t border-[#1E293B]">
      <div className="container-custom">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1E293B]">

          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-2 font-display text-2xl font-normal text-[#FAFAF8]">
              <span className="text-[#FAFAF8]">Blessy Analytics</span>
            </a>
            <p className="text-[#94A3B8] text-xs leading-relaxed font-sans font-medium">
              Third-year CSBS student at KGiSL Institute of Technology. Dedicated to data analysis, machine learning, and database engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] text-[#FAFAF8] text-[11px] font-mono font-medium border border-[#334155] shadow-elevated-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
              Available for Internships & AI Roles
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#84CC16] mb-5">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Certifications', href: '#certifications' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[#94A3B8] hover:text-[#84CC16] transition-colors font-medium">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#84CC16] mb-5">Featured Projects</h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {[
                'Customer Churn Prediction',
                'HR Attrition Pipeline',
                'CSV-Based RAG Chatbot',
                'AI Promise Tracker (Zoho)',
              ].map((p) => (
                <li key={p}>
                  <a href="#projects" className="text-[#94A3B8] hover:text-[#84CC16] transition-colors font-medium">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#84CC16] mb-5">Connect</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: PORTFOLIO_DATA.personal.githubUrl, icon: <Github className="w-4 h-4 text-[#84CC16]" />, label: 'GitHub Portfolio' },
                { href: PORTFOLIO_DATA.personal.linkedinUrl, icon: <Linkedin className="w-4 h-4 text-[#84CC16]" />, label: 'LinkedIn Profile' },
                { href: `mailto:${PORTFOLIO_DATA.personal.email}`, icon: <Mail className="w-4 h-4 text-[#84CC16]" />, label: 'Send Direct Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1E293B] hover:bg-[#84CC16] hover:text-[#0F172A] border border-[#334155] text-[#FAFAF8] text-xs font-sans font-semibold transition-all shadow-elevated-sm group"
                >
                  {icon}
                  <span className="group-hover:text-[#0F172A]">{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8] font-sans">
          <p>© 2026 Maria Blessy R J. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B] hover:bg-[#84CC16] hover:text-[#0F172A] border border-[#334155] text-[#FAFAF8] text-xs font-sans font-semibold transition-all shadow-elevated-sm btn-ripple group"
          >
            <span className="group-hover:text-[#0F172A]">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#84CC16] group-hover:text-[#0F172A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
