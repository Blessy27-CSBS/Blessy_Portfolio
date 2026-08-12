'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<Array<{ text: string; type?: 'cmd' | 'info' | 'error' | 'success' }>>([
    { text: 'Maria Blessy R J - Interactive CLI Terminal v3.0 [Python & Deluge Runtime]', type: 'info' },
    { text: 'Type "help" to view available commands.', type: 'info' },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, { text: `blessy@analytics:~$ ${input}`, type: 'cmd' as const }];

    switch (cmd) {
      case 'help':
        newLogs.push(
          { text: 'Available commands:', type: 'info' },
          { text: '  about        - View professional summary & education', type: 'info' },
          { text: '  skills       - Display technical stack & languages', type: 'info' },
          { text: '  projects     - List top machine learning & AI projects', type: 'info' },
          { text: '  experience   - Display Zoho Corp, NCSP & Codec Tech internships', type: 'info' },
          { text: '  contact      - Display email, phone & social profiles', type: 'info' },
          { text: '  github       - View GitHub metrics and pinned repos', type: 'info' },
          { text: '  clear        - Clear terminal history', type: 'info' },
          { text: '  exit         - Close CLI modal window', type: 'info' }
        );
        break;

      case 'about':
        newLogs.push(
          { text: `NAME: ${PORTFOLIO_DATA.personal.name}`, type: 'success' },
          { text: `TITLE: ${PORTFOLIO_DATA.personal.headline}`, type: 'info' },
          { text: `EDUCATION: ${PORTFOLIO_DATA.education.degree}`, type: 'info' },
          { text: `INSTITUTION: ${PORTFOLIO_DATA.education.institution} (${PORTFOLIO_DATA.education.duration})`, type: 'info' }
        );
        break;

      case 'skills':
        newLogs.push(
          { text: 'CORE SKILLSET:', type: 'success' },
          { text: '• Data & ML: Python, Scikit-Learn, Pandas, Random Forest, RAG, SMOTE', type: 'info' },
          { text: '• Databases: PostgreSQL, Multi-Table Schemas, Triggers & Joins', type: 'info' },
          { text: '• Tools: Zoho Deluge, ZET CLI, REST APIs, Git/GitHub, Jupyter', type: 'info' },
          { text: '• Problem Solving: 25+ DSA Problems (CodeChef, LeetCode, HackerRank)', type: 'info' }
        );
        break;

      case 'projects':
        PORTFOLIO_DATA.projects.slice(0, 4).forEach((p) => {
          newLogs.push({
            text: `[${p.status.toUpperCase()}] ${p.title} (${p.metrics || 'ML/AI'}) - ${p.description}`,
            type: 'info',
          });
        });
        break;

      case 'experience':
        PORTFOLIO_DATA.experiences.forEach((exp) => {
          newLogs.push({
            text: `${exp.role} @ ${exp.company} (${exp.duration})`,
            type: 'success',
          });
        });
        break;

      case 'contact':
        newLogs.push(
          { text: `EMAIL: ${PORTFOLIO_DATA.personal.email}`, type: 'success' },
          { text: `PHONE: ${PORTFOLIO_DATA.personal.phone}`, type: 'info' },
          { text: `GITHUB: ${PORTFOLIO_DATA.personal.githubUrl}`, type: 'info' },
          { text: `LINKEDIN: ${PORTFOLIO_DATA.personal.linkedinUrl}`, type: 'info' }
        );
        break;

      case 'github':
        newLogs.push(
          { text: `USER: ${PORTFOLIO_DATA.github.username}`, type: 'success' },
          { text: `PUBLIC REPOS: ${PORTFOLIO_DATA.github.publicRepos}`, type: 'info' },
          { text: `CONTRIBUTIONS: ${PORTFOLIO_DATA.github.contributionsThisYear} this year`, type: 'info' }
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        newLogs.push({
          text: `zsh: command not found: ${cmd}. Type "help" for a list of valid commands.`,
          type: 'error',
        });
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-[#FFFFFF] border border-[#E0E0DC] rounded-2xl shadow-soft-lg overflow-hidden font-mono text-xs text-[#1A1A1A]"
          >
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F4F4F0] border-b border-[#E0E0DC]">
              <div className="flex items-center gap-2">
                <div onClick={onClose} className="w-3 h-3 rounded-full bg-[#84CC16] cursor-pointer hover:opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#E0E0DC] cursor-pointer hover:opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#E0E0DC] cursor-pointer hover:opacity-80" />
                <span className="ml-2 text-[#6B6B6B] font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#65A30D]" />
                  Maria_Blessy_CLI ~ bash
                </span>
              </div>
              <button onClick={onClose} className="text-[#6B6B6B] hover:text-[#1A1A1A]">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body Output */}
            <div className="p-4 h-80 overflow-y-auto space-y-2 bg-[#FAFAF8]">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={
                    log.type === 'cmd'
                      ? 'text-[#65A30D] font-semibold'
                      : log.type === 'success'
                      ? 'text-[#1A1A1A] font-medium'
                      : log.type === 'error'
                      ? 'text-[#DC2626]'
                      : 'text-[#6B6B6B]'
                  }
                >
                  {log.text}
                </div>
              ))}
            </div>

            {/* Input Prompt Row */}
            <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-[#F4F4F0] border-t border-[#E0E0DC]">
              <span className="text-[#65A30D] font-mono font-semibold mr-2">blessy@analytics:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help'..."
                autoFocus
                className="flex-1 bg-transparent text-[#1A1A1A] focus:outline-none placeholder-[#6B6B6B] font-mono text-xs"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
