'use client';

import React, { useState } from 'react';
import { FloatingBlobs } from '@/components/interactive/FloatingBlobs';
import { CustomCursor } from '@/components/interactive/CustomCursor';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

import { InternshipRoadmap } from '@/components/sections/InternshipRoadmap';
import { Projects } from '@/components/sections/Projects';
import { GithubSection } from '@/components/sections/GithubSection';
import { Skills } from '@/components/sections/Skills';

import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { TerminalModal } from '@/components/interactive/TerminalModal';
import { ProjectModal } from '@/components/interactive/ProjectModal';
import { ResumeModal } from '@/components/interactive/ResumeModal';
import { Toast } from '@/components/ui/Toast';
import { Project } from '@/data/portfolioData';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main className="relative min-h-screen bg-[#FAFAF8] text-[#0F172A] overflow-x-hidden w-full">
      {/* Background Interactive Particle Network Canvas & CSS Blobs */}
      <FloatingBlobs />

      {/* Micro-Interaction Trailing Mouse Cursor */}
      <CustomCursor />

      {/* Full-Width Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Page Sections */}
      <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
      <About />

      <InternshipRoadmap />
      <Projects onSelectProject={(p) => setSelectedProject(p)} />
      <GithubSection />
      <Skills />

      <Certifications />
      <Education />
      <Contact onShowToast={showToast} />
      <Footer />

      {/* Interactive Command & CLI Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Dynamic Toast Alert Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </main>
  );
}
