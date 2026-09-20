"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react";

export const HubMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.15); // Exactly 15% volume as requested
  const [currentTime, setCurrentTime] = useState(7);
  const [totalDuration, setTotalDuration] = useState(30);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and handle soundtrack of Not You Too (feat. Chris Brown) by Drake, Chris Brown
  useEffect(() => {
    const audio = new Audio("/audio/not-you-too.mp4");
    audio.loop = true;
    audio.muted = isMuted;
    audio.volume = 0.15; // Set initial volume to 15%
    audioRef.current = audio;

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setTotalDuration(Math.floor(audio.duration));
      }
    };

    const onTimeUpdate = () => {
      setCurrentTime(Math.floor(audio.currentTime));
    };

    const onEnded = () => {
      if (!audio.loop) {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    // Attempt autoplay if permitted
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Browser requires interaction first
          setIsPlaying(false);
        });
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Sync play/pause state
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Sync volume state (15%)
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  // Sync mute state
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    } else {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
      if (!nextMuted && isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleVolumeSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newVol = Math.round(pct * 100) / 100;
    setVolume(newVol);
    if (isMuted) setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      audioRef.current.muted = false;
    }
  };

  const handleSkipBack = () => {
    const newTime = Math.max(0, currentTime - 10);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSkipForward = () => {
    const newTime = Math.min(totalDuration, currentTime + 10);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = Math.floor(pct * totalDuration);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progressPct = totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0;
  const remainingSecs = Math.max(0, totalDuration - currentTime);

  return (
    <div className="w-full max-w-[365px] mx-auto my-2 relative z-20 select-none font-sans">
      {/* Translucent Blush / Rose Quartz Glassmorphism Card */}
      <div
        className="relative rounded-[26px] p-3.5 overflow-hidden transition-all duration-300 group border border-white/85"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(254, 242, 247, 0.72) 48%, rgba(250, 232, 255, 0.76) 100%)",
          backdropFilter: "blur(28px) saturate(190%)",
          WebkitBackdropFilter: "blur(28px) saturate(190%)",
          boxShadow: `
            0 16px 36px -8px rgba(244, 114, 182, 0.22),
            0 4px 14px rgba(251, 113, 133, 0.12),
            inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 1px 0 rgba(244, 114, 182, 0.15)
          `,
        }}
      >
        {/* Subtle Pearl / Rose Sheen */}
        <div
          className="pointer-events-none absolute -top-14 -left-12 w-44 h-44 rounded-full blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(253,164,175,0.2) 50%, transparent 80%)",
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Top Row: Album Cover + Song Meta + Pink/White Spotify Pill */}
          <div className="flex items-center gap-3">
            {/* Square Album Cover with soft rounded corners */}
            <div className="relative w-[50px] h-[50px] rounded-[13px] overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(244,114,182,0.25)] border border-white/90">
              <Image
                src="/images/not-you-too-cover.png"
                alt="Not You Too (feat. Chris Brown) - Drake, Chris Brown"
                width={50}
                height={50}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? "scale-105" : "scale-100"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
            </div>

            {/* Song Meta with crisp feminine readability */}
            <div className="flex-1 min-w-0 pr-1">
              <h4 className="text-[#3b1c2b] font-bold text-[14px] tracking-tight truncate" title="Not You Too (feat. Chris Brown)">
                Not You Too (feat. Chris Brown)
              </h4>
              <p className="text-[#7e4e63] text-[11.5px] font-medium tracking-tight truncate" title="Drake, Chris Brown">
                Drake, Chris Brown
              </p>
            </div>

            {/* Right: Soft Pink / Rose Spotify Pill */}
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="https://open.spotify.com/search/not%20you%20too%20drake%20chris%20brown"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Spotify"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 hover:bg-white border border-pink-200/70 backdrop-blur-md text-[#be185d] transition-all transform hover:scale-105 shadow-[0_2px_8px_rgba(244,114,182,0.15)]"
              >
                {/* Mini Waveform Equalizer in Rose Pink */}
                <div className="flex items-end gap-[2px] h-3">
                  <span
                    className={`w-[2px] bg-[#f43f5e] rounded-full transition-all duration-200 ${
                      isPlaying ? "animate-pulse h-2.5" : "h-1"
                    }`}
                  />
                  <span
                    className={`w-[2px] bg-[#fb7185] rounded-full transition-all duration-200 ${
                      isPlaying ? "animate-pulse h-3" : "h-1.5"
                    }`}
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className={`w-[2px] bg-[#f43f5e] rounded-full transition-all duration-200 ${
                      isPlaying ? "animate-pulse h-2" : "h-1"
                    }`}
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>

                {/* Spotify Glyph in Soft Rose */}
                <svg className="w-3.5 h-3.5 fill-[#f43f5e]" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.316c-.215.353-.675.467-1.028.251-2.825-1.728-6.381-2.119-10.57-1.161-.403.092-.806-.157-.899-.56-.093-.404.157-.806.56-.899 4.588-1.047 8.524-.601 11.686 1.34.354.217.467.676.251 1.029zm1.467-3.26c-.27.441-.849.58-1.29.31-3.235-1.988-8.167-2.564-11.993-1.402-.497.151-1.023-.131-1.174-.627-.151-.497.13-1.024.628-1.174 4.372-1.328 9.808-.686 13.519 1.597.44.27.58.85.31 1.296zm.126-3.41c-3.878-2.302-10.279-2.514-13.987-1.388-.596.181-1.229-.158-1.41-.755-.181-.597.158-1.23.755-1.411 4.257-1.292 11.319-1.044 15.787 1.608.536.319.711 1.018.393 1.554-.319.537-1.018.712-1.538.392z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Row: Soft Pink Scrubber Bar */}
          <div className="mt-3">
            <div
              onClick={handleSeek}
              className="group/track relative h-5 flex items-center cursor-pointer select-none"
            >
              {/* Background Track */}
              <div className="w-full h-1 bg-pink-200/50 group-hover/track:h-1.5 rounded-full overflow-hidden transition-all backdrop-blur-sm border border-pink-200/30">
                <div
                  className="h-full bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#ec4899] transition-all duration-150 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.35)]"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              {/* Scrubber Head (Glossy White Capsule Dot with Soft Pink Rim) */}
              <div
                className="absolute w-3 h-3 bg-white rounded-full border border-pink-300 shadow-[0_2px_6px_rgba(244,63,94,0.3)] transition-all duration-150 transform -translate-x-1/2 pointer-events-none group-hover/track:scale-125"
                style={{ left: `${progressPct}%` }}
              />
            </div>

            {/* Time Indicators */}
            <div className="flex items-center justify-between -mt-1 px-0.5 text-[10px] font-semibold text-[#8a5d71] tracking-tight">
              <span>{formatTime(currentTime)}</span>
              <span>-{formatTime(remainingSecs)}</span>
            </div>
          </div>

          {/* Bottom Row: Media Controls & 15% Volume */}
          <div className="mt-1 flex items-center justify-between px-1">
            {/* Left Control: Volume Slider set at 15% */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleMute}
                className="p-1 text-[#7e4e63] hover:text-[#be185d] transition-colors cursor-pointer rounded-full hover:bg-pink-100/50 active:scale-95"
                title={isMuted ? "Unmute" : `Volume: ${Math.round(volume * 100)}%`}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX size={15} className="text-[#a07487]" />
                ) : (
                  <Volume2 size={15} className="text-[#f43f5e] drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
                )}
              </button>

              {/* Interactive mini volume bar showing 15% */}
              <div
                onClick={handleVolumeSeek}
                className="w-12 h-1.5 bg-pink-200/50 hover:h-2 rounded-full overflow-hidden cursor-pointer relative transition-all group/vol border border-pink-200/40"
                title={`Volume: ${Math.round(volume * 100)}% (Click to adjust)`}
              >
                <div
                  className="h-full bg-gradient-to-r from-[#fb7185] to-[#f43f5e] rounded-full transition-all duration-150"
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                />
              </div>
              <span className="text-[9.5px] font-mono text-[#7e4e63] font-semibold select-none">
                {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            {/* Center Controls: Previous, Play/Pause, Next */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleSkipBack}
                className="text-[#7e4e63] hover:text-[#be185d] transition-transform active:scale-90 p-1 cursor-pointer"
                title="Rewind 10 seconds"
              >
                <SkipBack size={17} fill="currentColor" />
              </button>

              {/* Play / Pause - Glossy White & Pink Capsule */}
              <button
                type="button"
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-white text-[#f43f5e] border border-pink-200/80 flex items-center justify-center shadow-[0_4px_14px_rgba(244,114,182,0.35)] transition-all duration-200 hover:scale-108 active:scale-95 cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={15} fill="currentColor" strokeWidth={0} />
                ) : (
                  <Play size={15} fill="currentColor" strokeWidth={0} className="ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={handleSkipForward}
                className="text-[#7e4e63] hover:text-[#be185d] transition-transform active:scale-90 p-1 cursor-pointer"
                title="Forward 10 seconds"
              >
                <SkipForward size={17} fill="currentColor" />
              </button>
            </div>

            {/* Right: AirPlay icon */}
            <div
              className="p-1.5 text-[#7e4e63] hover:text-[#be185d] transition-colors cursor-pointer rounded-full hover:bg-pink-100/50 active:scale-95"
              title="AirPlay Output"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                <polygon points="12 15 17 21 7 21 12 15" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
