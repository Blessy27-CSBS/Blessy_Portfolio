'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Github, Star, GitFork, ExternalLink, Code2, Flame, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const GithubSection: React.FC = () => {
  const gh = PORTFOLIO_DATA.github;

  return (
    <section id="github" className="section-padding relative z-10 bg-[#FAFAF8] border-y border-[#E2E8F0]">
      <div className="container-custom">
        
        <SectionHeader
          badgeText="Open Source & Code Activity"
          badgeIcon={<Github className="w-3.5 h-3.5" />}
          title="GitHub"
          highlightText="Analytics"
          subtitle="Real-time repository highlights, open-source activity, and primary languages."
        />

        {/* GitHub Analytics Summary Cards (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 items-stretch">
          <GlassCard tilt={false} className="text-center p-6 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
            <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center mx-auto mb-3 shadow-elevated-sm">
              <Github className="w-5 h-5" />
            </div>
            <div className="font-display text-4xl font-normal text-[#0F172A] mb-1">{gh.publicRepos}</div>
            <div className="text-[11px] font-mono font-bold text-[#475569] uppercase tracking-[0.18em]">Public Repositories</div>
          </GlassCard>

          <GlassCard tilt={false} className="text-center p-6 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
            <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center mx-auto mb-3 shadow-elevated-sm">
              <Flame className="w-5 h-5" />
            </div>
            <div className="font-display text-4xl font-normal text-[#0F172A] mb-1">100+</div>
            <div className="text-[11px] font-mono font-bold text-[#475569] uppercase tracking-[0.18em]">Contributions This Year</div>
          </GlassCard>

          <GlassCard tilt={false} className="text-center p-6 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
            <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center mx-auto mb-3 shadow-elevated-sm">
              <Users className="w-5 h-5" />
            </div>
            <div className="font-display text-4xl font-normal text-[#0F172A] mb-1">{gh.followers}</div>
            <div className="text-[11px] font-mono font-bold text-[#475569] uppercase tracking-[0.18em]">Followers</div>
          </GlassCard>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#0F172A] mb-6 flex flex-wrap items-center gap-2">
            <Code2 className="w-5 h-5 text-[#65A30D] shrink-0" />
            <span className="break-words">Pinned Repositories (@{gh.username})</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gh.pinnedRepos.map((repo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <GlassCard className="p-5 sm:p-6 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm hover:border-[#84CC16] h-full flex flex-col justify-between card-lift">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-lg sm:text-xl md:text-2xl font-normal text-[#0F172A] hover:text-[#65A30D] transition-colors flex items-start gap-2 min-w-0 flex-1"
                      >
                        <Github className="w-4 h-4 text-[#65A30D] shrink-0 mt-1" />
                        <span className="break-all [overflow-wrap:anywhere] leading-snug">{repo.name}</span>
                      </a>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#F0F0EC] text-[#0F172A] font-mono text-[11px] font-semibold border border-[#E2E8F0] shrink-0 self-start">
                        {repo.language}
                      </span>
                    </div>
                    <p className="font-sans text-[#475569] text-xs leading-relaxed mb-4 font-normal">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0] text-xs text-[#475569] font-mono">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 font-semibold">
                        <Star className="w-3.5 h-3.5 text-[#65A30D]" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <GitFork className="w-3.5 h-3.5 text-[#475569]" /> {repo.forks}
                      </span>
                    </div>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0F172A] hover:text-[#65A30D] flex items-center gap-1 text-[11px] font-sans font-bold shrink-0"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA to GitHub */}
        <div className="text-center">
          <a
            href={gh.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F172A] text-[#FAFAF8] text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#84CC16] hover:text-[#0F172A] transition-all shadow-elevated-md btn-ripple"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{gh.username} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
