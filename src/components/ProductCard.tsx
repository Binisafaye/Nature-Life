import React, { useState } from 'react';
import { ExternalLink, Check, ChevronRight, Eye, Layers, Compass, BookOpen } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenSyllabus?: () => void;
  onOpenDashboardDemo?: () => void;
  onOpenReader?: () => void;
  onQuickCheckout?: (product: Product) => void;
  isSelectedForBundle?: boolean;
  onToggleBundleSelect?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenSyllabus,
  onOpenDashboardDemo,
  onOpenReader,
  onQuickCheckout,
  isSelectedForBundle,
  onToggleBundleSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative flex flex-col rounded-xl bg-[#0c1322] border transition-all duration-300 overflow-hidden ${
        product.featured
          ? 'border-blue-500/40 shadow-xl shadow-blue-500/10 hover:border-blue-400'
          : 'border-white/10 hover:border-white/25 shadow-lg shadow-black/40'
      } hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Ribbon / Badge */}
      {product.featured && (
        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded bg-blue-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest shadow-md">
          Most Comprehensive
        </div>
      )}

      {/* Image Cover Container - 3:4 Aspect Ratio */}
      <div className="relative aspect-[3/4] w-full bg-[#080d17] overflow-hidden border-b border-white/10">
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle Bottom Scrim for Visual Continuity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-80"></div>

        {/* Hover Floating Action for Quick Preview */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs p-4">
          {product.id === 'extreme-path' && onOpenSyllabus && (
            <button
              onClick={onOpenSyllabus}
              className="px-3.5 py-2 rounded-md bg-white text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Inspect 8 Modules</span>
            </button>
          )}

          {product.id === 'inevitable-self' && onOpenDashboardDemo && (
            <button
              onClick={onOpenDashboardDemo}
              className="px-3.5 py-2 rounded-md bg-white text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>Test Dashboard</span>
            </button>
          )}

          {product.id === 'architecture-of-inevitable' && onOpenReader && (
            <button
              onClick={onOpenReader}
              className="px-3.5 py-2 rounded-md bg-white text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Read Sample</span>
            </button>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Unboxed Metadata (Zero-Pill Rule) */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2.5">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">
            {product.badge}
          </span>
          <span aria-hidden="true">·</span>
          <span>{product.format.split('+')[0]}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-blue-300 transition-colors">
          {product.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-slate-400 font-medium italic mb-3 leading-relaxed">
          {product.tagline}
        </p>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {/* Features / Highlights List */}
        <div className="mb-6 flex-grow space-y-2.5 pt-4 border-t border-white/5">
          {product.highlights.slice(0, 4).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
              <span className="leading-snug">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Specific Interactive Hook per Product */}
        <div className="mb-5">
          {product.id === 'extreme-path' && onOpenSyllabus && (
            <button
              onClick={onOpenSyllabus}
              className="w-full py-2 px-3 rounded bg-blue-950/30 hover:bg-blue-900/40 text-blue-300 text-xs font-semibold border border-blue-800/30 flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Explore 8-Module Syllabus</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          {product.id === 'inevitable-self' && onOpenDashboardDemo && (
            <button
              onClick={onOpenDashboardDemo}
              className="w-full py-2 px-3 rounded bg-blue-950/30 hover:bg-blue-900/40 text-blue-300 text-xs font-semibold border border-blue-800/30 flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Preview Living Dashboard Tool</span>
              <Compass className="w-3.5 h-3.5" />
            </button>
          )}

          {product.id === 'architecture-of-inevitable' && onOpenReader && (
            <button
              onClick={onOpenReader}
              className="w-full py-2 px-3 rounded bg-blue-950/30 hover:bg-blue-900/40 text-blue-300 text-xs font-semibold border border-blue-800/30 flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Read Chapter 1: The Fragmented Trap</span>
              <BookOpen className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Pricing Row */}
        <div className="pt-4 border-t border-white/10 flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-serif font-bold text-white tabular-nums tracking-tight">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-500 line-through tabular-nums">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-[11px] text-slate-400 font-normal">USD · Lifetime</span>
          </div>

          {onToggleBundleSelect && (
            <button
              onClick={() => onToggleBundleSelect(product.id)}
              className={`text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                isSelectedForBundle
                  ? 'bg-blue-900/40 text-blue-300 border-blue-500/50'
                  : 'text-slate-400 hover:text-slate-200 border-white/10 hover:border-white/20'
              }`}
            >
              {isSelectedForBundle ? '✓ In Bundle' : '+ Add to Bundle'}
            </button>
          )}
        </div>

        {/* Primary Buy CTA */}
        <div className="grid grid-cols-1 gap-2">
          <a
            href={product.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-blue-500 hover:bg-blue-400 rounded-md transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <span>Buy on Gumroad</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
