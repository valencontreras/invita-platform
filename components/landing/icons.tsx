/*
 * Hand-drawn line icons, deliberately plain: everything decorative is hidden
 * from screen readers because the text next to it already carries the meaning.
 */

type IconProps = {
  className?: string;
};

function glyph(className: string | undefined) {
  return {
    className,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

export function EnvelopeGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="M3.6 7.2 12 13.4l8.4-6.2" />
    </svg>
  );
}

export function ChatGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <path d="M20.5 11.6c0 4.1-3.8 7.4-8.5 7.4-1 0-2-.15-2.9-.43L4.5 20l1.3-3.6A7.1 7.1 0 0 1 3.5 11.6c0-4.1 3.8-7.4 8.5-7.4s8.5 3.3 8.5 7.4Z" />
      <path d="M8.6 11.6h.01M12 11.6h.01M15.4 11.6h.01" />
    </svg>
  );
}

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M15.9 8.1h.01" />
    </svg>
  );
}

export function MailGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3.6 7.4 12 13.2l8.4-5.8" />
    </svg>
  );
}

export function ClockGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.4V12l3.1 2" />
    </svg>
  );
}

export function CheckCircleGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.4 12.1l2.5 2.5 4.7-5" />
    </svg>
  );
}

export function GalleryGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <rect x="3.5" y="5" width="17" height="12" rx="1.5" />
      <path d="M3.5 14.2l3.6-3.6 2.7 2.7 2.4-2.4 4.3 4.1" />
      <circle cx="9.1" cy="9" r="1.2" />
      <path d="M7.5 20h9" />
    </svg>
  );
}

export function MapPinGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <path d="M12 20.6s6.4-5.9 6.4-10.2A6.4 6.4 0 0 0 5.6 10.4C5.6 14.7 12 20.6 12 20.6Z" />
      <circle cx="12" cy="10.3" r="2.3" />
    </svg>
  );
}

export function MusicGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <path d="M9.2 17.4V6.9l9-2v10.1" />
      <circle cx="6.7" cy="17.6" r="2.5" />
      <circle cx="15.7" cy="15.4" r="2.5" />
    </svg>
  );
}

export function BowTieGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <path d="M4 9.6l5.4 2.4L4 14.4V9.6Z" />
      <path d="M20 9.6l-5.4 2.4 5.4 2.4V9.6Z" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

export function GiftGlyph({ className }: IconProps) {
  return (
    <svg {...glyph(className)}>
      <rect x="3.5" y="9.6" width="17" height="10.4" rx="1" />
      <path d="M3.5 13.6h17" />
      <path d="M12 9.6V20" />
      <path d="M12 9.6C8.6 9.6 7.4 8.4 7.4 7.1S8.7 4.6 9.9 5.4 12 7.6 12 9.6Z" />
      <path d="M12 9.6c3.4 0 4.6-1.2 4.6-2.5s-1.3-2.5-2.5-1.7S12 7.6 12 9.6Z" />
    </svg>
  );
}
