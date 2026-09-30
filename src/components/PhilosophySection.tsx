import React from 'react';
import { Shield, Brain, Layers, Target, Scale, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#060a12] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Manifesto / Right 5 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              The Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              No &ldquo;just believe in yourself.&rdquo; <br />
              No toxic positivity. <br />
              Only <em className="italic text-blue-400 font-normal">architecture.</em>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Fragmented systems fail. When your vision lives in a leather journal, your goals in a
              project app, and your daily habits in a mobile notification widget, you aren&apos;t
              building a life — you&apos;re managing a museum of disconnected ambitions. Every tool
              switch levies a cognitive tax that drains your prefrontal cortex before you ever touch the
              actual work.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              True transformation is not about adding more tools. It is about centralization — one
              living dashboard where a shift in any habit immediately reverberates up into your 10-year
              horizon. Where cognitive science exists, these materials cite it. Where classical
              philosophy exists, they name it. The aim is to convert the motivated dreamer into an honest,
              durable, self-knowing operator — someone who can pursue an extreme goal for years without
              becoming bitter, delusional, or burned out.
            </p>

            <div className="p-5 rounded-xl bg-[#0c1424] border border-blue-500/20 mt-6">
              <span className="text-xs uppercase tracking-wider text-blue-400 font-mono font-semibold block mb-1">
                The Core Postulate
              </span>
              <p className="text-sm font-serif italic text-slate-200">
                &ldquo;Willpower is seed capital. It exists to construct architecture. Once the
                architecture stands, it must carry the weight of your life on the days when you feel
                nothing at all.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: 5 Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                icon: Brain,
                title: 'Psychologically Grounded',
                desc: 'Explains the mechanical why behind behavior — from Rotter’s locus of control to Bandura’s self-efficacy and Gollwitzer’s implementation intentions.',
              },
              {
                icon: Scale,
                title: 'Philosophically Honest',
                desc: 'Faces luck, genetics, circumstance, and brutal randomness without lying to yourself or selling magical thinking.',
              },
              {
                icon: Target,
                title: 'Evidence Over Slogans',
                desc: 'Belief follows verifiable evidence, not morning affirmations. Real micro-wins are the only currency your internal nervous system accepts.',
              },
              {
                icon: Layers,
                title: 'Systems Over Strength',
                desc: 'Never rely on daily motivation. Invest willpower into automated constraints, friction reduction, and pre-committed rules.',
              },
              {
                icon: Shield,
                title: 'Built to Finish',
                desc: 'Keep the purpose fixed, but keep the methods radically fluid. When unexpected disasters strike, the Minimum Viable Day ensures zero days never happen.',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0c1322] border border-white/10 hover:border-blue-500/30 transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Attributed Testimonials */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-mono block mb-1">
              Field Reports
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Tested Under Real Pressure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0c1322] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-blue-500/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <strong className="block text-white font-medium">{t.name}</strong>
                    <span className="text-slate-400">{t.role}</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase">
                    {t.productUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
