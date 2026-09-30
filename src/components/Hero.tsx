import React from 'react';
import { ArrowDown, BookOpen, Compass, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenReader: () => void;
  onToggleAudio: () => void;
  isPlayingAudio: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAudit,
  onOpenReader,
  onToggleAudio,
  isPlayingAudio,
}) => {
  return (
    <section id="top" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-white/10">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Atmospheric architectural study overlooking alpine ridges at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12]/90 via-[#060a12]/80 to-[#060a12]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/15 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          <span>Digital Courses &amp; Ebooks · By Biniyam Safayo</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-7 text-balance">
          Motivation is the weather. <br />
          This builds <em className="italic text-blue-400 font-normal">the house.</em>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          You will never command the outcome. You can command everything that makes the outcome
          possible. Psychologically grounded, philosophically honest systems for pursuing goals most
          people call extreme — and finishing what you start.
        </p>

        {/* Primary Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#products"
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-950 bg-blue-500 hover:bg-blue-400 rounded-md transition-all shadow-md shadow-blue-500/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore the 3 Programs</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenAudit}
            className="px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-blue-500/40 rounded-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Audit Your Architecture (60s)</span>
          </button>

          <button
            onClick={onToggleAudio}
            className={`px-4 py-3.5 text-xs sm:text-sm font-medium rounded-md transition-all flex items-center gap-2 border cursor-pointer ${
              isPlayingAudio
                ? 'bg-blue-600/20 text-blue-300 border-blue-500/40'
                : 'text-slate-300 hover:text-white border-white/10 hover:border-white/20'
            }`}
            title="Listen to author's commentary"
          >
            <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-blue-400' : 'text-slate-400'}`} />
            <span>{isPlayingAudio ? 'Pause Audio' : 'Listen: Author Note'}</span>
          </button>
        </div>

        {/* Hero Central Quote Block */}
        <div className="max-w-xl mx-auto p-5 rounded-lg bg-[#0e1726]/70 border border-white/10 backdrop-blur-sm shadow-xl">
          <blockquote className="font-serif italic text-base sm:text-lg text-slate-300 leading-relaxed mb-2">
            &ldquo;A house that stands in any weather — including the seasons when the wind brings
            nothing at all.&rdquo;
          </blockquote>
          <cite className="text-xs uppercase tracking-widest text-blue-400 font-semibold not-italic">
            — The Extreme Path · Module 1
          </cite>
        </div>

        {/* Micro Badges / Proof Matrix */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div className="p-3">
            <span className="block text-2xl font-serif font-bold text-white tabular-nums">08</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Core Modules
            </span>
            <p className="text-xs text-slate-500 mt-1">From agency to radical endurance</p>
          </div>
          <div className="p-3">
            <span className="block text-2xl font-serif font-bold text-white tabular-nums">01</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Living Dashboard
            </span>
            <p className="text-xs text-slate-500 mt-1">Consolidates 5 fragmented tools</p>
          </div>
          <div className="p-3">
            <span className="block text-2xl font-serif font-bold text-white tabular-nums">16</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Book Chapters
            </span>
            <p className="text-xs text-slate-500 mt-1">With integrated workbooks</p>
          </div>
          <div className="p-3">
            <span className="block text-2xl font-serif font-bold text-blue-400 tabular-nums">100%</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Honest Psychology
            </span>
            <p className="text-xs text-slate-500 mt-1">Zero toxic positivity</p>
          </div>
        </div>
      </div>
    </section>
  );
};
