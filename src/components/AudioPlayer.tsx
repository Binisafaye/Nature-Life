import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, X, ChevronDown, ChevronUp, FastForward } from 'lucide-react';

interface AudioPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isOpen,
  onClose,
  isPlaying,
  onTogglePlay,
}) => {
  const [progress, setProgress] = useState(28);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5 * playbackSpeed));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  if (!isOpen) return null;

  const totalSeconds = 225; // 3m 45s
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const handleSpeedToggle = () => {
    if (playbackSpeed === 1) setPlaybackSpeed(1.25);
    else if (playbackSpeed === 1.25) setPlaybackSpeed(1.5);
    else setPlaybackSpeed(1);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-md w-[calc(100vw-2.5rem)] sm:w-96 bg-[#0c1322] border border-blue-500/30 rounded-xl shadow-2xl p-4 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Player Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
            <Volume2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="truncate">
            <h4 className="text-xs font-semibold text-white truncate">
              Author&apos;s Voice Note
            </h4>
            <p className="text-[11px] text-slate-400 truncate">
              Why Motivation Evaporates &amp; Architecture Endures
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close audio player"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Controls & Scrubber */}
      <div className="pt-3">
        {/* Equalizer animation bars */}
        <div className="flex items-center justify-center gap-1 h-5 mb-2">
          {[40, 70, 90, 30, 80, 100, 45, 60, 85, 30, 95, 50, 75, 40, 60].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-blue-500/60 transition-all duration-150 ${
                isPlaying ? 'animate-pulse' : 'opacity-30'
              }`}
              style={{
                height: isPlaying ? `${Math.max(4, (h * (progress % 20 + 5)) / 25)}px` : '4px',
                animationDelay: `${i * 60}ms`,
              }}
            ></span>
          ))}
        </div>

        {/* Progress bar */}
        <div
          className="relative w-full h-1.5 bg-slate-800 rounded-full cursor-pointer mb-2 overflow-hidden"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            setProgress(clickPos * 100);
          }}
        >
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Time and buttons */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>{formatTime(currentSeconds)}</span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSpeedToggle}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 hover:text-white bg-slate-800/80 cursor-pointer"
              title="Change speed"
            >
              {playbackSpeed}x
            </button>

            <button
              onClick={onTogglePlay}
              className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-400 text-slate-950 flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-md shadow-blue-500/30"
              aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current translate-x-0.5" />
              )}
            </button>
          </div>

          <span>{formatTime(totalSeconds)}</span>
        </div>
      </div>

      {/* Transcript toggle */}
      <div className="mt-3 pt-2 border-t border-white/5">
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full flex items-center justify-between text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer"
        >
          <span>Read key quote from this clip</span>
          {showTranscript ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {showTranscript && (
          <div className="mt-2 p-2.5 rounded bg-black/40 text-[11px] text-slate-300 font-serif italic border border-white/5 leading-relaxed">
            &ldquo;When people ask me why they abandoned their last five attempts at greatness, they
            always blame their willpower. I tell them: You don’t have a discipline problem. You have
            an architectural problem. You tried to heat a city using a box of matches.&rdquo;
          </div>
        )}
      </div>
    </div>
  );
};
