import React from 'react';
import { ExternalLink, ArrowDown, Sparkles } from 'lucide-react';

interface CtaBandProps {
  onOpenAudit: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#060a12] via-[#09101d] to-[#050811] text-center border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
          Make Completion Inevitable
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-5">
          Stop starting. Start finishing.
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10 text-balance">
          Every system you need — the behavioral psychology, the operational dashboard, the
          architectural blueprint — is ready to be implemented. One lifetime conversation with yourself.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://biniyamsafayo.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-md bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
          >
            <span>Visit the Gumroad Store</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenAudit}
            className="px-5 py-3.5 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Audit Your Architecture (60s)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
