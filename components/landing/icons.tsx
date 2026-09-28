import type { ComponentType } from 'react'
import { CircleCheck, Gift, Hourglass, Images, MapPin, Music2, Palette, PenLine, Send, Shirt } from 'lucide-react'

import type { FeatureIcon } from '@/lib/content/landing'

/** Every glyph accepts the same props so line weight stays consistent. */
export type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>

/**
 * One glyph per `FeatureIcon` key in `lib/content/landing.ts`.
 *
 * `Record<FeatureIcon, …>` makes TypeScript fail the build when a key is added
 * to the content module and no glyph is picked for it.
 */
export const FEATURE_ICONS: Record<FeatureIcon, IconComponent> = {
  countdown: Hourglass,
  rsvp: CircleCheck,
  map: MapPin,
  gallery: Images,
  music: Music2,
  dress: Shirt,
  gift: Gift,
}

/** Step glyphs are resolved by position, so the copy stays icon-free. */
export const STEP_ICONS: IconComponent[] = [PenLine, Palette, Send]
