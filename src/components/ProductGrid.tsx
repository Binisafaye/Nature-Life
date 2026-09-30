import React from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS, Product } from '../data/products';
import { Check, ShieldCheck, Download, Sparkles, ExternalLink } from 'lucide-react';

interface ProductGridProps {
  onOpenSyllabus: () => void;
  onOpenDashboardDemo: () => void;
  onOpenReader: () => void;
  onQuickCheckout: (product: Product) => void;
  selectedBundleIds: string[];
  onToggleBundleSelect: (productId: string) => void;
  onBuyBundle: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onOpenSyllabus,
  onOpenDashboardDemo,
  onOpenReader,
  onQuickCheckout,
  selectedBundleIds,
  onToggleBundleSelect,
  onBuyBundle,
}) => {
  return (
    <section id="products" className="py-24 bg-[#080d18] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            The Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Three Integrated Systems. One Philosophy.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-balance">
            One masterclass for the psychological endurance of extreme goals, one operational system
            for daily dashboard alignment, and one diagnostic book analyzing why fragmented habits
            collapse.
          </p>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenSyllabus={product.id === 'extreme-path' ? onOpenSyllabus : undefined}
              onOpenDashboardDemo={product.id === 'inevitable-self' ? onOpenDashboardDemo : undefined}
              onOpenReader={product.id === 'architecture-of-inevitable' ? onOpenReader : undefined}
              onQuickCheckout={onQuickCheckout}
              isSelectedForBundle={selectedBundleIds.includes(product.id)}
              onToggleBundleSelect={onToggleBundleSelect}
            />
          ))}
        </div>

        {/* The Master Trilogy Bundle Feature */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1627] via-[#101c33] to-[#0d1627] border border-blue-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Master Trilogy Collection</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                Get All 3 Programs &amp; Master The Full Architecture
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Combine the foundational diagnosis of the book, the 5-week living dashboard of The
                Inevitable Self, and the 8-module psychological engine of The Extreme Path. One
                synchronized library for a lifetime of relentless completion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>The Extreme Path ($34)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>The Inevitable Self ($27)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>The Architecture Book ($7)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center p-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-1">
                Complete Bundle Value
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-serif font-bold text-white tabular-nums tracking-tight">
                  $49
                </span>
                <span className="text-sm text-slate-500 line-through tabular-nums">$68</span>
                <span className="text-xs text-emerald-400 font-semibold">Save $19 (28%)</span>
              </div>
              <p className="text-[11px] text-slate-400 text-center lg:text-right mb-4">
                Instant delivery via Gumroad · Lifetime access · 30-day guarantee
              </p>

              <a
                href="https://biniyamsafayo.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-md bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 cursor-pointer"
              >
                <span>Get Full Bundle on Gumroad</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
