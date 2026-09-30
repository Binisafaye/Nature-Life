import React, { useState } from 'react';
import {
  Compass,
  Target,
  Zap,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const DashboardSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compass' | 'targets' | 'engine' | 'audit'>('compass');
  const [isMinimumViableDay, setIsMinimumViableDay] = useState<boolean>(false);
  const [completedHabits, setCompletedHabits] = useState<Record<string, boolean>>({
    'deep-work': true,
    'friction-audit': true,
    'physical-priming': false,
    'digital-fast': false,
  });

  const toggleHabit = (id: string) => {
    setCompletedHabits((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completedHabits).filter(Boolean).length;
  const habitPercentage = Math.round((completedCount / 4) * 100);

  return (
    <section id="dashboard" className="py-24 bg-[#060a12] border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            Interactive System Preview
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            The Living Dashboard
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-balance">
            Fragmented tools destroy momentum. The Living Dashboard unifies vision, lead metrics,
            daily deep work, and weekly calibration into a single, cohesive operating system. Test
            the 4 core layers below.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-xl bg-[#0c1322] border border-blue-500/25 shadow-2xl overflow-hidden">
          {/* Top Control Bar / Segmented Tabs */}
          <div className="bg-[#090e19] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono font-medium text-slate-300">
                LIVING_DASHBOARD :: ACTIVE_STATE
              </span>
            </div>

            {/* Segmented Tab Controls (Buttons with click handlers) */}
            <div className="flex items-center gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveTab('compass')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'compass'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>1. The Compass</span>
              </button>

              <button
                onClick={() => setActiveTab('targets')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'targets'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>2. The Targets</span>
              </button>

              <button
                onClick={() => setActiveTab('engine')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'engine'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>3. Daily Engine</span>
              </button>

              <button
                onClick={() => setActiveTab('audit')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'audit'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>4. Calibration</span>
              </button>
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="p-6 sm:p-8 min-h-[380px]">
            {/* TAB 1: THE COMPASS */}
            {activeTab === 'compass' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* The North Star Vision */}
                  <div className="p-5 rounded-lg bg-[#0f192b]/70 border border-blue-500/20">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                      Primary Direction · 10-Year Horizon
                    </span>
                    <h4 className="text-base font-serif font-bold text-white mb-2">
                      The Architect&apos;s Horizon
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Build a sovereign creative practice that produces enduring work without
                      sacrificing health, autonomy, or intellectual depth. Never dependent on
                      ephemeral algorithmic approval.
                    </p>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>Status: Aligned</span>
                      <span className="text-emerald-400 font-mono">100% Clarity</span>
                    </div>
                  </div>

                  {/* The Anti-Vision */}
                  <div className="p-5 rounded-lg bg-[#1a1217]/70 border border-rose-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                      <span className="text-[11px] font-mono text-rose-400 uppercase tracking-widest font-semibold">
                        The Anti-Vision · What You Must Escape
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-white mb-2">
                      The Reactive Drift (The Hell to Avoid)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Waking up at 45 having started 20 projects and finished none. Living inside a
                      frenetic haze of notification pings, reactive emails, and superficial tasks.
                      Exhausted every evening, yet having built nothing that lasts.
                    </p>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>Repulsion Force: High</span>
                      <span className="text-rose-400 font-mono">Daily Fuel</span>
                    </div>
                  </div>
                </div>

                {/* Non-Negotiable Boundaries */}
                <div className="p-5 rounded-lg bg-black/40 border border-white/5">
                  <h5 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Non-Negotiable Operational Boundaries (3 Rules)
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                    <div className="p-3 rounded bg-white/5 border border-white/5">
                      <strong className="block text-white font-medium mb-1">
                        1. Digital Sanctum
                      </strong>
                      <span>Zero screens or social inputs during the first 60 minutes after waking.</span>
                    </div>
                    <div className="p-3 rounded bg-white/5 border border-white/5">
                      <strong className="block text-white font-medium mb-1">
                        2. The 90-Min Lock
                      </strong>
                      <span>One 90-minute unbroken block of deep work completed before lunch.</span>
                    </div>
                    <div className="p-3 rounded bg-white/5 border border-white/5">
                      <strong className="block text-white font-medium mb-1">
                        3. The Two-Day Rule
                      </strong>
                      <span>Never allow two consecutive days of missed core execution under any pretext.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: THE TARGETS */}
            {activeTab === 'targets' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lag vs Lead Measure */}
                  <div className="p-5 rounded-lg bg-[#0f192b]/70 border border-blue-500/20">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                      Lag Measure (The Outcome You Don&apos;t Control)
                    </span>
                    <h4 className="text-lg font-serif font-bold text-white mb-2">
                      Publish a Seminal 300-Page Book
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Outcome metrics are lagging indicators. Staring at the goal creates anxiety.
                      Controlling the lead input creates inevitability.
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                        Lead Measure (The Input You Command)
                      </span>
                      <div className="flex items-center justify-between text-xs text-slate-200 p-2.5 rounded bg-black/40 border border-emerald-500/20">
                        <span>4x 90-min Deep Writing Sessions</span>
                        <span className="font-mono text-emerald-400 font-bold">3 of 4 Done</span>
                      </div>
                    </div>
                  </div>

                  {/* Pre-Mortem & Contingencies */}
                  <div className="p-5 rounded-lg bg-black/40 border border-white/5 space-y-3">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block font-semibold">
                      Pre-Mortem Diagnosis · Why We Will Fail
                    </span>
                    <h4 className="text-base font-serif font-bold text-white">
                      Identified Failure Vector: Emergency Hijacking
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Unexpected client emergencies or travel will derail the writing morning, causing
                      guilt, which leads to total abandonment for the remainder of the week.
                    </p>

                    <div className="p-3 rounded bg-amber-950/20 border border-amber-500/30 text-xs text-slate-200">
                      <strong className="block text-amber-400 font-mono mb-1">
                        IF / THEN CONTINGENCY PROTOCOL:
                      </strong>
                      <span>
                        IF my morning is completely consumed by urgent fires, THEN I immediately
                        switch to the 20-minute Minimum Viable Protocol at 8:30 PM.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: THE DAILY ENGINE */}
            {activeTab === 'engine' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* MVD Mode Switch */}
                <div className="p-4 rounded-lg bg-slate-900/60 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span>Operational Mode:</span>
                      <span
                        className={
                          isMinimumViableDay
                            ? 'text-amber-400 font-mono'
                            : 'text-emerald-400 font-mono'
                        }
                      >
                        {isMinimumViableDay ? 'MINIMUM VIABLE DAY (MVD)' : 'STANDARD DEEP ENGINE'}
                      </span>
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Toggle to MVD when sick, traveling, or experiencing severe energy depletion.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsMinimumViableDay(!isMinimumViableDay)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                      isMinimumViableDay
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-white/10 hover:text-white'
                    }`}
                  >
                    {isMinimumViableDay ? 'Switch to Standard Day' : 'Activate Minimum Viable Day'}
                  </button>
                </div>

                {/* Habit & Execution Engine */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      id: 'deep-work',
                      title: isMinimumViableDay ? '20-Min Micro Deep Session' : '90-Min Core Deep Block',
                      desc: isMinimumViableDay
                        ? 'Review and edit 1 single page to preserve momentum'
                        : 'Draft 1,000 words on Chapter 3 with phone locked in drawer',
                      requiredForMvd: true,
                    },
                    {
                      id: 'friction-audit',
                      title: 'Friction Removal Log',
                      desc: 'Record the exact point where procrastination threatened the session',
                      requiredForMvd: true,
                    },
                    {
                      id: 'physical-priming',
                      title: isMinimumViableDay ? '10-Min Walk' : '45-Min Heavy Training',
                      desc: 'Physical stress inoculation to regulate nervous system',
                      requiredForMvd: false,
                    },
                    {
                      id: 'digital-fast',
                      title: 'Sunset Device Curfew',
                      desc: 'Screens powered off 60 minutes prior to sleep',
                      requiredForMvd: false,
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleHabit(item.id)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        completedHabits[item.id]
                          ? 'bg-blue-950/20 border-blue-500/40 text-white'
                          : 'bg-black/30 border-white/5 text-slate-400 hover:border-white/15'
                      }`}
                    >
                      <div className="mt-0.5">
                        <CheckCircle2
                          className={`w-5 h-5 ${
                            completedHabits[item.id]
                              ? 'text-blue-400 fill-blue-500/20'
                              : 'text-slate-600'
                          }`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-xs font-semibold text-white">
                            {item.title}
                          </strong>
                          {item.requiredForMvd && (
                            <span className="text-[10px] text-amber-400 font-mono">
                              [MVD Rule]
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Score bar */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Day Momentum Score:</span>
                  <span className="font-mono text-blue-400 font-bold tabular-nums">
                    {completedCount} / 4 Protocols Complete ({habitPercentage}%)
                  </span>
                </div>
              </div>
            )}

            {/* TAB 4: SUNDAY CALIBRATION */}
            {activeTab === 'audit' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-5 rounded-lg bg-[#0f192b]/70 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest font-semibold">
                      Sunday 15-Minute Audit Routine
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Cycle: Week 3 of 52
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-white mb-2">
                    System Health &amp; Course Correction
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    The calibration loop prevents drift. A 1-degree drift over 30 days puts you in an
                    entirely different continent. Every Sunday evening, you answer four diagnostic questions:
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-start gap-2">
                      <span className="text-blue-400 font-mono font-bold">Q1.</span>
                      <span>Did I hit my lead measures (4 deep work blocks), or did I rely on emotional willpower?</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-start gap-2">
                      <span className="text-blue-400 font-mono font-bold">Q2.</span>
                      <span>Where did friction emerge, and what pre-commitment will remove it by Monday morning?</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-start gap-2">
                      <span className="text-blue-400 font-mono font-bold">Q3.</span>
                      <span>Did I violate any non-negotiable boundaries, and what was the root trigger?</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Simulator Footer Callout */}
          <div className="bg-[#080d17] px-6 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>
                Pre-built templates for Notion, Google Sheets, Excel &amp; Printable PDF are
                included in <strong>The Inevitable Self ($27)</strong>.
              </span>
            </div>

            <a
              href="https://biniyamsafayo.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>Get the Dashboard on Gumroad</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
