import React from "react";
import { Plus } from "lucide-react";

export function SectionLabel({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-2 text-sm font-medium ${
        light ? "text-white" : "text-black"
      } ${className}`}
    >
      <Plus size={14} strokeWidth={3} className="shrink-0" />
      {children}
    </div>
  );
}

