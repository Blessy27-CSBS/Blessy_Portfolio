'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, User, Briefcase, Code, Award, GraduationCap, Mail, Terminal, ArrowRight } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenTerminal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { label: 'About Maria Blessy', section: '#about', icon: User, category: 'Navigation' },
    { label: 'Experience & Internships', section: '#experience', icon: Briefcase, category: 'Navigation' },
    { label: 'Projects & ML Models', section: '#projects', icon: Code, category: 'Navigation' },
    { label: 'Technical Skills', section: '#skills', icon: Code, category: 'Navigation' },
    { label: 'GitHub Repositories & Stats', section: '#github', icon: Code, category: 'Navigation' },
    { label: 'Certifications', section: '#certifications', icon: Award, category: 'Navigation' },
    { label: 'Education', section: '#education', icon: GraduationCap, category: 'Navigation' },
    { label: 'Contact Me', section: '#contact', icon: Mail, category: 'Navigation' },
    { label: 'Open CLI Terminal', action: () => { onOpenTerminal(); onClose(); }, icon: Terminal, category: 'Tools' },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: (typeof items)[0]) => {
    if (item.action) {
      item.action();
    } else if (item.section) {
      onClose();
      const el = document.querySelector(item.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#1A1A1A]/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl rounded-2xl shadow-soft-lg border border-[#E0E0DC] overflow-hidden bg-[#FAFAF8]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#E0E0DC]">
              <Search className="w-5 h-5 text-[#65A30D] mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search portfolio sections, skills, tools, CLI... (Ctrl + K)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none text-sm font-sans font-medium"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-[#F4F4F0] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#84CC16] hover:text-[#1A1A1A] text-left transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#F4F4F0] text-[#65A30D] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-[#84CC16] transition-colors shadow-soft-xs">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-sans font-medium text-[#1A1A1A]">
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#65A30D] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-[#6B6B6B] text-sm font-sans font-normal">
                  No matching section found for "{query}"
                </div>
              )}
            </div>

            {/* Footer indicator */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#F4F4F0] border-t border-[#E0E0DC] text-[11px] text-[#6B6B6B] font-sans">
              <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-[#FFFFFF] border border-[#E0E0DC] rounded font-mono text-[#65A30D]">ESC</kbd> to close</span>
              <span className="font-mono text-[#65A30D]">Maria Blessy Portfolio CLI</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
