'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-2xl rounded-2xl p-6 md:p-8 shadow-soft-lg border border-[#E0E0DC] bg-[#FAFAF8] overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header with badge & close button */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-[0.18em] bg-[#84CC16] text-[#1A1A1A] mb-2 border border-[#65A30D]">
                  {project.status} &bull; {project.category.toUpperCase()}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-normal text-[#1A1A1A]">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#F4F4F0] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-[10px] uppercase font-mono font-semibold text-[#65A30D] tracking-[0.2em] mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#65A30D]" /> Architectural Overview
              </h4>
              <p className="font-sans text-[#6B6B6B] text-sm leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Key Technical Features */}
            <div className="mb-6">
              <h4 className="text-[10px] uppercase font-mono font-semibold text-[#65A30D] tracking-[0.2em] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D]" /> Key Features & Engineering Metrics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFFFFF] border border-[#E0E0DC] text-xs font-sans text-[#1A1A1A] shadow-soft-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0 mt-0.5" />
                    <span className="font-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mb-8">
              <h4 className="text-[10px] uppercase font-mono font-semibold text-[#65A30D] tracking-[0.2em] mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#65A30D]" /> Applied Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#F4F4F0] text-[#1A1A1A] font-mono text-xs border border-[#E0E0DC]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#E0E0DC]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-[#FAFAF8] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#84CC16] hover:text-[#1A1A1A] transition-colors shadow-soft-xs btn-ripple"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F4F4F0] border border-[#E0E0DC] text-[#1A1A1A] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#84CC16] transition-colors shadow-soft-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
