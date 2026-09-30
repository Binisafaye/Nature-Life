import React, { useState } from 'react';
import { X, Layers, ExternalLink, ChevronDown, ChevronUp, Clock, BookOpen, Brain } from 'lucide-react';
import { PRODUCTS, ProductModule } from '../data/products';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  if (!isOpen) return null;

  const extremePath = PRODUCTS.find((p) => p.id === 'extreme-path');
  const modules: ProductModule[] = extremePath?.modules || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1322] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#080d17]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
              <Layers className="w-4 h-4" />
              <span>THE EXTREME PATH · 8-WEEK SYLLABUS INSPECTOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              The Architecture of Extraordinary Achievement
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close syllabus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Module List */}
        <div className="p-6 overflow-y-auto space-y-3.5 divide-y divide-white/5">
          {modules.map((mod) => {
            const isExpanded = expandedModule === mod.number;
            return (
              <div
                key={mod.number}
                className={`pt-3.5 first:pt-0 rounded-lg transition-colors ${
                  isExpanded ? 'bg-white/[0.02]' : ''
                }`}
              >
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : mod.number)}
                  className="w-full text-left p-3.5 flex items-start justify-between gap-4 cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      0{mod.number}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{mod.focus}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Clock className="w-3 h-3" />
                      {mod.estimatedTime}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 ml-10 space-y-3 text-xs text-slate-300 animate-in fade-in duration-150">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                      <div className="flex items-start gap-2">
                        <Brain className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-200">Psychological Mechanism:</strong>{' '}
                          <span className="text-slate-400">{mod.psychologicalMechanism}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-200">Practical Deliverable:</strong>{' '}
                          <span className="text-slate-400">{mod.practicalOutput}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-white/10 bg-[#080d17] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span>Includes 62-page printable Extreme Goal Blueprint &amp; audio feeds.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded border border-white/10 cursor-pointer"
            >
              Close
            </button>
            <a
              href="https://biniyamsafayo.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-blue-500 hover:bg-blue-400 rounded transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <span>Enroll on Gumroad ($34)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
