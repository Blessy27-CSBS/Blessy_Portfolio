'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const handleDownload = () => {
    onShowToast('Resume download initiated!');
    // Creates download link to resume pdf
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = 'Maria_Blessy_DataAnalyst_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-2xl rounded-2xl p-6 md:p-8 shadow-soft-lg border border-[#E0E0DC] bg-[#FAFAF8] max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E0E0DC]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] border border-[#E0E0DC] text-[#65A30D] flex items-center justify-center shadow-soft-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-normal text-[#1A1A1A]">Curriculum Vitae Preview</h3>
                  <p className="text-xs text-[#6B6B6B] font-sans font-normal">Maria Blessy R J &mdash; Data Analyst & AI Engineer</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#F4F4F0] text-[#6B6B6B] hover:text-[#1A1A1A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Summary Grid */}
            <div className="space-y-6 mb-8 text-xs text-[#6B6B6B]">
              
              {/* Summary */}
              <div>
                <h4 className="font-mono font-semibold text-[#65A30D] uppercase tracking-[0.18em] mb-2 flex items-center gap-1.5 text-[10px]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#65A30D]" /> Executive Summary
                </h4>
                <p className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E0E0DC] font-sans leading-relaxed text-[#1A1A1A] shadow-soft-xs">
                  Third-year B.Tech CSBS student (2024&ndash;2028) at KGiSL Institute of Technology. Experienced in exploratory data analysis (EDA), predictive ML modeling (Random Forest, Gradient Boosting, SMOTE), PostgreSQL relational schema triggers across 11 production tables, and building AI extensions (GLM-4.7 Flash AI) during internships at Zoho Corporation and NCSP India.
                </p>
              </div>

              {/* Internships Summary */}
              <div>
                <h4 className="font-mono font-semibold text-[#65A30D] uppercase tracking-[0.18em] mb-2 flex items-center gap-1.5 text-[10px]">
                  <Briefcase className="w-3.5 h-3.5 text-[#65A30D]" /> Internships Highlights
                </h4>
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E0E0DC] shadow-soft-xs">
                    <div className="font-display text-xl font-normal text-[#1A1A1A]">Software Engineering Intern &mdash; Zoho Corporation (July 2026)</div>
                    <div className="text-[#6B6B6B] font-sans mt-1">Built AI Promise Tracker (GLM-4.7 Flash AI) and custom CRM widgets using Deluge scripting & REST APIs.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E0E0DC] shadow-soft-xs">
                    <div className="font-display text-xl font-normal text-[#1A1A1A]">Software Engineering Intern &mdash; NCSP India (June 2026)</div>
                    <div className="text-[#6B6B6B] font-sans mt-1">PostgreSQL schema triggers across 11 relational tables & 19-slide technical review.</div>
                  </div>
                </div>
              </div>

              {/* Skills & Problem Solving */}
              <div>
                <h4 className="font-mono font-semibold text-[#65A30D] uppercase tracking-[0.18em] mb-2 flex items-center gap-1.5 text-[10px]">
                  <Award className="w-3.5 h-3.5 text-[#65A30D]" /> Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#F4F4F0] text-[#1A1A1A] font-mono text-[11px] border border-[#E0E0DC]">Python & Scikit-learn</span>
                  <span className="px-3 py-1 rounded-md bg-[#F4F4F0] text-[#1A1A1A] font-mono text-[11px] border border-[#E0E0DC]">PostgreSQL & Triggers</span>
                  <span className="px-3 py-1 rounded-md bg-[#F4F4F0] text-[#1A1A1A] font-mono text-[11px] border border-[#E0E0DC]">Zoho Deluge & ZET CLI</span>
                  <span className="px-3 py-1 rounded-md bg-[#F4F4F0] text-[#1A1A1A] font-mono text-[11px] border border-[#E0E0DC]">RAG Architecture</span>
                  <span className="px-3 py-1 rounded-md bg-[#F4F4F0] text-[#1A1A1A] font-mono text-[11px] border border-[#E0E0DC]">25+ DSA Problems</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E0E0DC]">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-[#F4F4F0] text-[#1A1A1A] hover:bg-[#84CC16] font-sans text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft-xs"
              >
                Close Preview
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1A1A1A] text-[#FAFAF8] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#84CC16] hover:text-[#1A1A1A] transition-all shadow-soft-xs btn-ripple"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
