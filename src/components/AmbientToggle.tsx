'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export function AmbientToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Warm pentatonic / lo-fi frequencies (D minor 9 / F major 7 chill chords)
  // [D3, F3, A3, C4, E4, G4, A4]
  const CHORD_FREQS = [
    [146.83, 220.0, 261.63, 329.63], // Dm7 (D3, A3, C4, E4)
    [174.61, 261.63, 329.63, 392.0], // Fmaj7 (F3, C4, E4, G4)
    [130.81, 196.0, 261.63, 329.63], // Cmaj7 (C3, G3, C4, E4)
    [220.0, 261.63, 329.63, 392.0],  // Am7 (A3, C4, E4, G4)
  ];

  const stopAudio = useCallback(() => {
    isRunningRef.current = false;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const startAudio = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).webkitAudioContext;

      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      isRunningRef.current = true;
      setIsPlaying(true);

      // Master volume (gentle, warm background volume)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Warm low-pass tape filter (muffles harsh high frequencies)
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(520, ctx.currentTime);
      filter.Q.setValueAtTime(1.2, ctx.currentTime);
      filter.connect(masterGain);

      // Soft vinyl/tape warmth generator (ultra-quiet filtered noise)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(350, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(0.8, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.012, ctx.currentTime); // very subtle texture

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start();

      let chordIndex = 0;

      // Play soft atmospheric chord
      const playChord = () => {
        if (!isRunningRef.current || !audioCtxRef.current) return;
        const now = ctx.currentTime;
        const freqs = CHORD_FREQS[chordIndex % CHORD_FREQS.length];
        chordIndex++;

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();

          // Mix of warm sine and soft triangle wave
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now);

          // Subtle natural detune (lo-fi tape wobble)
          const wobble = (Math.random() - 0.5) * 4.5;
          osc.detune.setValueAtTime(wobble, now);

          // Gentle ambient envelope: slow attack, long release
          const noteVolume = 0.08 / freqs.length;
          noteGain.gain.setValueAtTime(0.0001, now);
          noteGain.gain.exponentialRampToValueAtTime(noteVolume, now + 1.8);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

          osc.connect(noteGain);
          noteGain.connect(filter);

          osc.start(now + idx * 0.15); // subtle arpeggiation
          osc.stop(now + 6.0);
        });
      };

      // Play initial chord and loop every 4.8 seconds
      playChord();
      timerRef.current = setInterval(playChord, 4800);
    } catch {
      stopAudio();
    }
  }, [stopAudio]);

  const toggle = useCallback(() => {
    if (isRunningRef.current) {
      stopAudio();
    } else {
      startAudio();
    }
  }, [startAudio, stopAudio]);

  // Listen for toggle-ambient event from Command Palette or Terminal
  useEffect(() => {
    const handleCustomToggle = () => toggle();
    window.addEventListener('toggle-ambient', handleCustomToggle);
    return () => {
      window.removeEventListener('toggle-ambient', handleCustomToggle);
      stopAudio();
    };
  }, [toggle, stopAudio]);

  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Pause ambient background sound' : 'Play ambient background sound'}
      className={`flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent rounded-xs ${
        isPlaying ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
      }`}
      title={isPlaying ? 'Ambient sound: Playing (Click to mute)' : 'Ambient sound: Off (Click to play chill lo-fi)'}
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
