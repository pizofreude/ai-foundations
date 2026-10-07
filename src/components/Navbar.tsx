import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBeginJourney: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDarkTheme?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBeginJourney,
  activeTab,
  onTabChange,
  isDarkTheme = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'studio', label: 'Studio' },
    { id: 'about', label: 'About' },
    { id: 'journal', label: 'Journal' },
    { id: 'reach-us', label: 'Reach Us' },
  ];

  const handleItemClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`relative z-30 w-full ${isDarkTheme ? 'bg-[#070707] border-b border-white/5' : ''}`}>
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        {/* Zone 1: Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="text-left select-none hover:opacity-85 transition-opacity flex items-center cursor-pointer"
          aria-label="KrackedDevs Home"
        >
          {logoError ? (
            <span
              className={`font-instrument text-3xl tracking-tight ${isDarkTheme ? 'text-white' : 'text-[#000000]'}`}
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              KrackedDevs
            </span>
          ) : (
            <img
              src="https://krackeddevs.com/press/logos/kd-wordmark.svg"
              alt="KrackedDevs"
              className={`h-7 sm:h-8 w-auto object-contain max-w-[200px] ${isDarkTheme ? 'brightness-0 invert' : ''}`}
              onError={() => setLogoError(true)}
            />
          )}
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            const isHome = item.id === 'home';
            
            let textColor = '';
            if (isDarkTheme) {
              textColor = isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white';
            } else {
              textColor = isActive || isHome ? 'text-[#000000]' : 'text-[#6F6F6F] hover:text-[#000000]';
            }

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-sm font-medium font-inter transition-colors duration-200 cursor-pointer ${textColor} relative py-1`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] rounded-full transition-all ${
                      isDarkTheme ? 'bg-[#22c55e]' : 'bg-[#000000]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: CTA Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBeginJourney}
            className={`hidden sm:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
              isDarkTheme
                ? 'bg-white text-black hover:bg-neutral-200'
                : 'bg-[#000000] text-[#FFFFFF]'
            }`}
          >
            Begin Journey
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDarkTheme ? 'text-white hover:bg-neutral-800' : 'text-black hover:bg-neutral-100'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full px-8 py-6 shadow-xl flex flex-col gap-4 animate-fade-rise z-40 ${
          isDarkTheme ? 'bg-neutral-900/95 border-b border-white/10 text-white' : 'bg-white/95 backdrop-blur-xl border-b border-black/5'
        }`}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            const isHome = item.id === 'home';
            const textColor = isDarkTheme
              ? isActive ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
              : isActive || isHome ? 'text-[#000000]' : 'text-[#6F6F6F] hover:text-black';

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left text-base font-medium py-2 transition-colors ${textColor}`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBeginJourney();
              }}
              className={`w-full rounded-full px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform text-center ${
                isDarkTheme ? 'bg-white text-black' : 'bg-[#000000] text-[#FFFFFF]'
              }`}
            >
              Begin Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
