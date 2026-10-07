import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Terminal,
  Play,
  Clock,
  Layers,
  Send,
  Code2,
  Globe,
  Share2,
  Cpu,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface StudioTeachingPageProps {
  onBackToHero: () => void;
  onOpenSchool: () => void;
}

export const StudioTeachingPage: React.FC<StudioTeachingPageProps> = ({
  onBackToHero,
  onOpenSchool,
}) => {
  // Session syllabus part switcher (Part 1, Part 2, Part 3)
  const [activePart, setActivePart] = useState<1 | 2 | 3>(2);

  // Workshop Timer
  const [timerSeconds, setTimerSeconds] = useState(5400); // 90 mins = 5400s
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Curated Sandbox Ideas
  const ideas = [
    {
      id: 'bus-route',
      title: 'Bus route finder',
      problem: 'Commuters in Subang & Klang struggle to know the next RapidKL bus arrival time and transfer routes without heavy ads.',
      solution: 'A clean, high-contrast bus arrival ticker with route map and live departure countdown.',
      prompt: `Build a clean, high-contrast RapidKL & Klang Valley Bus Arrival tracker web application in React and Tailwind CSS.
Features:
- Route search bar with autocomplete for Subang Jaya, Shah Alam, KL Sentral, and Petaling Jaya.
- Real-time departure board with countdown clocks (e.g., "Bus 770 arriving in 4 mins").
- Interactive route diagram showing stops and transit connection points (LRT, MRT, BRT).
- Clean dark mode UI with emerald accents, zero clutter, and instantaneous filter tabs.`
    },
    {
      id: 'hawker-food',
      title: 'Local Pasar Malam & Hawker Map',
      problem: 'Locals and tourists cannot easily find which night market (Pasar Malam) is open today in Selangor and KL.',
      solution: 'A day-of-week night market finder with vendor highlights and opening hours.',
      prompt: `Build a mobile-first Malaysian Pasar Malam & Hawker Gem finder in React and Tailwind CSS.
Features:
- "Open Today" automatic filtering by current day of the week (e.g. Wednesday Pasar Malam in SS2 / Taman Connaught).
- Search by neighborhood (Selangor, KL, Subang, PJ, Cheras).
- Card list featuring top must-try snacks (Apam Balik, Satay, Sugar Cane, Ramly Burger) with pricing guide.
- Direction button linking to Google Maps / Waze.`
    },
    {
      id: 'flood-alert',
      title: 'Community Flash Flood Watcher',
      problem: 'Heavy rain causes flash floods in urban areas before official government portals update.',
      solution: 'A crowd-sourced water level alert board with verified community reports and river gauge indicators.',
      prompt: `Build a real-time Community Flash Flood & River Gauge Monitor in React and Tailwind CSS.
Features:
- River basin status cards (Sungai Klang, Sungai Damansara, Sungai Langat) with Alert / Warning / Normal color-coded indicators.
- Live crowd submission form for water level reports with photo upload placeholder and timestamp.
- Emergency hotline quick-call links for Selangor Civil Defence (APM) and Bomba.
- Responsive minimalist map view with rainfall intensity indicators.`
    },
    {
      id: 'invoice-gen',
      title: 'Freelancer Ringgit Invoice Maker',
      problem: 'Malaysian creative gig workers need professional PDF/printable invoices with SST calculations and DuitNow QR codes.',
      solution: 'A zero-login instant Ringgit invoice maker that renders client bills and downloadable vouchers.',
      prompt: `Build a zero-friction Malaysian Freelancer Ringgit Invoice Builder in React and Tailwind CSS.
Features:
- Live two-column editor: input client details, line items, and bank transfer info on the left; real-time A4 printable invoice on the right.
- Currency formatted in RM (MYR) with SST toggle and total calculation.
- DuitNow QR code visual placeholder for rapid mobile payment.
- One-click print/download as PDF button with print CSS media queries.`
    }
  ];

  const [selectedIdea, setSelectedIdea] = useState(ideas[0]);
  const [customProblem, setCustomProblem] = useState('');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [showIdeaModal, setShowIdeaModal] = useState(false);

  const activePrompt = customProblem.trim()
    ? `Build a modern, production-grade web application in React and Tailwind CSS based on this requirement:
Problem Statement: ${customProblem}
Ensure the app has a refined aesthetic, responsive desktop/mobile layouts, interactive forms with validation, and instant feedback.`
    : selectedIdea.prompt;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(activePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2200);
  };

  // Supported App Builders
  const appBuilders = [
    {
      name: 'Google AI Studio',
      url: 'https://aistudio.google.com/',
      badge: 'Gemini Models',
      desc: 'Prototype full-stack web apps, system prompts & multimodal agents with Gemini 2.5 Flash.',
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    {
      name: 'Lovable',
      url: 'https://lovable.dev/',
      badge: 'Full-Stack Apps',
      desc: 'Rapid full-stack web app builder with Supabase integration, responsive layouts & GitHub sync.',
      color: 'border-pink-500/30 text-pink-400 bg-pink-500/10'
    },
    {
      name: 'v0 by Vercel',
      url: 'https://v0.dev/',
      badge: 'UI & React Components',
      desc: 'Generative UI system powered by modern Tailwind CSS, shadcn/ui and Next.js primitives.',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
    {
      name: 'Manus.im',
      url: 'https://manus.im/',
      badge: 'Autonomous Agent',
      desc: 'Autonomous general agent executing multi-step research, code orchestration, and full delivery.',
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    }
  ];

  return (
    <div className="studio-page min-h-screen w-full bg-[#070707] text-white selection:bg-[#22c55e] selection:text-black font-studio-body">
      {/* Top Teaching HUD & Syllabus Bar */}
      <div className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Workshop HUD Info */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHero}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer font-studio-body"
            >
              ← Back to Hero
            </button>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center gap-1.5 font-studio-mono text-[11px] leading-none font-semibold px-3 py-1.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30 tracking-wider shadow-[0_0_10px_rgba(34,197,94,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shrink-0" aria-hidden="true" />
                <span>LIVE WORKSHOP</span>
              </span>
              <span className="text-xs font-medium text-neutral-300 font-studio-body leading-none">
                1.5-Hour Intensive Syllabus
              </span>
              <span className="hidden xl:inline-flex items-center font-studio-mono text-[11px] leading-none text-neutral-500 bg-black/60 px-2.5 py-1 rounded border border-white/5">
                CHECKSUM: 0xKD_SYLLABUS_101·OK
              </span>
            </div>
          </div>

          {/* Part 1, 2, 3 Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-neutral-900/90 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActivePart(1)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium font-studio-body ${
                activePart === 1
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Part 01 · 05m
            </button>
            <button
              onClick={() => setActivePart(2)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium font-studio-body ${
                activePart === 2
                  ? 'bg-[#22c55e] text-black font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Part 02 · 60m (Sandbox)
            </button>
            <button
              onClick={() => setActivePart(3)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium font-studio-body ${
                activePart === 3
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Part 03 · 25m (Showcase)
            </button>
          </div>

          {/* Instructor Timer */}
          <div className="flex items-center gap-2.5 font-studio-mono text-xs">
            <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#22c55e]" />
              <span className="text-[#22c55e] font-bold">{formatTimer(timerSeconds)}</span>
            </div>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-studio-body font-medium transition-colors cursor-pointer ${
                isTimerRunning
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {isTimerRunning ? 'Pause' : 'Start Timer'}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(5400);
              }}
              title="Reset Timer"
              className="p-1 text-neutral-400 hover:text-white"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* ========================================================================= */}
        {/* PART 01 OVERVIEW: FOUNDATIONS OF VIBE DIRECTING */}
        {/* ========================================================================= */}
        {activePart === 1 && (
          <div className="space-y-8 animate-fade-rise">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="font-studio-mono text-xs text-[#22c55e] tracking-widest uppercase">
                &lt;PART 01 · 05 MINUTES&gt;
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal text-white uppercase font-studio-display">
                Foundations of Vibe Directing
              </h1>
              <p className="text-neutral-400 text-base leading-relaxed font-studio-body">
                The paradigm shift from mechanical coder to AI conductor. We crystallize problems into high-context prompts before writing any code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col gap-3">
                <span className="text-3xl font-studio-mono text-[#22c55e]">01</span>
                <h3 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">The Director Mindset</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-studio-body">
                  You are no longer wrestling with missing semicolons. Your role is clarifying user intent, system boundaries, and aesthetic taste.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col gap-3">
                <span className="text-3xl font-studio-mono text-[#22c55e]">02</span>
                <h3 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">Crystallizing Problems</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-studio-body">
                  A vague request yields generic AI slop. A focused local Malaysian problem statement creates an immediate product winner.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col gap-3">
                <span className="text-3xl font-studio-mono text-[#22c55e]">03</span>
                <h3 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">High-Bandwidth Prompting</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-studio-body">
                  Structure your prompt with: Context, Target User, Layout Specifications, Visual Colors, and Working Handlers.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                onClick={() => setActivePart(2)}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 bg-[#22c55e] text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#22c55e]/20 cursor-pointer font-studio-body"
              >
                <span>Proceed to Part 02: Live Vibe Coding (60 Mins)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PART 02: LIVE VIBE CODING & SANDBOX (CORE TEACHING WORKBENCH) */}
        {/* ========================================================================= */}
        {activePart === 2 && (
          <div className="space-y-16 animate-fade-rise">
            {/* 1. Header Reference to KrackedDevs Sandbox */}
            <div className="text-center max-w-4xl mx-auto space-y-6 pt-4">
              <div className="inline-block">
                <span className="font-studio-mono text-xs text-[#22c55e] tracking-widest uppercase px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20">
                  &lt;KRACKEDDEVS · SANDBOX&gt;
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase font-studio-display leading-[0.95]">
                BUILD SOMETHING REAL{' '}
                <span className="text-[#22c55e] inline-block animate-pulse">
                  TODAY_
                </span>
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-studio-body">
                A playground for your first app. Pick an idea, let the coach write the build prompt, and watch an AI app builder turn it into something you can share. No setup, no code editor.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://krackeddevs.com/sandbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-8 py-3.5 bg-[#22c55e] text-black font-semibold text-sm hover:bg-[#1eb354] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#22c55e]/20 cursor-pointer inline-flex items-center gap-2 font-studio-body"
                >
                  <span>Continue with the coach →</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setShowIdeaModal(true)}
                  className="rounded-full px-6 py-3.5 bg-neutral-900 border border-white/20 text-neutral-200 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-all cursor-pointer font-studio-body"
                >
                  Change my idea
                </button>
              </div>

              {/* Active Idea Ticker */}
              <div className="pt-2 text-xs font-studio-mono text-neutral-400 flex items-center justify-center gap-2">
                <span>Your pick:</span>
                <span className="text-white font-bold bg-neutral-900 px-3 py-1 rounded-md border border-white/10">
                  {selectedIdea.title}
                </span>
              </div>
            </div>

            {/* 2. FOUR STEPS, ONE SITTING (Reference from screenshot) */}
            <div className="space-y-8 pt-8 border-t border-white/10">
              <div className="text-center space-y-2">
                <span className="font-studio-mono text-xs text-[#22c55e] tracking-widest uppercase">
                  &lt;HOW THE SESSION RUNS&gt;
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-studio-display">
                  FOUR STEPS, ONE SITTING
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 01 */}
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#22c55e]/40 transition-colors">
                  <div>
                    <span className="font-studio-mono text-xs px-2.5 py-1 rounded bg-[#22c55e] text-black font-bold">
                      01
                    </span>
                    <h3 className="font-bold text-xl text-white uppercase mt-4 font-studio-display tracking-tight">
                      SIGN IN
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-studio-body">
                      Create or sign in to your KrackedDevs account. Your pick and your finished project stay on your profile.
                    </p>
                  </div>
                  <div className="pt-6">
                    <span className="text-[11px] font-studio-mono text-neutral-400">
                      You are signed in
                    </span>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#22c55e]/40 transition-colors">
                  <div>
                    <span className="font-studio-mono text-xs px-2.5 py-1 rounded bg-[#22c55e] text-black font-bold">
                      02
                    </span>
                    <h3 className="font-bold text-xl text-white uppercase mt-4 font-studio-display tracking-tight">
                      PICK AN IDEA
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-studio-body">
                      Browse the idea wall, beginner to advanced, and pick one. Or bring your own idea to the coach.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={() => setShowIdeaModal(true)}
                      className="text-xs font-studio-mono text-[#22c55e] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open the idea wall →</span>
                    </button>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#22c55e]/40 transition-colors">
                  <div>
                    <span className="font-studio-mono text-xs px-2.5 py-1 rounded bg-[#22c55e] text-black font-bold">
                      03
                    </span>
                    <h3 className="font-bold text-xl text-white uppercase mt-4 font-studio-display tracking-tight">
                      GET YOUR BUILD PROMPT
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-studio-body">
                      The coach asks a few questions, one at a time, and writes a single build prompt you can copy.
                    </p>
                  </div>
                  <div className="pt-6">
                    <a
                      href="https://krackeddevs.com/sandbox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-studio-mono text-[#22c55e] hover:underline flex items-center gap-1"
                    >
                      <span>Open the coach →</span>
                    </a>
                  </div>
                </div>

                {/* Step 04 */}
                <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-[#22c55e]/40 transition-colors">
                  <div>
                    <span className="font-studio-mono text-xs px-2.5 py-1 rounded bg-[#22c55e] text-black font-bold">
                      04
                    </span>
                    <h3 className="font-bold text-xl text-white uppercase mt-4 font-studio-display tracking-tight">
                      BUILD AND PUBLISH
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-studio-body">
                      Paste the prompt into an AI app builder (Google AI Studio, Lovable, v0, Manus.im). It builds and runs the app for you. Publish it and keep the link.
                    </p>
                  </div>
                  <div className="pt-4 space-y-1">
                    <div className="text-[11px] font-studio-mono text-[#22c55e]">
                      Google AI Studio · Lovable · v0 · Manus.im
                    </div>
                    <p className="text-[10px] text-neutral-400 font-studio-body">
                      Free account available on each tool.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. INTERACTIVE TEACHING WORKBENCH: PROMPT CRYSTALLIZER */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="font-studio-mono text-xs text-[#22c55e] uppercase">
                    TEACHING WORKBENCH · STEP 03 &amp; 04
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-1 font-studio-display uppercase tracking-tight">
                    Crystallize Problem &amp; Generate Build Prompt
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPrompt}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 bg-[#22c55e] text-black text-xs font-bold hover:bg-[#1eb354] transition-all cursor-pointer shadow-md font-studio-body"
                  >
                    {copiedPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPrompt ? 'Copied to Clipboard!' : 'Copy Build Prompt'}</span>
                  </button>
                </div>
              </div>

              {/* Problem statement input / selector */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2 font-studio-body">
                      Selected Sandbox Idea
                    </label>
                    <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-white font-studio-display uppercase tracking-tight">{selectedIdea.title}</span>
                        <button
                          onClick={() => setShowIdeaModal(true)}
                          className="text-xs text-[#22c55e] hover:underline font-studio-mono"
                        >
                          Switch Idea
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 font-studio-body">{selectedIdea.problem}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2 font-studio-body">
                      Or Type Live Class Problem Statement:
                    </label>
                    <textarea
                      rows={3}
                      value={customProblem}
                      onChange={(e) => setCustomProblem(e.target.value)}
                      placeholder="e.g. Build an automatic invoice matcher for freelance videographers in Petaling Jaya..."
                      className="w-full p-3.5 rounded-xl bg-black border border-white/10 text-xs text-white focus:outline-none focus:border-[#22c55e] font-studio-mono leading-relaxed"
                    />
                    <span className="text-[11px] text-neutral-400 font-studio-body">
                      Coach automatically formats this into a system prompt for any builder.
                    </span>
                  </div>
                </div>

                {/* Generated Prompt Code View */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-studio-body">
                      Crystallized Build Prompt (Ready to Paste)
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-studio-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-white/10 hidden sm:inline-block">
                        CHECKSUM: 0xKD_{selectedIdea.id.replace(/-/g, '_').toUpperCase()}·{activePrompt.length}B
                      </span>
                      <span className="text-[11px] font-studio-mono text-[#22c55e]">
                        {copiedPrompt ? '✓ Copied' : 'One-Click Ready'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-black border border-white/10 font-studio-mono text-xs text-neutral-300 leading-relaxed max-h-56 overflow-y-auto whitespace-pre-wrap select-all">
                    {activePrompt}
                  </div>
                </div>
              </div>

              {/* 4. Supported App Builders Quick Launch Cards */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-studio-mono text-xs text-[#22c55e]">STEP 04 DESTINATIONS</span>
                    <h4 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">
                      Launch With Your AI App Builder of Choice
                    </h4>
                  </div>
                  <span className="text-xs text-neutral-400 hidden sm:inline font-studio-body">
                    Click to launch builder in new tab and paste your prompt
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {appBuilders.map((builder) => (
                    <a
                      key={builder.name}
                      href={builder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group cursor-pointer hover:bg-black/90"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-studio-mono px-2 py-0.5 rounded-full border ${builder.color}`}>
                            {builder.badge}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                        </div>
                        <h5 className="font-bold text-xl text-white mt-3 group-hover:text-[#22c55e] transition-colors font-studio-display tracking-tight uppercase">
                          {builder.name}
                        </h5>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-studio-body">
                          {builder.desc}
                        </p>
                      </div>

                      <div className="pt-4 flex items-center text-xs font-semibold text-white group-hover:text-[#22c55e] font-studio-body">
                        <span>Open &amp; Build →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. WHAT YOU LEAVE WITH (From Screenshot) */}
            <div className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <span className="font-studio-mono text-xs text-[#22c55e] tracking-widest uppercase">
                  &lt;WHAT YOU LEAVE WITH&gt;
                </span>
                <h3 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-studio-display leading-[0.95]">
                  THREE THINGS, ALL YOURS
                </h3>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="border-b border-white/10 pb-5">
                  <h4 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">
                    A WORKING APP
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-studio-body">
                    Single page, running in the builder&apos;s preview, published with a link you can send to anyone.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <h4 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">
                    A BUILD PROMPT YOU CAN REUSE
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-studio-body">
                    The exact block the coach wrote. Paste it into another builder later and compare.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">
                    A PROJECT ON YOUR PROFILE
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-studio-body">
                    Submit it to the showcase and it lives on your KrackedDevs profile with the rest of your work.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. WHEN YOU ARE DONE (From Screenshot) */}
            <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 text-center space-y-6">
              <span className="font-studio-mono text-xs text-[#22c55e] tracking-widest uppercase">
                &lt;WHEN YOU ARE DONE&gt;
              </span>
              <h2 className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tight font-studio-display">
                SHIP IT TO THE SHOWCASE
              </h2>
              <p className="text-neutral-300 text-sm max-w-xl mx-auto leading-relaxed font-studio-body">
                Put your app on the KrackedDevs showcase so it lives on your profile. Approved projects stay live when you edit them later.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://krackeddevs.com/showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-8 py-3.5 bg-[#22c55e] text-black font-semibold text-sm hover:bg-[#1eb354] hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer inline-flex items-center gap-2 font-studio-body"
                >
                  <span>Submit your project →</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://krackeddevs.com/showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3.5 bg-black border border-white/20 text-neutral-200 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-all cursor-pointer font-studio-body"
                >
                  Browse the showcase
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PART 03: DEPLOYMENT & KD SHOWCASE */}
        {/* ========================================================================= */}
        {activePart === 3 && (
          <div className="space-y-8 animate-fade-rise">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="font-studio-mono text-xs text-[#22c55e] tracking-widest uppercase">
                &lt;PART 03 · 25 MINUTES&gt;
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-studio-display">
                Project Deployment &amp; KD Showcase Submission
              </h1>
              <p className="text-neutral-400 text-base leading-relaxed font-studio-body">
                Live cloud shipping, Q&amp;A with builders, and submitting your project to the Malaysian ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-4">
                <span className="text-xs font-studio-mono text-[#22c55e] uppercase">STEP A</span>
                <h3 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">Deploy &amp; Verify Your Shareable URL</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-studio-body">
                  In Google AI Studio, Lovable, v0, or Manus, click &quot;Share (free)&quot; or &quot;Publish&quot; or &quot;Deploy&quot;. Test the published live link on mobile to verify responsive touch states.
                </p>
                <div className="p-4 rounded-xl bg-black border border-white/10 text-xs font-studio-mono text-neutral-300">
                  Status: Single page live on web with permanent URL
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-4">
                <span className="text-xs font-studio-mono text-[#22c55e] uppercase">STEP B</span>
                <h3 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">Submit to KrackedDevs Showcase</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-studio-body">
                  Head over to the showcase portal, link your GitHub or deployment URL, add your 1-line problem statement, and pin it to your maker profile.
                </p>
                <a
                  href="https://krackeddevs.com/showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#22c55e] text-black text-xs font-bold hover:scale-105 transition-transform font-studio-body"
                >
                  <span>Go to KD Showcase Submission</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-bold text-white uppercase font-studio-display tracking-tight">What&apos;s Next: AI Builder School</h4>
                <p className="text-xs text-neutral-400 mt-1 max-w-lg font-studio-body">
                  Continue your trajectory at the physical campus in Kuala Lumpur with KrackedDevs &amp; Xsolla Curine Academy.
                </p>
              </div>
              <button
                onClick={onOpenSchool}
                className="rounded-full px-6 py-3 bg-white text-black font-bold text-xs hover:scale-105 transition-all cursor-pointer whitespace-nowrap font-studio-body"
              >
                View AI Builder School Brochure →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Idea Selector Modal */}
      {showIdeaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-rise">
          <div className="relative w-full max-w-xl bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-studio-mono text-[#22c55e]">KRACKEDDEVS IDEA WALL</span>
                <h3 className="text-2xl font-bold text-white mt-1 uppercase font-studio-display tracking-tight">Pick a Problem Statement</h3>
              </div>
              <button
                onClick={() => setShowIdeaModal(false)}
                className="text-neutral-400 hover:text-white p-1 cursor-pointer font-studio-mono"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {ideas.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedIdea(item);
                    setCustomProblem('');
                    setShowIdeaModal(false);
                  }}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col gap-1 ${
                    selectedIdea.id === item.id
                      ? 'bg-neutral-800 border-[#22c55e] text-white shadow-md'
                      : 'bg-black/60 border-white/10 text-neutral-300 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-white font-studio-display uppercase tracking-tight">{item.title}</span>
                    {selectedIdea.id === item.id && (
                      <span className="text-[10px] font-studio-mono text-[#22c55e] font-bold">SELECTED</span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 font-studio-body">{item.problem}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowIdeaModal(false)}
                className="px-6 py-2 rounded-full bg-white text-black font-semibold text-xs hover:scale-105 transition-transform cursor-pointer font-studio-body"
              >
                Confirm Idea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
