"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

interface HubPfpAvatarProps {
  size?: number;
  className?: string;
}

export const HubPfpAvatar: React.FC<HubPfpAvatarProps> = ({
  size = 110,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleClick = () => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 400);
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Soft dreamy blush & lavender glow aura */}
      <div
        className="absolute -inset-4 rounded-full blur-2xl opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isHovered
            ? "radial-gradient(circle, #f472b6 0%, #e879f9 40%, #fb7185 70%, transparent 85%)"
            : "radial-gradient(circle, #f472b6 0%, #fda4af 40%, transparent 75%)",
        }}
      />

      {/* Sparse subtle feminine floating accents around avatar */}
      <div className="pointer-events-none absolute -top-2 -left-2 text-[#fb7185]/70 animate-float-slow">
        <Sparkles size={13} />
      </div>
      <div className="pointer-events-none absolute -bottom-1 -left-3 text-[#f472b6]/60 animate-pulse">
        <Heart size={11} fill="currentColor" />
      </div>
      <div className="pointer-events-none absolute top-1 -right-3 text-[#c084fc]/70 animate-pulse">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
        </svg>
      </div>

      {/* Main Avatar Circular Frame */}
      <div
        className={`relative group cursor-pointer transition-all duration-300 ${
          isTapped ? "scale-95" : "hover:scale-[1.04]"
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: size, height: size }}
      >
        {/* Pure white glossy circle with soft blush shadow & border */}
        <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_28px_rgba(244,114,182,0.32),0_2px_8px_rgba(251,113,133,0.2)] border-[3.5px] border-white overflow-hidden flex items-center justify-center">
          <Image
            src="/images/pfp.jpg"
            alt="pinkyshoots profile avatar"
            width={size}
            height={size}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Delicate blush/coral sparkle badge */}
        <div
          className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-[#f43f5e] via-[#fb7185] to-[#f472b6] text-white p-1.5 rounded-full shadow-[0_2px_10px_rgba(244,63,94,0.4)] border-2 border-white transform transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12 flex items-center justify-center"
          title="pinkyshoots"
        >
          <Sparkles size={13} className="animate-spin-slow text-white" />
        </div>
      </div>
    </div>
  );
};
