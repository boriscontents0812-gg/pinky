"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import SpecularButton from "./SpecularButton";

interface GetStartedButtonProps {
  ctaText: string;
  ctaSubtext?: string;
  destinationUrl?: string;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  ctaText,
  ctaSubtext,
  destinationUrl = "https://linkthem.net/aff_c?offer_id=4273&aff_id=197884",
}) => {
  const [loading, setLoading] = useState(false);
  const [resolvedUrl, setResolvedUrl] = useState(destinationUrl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentParams = new URLSearchParams(window.location.search);
      try {
        const dest = new URL(destinationUrl, window.location.origin);
        currentParams.forEach((value, key) => {
          dest.searchParams.set(key, value);
        });
        setResolvedUrl(dest.toString());
      } catch {
        const separator = destinationUrl.includes("?") ? "&" : "?";
        setResolvedUrl(
          currentParams.toString()
            ? `${destinationUrl}${separator}${currentParams.toString()}`
            : destinationUrl
        );
      }
    }
  }, [destinationUrl]);

  const handleClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (loading) return;
    setLoading(true);

    // iOS Taptic feedback simulation via Web Vibration API
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(14);
      } catch {
        // Safe fallback
      }
    }

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 },
        colors: ["#117789", "#FE7D79", "#6CACB6", "#FA6560", "#FDAFA8"],
      });
    } catch {
      // Graceful fallback
    }

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = resolvedUrl;
      }
    }, 450);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <SpecularButton
        size="lg"
        radius={9999}
        tint="#fe7d79"
        tintOpacity={1}
        blur={0}
        textColor="#ffffff"
        lineColor="#ffffff"
        baseColor="#fa6560"
        intensity={1.3}
        shineSize={14}
        shineFade={40}
        thickness={1.5}
        speed={0.4}
        followMouse={true}
        proximity={280}
        autoAnimate={true}
        onClick={handleClick}
        className="w-full !bg-gradient-to-r !from-[#fe7d79] !via-[#fa6560] !to-[#e6544e] font-display font-black uppercase text-[15.5px] sm:text-[16.5px] tracking-wider !py-4 shadow-[0px_4px_16px_rgba(254,125,121,0.35),0px_14px_28px_rgba(254,125,121,0.35)]"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-white/95" />
            <span className="text-white/95">{ctaSubtext || "Opening..."}</span>
          </>
        ) : (
          <span>{ctaText}</span>
        )}
      </SpecularButton>
    </div>
  );
};
