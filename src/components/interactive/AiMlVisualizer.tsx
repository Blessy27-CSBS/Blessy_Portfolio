'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, Database, Sparkles, RotateCcw } from 'lucide-react';

export const AiMlVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'neural' | 'ml' | 'analytics'>('neural');
  const [epoch, setEpoch] = useState(1);
  const [accuracy, setAccuracy] = useState(72.4);
  const [isTraining, setIsTraining] = useState(true);

  // Live ML Training Simulation
  useEffect(() => {
    let interval: any;
    if (isTraining && activeTab === 'ml') {
      interval = setInterval(() => {
        setEpoch((prev) => {
          if (prev >= 100) {
            setIsTraining(false);
            return 100;
          }
          return prev + 1;
        });
        setAccuracy((prev) => (prev >= 98.6 ? 98.6 : prev + Math.random() * 0.45));
      }, 80);
    }
    return () => clearInterval(interval);
  }, [isTraining, activeTab]);

  const restartTraining = () => {
    setEpoch(1);
    setAccuracy(72.4);
    setIsTraining(true);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0F172A] text-[#F8FAFC] border border-[#1E293B] shadow-elevated-lg overflow-hidden p-6 md:p-8 my-10">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1E293B]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#84CC16] text-[#0F172A] flex items-center justify-center font-bold shadow-elevated-sm shrink-0">
            <Sparkles className="w-5 h-5 text-[#0F172A]" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-normal text-[#FAFAF8] tracking-tight">
              Interactive AI & ML Model Simulation
            </h3>
            <p className="text-xs text-[#94A3B8] font-sans font-medium">
              Live visualization of neural node signals, ML training curves & PostgreSQL telemetry
            </p>
          </div>
        </div>

        {/* Tab Switchers */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#1E293B] border border-[#334155]">
          {[
            { id: 'neural', label: 'Neural Network', icon: <Brain className="w-3.5 h-3.5" /> },
            { id: 'ml', label: 'ML Training Pipeline', icon: <Activity className="w-3.5 h-3.5" /> },
            { id: 'analytics', label: 'Data Telemetry', icon: <Database className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#84CC16] text-[#0F172A] shadow-elevated-sm'
                  : 'text-[#94A3B8] hover:text-[#FAFAF8]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Display Panel */}
      <div className="py-6 min-h-[260px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* TAB 1: NEURAL NETWORK & AI MULTI-AGENTS */}
          {activeTab === 'neural' && (
            <motion.div
              key="neural"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full space-y-6"
            >
              <div className="relative h-48 w-full bg-[#090D16] rounded-xl border border-[#1E293B] overflow-hidden flex items-center justify-between px-8 sm:px-16">
                {/* Background Network Beams */}
                <div className="absolute inset-0 bg-[radial-gradient(#84CC16_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                {/* Input Layer */}
                <div className="flex flex-col gap-4 z-10">
                  <span className="text-[10px] font-mono font-bold text-[#84CC16] uppercase text-center">Input Signals</span>
                  {[1, 2, 3].map((node) => (
                    <motion.div
                      key={node}
                      animate={{ scale: [1, 1.2, 1], borderColor: ['#334155', '#84CC16', '#334155'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: node * 0.4 }}
                      className="w-8 h-8 rounded-full bg-[#1E293B] border border-[#84CC16] flex items-center justify-center text-[10px] font-mono font-bold text-[#84CC16] shadow-elevated-sm"
                    >
                      X{node}
                    </motion.div>
                  ))}
                </div>

                {/* Connecting Pulse Beams */}
                <div className="flex-1 px-4 relative h-full flex items-center justify-center">
                  <motion.div
                    animate={{ x: ['-40%', '40%'], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-24 h-0.5 bg-gradient-to-r from-[#84CC16] via-[#38BDF8] to-[#84CC16] shadow-[0_0_12px_#84CC16]"
                  />
                </div>

                {/* Hidden LLM Neural Layer */}
                <div className="flex flex-col gap-3 z-10">
                  <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase text-center">GLM / Gemini Agent Layer</span>
                  {[1, 2, 3, 4].map((node) => (
                    <motion.div
                      key={node}
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(56, 189, 248, 0)',
                          '0 0 16px rgba(56, 189, 248, 0.6)',
                          '0 0 0px rgba(56, 189, 248, 0)',
                        ],
                      }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: node * 0.3 }}
                      className="w-7 h-7 rounded-full bg-[#0F172A] border border-[#38BDF8] flex items-center justify-center text-[9px] font-mono font-bold text-[#38BDF8]"
                    >
                      H{node}
                    </motion.div>
                  ))}
                </div>

                {/* Connecting Pulse Beams */}
                <div className="flex-1 px-4 relative h-full flex items-center justify-center">
                  <motion.div
                    animate={{ x: ['-40%', '40%'], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    className="w-24 h-0.5 bg-gradient-to-r from-[#38BDF8] via-[#84CC16] to-[#38BDF8] shadow-[0_0_12px_#38BDF8]"
                  />
                </div>

                {/* Output Prediction Layer */}
                <div className="flex flex-col gap-4 z-10">
                  <span className="text-[10px] font-mono font-bold text-[#84CC16] uppercase text-center">Prediction</span>
                  {[1, 2].map((node) => (
                    <motion.div
                      key={node}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: node * 0.5 }}
                      className="w-9 h-9 rounded-xl bg-[#84CC16] text-[#0F172A] flex items-center justify-center text-[11px] font-mono font-bold shadow-elevated-sm"
                    >
                      Y{node}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Status footer strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-ping" />
                  Multi-Agent Vector Embeddings: <strong className="text-[#FAFAF8]">Active (Zero Hallucination)</strong>
                </span>
                <span className="text-[#84CC16] font-bold">Latency: 14ms &bull; GPU Acceleration: Enabled</span>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ML TRAINING PIPELINE */}
          {activeTab === 'ml' && (
            <motion.div
              key="ml"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Metric 1 */}
                <div className="p-4 rounded-xl bg-[#090D16] border border-[#1E293B]">
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase font-bold">Current Epoch</div>
                  <div className="font-display text-4xl font-normal text-[#FAFAF8] mt-1">{epoch}/100</div>
                  <div className="w-full bg-[#1E293B] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#84CC16] h-full transition-all duration-150" style={{ width: `${epoch}%` }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl bg-[#090D16] border border-[#1E293B]">
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase font-bold">Model ROC-AUC Score</div>
                  <div className="font-display text-4xl font-normal text-[#84CC16] mt-1">{accuracy.toFixed(1)}%</div>
                  <div className="text-[11px] font-sans text-[#94A3B8] mt-2">SMOTE Class Balanced</div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-xl bg-[#090D16] border border-[#1E293B] flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase font-bold">Algorithm</div>
                  <div className="font-sans font-bold text-[#FAFAF8] text-base">Random Forest & Gradient Boosting</div>
                  <button
                    onClick={restartTraining}
                    className="mt-2 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#84CC16] text-[#0F172A] text-xs font-mono font-bold hover:bg-[#65A30D] hover:text-[#FAFAF8] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Re-run Pipeline</span>
                  </button>
                </div>
              </div>

              {/* Feature Importance Bars */}
              <div className="p-4 rounded-xl bg-[#090D16] border border-[#1E293B] space-y-3">
                <div className="text-[11px] font-mono font-bold text-[#84CC16] uppercase">Top Derived Feature Importances</div>
                {[
                  { name: 'Customer Tenure & Overtime', val: 94 },
                  { name: 'Monthly Rate & Distance', val: 86 },
                  { name: 'Stock Option Level', val: 78 },
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono text-[#FAFAF8]">
                      <span>{item.name}</span>
                      <span>{item.val}%</span>
                    </div>
                    <div className="w-full bg-[#1E293B] h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="bg-gradient-to-r from-[#84CC16] to-[#38BDF8] h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: DATA ANALYTICS TELEMETRY */}
          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full space-y-4"
            >
              <div className="p-5 rounded-xl bg-[#090D16] border border-[#1E293B] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#84CC16] font-bold">PostgreSQL Database Schema Telemetry</span>
                  <span className="text-[#94A3B8]">11 Production Warehouse Tables</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {[
                    { label: 'Relational Joins', val: 'Indexed' },
                    { label: 'Trigger Rules', val: 'Enforced' },
                    { label: 'Supply Chain ASN', val: 'Synced' },
                    { label: 'Query Performance', val: '< 2.4ms' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#0F172A] border border-[#1E293B]">
                      <div className="text-[10px] font-mono text-[#94A3B8] uppercase">{stat.label}</div>
                      <div className="font-mono text-sm font-bold text-[#84CC16] mt-1">{stat.val}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-[#0F172A] border border-[#1E293B] font-mono text-xs text-[#38BDF8] overflow-x-auto">
                  <code>SELECT id, asn_number, inventory_status FROM warehouse_inventory WHERE status = 'VERIFIED';</code>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
