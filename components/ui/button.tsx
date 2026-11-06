import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "ternary";
export type ButtonSize = "normal" | "small";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  href?: never;
}

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseButtonProps {
  href: string;
}

export type AnyButtonProps = ButtonProps | ButtonLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  // Primary: Warm gold #CD9E57 with deep navy text/border, hover shifts to richer gold #B88942
  primary:
    "bg-[#CD9E57] !text-[#061627] hover:bg-[#B88942] active:bg-[#A37530] font-semibold shadow-sm hover:shadow",
  // Secondary: Deep navy #061627 background with white text and subtle gold border
  secondary:
    "bg-[#061627] !text-white border border-[#CD9E57]/40 hover:bg-[#0c243d] hover:border-[#CD9E57] active:bg-[#030d17]",
  // Ternary (Ghost/Text link button): clean text with gold hover soft tint
  ternary:
    "!text-[#061627] bg-transparent hover:bg-[#CD9E57]/15 active:bg-[#CD9E57]/25",
};

const sizeStyles: Record<ButtonSize, string> = {
  normal: "h-12 px-6 text-[14px] font-semibold gap-2.5",
  small: "h-9 px-4 text-[13px] font-medium gap-1.5",
};

export function getButtonClassName({
  variant = "primary",
  size = "normal",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return [
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD9E57]/50 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AnyButtonProps
>(function Button(props, ref) {
  const { variant = "primary", size = "normal", className, children, ...rest } =
    props;

  const classes = getButtonClassName({ variant, size, className });

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonLinkProps;
    // Check if internal navigation or hash / external link
    const isAnchor =
      typeof href === "string" &&
      (href.startsWith("#") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("http"));

    if (isAnchor) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={(rest as ButtonProps).type || "button"}
      className={classes}
      {...(rest as ButtonProps)}
    >
      {children}
    </button>
  );
});

