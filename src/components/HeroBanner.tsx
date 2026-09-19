"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroBannerProps {
  imageSrc: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
      className="relative w-full max-w-[360px] mx-auto pt-1 select-none"
    >
      <div className="relative aspect-[1265/706] w-full overflow-hidden rounded-[22px] bg-white border border-[#117789]/15 shadow-[0px_4px_16px_rgba(17,119,137,0.06),0px_16px_32px_rgba(25,58,66,0.07)]">
        <Image
          src={imageSrc}
          alt="Frankies Bikinis $500 Reward"
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          priority
          className="object-cover"
        />

        {/* Handwritten sideways script note matching Kree8 aesthetic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, rotate: -14 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 280, damping: 18 }}
          className="absolute top-1.5 right-2 sm:top-2 sm:right-2.5 z-10 text-right pointer-events-none origin-bottom-right"
        >
          <div
            className="font-script font-bold text-[#007cee] text-[17px] sm:text-[18.5px] leading-[1.04] tracking-[-0.01em]"
            style={{
              textShadow:
                "0 1px 2px #ffffff, 0 0 8px rgba(255,255,255,0.95), 0 1px 4px rgba(0,0,0,0.12)",
            }}
          >
            <span>boys respectfully…</span>
            <br />
            <span>let the girlies</span>
            <br />
            <span>have this one</span>
          </div>

          {/* Wavy squiggle underline matching Kree8 hand-drawn style */}
          <div className="w-[100px] sm:w-[108px] ml-auto -mt-0.5">
            <svg
              viewBox="0 0 108 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M 2 4 Q 9 0, 16 4 T 30 4 T 44 4 T 58 4 T 72 4 T 86 4 T 100 4 T 106 4"
                stroke="#38bdf8"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
