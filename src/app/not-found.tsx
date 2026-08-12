'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Terminal } from 'lucide-react';
import { FloatingBlobs } from '@/components/interactive/FloatingBlobs';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white text-slate-900 px-4 overflow-hidden">
      <FloatingBlobs />
      
      <div className="relative z-10 text-center max-w-lg glass-panel rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 bg-white/90">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-6">
          <Terminal className="w-8 h-8" />
        </div>

        <h1 className="text-6xl font-extrabold text-gradient mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The analytical endpoint or portfolio route you requested does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-primary text-white font-bold text-sm shadow-glass hover:shadow-glow-blue transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio Home</span>
        </Link>
      </div>
    </main>
  );
}
