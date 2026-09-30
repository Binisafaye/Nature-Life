import React from 'react';
import { ExternalLink, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 py-16 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-lg font-serif font-bold text-white tracking-tight block">
              Biniyam Safayo
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Digital courses and publications on the psychology and architecture of extraordinary
              achievement. Built for operators who pursue difficult goals without reliance on
              fleeting motivation.
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Direct Inquiries: <a href="mailto:binisafaye@gmail.com" className="text-blue-400 hover:underline">binisafaye@gmail.com</a>
            </p>
          </div>

          {/* Catalog Links */}
          <div className="md:col-span-3 space-y-2.5">
            <strong className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
              Programs
            </strong>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  The Extreme Path ($34)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  The Inevitable Self ($27)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  The Architecture of the Inevitable ($7)
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-400 hover:text-blue-300 transition-colors">
                  The Complete Trilogy ($49)
                </a>
              </li>
            </ul>
          </div>

          {/* Systems & Resources */}
          <div className="md:col-span-4 space-y-2.5">
            <strong className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
              Architecture Tools
            </strong>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="hover:text-white transition-colors">
                  The Living Dashboard Simulator
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  8-Week Transformation Syllabus
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  The Core Behavioral Tenets
                </a>
              </li>
              <li>
                <a
                  href="https://biniyamsafayo.gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Official Gumroad Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Biniyam Safayo. All rights reserved. Built with precision and honest psychology.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://biniyamsafayo.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Gumroad Store
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
