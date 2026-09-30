import React, { useState } from 'react';
import { Plus, Minus, Search, Mail, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Access', 'Recommendation', 'Philosophy', 'Tools', 'Guarantee'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#080d17] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Everything you need to know about delivery, formatting, prerequisites, and methodology
            before beginning.
          </p>
        </div>

        {/* Filter Controls: Search & Category Buttons */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search answers (e.g., refund, software, workbook)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0c1322] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/40 rounded-lg border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isOpen ? 'bg-[#0e1728] border-blue-500/40' : 'bg-[#0c1322] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-blue-400">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 rounded-xl bg-[#0c1322] border border-white/10">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or email the author below.
            </div>
          )}
        </div>

        {/* Direct Author Contact Box */}
        <div className="mt-12 p-6 rounded-xl bg-black/40 border border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-xs font-semibold text-white">Have a specific question?</strong>
              <span className="text-[11px] text-slate-400">Reach the author directly at binisafaye@gmail.com</span>
            </div>
          </div>

          <a
            href="mailto:binisafaye@gmail.com"
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded transition-colors whitespace-nowrap cursor-pointer"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};
