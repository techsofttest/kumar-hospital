import React from "react";

export function IconBox({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
        light
          ? "bg-white/10 text-[#D7B16D]"
          : "bg-[#061627] text-[#D8AF68]"
      }`}
    >
      {children}
    </div>
  );
}

