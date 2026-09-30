import React, { useState } from 'react';
import { ShoppingBag, BookOpen, ExternalLink, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenReader: () => void;
  onOpenAudit: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReader,
  onOpenAudit,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#060a12]/92 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-lg sm:text-xl font-serif font-semibold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span>Biniyam</span>
          <span className="text-blue-500 font-bold">Safayo</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-500/70"></span>
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <a href="#products" className="hover:text-white transition-colors">
            Products
          </a>
          <a href="#dashboard" className="hover:text-white transition-colors">
            Living Dashboard
          </a>
          <a href="#curriculum" className="hover:text-white transition-colors">
            Curriculum
          </a>
          <a href="#philosophy" className="hover:text-white transition-colors">
            Philosophy
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <button
            onClick={onOpenAudit}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Audit Architecture
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenReader}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors cursor-pointer"
            title="Read Chapter 1 sample"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Look Inside</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors cursor-pointer"
            aria-label="View selected programs"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="https://biniyamsafayo.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-blue-500 hover:bg-blue-400 rounded-md transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Buy on Gumroad</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#090e18] px-4 py-5 space-y-3">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white font-medium"
          >
            Products &amp; Pricing
          </a>
          <a
            href="#dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white font-medium"
          >
            Interactive Living Dashboard
          </a>
          <a
            href="#curriculum"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white font-medium"
          >
            The 8-Module Syllabus
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white font-medium"
          >
            The Philosophy
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white font-medium"
          >
            Frequently Asked Questions
          </a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-3 text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-800/40 rounded text-center cursor-pointer"
            >
              Take Architecture Audit (60s)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReader();
              }}
              className="w-full py-2.5 px-3 text-xs font-medium text-slate-300 border border-white/10 rounded text-center cursor-pointer"
            >
              Read Sample Chapter (Look Inside)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
