"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <main className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 relative overflow-hidden bg-gradient-to-b from-[#3ba1f4] via-[#65beff] to-[#b6e4ff] selection:bg-[#007AFF] selection:text-white font-sans antialiased">
      {/* Sunny Atmosphere Background Elements */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full blur-[90px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, #fff3b0 0%, #ffde59 30%, #56b9ff 70%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-10 -left-24 w-80 h-80 rounded-full blur-[80px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, #a2ddff 60%, transparent 100%)",
        }}
      />

      {/* Floating subtle clouds */}
      <div className="pointer-events-none absolute top-12 left-[10%] opacity-40 blur-[1px] animate-float-slow">
        <svg width="120" height="50" viewBox="0 0 100 45" fill="white">
          <path d="M 20,40 Q 10,40 10,30 Q 10,20 25,20 Q 30,10 45,10 Q 60,10 65,22 Q 75,18 85,25 Q 92,30 90,40 Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-28 right-[12%] opacity-35 blur-[1px]">
        <svg width="150" height="60" viewBox="0 0 100 45" fill="white">
          <path d="M 20,40 Q 10,40 10,30 Q 10,20 25,20 Q 30,10 45,10 Q 60,10 65,22 Q 75,18 85,25 Q 92,30 90,40 Z" />
        </svg>
      </div>

      {/* Center Phone / Bento Card Container with Sky & Full Uncut Animated Grass */}
      <div className="relative w-full max-w-[420px] rounded-[38px] bg-gradient-to-b from-[#46a8f4] via-[#6dc4fa] to-[#99d9fc] text-white shadow-[0_25px_65px_-12px_rgba(15,75,130,0.45),0_0_0_1px_rgba(255,255,255,0.4)] overflow-hidden flex flex-col items-center pt-7 pb-5 px-5 sm:px-7 transition-all border border-white/50 backdrop-blur-md">
        
        {/* ============================================================== */}
        {/* BLENDED ANIMATED GRASS (Fades seamlessly into blue sky)        */}
        {/* ============================================================== */}
        <div
          className="absolute inset-x-0 bottom-0 top-[195px] overflow-hidden pointer-events-none select-none z-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.9) 58%, black 75%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.9) 58%, black 75%)",
          }}
        >
          {/* Animated Grass Hill Layer with Gentle Breeze Motion */}
          <div className="relative w-full h-full animate-grass-breeze origin-bottom">
            <Image
              src="/images/vibrant-grass.jpg"
              alt="Lush green grass hill"
              fill
              className="object-cover object-[center_52%] scale-[1.25]"
              priority
            />

            {/* Soft lighting depth gradient over the grass for button readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/35 pointer-events-none" />
          </div>

          {/* Floating Pollen / Dandelion Particles */}
          <div className="absolute bottom-16 left-[20%] w-1.5 h-1.5 rounded-full bg-yellow-200 blur-[0.5px] animate-pollen-1 pointer-events-none" />
          <div className="absolute bottom-24 right-[25%] w-2 h-2 rounded-full bg-white blur-[0.5px] animate-pollen-2 pointer-events-none" />
          <div className="absolute bottom-10 left-[60%] w-1 h-1 rounded-full bg-yellow-100 blur-[0.5px] animate-pollen-3 pointer-events-none" />
          <div className="absolute bottom-32 left-[35%] w-1.5 h-1.5 rounded-full bg-white/90 blur-[0.5px] animate-pollen-4 pointer-events-none" />
        </div>

        {/* User PFP Avatar using uploaded photo */}
        <div className="mt-1 mb-1 relative z-10">
          <HubPfpAvatar size={108} />
        </div>

        {/* Title: pinkyshoots */}
        <div className="mt-1 text-center relative z-10">
          <h1 className="font-display font-black text-[32px] sm:text-[34px] tracking-tight text-white leading-none block drop-shadow-[0_2px_8px_rgba(0,80,160,0.3)] uppercase">
            pinkyshoots
          </h1>
          <p className="mt-1.5 text-[14.5px] text-white/95 font-medium tracking-tight flex items-center justify-center gap-1.5 drop-shadow-sm">
            <span>Entertaining text stories</span>
            <span
              className="animate-heart-flutter select-none cursor-pointer"
              title="Love text stories"
            >
              💕
            </span>
          </p>
        </div>

        {/* 4 Pill Options */}
        <div className="w-full flex flex-col gap-3.5 my-5 relative z-10">
          {/* OPTION 1: 2nd Landing Page ($500 Frankies Bikinis Sweepstakes) */}
          <div className="relative w-full group">
            <Link
              href="/reward"
              id="option-1-btn"
              className="animate-lime-pulse relative w-full rounded-full py-4 px-5 sm:px-6 flex items-center justify-between bg-gradient-to-r from-[#9be827] via-[#90dd32] to-[#80d11c] text-[#1c5510] hover:text-[#143e0b] shadow-[0_4px_22px_rgba(144,221,50,0.5),0_2px_8px_rgba(28,85,16,0.2)] hover:shadow-[0_8px_32px_rgba(144,221,50,0.85)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] border-2 border-[#b5fa4c] cursor-pointer overflow-hidden select-none no-underline"
            >
              {/* Geometric Diamond Pattern Watermark */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #1c5510 0px, #1c5510 2px, transparent 2px, transparent 11px), repeating-linear-gradient(-45deg, #1c5510 0px, #1c5510 2px, transparent 2px, transparent 11px)`,
                }}
              />

              {/* Shimmer Light Sweep Beam */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] animate-lime-sweep" />
              </div>

              {/* Left: Icon + Label */}
              <span className="flex items-center gap-3.5 relative z-10">
                <span className="w-6 h-6 flex items-center justify-center text-[#1c5510] group-hover:scale-110 transition-transform duration-200">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="13" height="13" x="8" y="8" rx="3" />
                    <path d="M4 16V6a2 2 0 0 1 2-2h10" />
                  </svg>
                </span>
                <span className="tracking-tight text-[17.5px] sm:text-[18px] font-black italic text-[#1c5510] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  $500 Frankies Bikinis
                </span>
              </span>

              {/* Right: Bold Arrow with interactive hover nudge */}
              <span className="relative z-10 text-[#1c5510] group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200">
                <ArrowRight size={21} strokeWidth={2.8} />
              </span>
            </Link>
          </div>

          {/* OPTION 2: Coming Soon */}
          <button
            type="button"
            onClick={() =>
              showToast(
                "Coming Soon",
                "This experience is currently in development. Stay tuned!"
              )
            }
            className="group relative w-full rounded-full py-3.5 px-5 sm:px-6 flex items-center justify-between bg-white/85 hover:bg-white text-[#193a42] font-semibold text-[15px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 border border-white/70 cursor-pointer"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-6 h-6 flex items-center justify-center text-[#556956]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="13" height="13" x="8" y="8" rx="3" />
                  <path d="M4 16V6a2 2 0 0 1 2-2h10" />
                </svg>
              </span>
              <span className="tracking-tight text-[#193a42]">Coming Soon</span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#355437] bg-white/70 px-2.5 py-1 rounded-full border border-white/50">
              Soon
            </span>
          </button>

          {/* OPTION 3: Coming Soon */}
          <button
            type="button"
            onClick={() =>
              showToast(
                "Coming Soon",
                "This experience is currently in development. Stay tuned!"
              )
            }
            className="group relative w-full rounded-full py-3.5 px-5 sm:px-6 flex items-center justify-between bg-white/85 hover:bg-white text-[#193a42] font-semibold text-[15px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-200 border border-white/70 cursor-pointer"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-6 h-6 flex items-center justify-center text-[#556956]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="13" height="13" x="8" y="8" rx="3" />
                  <path d="M4 16V6a2 2 0 0 1 2-2h10" />
                </svg>
              </span>
              <span className="tracking-tight text-[#193a42]">Coming Soon</span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#355437] bg-white/70 px-2.5 py-1 rounded-full border border-white/50">
              Soon
            </span>
          </button>

          {/* OPTION 4: Coming Soon */}
          <button
            type="button"
            onClick={() =>
              showToast(
                "Coming Soon",
                "This experience is currently in development. Stay tuned!"
              )
            }
            className="group relative w-full rounded-full py-3.5 px-5 sm:px-6 flex items-center justify-between bg-white/85 hover:bg-white text-[#193a42] font-semibold text-[15px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-200 border border-white/70 cursor-pointer"
          >
            <span className="flex items-center gap-3.5">
              <span className="w-6 h-6 flex items-center justify-center text-[#556956]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="13" height="13" x="8" y="8" rx="3" />
                  <path d="M4 16V6a2 2 0 0 1 2-2h10" />
                </svg>
              </span>
              <span className="tracking-tight text-[#193a42]">Coming Soon</span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#355437] bg-white/70 px-2.5 py-1 rounded-full border border-white/50">
              Soon
            </span>
          </button>
        </div>

        {/* Spotify Player - (dream) by salvia palth with 15% volume */}
        <HubMusicPlayer />

        {/* Bottom Quote Over the Grass */}
        <div className="w-full relative pt-2 pb-1 flex flex-col items-center justify-center select-none z-10">
          <div className="text-center group cursor-default">
            <span className="font-script text-[25px] sm:text-[27px] font-bold text-white tracking-wide block drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] leading-tight">
              “Every text has a story”
            </span>
            {/* White squiggly underline */}
            <div className="w-[130px] mx-auto mt-0.5 opacity-95">
              <svg
                viewBox="0 0 108 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-md"
              >
                <path
                  d="M 2 4 Q 9 0, 16 4 T 30 4 T 44 4 T 58 4 T 72 4 T 86 4 T 100 4 T 106 4"
                  stroke="#ffffff"
                  strokeWidth="2.5"
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
        <div className="fixed bottom-6 z-50 animate-bounce max-w-sm w-[90%] bg-white/95 backdrop-blur-md text-[#193A42] p-4 rounded-2xl shadow-2xl border border-white/50 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#007AFF]/15 text-[#007AFF] flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[14px]">{toastMessage.title}</h4>
            <p className="text-[12.5px] text-[#4F747B] leading-relaxed mt-0.5">
              {toastMessage.message}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
