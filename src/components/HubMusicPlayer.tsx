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

  // Initialize and handle real soundtrack of (dream) by Salvia Palth (2013)
  useEffect(() => {
    const audio = new Audio("/audio/salvia-palth-dream.m4a");
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
          // Browser prevented autoplay without interaction; stay paused
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
    <div className="w-full max-w-[365px] mx-auto my-2.5 relative z-20 select-none font-sans">
      {/* iOS Liquid Glass Container */}
      <div
        className="relative rounded-[26px] p-3.5 overflow-hidden transition-all duration-300 group"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.32) 0%, rgba(18, 26, 22, 0.48) 35%, rgba(10, 16, 14, 0.70) 100%)",
          backdropFilter: "blur(30px) saturate(190%)",
          WebkitBackdropFilter: "blur(30px) saturate(190%)",
          border: "1px solid rgba(255, 255, 255, 0.38)",
          boxShadow: `
            0 18px 40px -10px rgba(0, 0, 0, 0.42),
            0 6px 18px rgba(0, 0, 0, 0.22),
            inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.75),
            inset 0 -1px 1px 0 rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {/* Liquid Specular Light Sheen */}
        <div
          className="pointer-events-none absolute -top-16 -left-14 w-48 h-48 rounded-full blur-2xl opacity-65"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25 rounded-[26px]" />

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Top Row: Album Cover + Song Meta + iOS AirPlay/Spotify Pill */}
          <div className="flex items-center gap-3">
            {/* Square Album Cover */}
            <div className="relative w-[52px] h-[52px] rounded-[14px] overflow-hidden shrink-0 shadow-[0_6px_14px_rgba(0,0,0,0.4)] border border-white/25">
              <Image
                src="/images/salvia-palth.jpg"
                alt="(dream) by Salvia Palth ‧ 2013"
                width={52}
                height={52}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? "scale-105" : "scale-100"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25" />
            </div>

            {/* Song Meta */}
            <div className="flex-1 min-w-0 pr-1">
              <h4 className="text-white font-bold text-[15px] tracking-tight truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                (dream)
              </h4>
              <p className="text-white/80 text-[12px] font-medium tracking-tight truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Song by Salvia Palth · 2013
              </p>
            </div>

            {/* Right: iOS Airplay / Spotify Status Pill */}
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="https://open.spotify.com/search/salvia%20palth%20dream"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Spotify"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white transition-all transform hover:scale-105 shadow-sm"
              >
                {/* Mini iOS Waveform Equalizer */}
                <div className="flex items-end gap-[2px] h-3">
                  <span
                    className={`w-[2.5px] bg-[#1DB954] rounded-full transition-all duration-200 ${
                      isPlaying ? "animate-pulse h-2.5" : "h-1"
                    }`}
                  />
                  <span
                    className={`w-[2.5px] bg-[#1DB954] rounded-full transition-all duration-200 ${
                      isPlaying ? "animate-pulse h-3" : "h-1.5"
                    }`}
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className={`w-[2.5px] bg-[#1DB954] rounded-full transition-all duration-200 ${
                      isPlaying ? "animate-pulse h-2" : "h-1"
                    }`}
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>

                {/* Spotify Glyph */}
                <svg className="w-3.5 h-3.5 fill-[#1DB954]" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.316c-.215.353-.675.467-1.028.251-2.825-1.728-6.381-2.119-10.57-1.161-.403.092-.806-.157-.899-.56-.093-.404.157-.806.56-.899 4.588-1.047 8.524-.601 11.686 1.34.354.217.467.676.251 1.029zm1.467-3.26c-.27.441-.849.58-1.29.31-3.235-1.988-8.167-2.564-11.993-1.402-.497.151-1.023-.131-1.174-.627-.151-.497.13-1.024.628-1.174 4.372-1.328 9.808-.686 13.519 1.597.44.27.58.85.31 1.296zm.126-3.41c-3.878-2.302-10.279-2.514-13.987-1.388-.596.181-1.229-.158-1.41-.755-.181-.597.158-1.23.755-1.411 4.257-1.292 11.319-1.044 15.787 1.608.536.319.711 1.018.393 1.554-.319.537-1.018.712-1.538.392z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Row: iOS Scrubber Bar */}
          <div className="mt-3">
            <div
              onClick={handleSeek}
              className="group/track relative h-5 flex items-center cursor-pointer select-none"
            >
              <div className="w-full h-1 bg-white/20 group-hover/track:h-1.5 rounded-full overflow-hidden transition-all backdrop-blur-sm">
                <div
                  className="h-full bg-white transition-all duration-150 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              {/* iOS Scrubber Head */}
              <div
                className="absolute w-3 h-3 bg-white rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-all duration-150 transform -translate-x-1/2 pointer-events-none group-hover/track:scale-125"
                style={{ left: `${progressPct}%` }}
              />
            </div>

            {/* Time Indicators */}
            <div className="flex items-center justify-between -mt-1 px-0.5 text-[10.5px] font-medium text-white/60 tracking-tight">
              <span>{formatTime(currentTime)}</span>
              <span>-{formatTime(remainingSecs)}</span>
            </div>
          </div>

          {/* Bottom Row: iOS Media Controls & Volume at 15% */}
          <div className="mt-1 flex items-center justify-between px-1">
            {/* Left Control: Volume Slider set at 15% */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleMute}
                className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10 active:scale-95"
                title={isMuted ? "Unmute" : `Volume: ${Math.round(volume * 100)}%`}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX size={15} className="text-white/60" />
                ) : (
                  <Volume2 size={15} className="text-[#1DB954] drop-shadow-[0_0_6px_rgba(29,185,84,0.6)]" />
                )}
              </button>

              {/* Interactive iOS mini volume bar showing 15% */}
              <div
                onClick={handleVolumeSeek}
                className="w-12 h-1.5 bg-white/20 hover:h-2 rounded-full overflow-hidden cursor-pointer relative transition-all group/vol"
                title={`Volume: ${Math.round(volume * 100)}% (Click to adjust)`}
              >
                <div
                  className="h-full bg-white/80 group-hover/vol:bg-[#1DB954] rounded-full transition-all duration-150"
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                />
              </div>
              <span className="text-[9.5px] font-mono text-white/65 font-medium select-none">
                {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            {/* Center Controls: Previous, Play/Pause, Next */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleSkipBack}
                className="text-white/80 hover:text-white transition-transform active:scale-90 p-1 cursor-pointer"
                title="Rewind 10 seconds"
              >
                <SkipBack size={18} fill="currentColor" />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-200 hover:scale-108 active:scale-95 cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={16} fill="currentColor" strokeWidth={0} />
                ) : (
                  <Play size={16} fill="currentColor" strokeWidth={0} className="ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={handleSkipForward}
                className="text-white/80 hover:text-white transition-transform active:scale-90 p-1 cursor-pointer"
                title="Forward 10 seconds"
              >
                <SkipForward size={18} fill="currentColor" />
              </button>
            </div>

            {/* Right: AirPlay icon */}
            <div
              className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10 active:scale-95"
              title="iOS AirPlay Output"
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
