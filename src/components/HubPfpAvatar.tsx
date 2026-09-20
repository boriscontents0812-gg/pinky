"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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
      {/* Glow aura behind avatar */}
      <div
        className="absolute -inset-3 rounded-full blur-xl opacity-45 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isHovered
            ? "radial-gradient(circle, #007AFF 0%, #38bdf8 55%, transparent 75%)"
            : "radial-gradient(circle, #007AFF 0%, #38bdf8 30%, transparent 70%)",
        }}
      />

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
        {/* White background circle container with border & shadow */}
        <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_28px_rgba(0,60,140,0.2),0_2px_8px_rgba(0,122,255,0.15)] border-[3px] border-white overflow-hidden flex items-center justify-center">
          <Image
            src="/images/pfp.jpg"
            alt="pinkyshoots profile avatar"
            width={size}
            height={size}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Small floating interactive sparkle badge matching reference image */}
        <div
          className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-[#007AFF] to-[#38bdf8] text-white p-1.5 rounded-full shadow-md border-2 border-white transform transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12 flex items-center justify-center"
          title="pinkyshoots verified"
        >
          <Sparkles size={14} className="animate-spin-slow text-white" />
        </div>
      </div>
    </div>
  );
};
