import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * Tonal stand-in for wedding photography.
 *
 * Real photos are uploaded to Supabase Storage (`hero_photo_url`,
 * `invitation_photos.url`). Until those exist, every frame on the landing page
 * renders one of these restrained botanical gradients plus an optional monogram
 * so the composition reads as designed stationery instead of a broken image.
 */
export type PhotoTone = 'olive' | 'champagne' | 'linen' | 'sage' | 'tuscany' | 'golden'

const TONES: Record<PhotoTone, string> = {
  olive: 'linear-gradient(140deg, #bfc7ab 0%, #7a8977 48%, #e3d3b7 100%)',
  champagne: 'linear-gradient(135deg, #e1d0a7 0%, #718776 100%)',
  linen: 'linear-gradient(160deg, #f3ebdd 0%, #cdc6b2 55%, #b3b1a0 100%)',
  sage: 'linear-gradient(135deg, #9fb09a 0%, #5d7360 60%, #e5c49e 100%)',
  tuscany: 'linear-gradient(150deg, #c9a67f 0%, #8d8f72 45%, #4d6553 100%)',
  golden: 'linear-gradient(135deg, #eed9ae 0%, #c8a273 40%, #6d7f6a 100%)',
}

type PhotoPlateProps = {
  tone?: PhotoTone
  /** Couple initials shown as a subtle engraved monogram. */
  monogram?: string
  className?: string
  children?: ReactNode
}

export function PhotoPlate({ tone = 'olive', monogram, className, children }: PhotoPlateProps) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-paper-deep', className)}>
      <span aria-hidden className="absolute inset-0" style={{ backgroundImage: TONES[tone] }} />
      <span
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(125%_95%_at_15%_5%,rgba(255,255,255,0.42),transparent_58%)]"
      />
      <span aria-hidden className="paper-texture absolute inset-0 opacity-70" />
      {monogram ? (
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2.5rem,9vw,4.5rem)] tracking-[0.14em] text-ivory/85 uppercase [text-shadow:0_1px_18px_rgba(8,36,25,0.35)]"
        >
          {monogram}
        </span>
      ) : null}
      <div className="relative h-full w-full">{children}</div>
    </div>
  )
}
