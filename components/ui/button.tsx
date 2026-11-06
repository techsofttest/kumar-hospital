import React from "react";
import Link from "next/link";
import { CornerDownRight } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ternary" | "white";
export type ButtonSize = "normal" | "small";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showIcon?: boolean;
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
  // Primary: Warm gold accent button (#CD9E57) with dark navy text
  primary:
    "bg-[#CD9E57] text-[#061627] [&>*]:text-[#061627] font-semibold hover:bg-[#B88942] active:bg-[#A37530] shadow-sm",
  // Secondary: Stroke / Outline button with crisp border
  secondary:
    "bg-transparent text-current [&>*]:text-current border border-current hover:bg-white/10 active:bg-white/20 font-medium",
  // Ternary: Transparent with dark rounded border
  ternary:
    "bg-transparent text-[#061627] [&>*]:text-[#061627] border border-gray-300 hover:bg-gray-100 active:bg-gray-200",
  // White: Clean white pill with dark navy text and icon
  white:
    "bg-white text-[#061627] [&>*]:text-[#061627] border border-transparent hover:bg-gray-100 active:bg-gray-200 shadow-md",
};

const sizeStyles: Record<ButtonSize, string> = {
  normal: "h-11 px-5 text-[14px] font-medium gap-2.5 rounded-lg",
  small: "h-9 px-4 text-[13px] font-medium gap-2 rounded-md",
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
    "group inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
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
  const {
    variant = "primary",
    size = "normal",
    className,
    showIcon = true,
    children,
    ...rest
  } = props;

  const classes = getButtonClassName({ variant, size, className });
  const iconSize = size === "small" ? 14 : 16;

  const content = (
    <>
      {showIcon && (
        <CornerDownRight
          size={iconSize}
          strokeWidth={2}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />
      )}
      <span className="leading-none">{children}</span>
    </>
  );

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
          {content}
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
        {content}
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
      {content}
    </button>
  );
});
