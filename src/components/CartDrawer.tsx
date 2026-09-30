import React from 'react';
import { X, Trash2, ExternalLink, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  onRemoveItem: (id: string) => void;
  onAddAllBundle: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  selectedIds,
  onRemoveItem,
  onAddAllBundle,
}) => {
  if (!isOpen) return null;

  const selectedProducts = PRODUCTS.filter((p) => selectedIds.includes(p.id));
  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.price, 0);

  // Bundle discount: if all 3 selected, price is $49 instead of $68
  const isFullTrilogy = selectedProducts.length === 3;
  const finalPrice = isFullTrilogy ? 49 : rawTotal;
  const discountAmount = isFullTrilogy ? 68 - 49 : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-[#0c1322] border-l border-white/10 flex flex-col justify-between shadow-2xl p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-serif font-bold text-white">Your Selected Programs</h3>
                <span className="text-xs text-slate-500 font-mono">({selectedProducts.length})</span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Empty state or Product List */}
            {selectedProducts.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto text-slate-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-white">No programs selected yet</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Select any program or activate the Master Trilogy bundle to receive lifetime access.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onAddAllBundle}
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
                  >
                    Select All 3 Programs ($49 Bundle)
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-12 h-16 object-cover rounded bg-black/40 border border-white/10 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-white">{p.title}</h4>
                        <span className="text-[11px] text-blue-400 font-mono block mt-0.5">
                          ${p.price} USD
                        </span>
                        <span className="text-[10px] text-slate-500 block">Instant Gumroad Delivery</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(p.id)}
                      className="text-slate-500 hover:text-rose-400 p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Bundle Prompt if only 1 or 2 selected */}
                {!isFullTrilogy && (
                  <div className="p-3.5 rounded-lg bg-blue-950/20 border border-blue-500/30 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="font-semibold text-white block">Complete the Trilogy</span>
                      <span className="text-[11px] text-slate-400">Get all 3 for $49 and save $19</span>
                    </div>
                    <button
                      onClick={onAddAllBundle}
                      className="px-3 py-1.5 rounded bg-blue-500 text-slate-950 text-xs font-semibold hover:bg-blue-400 transition-colors cursor-pointer shrink-0"
                    >
                      Upgrade Bundle
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Drawer Bottom Checkout Zone */}
          {selectedProducts.length > 0 && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              {/* Pricing Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono">${rawTotal} USD</span>
                </div>
                {isFullTrilogy && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Trilogy Discount (28%)</span>
                    <span className="font-mono">-${discountAmount} USD</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-serif font-bold text-white pt-2 border-t border-white/5">
                  <span>Total Amount</span>
                  <span className="font-mono text-xl text-blue-400">${finalPrice} USD</span>
                </div>
              </div>

              {/* Secure Checkout CTA */}
              <a
                href="https://biniyamsafayo.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-md bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>Checkout on Gumroad (${finalPrice})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-slate-500 text-center">
                Secure 256-bit encrypted checkout handled by Gumroad. Lifetime access.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
