import React, { useState } from 'react';
import { X, BookOpen, ExternalLink, Type, Sun, Moon } from 'lucide-react';
import { SAMPLE_CHAPTER } from '../data/products';

interface ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReaderModal: React.FC<ReaderModalProps> = ({ isOpen, onClose }) => {
  const [fontSize, setFontSize] = useState<'base' | 'lg' | 'xl'>('lg');
  const [theme, setTheme] = useState<'obsidian' | 'sepia' | 'slate'>('obsidian');

  if (!isOpen) return null;

  const fontClass = {
    base: 'text-sm sm:text-base leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed',
    xl: 'text-lg sm:text-xl leading-relaxed',
  }[fontSize];

  const themeClasses = {
    obsidian: 'bg-[#070b13] text-[#f1f5f9] border-white/10',
    sepia: 'bg-[#181410] text-[#f7ece1] border-[#382d24]',
    slate: 'bg-[#0f172a] text-[#f8fafc] border-slate-700/50',
  }[theme];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border transition-colors ${themeClasses}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Reader Top Controls */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/20">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <BookOpen className="w-4 h-4" />
            <span className="truncate">LOOK INSIDE · CHAPTER PREVIEW</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font size toggles */}
            <div className="flex items-center gap-1 p-1 bg-white/5 rounded border border-white/10 text-xs">
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'base' ? 'bg-white/20 text-white font-bold' : 'text-slate-400'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'lg' ? 'bg-white/20 text-white font-bold' : 'text-slate-400'}`}
                title="Larger text"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'xl' ? 'bg-white/20 text-white font-bold' : 'text-slate-400'}`}
                title="Largest text"
              >
                A++
              </button>
            </div>

            {/* Theme switcher */}
            <div className="flex items-center gap-1 p-1 bg-white/5 rounded border border-white/10 text-xs">
              <button
                onClick={() => setTheme('obsidian')}
                className={`w-5 h-5 rounded-full bg-[#070b13] border cursor-pointer ${theme === 'obsidian' ? 'border-blue-400' : 'border-transparent'}`}
                title="Obsidian Night"
              />
              <button
                onClick={() => setTheme('sepia')}
                className={`w-5 h-5 rounded-full bg-[#2e2319] border cursor-pointer ${theme === 'sepia' ? 'border-amber-400' : 'border-transparent'}`}
                title="Warm Book Sepia"
              />
              <button
                onClick={() => setTheme('slate')}
                className={`w-5 h-5 rounded-full bg-[#1e293b] border cursor-pointer ${theme === 'slate' ? 'border-cyan-400' : 'border-transparent'}`}
                title="Deep Slate"
              />
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Document Body */}
        <div className="p-6 sm:p-12 overflow-y-auto max-w-2xl mx-auto w-full">
          <div className="mb-8 pb-6 border-b border-white/10 text-center">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
              {SAMPLE_CHAPTER.bookTitle} · Chapter {SAMPLE_CHAPTER.chapterNumber}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
              {SAMPLE_CHAPTER.chapterTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 italic max-w-md mx-auto">
              {SAMPLE_CHAPTER.subtitle}
            </p>
          </div>

          <div className={`space-y-6 font-serif ${fontClass}`}>
            {SAMPLE_CHAPTER.content.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? 'first-letter:text-4xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-1' : ''}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* End of Chapter teaser */}
          <div className="mt-12 p-6 rounded-xl bg-black/30 border border-white/10 text-center">
            <span className="text-xs uppercase tracking-widest text-slate-400 block mb-2 font-mono">
              End of Chapter 1 Preview
            </span>
            <p className="text-xs text-slate-300 mb-4 max-w-md mx-auto">
              Continue reading the remaining 15 chapters, including the Deep Work Architecture and
              the 15-Minute Weekly Calibration loop.
            </p>
            <a
              href="https://biniyamsafayo.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <span>Get Full Book on Gumroad ($7)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
