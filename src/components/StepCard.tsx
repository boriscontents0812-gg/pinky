"use client";

import React from "react";
import { motion } from "framer-motion";
import { StepItem } from "../config/referralConfig";

interface StepCardProps {
  step: StepItem;
  index: number;
}

export const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const isFirst = step.id === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 400, damping: 26 }}
      className="w-full rounded-[18px] py-3.5 px-4 flex items-center gap-3.5 bg-white/85 backdrop-blur-md border border-[#117789]/15 shadow-[0_2px_10px_rgba(17,119,137,0.05)] transition-all select-none"
    >
      {/* Step Number Circle Badge */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white font-display font-bold text-[13px] transition-transform ${
          isFirst
            ? "bg-gradient-to-br from-[#FE7D79] to-[#FA6560] shadow-[0_2px_8px_rgba(254,125,121,0.4)] ring-2 ring-[#FE7D79]/20"
            : "bg-[#193A42]"
        }`}
      >
        {step.id}
      </div>

      {/* Step Instruction Text */}
      <div className="flex-1 min-w-0">
        <p className="font-sans text-[14.5px] sm:text-[15px] font-medium text-[#193A42] tracking-[-0.018em]">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
};
