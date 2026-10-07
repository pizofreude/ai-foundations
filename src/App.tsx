/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoBackground } from './components/VideoBackground';
import { JourneyModal } from './components/JourneyModal';
import { NavigationModals } from './components/NavigationModals';
import { StudioTeachingPage } from './components/StudioTeachingPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState<boolean>(false);
  const [activeNavModal, setActiveNavModal] = useState<string | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home' || tab === 'studio') {
      setActiveNavModal(null);
    } else {
      setActiveNavModal(tab);
    }
  };

  const handleOpenJourney = () => {
    setIsJourneyModalOpen(true);
  };

  // Dedicated Teaching Page for 1.5-Hour Intensive Syllabus & Sandbox
  if (activeTab === 'studio') {
    return (
      <div className="studio-page relative min-h-screen w-full bg-[#070707] flex flex-col justify-between selection:bg-[#22c55e] selection:text-black font-studio-body">
        <Navbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onBeginJourney={handleOpenJourney}
          isDarkTheme={true}
        />

        <div className="flex-1">
          <StudioTeachingPage
            onBackToHero={() => handleTabChange('home')}
            onOpenSchool={handleOpenJourney}
          />
        </div>

        {/* Quiet Footer for Studio Page */}
        <footer className="relative z-10 w-full px-8 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 border-t border-white/5 font-studio-body">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="font-studio-mono text-xs text-white">
              &lt;KRACKED_OS / STUDIO&gt;
            </span>
            <span aria-hidden="true" className="opacity-30">/</span>
            <span className="font-studio-body">1.5-Hour Vibe Coding Workshop</span>
            <span aria-hidden="true" className="opacity-30">·</span>
            <span className="font-studio-mono text-[10px] text-[#22c55e] bg-[#22c55e]/10 px-1.5 py-0.5 rounded border border-[#22c55e]/20">
              BUILD: 0xKD_2026·OK
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-studio-body">
            <a
              href="https://krackeddevs.com/sandbox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22c55e] hover:underline"
            >
              KrackedDevs Sandbox ↗
            </a>
            <span aria-hidden="true" className="opacity-30">·</span>
            <a
              href="https://krackeddevs.com/showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              KD Showcase ↗
            </a>
            <span aria-hidden="true" className="opacity-30">·</span>
            <a
              href="https://theaibuilder.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              AI Builder School ↗
            </a>
          </div>
        </footer>

        {/* Modals */}
        <JourneyModal
          isOpen={isJourneyModalOpen}
          onClose={() => setIsJourneyModalOpen(false)}
        />

        <NavigationModals
          activeModal={activeNavModal}
          onClose={() => {
            setActiveNavModal(null);
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FFFFFF] flex flex-col justify-between selection:bg-black selection:text-white">
      {/* Background Video Layer (z-0) with Gradient Overlays */}
      <VideoBackground videoUrl="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" />

      {/* Navigation Bar (z-10 relative) */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onBeginJourney={handleOpenJourney}
      />

      {/* Main Hero Section (z-10 relative) */}
      <main className="flex-1 flex flex-col justify-center relative z-10">
        <Hero
          onBeginJourney={handleOpenJourney}
          onExploreInitiative={() => handleTabChange('about')}
        />
      </main>

      {/* Quiet Footer with attribution and alignment */}
      <footer className="relative z-10 w-full px-8 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-[#6F6F6F] border-t border-black/[0.04]">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="font-instrument text-base text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Made in Malaysia
          </span>
          <span aria-hidden="true" className="opacity-30">/</span>
          <span>A Joint Initiative for Malaysian Builders</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href="https://selangoryouth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:underline transition-colors cursor-pointer"
          >
            Selangor Youth Community (SAY)
          </a>
          <span aria-hidden="true" className="opacity-30">·</span>
          <a
            href="https://www.mydigital.gov.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:underline transition-colors cursor-pointer"
          >
            MyDIGITAL
          </a>
          <span aria-hidden="true" className="opacity-30">·</span>
          <a
            href="https://krackeddevs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:underline transition-colors cursor-pointer"
          >
            KrackedDevs
          </a>
          <span aria-hidden="true" className="opacity-30">·</span>
          <span>© 2026</span>
        </div>
      </footer>

      {/* Interactive Modals */}
      <JourneyModal
        isOpen={isJourneyModalOpen}
        onClose={() => setIsJourneyModalOpen(false)}
      />

      <NavigationModals
        activeModal={activeNavModal}
        onClose={() => {
          setActiveNavModal(null);
          setActiveTab('home');
        }}
      />
    </div>
  );
}
