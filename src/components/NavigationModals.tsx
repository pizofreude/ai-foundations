import React from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';

interface NavigationModalProps {
  activeModal: string | null;
  onClose: () => void;
}

export const NavigationModals: React.FC<NavigationModalProps> = ({
  activeModal,
  onClose,
}) => {
  if (!activeModal || activeModal === 'home') return null;

  const isContactModal = activeModal === 'reach-us';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-rise"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className={`relative w-full ${isContactModal ? 'max-w-2xl' : 'max-w-2xl'} bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden z-10 flex flex-col max-h-[88vh]`}>
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/5 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-inter text-[#6F6F6F]">
              <span>{isContactModal ? 'KD / CONTACT' : 'Made in Malaysia'}</span>
              <span aria-hidden="true">·</span>
              <span className="uppercase text-[11px] font-medium tracking-wider">
                {isContactModal ? 'LEARN. BUILD. SHIP.' : activeModal.replace('-', ' ')}
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-instrument text-[#000000] mt-1"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {activeModal === 'studio' && 'The Builder Studio'}
              {activeModal === 'about' && 'About The Coalition'}
              {activeModal === 'journal' && 'The Journal & Field Notes'}
              {activeModal === 'reach-us' && 'One email reaches the team.'}
            </h2>
            {isContactModal && (
              <p className="text-xs sm:text-sm text-[#6F6F6F] mt-1 font-inter">
                Tell us what you need built, taught, or hired. We say yes quickly when it is a fit.
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6F6F6F] hover:text-[#000000] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer self-start"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-8 py-6 font-inter space-y-6 text-[#6F6F6F] text-sm leading-relaxed">
          {activeModal === 'studio' && (
            <div className="space-y-4">
              <p className="text-black font-medium">
                Projects crafted by youth cohorts using the Vibe Coding methodology:
              </p>
              <div className="grid gap-3">
                <div className="p-4 rounded-xl border border-black/5 bg-neutral-50 flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-black text-sm">WauFlow — Civic Disaster Relief Mapper</h4>
                    <span className="text-[11px] text-[#6F6F6F]">48h Vibe Prototype</span>
                  </div>
                  <p className="text-xs">
                    Automated GIS flood tracking and volunteer dispatch platform for Selangor community networks, created with Gemini 2.5 and GeoJSON streams.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-black/5 bg-neutral-50 flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-black text-sm">Lembah Klang AudioScape</h4>
                    <span className="text-[11px] text-[#6F6F6F]">Interactive Ambient Audio</span>
                  </div>
                  <p className="text-xs">
                    A multi-sensory web canvas generating spatial soundscapes of traditional Malaysian rainforests and night markets.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-black/5 bg-neutral-50 flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-black text-sm">Bina AI: National SME Accounting Agent</h4>
                    <span className="text-[11px] text-[#6F6F6F]">SaaS Prototype</span>
                  </div>
                  <p className="text-xs">
                    Zero-overhead invoice parser and cash-flow forecaster designed for micro-entrepreneurs across Malaysia.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeModal === 'about' && (
            <div className="space-y-4">
              <p className="text-base text-black">
                A tripartite alliance dedicated to democratizing computational agency.
              </p>
              <div className="space-y-3">
                <div>
                  <a
                    href="https://selangoryouth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-black text-sm hover:underline"
                  >
                    <span>Selangor Youth Community (SAY)</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  <p className="text-xs mt-0.5">
                    Founded by the Crown Prince of Selangor, DYTM Tengku Amir Shah, SAY empowers Malaysian youth across arts, sports, technology, and entrepreneurship through high-impact grassroots programs.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.mydigital.gov.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-black text-sm hover:underline"
                  >
                    <span>MyDIGITAL Corporation</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  <p className="text-xs mt-0.5">
                    The strategic driving force behind the Malaysia Digital Economy Blueprint (MDEB), accelerating the nation&apos;s transition into a digitally driven, high-income powerhouse.
                  </p>
                </div>
                <div>
                  <a
                    href="https://krackeddevs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-black text-sm hover:underline"
                  >
                    <span>KrackedDevs</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  <p className="text-xs mt-0.5">
                    A collective of relentless engineers and digital craftsmen championing fearless makers, unconventional builders, and raw developer talent.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeModal === 'journal' && (
            <div className="space-y-5">
              <article className="border-b border-black/5 pb-4">
                <span className="text-[11px] text-[#6F6F6F]">Essay 01 · Philosophy</span>
                <h3 className="text-base font-semibold text-black mt-0.5">
                  Where <span className="italic font-serif text-[#6F6F6F]">silence,</span> meets <span className="italic font-serif text-[#6F6F6F]">the eternal.</span>
                </h3>
                <p className="text-xs mt-1 leading-relaxed">
                  In a world overloaded with noisy syntax and endless configuration files, vibe coding returns the builder to pure intention. When the machine handles mechanical transpilation, your mind dwells in high aesthetic clarity and creative stillness.
                </p>
              </article>

              <article className="border-b border-black/5 pb-4">
                <span className="text-[11px] text-[#6F6F6F]">Essay 02 · Methodology</span>
                <h3 className="text-base font-semibold text-black mt-0.5">
                  Antigravity Coding: Escaping The Velocity Drag
                </h3>
                <p className="text-xs mt-1 leading-relaxed">
                  How high-bandwidth prompts, rapid visual loops, and instantaneous compilation cycles allow a single developer to outpace legacy software engineering teams.
                </p>
              </article>
            </div>
          )}

          {/* ========================================================================= */}
          {/* REACH US / CONTACT: CLEAN CHANNELS & DIRECT ACTION */}
          {/* ========================================================================= */}
          {activeModal === 'reach-us' && (
            <div className="space-y-8 animate-fade-rise">
              {/* Primary Direct Action Email Button */}
              <div>
                <a
                  href="mailto:hello@krackeddevs.com"
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-[#15803d] hover:bg-[#166534] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>HELLO@KRACKEDDEVS.COM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* 01 / CHANNELS */}
              <div className="space-y-3 pt-2 border-t border-neutral-100">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#6F6F6F] uppercase">01 / CHANNELS</span>
                  <h3 className="text-xl font-bold text-black tracking-tight">Email, or the community.</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Email Us Card */}
                  <div className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-black">Email us</h4>
                      <p className="text-xs text-[#6F6F6F] mt-1.5 leading-relaxed">
                        For general inquiries, support requests or feedback, send an email and we will get back to you.
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href="mailto:hello@krackeddevs.com"
                        className="text-xs font-medium text-black hover:underline inline-flex items-center gap-1"
                      >
                        <span>hello@krackeddevs.com</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                      </a>
                    </div>
                  </div>

                  {/* Community Card */}
                  <div className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-black">Community</h4>
                      <p className="text-xs text-[#6F6F6F] mt-1.5 leading-relaxed">
                        Join the community to meet other builders, ask questions and stay updated on the latest from KrackedDevs.
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://krackeddevs.com/discord"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-black hover:underline inline-flex items-center gap-1"
                      >
                        <span>Join the Discord</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link to live official site */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-500">
                <span>KrackedDevs · Kuala Lumpur, Malaysia</span>
                <a
                  href="https://krackeddevs.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open live contact page on krackeddevs.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
