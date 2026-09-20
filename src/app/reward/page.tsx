"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { referralConfig } from "../../config/referralConfig";
import { HeroBanner } from "../../components/HeroBanner";
import { StepCard } from "../../components/StepCard";
import { GetStartedButton } from "../../components/GetStartedButton";
import { FooterNotice } from "../../components/FooterNotice";

export default function RewardPage() {
  return (
    <main className="min-h-screen kree8-canvas flex flex-col items-center justify-start px-4 pt-3 sm:pt-5 pb-12 relative overflow-x-hidden antialiased">
      {/* Subtle ambient background glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full blur-3xl opacity-35"
        style={{ background: "radial-gradient(circle, #117789 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-48 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #FE7D79 0%, transparent 70%)" }}
      />

      <div className="flex flex-col flex-1 max-w-[390px] w-full mx-auto justify-start relative z-10">
        {/* Top Site Brand Header with Back Navigation to Hub */}
        <header className="w-full flex items-center justify-between pt-1 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white border border-[#6CACB6]/25 shadow-sm text-[#193A42] hover:text-[#117789] transition-all text-[12.5px] font-bold"
          >
            <ArrowLeft size={14} />
            <span>pinkyshoots</span>
          </Link>

          <div className="flex items-center gap-1.5">
            <Image
              src="/icon.svg"
              alt="pinkyshoots"
              width={18}
              height={18}
              className="w-[18px] h-[18px] drop-shadow-sm select-none"
              priority
            />
            <span className="font-display font-extrabold tracking-[-0.03em] text-[17.5px] text-[#193A42] lowercase select-none">
              {referralConfig.siteName}<span className="text-[#FE7D79]">.</span>
            </span>
          </div>
        </header>

        {/* Top Hero Visual Card */}
        <HeroBanner imageSrc={referralConfig.heroImage} />

        {/* Title Header with Kree8 typography */}
        <div className="pt-5 pb-2 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-widest text-[#117789] bg-[#117789]/10 px-3.5 py-1 rounded-full border border-[#117789]/20 mb-2">
            {referralConfig.eyebrow}
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold uppercase text-[24px] sm:text-[27px] text-[#193A42] leading-[1.12] tracking-[-0.02em] max-w-[340px] mx-auto px-1">
            {referralConfig.headline}
          </h1>

          {/* Subheadline matching Kree8 medium */}
          <p className="font-sans text-[14px] sm:text-[15px] text-[#4F747B] font-medium leading-[160%] tracking-[-0.018em] max-w-[330px] mx-auto px-1 pt-1.5">
            {referralConfig.subheadline}
          </p>
        </div>

        {/* The 4 Clean Step Cards */}
        <div className="w-full flex flex-col gap-2.5 my-3">
          {referralConfig.steps.map((step, idx) => (
            <StepCard
              key={step.id}
              step={step}
              index={idx}
            />
          ))}
        </div>

        {/* GET STARTED CTA Button */}
        <div className="w-full mt-3">
          <GetStartedButton
            ctaText={referralConfig.ctaText}
            ctaSubtext={referralConfig.ctaSubtext}
            destinationUrl={referralConfig.defaultDestinationUrl}
          />
        </div>

        {/* Clean Footer Notice */}
        <FooterNotice
          notice={referralConfig.footerNotice}
          siteName={referralConfig.siteName}
        />
      </div>
    </main>
  );
}
