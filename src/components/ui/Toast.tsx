'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#FFFFFF] shadow-soft-md border border-[#E0E0DC] text-[#1A1A1A] font-sans font-medium text-xs tracking-wide"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0" />
          )}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
