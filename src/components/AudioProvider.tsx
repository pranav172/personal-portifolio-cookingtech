'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggle: () => {},
  play: () => {},
  pause: () => {},
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play audio safely
  const play = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  // Pause audio safely
  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  // Global custom event listener (for CommandPalette & Terminal)
  useEffect(() => {
    const handleToggle = () => toggle();
    window.addEventListener('toggle-ambient', handleToggle);
    return () => window.removeEventListener('toggle-ambient', handleToggle);
  }, [toggle]);

  // Sync state with native audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      // Loop seamlessly
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, toggle, play, pause }}>
      {/* Root persistent audio element — never interrupts on page transitions */}
      <audio
        ref={audioRef}
        src="/audio/ambient.mp3"
        preload="metadata"
        loop
        aria-hidden="true"
        className="hidden"
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
