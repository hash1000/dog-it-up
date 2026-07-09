import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "filled" | "outlined" | "on-dark";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  filled: "bg-primary text-surface hover:opacity-90",
  outlined: "border-2 border-primary text-primary hover:bg-primary/5",
  "on-dark": "border-2 border-surface text-surface hover:bg-surface/10",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-[57px] px-8 rounded-pill-md",
  lg: "h-[59px] px-8 rounded-pill-md",
  xl: "h-[76px] px-10 rounded-pill-lg",
};

export default function Button({
  href,
  variant = "filled",
  size = "md",
  className = "",
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 text-body font-bold transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
