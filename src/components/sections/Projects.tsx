'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Code, Search, Github, ChevronRight, UserMinus, BarChart3, Bot, Handshake, Home, LineChart, Eye, HeartPulse, TrendingUp, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ml' | 'ai' | 'zoho'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserMinus':
        return <UserMinus className="w-5 h-5 text-[#65A30D]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#65A30D]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-[#65A30D]" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-[#65A30D]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#65A30D]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#65A30D]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#65A30D]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#65A30D]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#65A30D]" />;
      default:
        return <LineChart className="w-5 h-5 text-[#65A30D]" />;
    }
  };

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding relative z-10 bg-[#F0F0EC] border-y border-[#E2E8F0]">
      <div className="container-custom">
        
        <SectionHeader
          badgeText="Analytics & ML Portfolio"
          badgeIcon={<Code className="w-3.5 h-3.5" />}
          title="Featured"
          highlightText="Projects"
          subtitle="Data analysis, predictive machine learning models, and production AI extensions built end to end."
        />

        {/* Search & Filtering Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] w-full sm:w-auto shadow-elevated-sm">
            {[
              { id: 'all', label: `All Projects (${PORTFOLIO_DATA.projects.length})` },
              { id: 'ml', label: 'Machine Learning' },
              { id: 'ai', label: 'AI & RAG' },
              { id: 'zoho', label: 'Zoho Extensions' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-medium tracking-wide transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#84CC16] text-[#0F172A] font-bold border border-[#65A30D] shadow-elevated-sm'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#475569] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder-[#475569] focus:outline-none focus:border-[#84CC16] transition-all shadow-elevated-sm"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="h-full flex flex-col"
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm hover:border-[#84CC16] transition-all card-lift">
                  <div className="flex-1 flex flex-col">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] flex items-center justify-center shadow-elevated-sm">
                        {getProjectIcon(project.iconName)}
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#84CC16] text-[#0F172A] border border-[#65A30D]">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-normal text-[#0F172A] mb-2 break-words [overflow-wrap:anywhere]">
                      <WordReveal text={project.title} animation="blur-slide" interactiveHover={false} />
                    </h3>
                    <p className="font-sans text-[#475569] text-xs leading-relaxed mb-4 line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-[#F0F0EC] text-[#0F172A] font-mono text-[11px] font-semibold border border-[#E2E8F0]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between mt-auto">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1.5 text-xs font-sans font-bold text-[#0F172A] hover:text-[#65A30D] transition-colors group"
                    >
                      <span>View Technical Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#65A30D]" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg hover:bg-[#F0F0EC] text-[#475569] hover:text-[#0F172A] transition-colors"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-2xl p-8 border border-[#E2E8F0] shadow-elevated-sm">
            <p className="font-sans text-[#475569] text-sm">No projects found matching "{searchQuery}". Try searching for Python, SQL, or ML.</p>
          </div>
        )}

      </div>
    </section>
  );
};
