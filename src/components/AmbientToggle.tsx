'use client';

import { useAudio } from './AudioProvider';

export function AmbientToggle() {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Pause ambient background sound' : 'Play ambient background sound'}
      className={`flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent rounded-xs ${
        isPlaying ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
      }`}
      title={isPlaying ? 'Ambient sound: Playing (Click to mute)' : 'Ambient sound: Off (Click to play)'}
    >
      <span className="text-[12px] leading-none" aria-hidden="true">♪</span>
      <span>ambient</span>

      {/* Animated Soundwave Equalizer when playing */}
      {isPlaying ? (
        <span className="inline-flex items-end gap-[1.5px] h-3 w-3 ml-0.5" aria-hidden="true">
          <span className="w-[2px] bg-accent rounded-full animate-eq-1 h-full" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-2 h-2/3" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-3 h-4/5" />
        </span>
      ) : (
        <span className="text-[10px] text-muted/70">(off)</span>
      )}
    </button>
  );
}
