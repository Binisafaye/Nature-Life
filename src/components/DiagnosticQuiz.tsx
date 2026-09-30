import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, ExternalLink } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface DiagnosticQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
}

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    points: number; // higher = higher fragility
    feedback: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Where do your long-term goals and daily actions currently live?',
    subtitle: 'System Fragmentation Audit',
    options: [
      {
        label: 'Scattered across 3+ places: a journal, a to-do app, phone notes, and random bookmarks.',
        points: 25,
        feedback: 'Severe cognitive tax. You pay switching costs before doing any actual work.',
      },
      {
        label: 'In 1 or 2 apps, but I regularly abandon them when life gets busy and have to "reboot".',
        points: 15,
        feedback: 'Cyclical reboot syndrome. The system is too fragile to survive low-energy weeks.',
      },
      {
        label: 'Inside a single, unified living dashboard that I calibrate weekly without fail.',
        points: 0,
        feedback: 'Optimal architectural alignment. Low cognitive friction.',
      },
    ],
  },
  {
    id: 2,
    question: 'What carries your execution on days when you feel exhausted or completely unmotivated?',
    subtitle: 'Fuel Dependency Audit',
    options: [
      {
        label: 'I push through using pure willpower and self-admonishment, or I spiral into guilt.',
        points: 25,
        feedback: 'Ego depletion risk. Willpower is seed capital, not daily operational fuel.',
      },
      {
        label: 'I seek motivational content (podcasts, YouTube, quotes) to get fired up again.',
        points: 20,
        feedback: 'Motivation is the weather. When the wind dies, progress halts.',
      },
      {
        label: 'A pre-set Minimum Viable Protocol (MVD) that ensures I never register a zero day.',
        points: 0,
        feedback: 'Resilient architecture. The system carries you when feelings fail.',
      },
    ],
  },
  {
    id: 3,
    question: 'How clearly have you defined your "Anti-Vision" — the specific future you refuse to inhabit?',
    subtitle: 'Psychological Propulsion Audit',
    options: [
      {
        label: 'Vaguely. I have general worries, but I have never articulated the exact disaster scenario.',
        points: 25,
        feedback: 'Half-powered engine. The psychological push away from ruin is often stronger than positive vision.',
      },
      {
        label: 'Somewhat. I know what I dislike about my current routine, but lack written boundaries.',
        points: 15,
        feedback: 'Moderate leak. Without explicit non-negotiable boundaries, reactive drift takes over.',
      },
      {
        label: 'Crystallized in writing. I know precisely what mediocrity looks like and review it regularly.',
        points: 0,
        feedback: 'Maximum repulsion force. Fear converted into operational discipline.',
      },
    ],
  },
  {
    id: 4,
    question: 'What is your reaction when an unforeseen crisis destroys your planned week?',
    subtitle: 'Endurance & Friction Audit',
    options: [
      {
        label: 'I feel like a failure, give up for the rest of the month, and wait for "next Monday".',
        points: 25,
        feedback: 'All-or-nothing cognitive distortion. Fatal for multi-year ambitions.',
      },
      {
        label: 'I scramble in panic, work late into the night, and burn out three days later.',
        points: 15,
        feedback: 'Reactive volatility. Unsustainable for high-demand goals.',
      },
      {
        label: 'I keep the purpose fixed and the method fluid, using If/Then pre-mortem protocols.',
        points: 0,
        feedback: 'True endurance. Anti-fragile execution that absorbs chaos.',
      },
    ],
  },
];

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Calculate score
  const totalPoints = answers.reduce((sum, optIdx, qIdx) => {
    return sum + QUESTIONS[qIdx].options[optIdx].points;
  }, 0);

  // Recommendation logic
  let recommendation = {
    title: 'The Architecture of the Inevitable',
    price: '$7',
    id: 'architecture-of-inevitable',
    reason:
      'Your system suffers from tool fragmentation and cognitive leakage. You need the foundational diagnostic text to simplify everything before attempting complex frameworks.',
    severity: 'Moderate Fragmentation',
  };

  if (totalPoints > 60) {
    recommendation = {
      title: 'The Extreme Path',
      price: '$34',
      id: 'extreme-path',
      reason:
        'Your answers indicate high willpower depletion and severe drift vulnerability. You need the complete 8-module psychological overhaul to rebuild your internal locus of control and endurance.',
      severity: 'Critical Architecture Vulnerability',
    };
  } else if (totalPoints > 30) {
    recommendation = {
      title: 'The Inevitable Self',
      price: '$27',
      id: 'inevitable-self',
      reason:
        'You have the ambition, but your daily habits decouple from your long-term vision. You need the 5-week Living Dashboard system to install non-negotiable boundaries and lead metrics.',
      severity: 'Operational Drift Risk',
    };
  } else {
    recommendation = {
      title: 'The Master Trilogy Bundle',
      price: '$49',
      id: 'extreme-path',
      reason:
        'You have solid fundamentals. To pursue extraordinary, 10-year goals at the highest tier of agency, study the complete integrated trilogy.',
      severity: 'High Foundation · Ready for Mastery',
    };
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0c1322] border border-blue-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Goal Architecture Diagnostic · 60s
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close diagnostic"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isCompleted ? (
          <div>
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Question {currentStep + 1} of 4</span>
              <span>{Math.round(((currentStep) / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
              ></div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium block mb-1">
                {QUESTIONS[currentStep].subtitle}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                {QUESTIONS[currentStep].question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full text-left p-4 rounded-xl bg-slate-900/60 hover:bg-blue-950/40 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer group flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-400 text-xs font-mono font-bold text-slate-400 group-hover:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white leading-relaxed">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* RESULT VIEW */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-xl bg-[#0f192b] border border-blue-500/30 text-center">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono block mb-1">
                Diagnostic Complete
              </span>
              <h4 className="text-2xl font-serif font-bold text-white mb-2">
                System Vulnerability: <span className="text-blue-400 tabular-nums">{totalPoints}%</span>
              </h4>
              <p className="text-xs text-amber-400 font-mono uppercase tracking-wider mb-4">
                [{recommendation.severity}]
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
                {recommendation.reason}
              </p>
            </div>

            {/* Prescribed Solution Card */}
            <div className="p-5 rounded-xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-blue-400 uppercase tracking-widest font-semibold block mb-0.5">
                  Recommended Starting Point
                </span>
                <h5 className="text-base font-serif font-bold text-white">
                  {recommendation.title}
                </h5>
                <p className="text-xs text-slate-400">
                  One-time purchase · Instant delivery via Gumroad
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-serif font-bold text-white tabular-nums">
                  {recommendation.price}
                </span>
                <a
                  href="https://biniyamsafayo.gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <span>Get on Gumroad</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Diagnostic</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
