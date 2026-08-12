'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: 'blue' | 'purple' | 'emerald';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  tilt = true,
  glowColor = 'blue',
}) => {
  const glowShadow =
    glowColor === 'purple'
      ? 'hover:shadow-glow-purple'
      : glowColor === 'emerald'
      ? 'hover:shadow-glow-emerald'
      : 'hover:shadow-glow-blue';

  return (
    <div
      className={`glass-panel glass-panel-hover rounded-2xl p-6 ${glowShadow} ${className}`}
    >
      {children}
    </div>
  );
};
