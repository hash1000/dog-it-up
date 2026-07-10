"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HOVER_SCALE, TAP_SCALE, HOVER_TRANSITION } from "@/lib/motion";

const MotionLink = motion.create(Link);

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
  filled: "bg-primary text-surface hover:brightness-110",
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
  const reduced = useReducedMotion();
  const classes = `inline-flex items-center justify-center gap-2 text-body font-bold transition-[filter,background-color,color] duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const interaction = reduced
    ? {}
    : {
        whileHover: { scale: HOVER_SCALE },
        whileTap: { scale: TAP_SCALE },
        transition: HOVER_TRANSITION,
      };

  if (href) {
    return (
      <MotionLink href={href} className={classes} onClick={onClick} {...interaction}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} className={classes} onClick={onClick} {...interaction}>
      {children}
    </motion.button>
  );
}
