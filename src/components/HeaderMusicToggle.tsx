'use client';

import { useAudio } from './AudioProvider';

export function HeaderMusicToggle() {
  const { isPlaying, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      title={isPlaying ? 'Ambient music: Playing (Click to mute)' : 'Ambient music: Muted (Click to play)'}
      className="group relative flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-w-[32px] sm:min-h-[32px] p-2 rounded-md transition-colors text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent cursor-pointer"
    >
      {isPlaying ? (
        <div className="flex items-end gap-[2px] h-[13px] w-[13px] pb-[1px]" aria-hidden="true">
          <span className="w-[2px] bg-accent rounded-full animate-eq-1 h-full" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-2 h-2/3" />
          <span className="w-[2px] bg-accent rounded-full animate-eq-3 h-4/5" />
        </div>
      ) : (
        <span
          className="text-[14px] leading-none font-medium text-muted group-hover:text-accent transition-colors select-none"
          aria-hidden="true"
        >
          ♪
        </span>
      )}
    </button>
  );
}
