"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

const DISTANCE = 28;

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: DISTANCE },
  left: { x: -DISTANCE, y: 0 },
  right: { x: DISTANCE, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Where the element travels from as it enters the viewport. */
  direction?: Direction;
  /** Seconds of delay, used to stagger siblings. */
  delay?: number;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
};

/**
 * Scroll-triggered entrance, once per element.
 *
 * Reduced motion is handled in `globals.css`, through the `[data-reveal]` rule,
 * instead of with `useReducedMotion()`. That hook returns `false` while the page
 * is rendered on the server and the real value in the browser, so branching on
 * it produced different markup on each side and React reported a hydration
 * mismatch. The CSS rule also keeps the content visible when JavaScript never
 * runs, since the entrance starts from an inline `opacity: 0`.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  amount = 0.3,
}: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
