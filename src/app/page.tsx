"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { HubPfpAvatar } from "../components/HubPfpAvatar";
import { HubMusicPlayer } from "../components/HubMusicPlayer";

export default function HubPage() {
  const [toastMessage, setToastMessage] = useState<{
    title: string;
    message: string;
  } | null>(null);

  const showToast = (title: string, message: string) => {
    setToastMessage({ title, message });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 relative overflow-hidden bg-gradient-to-b from-[#ffd6e7] via-[#f7d6f5] to-[#fce7f3] selection:bg-[#f43f5e] selection:text-white font-sans antialiased">
      {/* Soft Ethereal Atmospheric Glows (Rose Quartz & Lavender Dream) */}
      <div
        className="pointer-events-none absolute -top-24 -right-20 w-[460px] h-[460px] rounded-full blur-[100px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, #fda4af 0%, #f472b6 35%, #e879f9 70%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-12 -left-28 w-96 h-96 rounded-full blur-[90px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, #f5d0fe 45%, #e9d5ff 70%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-10 w-96 h-96 rounded-full blur-[90px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, #fbcfe8 0%, #f472b6 40%, transparent 80%)",
        }}
      />

      {/* Floating subtle pastel clouds / soft dream elements */}
      <div className="pointer-events-none absolute top-12 left-[12%] opacity-35 blur-[1px] animate-float-slow">
        <svg width="120" height="50" viewBox="0 0 100 45" fill="white">
          <path d="M 20,40 Q 10,40 10,30 Q 10,20 25,20 Q 30,10 45,10 Q 60,10 65,22 Q 75,18 85,25 Q 92,30 90,40 Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-32 right-[10%] opacity-30 blur-[1px]">
        <svg width="140" height="55" viewBox="0 0 100 45" fill="white">
          <path d="M 20,40 Q 10,40 10,30 Q 10,20 25,20 Q 30,10 45,10 Q 60,10 65,22 Q 75,18 85,25 Q 92,30 90,40 Z" />
        </svg>
      </div>

      {/* Center Phone / Bento Card Container with Glassmorphism & Dreamy Blurred Flowers */}
      <div className="relative w-full max-w-[420px] rounded-[38px] bg-gradient-to-b from-white/85 via-white/75 to-pink-50/80 text-[#3b1c2b] shadow-[0_25px_65px_-12px_rgba(244,114,182,0.32),0_0_0_1px_rgba(255,255,255,0.85)] overflow-hidden flex flex-col items-center pt-7 pb-5 px-5 sm:px-7 transition-all border border-white/85 backdrop-blur-xl">
        
        {/* ============================================================== */}
        {/* BLENDED DREAMY PINK FLOWERS & BOKEH (Seamless soft transition)  */}
        {/* ============================================================== */}
        <div
          className="absolute inset-x-0 bottom-0 top-[195px] overflow-hidden pointer-events-none select-none z-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.06) 12%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.92) 65%, black 85%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.06) 12%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.92) 65%, black 85%)",
          }}
        >
          {/* Floral Layer with subtle breathing breeze */}
          <div className="relative w-full h-full animate-grass-breeze origin-bottom">
            <Image
              src="/images/dreamy-pink-flowers.jpg"
              alt="Dreamy pink cherry blossoms and bokeh"
              fill
              className="object-cover object-[center_42%] scale-[1.18]"
              priority
            />

            {/* Soft pink lighting wash over flowers for optimal contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/15 to-pink-950/20 pointer-events-none" />
          </div>

          {/* Floating Subtle Petal Particles */}
          <div className="absolute bottom-20 left-[18%] w-2 h-2 rounded-full bg-pink-200/80 blur-[0.5px] animate-pollen-1 pointer-events-none" />
          <div className="absolute bottom-28 right-[22%] w-2.5 h-2.5 rounded-full bg-white/90 blur-[0.5px] animate-pollen-2 pointer-events-none" />
          <div className="absolute bottom-12 left-[62%] w-1.5 h-1.5 rounded-full bg-rose-200/80 blur-[0.5px] animate-pollen-3 pointer-events-none" />
          <div className="absolute bottom-36 left-[38%] w-2 h-2 rounded-full bg-pink-100/90 blur-[0.5px] animate-pollen-4 pointer-events-none" />
        </div>

        {/* User Profile Avatar */}
        <div className="mt-1 mb-1 relative z-10">
          <HubPfpAvatar size={108} />
        </div>

        {/* Profile Name: pinkyshoots (Feminine, bold, rounded) */}
        <div className="mt-1 text-center relative z-10">
          <h1 className="font-display font-black text-[31px] sm:text-[33px] tracking-tight text-[#3b1c2b] leading-none block drop-shadow-[0_2px_10px_rgba(244,114,182,0.25)] uppercase">
            pinkyshoots
          </h1>
          <p className="mt-1.5 text-[14px] text-[#6d3951] font-semibold tracking-tight flex items-center justify-center gap-1.5 drop-shadow-sm">
            <span>Entertaining text stories</span>
            <span
              className="animate-heart-flutter select-none cursor-pointer text-[#f43f5e]"
              title="Love text stories"
            >
              💕
            </span>
          </p>
        </div>

        {/* 4 Pill Options */}
        <div className="w-full flex flex-col gap-3.5 my-4 relative z-10">
          {/* OPTION 1: 2nd Landing Page ($500 Frankies Bikinis Sweepstakes) */}
          {/* Glossy blush / pink gradient button with soft pink glow */}
          <div className="relative w-full group">
            <Link
              href="/reward"
              id="option-1-btn"
              className="animate-pink-pulse relative w-full rounded-full py-4 px-5 sm:px-6 flex items-center justify-between bg-gradient-to-r from-[#ff7597] via-[#f43f5e] to-[#fb7185] text-white hover:text-white shadow-[0_8px_24px_rgba(244,63,94,0.40),0_2px_8px_rgba(225,29,72,0.22)] hover:shadow-[0_12px_32px_rgba(244,63,94,0.65)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] border-2 border-white/70 cursor-pointer overflow-hidden select-none no-underline"
            >
              {/* Subtle glass reflection sheen */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/30 via-transparent to-black/10 rounded-full" />

              {/* Shimmer Light Sweep Beam */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] animate-pink-sweep" />
              </div>

              {/* Left: Icon + Label */}
              <span className="flex items-center gap-3.5 relative z-10">
                <span className="w-6 h-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="13" height="13" x="8" y="8" rx="3" />
                    <path d="M4 16V6a2 2 0 0 1 2-2h10" />
                  </svg>
                </span>
                <span className="tracking-tight text-[17.5px] sm:text-[18px] font-black italic text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                  $500 Frankies Bikinis
                </span>
              </span>

              {/* Right: Clean White Arrow with hover nudge */}
              <span className="relative z-10 text-white group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200">
                <ArrowRight size={20} strokeWidth={2.8} />
              </span>
            </Link>
          </div>

          {/* OPTION 2: Coming Soon (Translucent white/pink glass card) */}
          <button
            type="button"
            onClick={() =>
              showToast(
                "Coming Soon",
                "This experience is currently in development. Stay tuned! 💕"
              )
            }
            className="group relative w-full rounded-full py-3.5 px-5 sm:px-6 flex items-center justify-between bg-white/80 hover:bg-white/95 text-[#4a2838] font-semibold text-[15px] shadow-[0_4px_16px_rgba(244,114,182,0.14)] backdrop-blur-md transition-all duration-200 border border-white/85 hover:border-pink-200/80 cursor-pointer"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-6 h-6 flex items-center justify-center text-[#f472b6]">
                <Sparkles size={17} className="transition-transform group-hover:scale-110" />
              </span>
              <span className="tracking-tight text-[#4a2838]">Coming Soon</span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#be185d] bg-[#ffe4e6] px-2.5 py-0.5 rounded-full border border-pink-200/80 shadow-2xs">
              Soon
            </span>
          </button>

          {/* OPTION 3: Coming Soon (Translucent white/pink glass card) */}
          <button
            type="button"
            onClick={() =>
              showToast(
                "Coming Soon",
                "This experience is currently in development. Stay tuned! 💕"
              )
            }
            className="group relative w-full rounded-full py-3.5 px-5 sm:px-6 flex items-center justify-between bg-white/80 hover:bg-white/95 text-[#4a2838] font-semibold text-[15px] shadow-[0_4px_16px_rgba(244,114,182,0.14)] backdrop-blur-md transition-all duration-200 border border-white/85 hover:border-pink-200/80 cursor-pointer"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-6 h-6 flex items-center justify-center text-[#f472b6]">
                <Sparkles size={17} className="transition-transform group-hover:scale-110" />
              </span>
              <span className="tracking-tight text-[#4a2838]">Coming Soon</span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#be185d] bg-[#ffe4e6] px-2.5 py-0.5 rounded-full border border-pink-200/80 shadow-2xs">
              Soon
            </span>
          </button>

          {/* OPTION 4: Coming Soon (Translucent white/pink glass card) */}
          <button
            type="button"
            onClick={() =>
              showToast(
                "Coming Soon",
                "This experience is currently in development. Stay tuned! 💕"
              )
            }
            className="group relative w-full rounded-full py-3.5 px-5 sm:px-6 flex items-center justify-between bg-white/80 hover:bg-white/95 text-[#4a2838] font-semibold text-[15px] shadow-[0_4px_16px_rgba(244,114,182,0.14)] backdrop-blur-md transition-all duration-200 border border-white/85 hover:border-pink-200/80 cursor-pointer"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-6 h-6 flex items-center justify-center text-[#f472b6]">
                <Sparkles size={17} className="transition-transform group-hover:scale-110" />
              </span>
              <span className="tracking-tight text-[#4a2838]">Coming Soon</span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#be185d] bg-[#ffe4e6] px-2.5 py-0.5 rounded-full border border-pink-200/80 shadow-2xs">
              Soon
            </span>
          </button>
        </div>

        {/* Music Player - (dream) with blush glassmorphism & 15% volume */}
        <HubMusicPlayer />

        {/* Bottom Quote Over the Flowers */}
        <div className="w-full relative pt-2 pb-1 flex flex-col items-center justify-center select-none z-10">
          <div className="text-center group cursor-default">
            <span className="font-script text-[26px] sm:text-[28px] font-bold text-[#831843] tracking-wide block drop-shadow-[0_1px_4px_rgba(255,255,255,0.85)] leading-tight">
              “Every text has a story”
            </span>
            {/* Elegant wavy underline in soft rose */}
            <div className="w-[130px] mx-auto mt-0.5 opacity-90">
              <svg
                viewBox="0 0 108 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-sm"
              >
                <path
                  d="M 2 4 Q 9 0, 16 4 T 30 4 T 44 4 T 58 4 T 72 4 T 86 4 T 100 4 T 106 4"
                  stroke="#f472b6"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification for Coming Soon options */}
      {toastMessage && (
        <div className="fixed bottom-6 z-50 animate-bounce max-w-sm w-[90%] bg-white/95 backdrop-blur-md text-[#3b1c2b] p-4 rounded-2xl shadow-2xl border border-pink-200/80 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#f43f5e]/15 text-[#f43f5e] flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[14px] text-[#3b1c2b]">{toastMessage.title}</h4>
            <p className="text-[12.5px] text-[#7e4e63] leading-relaxed mt-0.5">
              {toastMessage.message}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
