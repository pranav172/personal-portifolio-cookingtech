'use client';

import { useAudio } from './AudioProvider';

export function MusicToggle({ className = '' }: { className?: string }) {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      className={`inline-flex items-center gap-1.5 cursor-pointer text-muted hover:text-foreground transition-colors ${className}`}
    >
      {isPlaying ? (
        <span className="inline-flex items-end gap-[2px] h-3 w-3" aria-hidden="true">
          <span className="w-[2px] bg-accent rounded-full animate-eq-1 h-full" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-2 h-2/3" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-3 h-4/5" />
        </span>
      ) : (
        <span aria-hidden="true">♪</span>
      )}
      <span>music</span>
    </button>
  );
}

export function MusicFloatingChip() {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      title={isPlaying ? 'Ambient music: Playing (Click to mute)' : 'Ambient music: Off (Click to play)'}
      className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm ${
        isPlaying
          ? 'bg-surface/90 border-accent/40 text-foreground'
          : 'bg-surface/75 border-border text-muted hover:text-foreground hover:border-accent/30'
      }`}
    >
      {isPlaying ? (
        <div className="flex items-end gap-[2px] h-[13px] w-[13px] pb-[1px]" aria-hidden="true">
          <span className="w-[2px] bg-accent rounded-full animate-eq-1 h-full" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-2 h-2/3" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-3 h-4/5" />
        </div>
      ) : (
        <span className="text-[13px] text-muted group-hover:text-accent transition-colors" aria-hidden="true">
          ♪
        </span>
      )}
      <span className="tracking-tight">{isPlaying ? 'now playing' : 'ambient'}</span>
      <span className={`text-[10px] ${isPlaying ? 'text-accent' : 'text-muted/60'}`}>
        {isPlaying ? '●' : 'off'}
      </span>
    </button>
  );
}
