import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Small caps line above the title. */
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
  /**
   * `start` breaks the centred rhythm, so consecutive sections never look like
   * the same centred eyebrow stacked above the same centred heading.
   */
  align?: "center" | "start";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-3 text-label-caps text-sage uppercase",
          centered && "justify-center",
        )}
      >
        <span aria-hidden className="h-px w-8 bg-gold/60" />
        {eyebrow}
        <span aria-hidden className="h-px w-8 bg-gold/60" />
      </span>
      <h2 className="mt-3 font-display text-headline-lg text-forest text-balance md:text-display-md">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-body-md text-ink-soft">{description}</p>
      ) : null}
    </Reveal>
  );
}
