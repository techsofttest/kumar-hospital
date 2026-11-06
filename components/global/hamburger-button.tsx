"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClick: () => void;
  className?: string;
}

export function HamburgerButton({
  isOpen,
  isScrolled,
  onClick,
  className = "",
}: HamburgerButtonProps) {
  const lineColor = isScrolled ? "bg-[#061627]" : "bg-white";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle navigation drawer"
      className={`group relative flex h-10 w-10 flex-col items-end justify-center gap-1.5 p-1 transition-transform active:scale-95 cursor-pointer ${className}`}
    >
      <span
        className={`block h-[2px] rounded-full transition-all duration-300 ${lineColor} ${
          isOpen ? "w-6 translate-y-2 rotate-45" : "w-6 group-hover:w-4"
        }`}
      />
      <span
        className={`block h-[2px] rounded-full transition-all duration-300 ${lineColor} ${
          isOpen ? "w-6 opacity-0" : "w-4 group-hover:w-6"
        }`}
      />
      <span
        className={`block h-[2px] rounded-full transition-all duration-300 ${lineColor} ${
          isOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5 group-hover:w-3"
        }`}
      />
    </button>
  );
}

