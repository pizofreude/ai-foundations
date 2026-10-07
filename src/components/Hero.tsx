import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onBeginJourney: () => void;
  onExploreInitiative?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBeginJourney,
  onExploreInitiative,
}) => {
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for smooth entrance and high-visibility settling
      const tl = gsap.timeline({ delay: 0.6 });

      tl.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          y: 24,
          scale: 0.94,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Subtle pulse on the live emerald indicator
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          scale: 1.4,
          boxShadow: '0 0 12px rgba(16, 185, 129, 0.8)',
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Subtle continuous ambient hover/float for tactile depth
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          y: '-=3',
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.6,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40 w-full"
      style={{
        paddingTop: 'calc(8rem - 75px)',
      }}
    >
      {/* Top subtle initiative kicker (clean unboxed metadata adhering to zero-pill rules) */}
      <div className="flex items-center gap-2 text-xs font-inter text-[#6F6F6F] mb-6 animate-fade-rise select-none">
        <span className="font-medium tracking-wider uppercase text-[11px] text-[#000000]">Cohort 2026</span>
        <span aria-hidden="true" className="opacity-40">/</span>
        <a
          href="https://selangoryouth.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:underline transition-colors cursor-pointer"
        >
          Selangor Youth Community (SAY)
        </a>
        <span aria-hidden="true" className="opacity-40">·</span>
        <a
          href="https://www.mydigital.gov.my/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:underline transition-colors cursor-pointer"
        >
          MyDIGITAL
        </a>
        <span aria-hidden="true" className="opacity-40">·</span>
        <a
          href="https://krackeddevs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:underline transition-colors cursor-pointer"
        >
          KrackedDevs
        </a>
      </div>

      {/* Main Headline */}
      <h1
        className="font-instrument text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal text-[#000000] animate-fade-rise tracking-[-2.46px] select-text"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
        }}
      >
        AI Foundations 101:{' '}
        <span className="italic text-[#6F6F6F] transition-colors duration-300">
          Vibe Coding.
        </span>
      </h1>

      {/* Description */}
      <p className="font-inter text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
        An initiative of Selangor Youth Community (SAY), MyDIGITAL &amp; KrackedDevs.
        Nurturing builders&apos; platforms for brilliant minds, fearless makers, and
        thoughtful souls. Through the noise, we craft digital havens for deep work
        and pure flows.
      </p>

      {/* Hero CTA Button */}
      <div className="mt-12 animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={onBeginJourney}
          type="button"
          className="rounded-full px-14 py-5 text-base font-medium font-inter bg-[#000000] text-[#FFFFFF] hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 shadow-xl hover:shadow-2xl cursor-pointer flex items-center gap-2.5 group"
        >
          <span>Begin Journey</span>
          <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Highly Visible GSAP-Animated Live Indicator Badge */}
      <div
        ref={badgeRef}
        className="mt-14 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/92 backdrop-blur-md border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] select-none pointer-events-auto"
        style={{ willChange: 'transform, opacity' }}
      >
        <span
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] shrink-0 inline-block"
          aria-hidden="true"
        />
        <span
          ref={textRef}
          className="text-xs sm:text-sm font-inter font-medium text-[#111111] tracking-tight"
        >
          Curated for Malaysian youth makers &amp; visionary technologists
        </span>
      </div>
    </section>
  );
};

