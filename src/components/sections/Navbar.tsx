'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-elevated-sm'
          : 'py-5 bg-[#FAFAF8]'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 font-display text-2xl font-normal tracking-tight text-[#0F172A] group select-none">
            <span className="tracking-tight text-[#0F172A] uppercase">BLESSY ANALYTICS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F0F0EC] border border-[#E2E8F0] shadow-glass-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
                    isActive ? 'text-[#0F172A] font-semibold' : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#84CC16] rounded-full border border-[#65A30D] shadow-soft-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F0F0EC] text-[#0F172A] hover:bg-[#E2E8F0] text-xs font-mono font-semibold transition-all border border-[#E2E8F0] shadow-glass-sm"
              title="Open Interactive CLI Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#65A30D]" />
              <span>CLI</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#0F172A] text-[#FAFAF8] hover:bg-[#84CC16] hover:text-[#0F172A] font-semibold text-xs tracking-wider uppercase transition-all shadow-elevated-sm btn-ripple"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 sm:hidden">
            <button onClick={onOpenTerminal} className="p-2 rounded-xl bg-[#0F172A] text-[#FAFAF8]" aria-label="Open CLI Terminal">
              <Terminal className="w-4 h-4 text-[#84CC16]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F0F0EC] text-[#0F172A] hover:bg-[#E2E8F0] transition-colors border border-[#E2E8F0]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="sm:hidden bg-[#FAFAF8] border-b border-[#E2E8F0] px-4 py-4 space-y-1 shadow-elevated-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-2.5 rounded-xl text-[#0F172A] hover:bg-[#F0F0EC] font-sans font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E2E8F0]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0F172A] text-[#FAFAF8] text-xs font-semibold uppercase tracking-wider text-center block"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
