'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  /** Stagger for siblings inside the same grid/row (ms). */
  delay?: number
  className?: string
  /** Vertical offset before the element enters the viewport (px). */
  distance?: number
}

/**
 * Scroll-triggered reveal used across the landing page.
 *
 * Motion principle (see AGENTS.md): the hero's wax-seal glow is the only moment
 * that animates on its own; everything else waits for the user to scroll.
 * `prefers-reduced-motion` is honoured by simply rendering the final state.
 */
export function Reveal({ children, delay = 0, className, distance = 24 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]',
        visible ? 'translate-y-0 opacity-100' : 'opacity-0',
        className,
      )}
      style={
        visible
          ? { transitionDelay: `${delay}ms` }
          : { transform: `translateY(${distance}px)`, transitionDelay: `${delay}ms` }
      }
    >
      {children}
    </div>
  )
}
