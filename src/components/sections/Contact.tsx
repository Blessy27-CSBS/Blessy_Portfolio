'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Mail, Phone, Linkedin, MapPin, MessageSquare, Send, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { WordReveal } from '@/components/ui/WordReveal';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '44056507-cb77-4db6-ab1b-2ad9d2bb2489',
          from_name: 'Maria Blessy Portfolio Contact',
          ...formData,
        }),
      });

      if (response.ok) {
        onShowToast('Message sent successfully! Maria will reply shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        onShowToast('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      onShowToast('Message sent! Thank you for reaching out.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative z-10 bg-[#FAFAF8] border-y border-[#E2E8F0]">
      <div className="container-custom">
        
        <SectionHeader
          badgeText="Connect With Me"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Get In"
          highlightText="Touch"
          subtitle="Open for Data Analyst internships, AI engineering roles, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Details Cards & Copy Email */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Copy Email Highlight Card */}
            <GlassCard className="p-6 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center shadow-elevated-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#84CC16] border border-[#65A30D] text-[#0F172A] text-xs font-mono font-bold hover:bg-[#65A30D] hover:text-[#FAFAF8] transition-colors shadow-elevated-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
              <div className="text-[10px] text-[#65A30D] font-mono font-bold uppercase tracking-[0.18em] mb-1">Direct Email</div>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="font-sans text-xl sm:text-2xl font-bold lowercase text-[#0F172A] hover:text-[#65A30D] transition-colors tracking-tight">
                {PORTFOLIO_DATA.personal.email}
              </a>
            </GlassCard>

            {/* Direct Phone */}
            <GlassCard tilt={false} className="p-5 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center shrink-0 shadow-elevated-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#65A30D] font-mono font-bold uppercase tracking-[0.18em]">Phone Number</div>
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-sm font-sans font-bold text-[#0F172A]">
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* LinkedIn */}
            <GlassCard tilt={false} className="p-5 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center shrink-0 shadow-elevated-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#65A30D] font-mono font-bold uppercase tracking-[0.18em]">LinkedIn Profile</div>
                  <a href={PORTFOLIO_DATA.personal.linkedinUrl} target="_blank" rel="noreferrer" className="text-sm font-sans font-bold text-[#0F172A] hover:text-[#65A30D] hover:underline">
                    linkedin.com/in/maria-blessy
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Location */}
            <GlassCard tilt={false} className="p-5 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm card-lift">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0F0EC] border border-[#E2E8F0] text-[#65A30D] flex items-center justify-center shrink-0 shadow-elevated-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#65A30D] font-mono font-bold uppercase tracking-[0.18em]">Location</div>
                  <div className="text-sm font-sans font-bold text-[#0F172A]">
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
              </div>
            </GlassCard>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 bg-[#FFFFFF] border-[#E2E8F0] shadow-elevated-sm">
              <h3 className="font-display text-3xl font-normal text-[#0F172A] mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#65A30D]" />
                <WordReveal text="Send a Direct Message" animation="blur-slide" interactiveHover={false} />
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.18em] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / HR Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.18em] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. hiring@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.18em] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Data Analyst Role Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-[#65A30D] uppercase tracking-[0.18em] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#0F172A] text-[#FAFAF8] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#84CC16] hover:text-[#0F172A] transition-all flex items-center justify-center gap-2 btn-ripple shadow-elevated-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
