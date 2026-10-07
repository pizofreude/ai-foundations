import React, { useState } from 'react';
import { X, ExternalLink, ArrowRight, Sparkles, Building2, Terminal, GraduationCap } from 'lucide-react';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'school'>('school');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-rise"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-inter text-[#6F6F6F]">
              <span>Cohort 2026</span>
              <span aria-hidden="true">·</span>
              <span>KrackedDevs × Xsolla Curine Academy</span>
            </div>
            <h2
              id="modal-title"
              className="text-2xl sm:text-3xl font-instrument text-[#000000] mt-1"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              AI Foundations 101: Vibe Coding Journey
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6F6F6F] hover:text-[#000000] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-black/5 px-8 bg-neutral-50/50">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-medium font-inter transition-all border-b-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-[#6F6F6F] hover:text-black'
            }`}
          >
            Overview &amp; Philosophy
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`py-3.5 px-4 text-xs font-medium font-inter transition-all border-b-2 cursor-pointer ${
              activeTab === 'syllabus'
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-[#6F6F6F] hover:text-black'
            }`}
          >
            1.5-Hour Intensive Syllabus
          </button>
          <button
            onClick={() => setActiveTab('school')}
            className={`py-3.5 px-4 text-xs font-medium font-inter transition-all border-b-2 cursor-pointer ${
              activeTab === 'school'
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-[#6F6F6F] hover:text-black'
            }`}
          >
            Join AI Builder School
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto px-8 py-6 font-inter space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="prose prose-sm text-[#6F6F6F] leading-relaxed">
                <p className="text-base text-[#000000]">
                  Vibe coding is not about mindless copy-pasting—it is the fine art of architecting
                  systems through taste, high-bandwidth communication with AI models, and rapid iterative intuition.
                </p>
                <p>
                  Selangor Youth Community (SAY), MyDIGITAL, and KrackedDevs have come together to incubate the next generation of builders across Selangor and Malaysia. We remove the gatekeeping of boilerplate syntax so you can translate your creative vision into deployed software at thought speed.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black font-serif">
                    01
                  </div>
                  <h3 className="font-semibold text-sm text-black">Pure Flow States</h3>
                  <p className="text-xs text-[#6F6F6F] leading-normal">
                    Learn to enter deep flow where code writing transforms into interactive product directing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black font-serif">
                    02
                  </div>
                  <h3 className="font-semibold text-sm text-black">Taste &amp; Architecture</h3>
                  <p className="text-xs text-[#6F6F6F] leading-normal">
                    AI writes functions; humans provide discerning aesthetic taste, system security, and UX empathy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black font-serif">
                    03
                  </div>
                  <h3 className="font-semibold text-sm text-black">National Impact</h3>
                  <p className="text-xs text-[#6F6F6F] leading-normal">
                    Backed by SAY, MyDIGITAL &amp; KD, bridging young Malaysian talent directly into the regional digital economy.
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setActiveTab('school')}
                  className="rounded-full px-6 py-2.5 bg-black text-white text-xs font-medium hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Explore AI Builder School →
                </button>
              </div>
            </div>
          )}

          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
                <span className="text-[11px] font-medium text-black uppercase tracking-wider">Part 01 · 05 Mins</span>
                <h3 className="text-base font-semibold text-black mt-1">Foundations of Vibe Directing</h3>
                <p className="text-xs text-[#6F6F6F] mt-1">
                  The paradigm shift: becoming an AI conductor. Prompt ergonomics, high-dimensional context steering, and eliminating mechanical syntax boilerplate.
                </p>
              </div>

              <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
                <span className="text-[11px] font-medium text-black uppercase tracking-wider">Part 02 · 60 Mins</span>
                <h3 className="text-base font-semibold text-black mt-1">
                  <a
                    href="https://krackeddevs.com/sandbox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1.5 group"
                  >
                    <span>Live Vibe Coding: Ideate, Get Your Build Prompt &amp; Build and Publish</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                  </a>
                </h3>
                <p className="text-xs text-[#6F6F6F] mt-1">
                  Pick an idea, let the coach write the build prompt, and watch an AI app builder turn it into something you can share. No setup, no code editor.
                </p>
              </div>

              <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50">
                <span className="text-[11px] font-medium text-black uppercase tracking-wider">Part 03 · 25 Mins</span>
                <h3 className="text-base font-semibold text-black mt-1">
                  <span>Project Deployment &amp; Submission to </span>
                  <a
                    href="https://krackeddevs.com/showcase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1 text-black font-semibold"
                  >
                    <span>KD Showcase</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 hover:text-black transition-colors" />
                  </a>
                </h3>
                <p className="text-xs text-[#6F6F6F] mt-1">
                  Live cloud shipping, Q&amp;A with builders, and next steps for joining AI Builder School programs in Kuala Lumpur.
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveTab('school')}
                  className="rounded-full px-6 py-2.5 bg-black text-white text-xs font-medium hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Join AI Builder School →
                </button>
              </div>
            </div>
          )}

          {activeTab === 'school' && (
            <div className="space-y-8 animate-fade-rise">
              {/* Brochure Hero */}
              <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-black/20">
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-medium text-neutral-300">
                      <span>KrackedDevs × Xsolla Curine Academy initiative</span>
                    </div>
                    <span className="text-xs text-neutral-400">Kuala Lumpur, Malaysia</span>
                  </div>

                  <h3
                    className="font-instrument text-3xl sm:text-4xl text-white tracking-tight leading-tight mt-1"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    The Home of Malaysia&apos;s Future Builders
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed max-w-xl">
                    The future of Malaysian technology is in the hands of a new generation of AI builders. Come learn, build and innovate with us.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href="https://theaibuilder.school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-black font-semibold text-xs hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer group"
                    >
                      <span>Visit theaibuilder.school</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <span className="text-xs text-neutral-400">
                      Applications open now for upcoming cohorts
                    </span>
                  </div>
                </div>

                {/* Subtle graphic accent */}
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Three Spaces Section */}
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    01 The School Map
                  </span>
                  <h4
                    className="text-2xl font-instrument text-black tracking-tight mt-0.5"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Three spaces. Find yours.
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Space 1 */}
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between hover:border-black/30 transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-medium text-neutral-400">01</span>
                        <Terminal className="w-4 h-4 text-neutral-700" />
                      </div>
                      <h5 className="font-semibold text-base text-black mt-2">Kracked Labs</h5>
                      <p className="text-xs text-[#6F6F6F] mt-2 leading-relaxed">
                        The Builders Sandbox. A home for founders, entrepreneurs and builders to build, share and experiment.
                      </p>
                    </div>
                  </div>

                  {/* Space 2 */}
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between hover:border-black/30 transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-medium text-neutral-400">02</span>
                        <GraduationCap className="w-4 h-4 text-neutral-700" />
                      </div>
                      <h5 className="font-semibold text-base text-black mt-2">AI Classes</h5>
                      <p className="text-xs text-[#6F6F6F] mt-2 leading-relaxed">
                        Guided lessons. Real challenges. A repeatable way to build with AI.
                      </p>
                    </div>
                  </div>

                  {/* Space 3 */}
                  <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between hover:border-black/30 transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-medium text-neutral-400">03</span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 bg-neutral-200 text-neutral-700 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                      <h5 className="font-semibold text-base text-black mt-2">The Cave</h5>
                      <p className="text-xs text-[#6F6F6F] mt-2 leading-relaxed">
                        Our upcoming auditorium for builder demos, talks and showcases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Vision Section */}
              <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/50 flex flex-col sm:flex-row gap-6 items-start justify-between">
                <div className="sm:max-w-xs">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Our Vision
                  </span>
                  <h4
                    className="text-2xl font-instrument text-black leading-tight mt-1"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    More Malaysians building with AI.
                  </h4>
                </div>
                <div className="space-y-3 text-xs text-[#6F6F6F] flex-1">
                  <p className="leading-relaxed">
                    People from every background turning local problems into useful solutions — for their homes, communities, workplaces and the nation.
                  </p>
                  <p className="text-black font-semibold">
                    100,000 capable AI builders. Our long-term ambition, starting in Malaysia.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://theaibuilder.school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-black hover:underline"
                    >
                      <span>Explore our vision &amp; mission</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Direct CTA */}
              <div className="p-6 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-white">
                    Ready to build with Malaysia&apos;s finest?
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Visit the official AI Builder School portal to apply and claim your spot.
                  </p>
                </div>
                <a
                  href="https://theaibuilder.school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-7 py-3 bg-white text-black font-semibold text-xs hover:scale-105 active:scale-95 transition-all shadow-md whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Join AI Builder School</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

