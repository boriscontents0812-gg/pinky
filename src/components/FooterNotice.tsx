"use client";

import React from "react";

interface FooterNoticeProps {
  notice: string;
  siteName?: string;
}

export const FooterNotice: React.FC<FooterNoticeProps> = ({
  notice,
  siteName = "pinkyshoots",
}) => {
  return (
    <div className="pt-5 pb-8 text-center flex flex-col gap-1.5 items-center">
      <p className="text-[12.5px] text-[#4F747B] font-medium tracking-tight">
        {notice}
      </p>
      <p className="text-[11.5px] text-[#4F747B]/70 font-medium tracking-tight">
        © {new Date().getFullYear()} {siteName}. All rights reserved.
      </p>
    </div>
  );
};
