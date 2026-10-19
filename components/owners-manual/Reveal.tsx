'use client'

import { useEffect, useRef, useState } from 'react'

// Fade-up on scroll, like useScrollReveal, but visible by default:
// content only hides once JS confirms it is below the fold.
export default function Reveal({
  children,
  delay = 0,
  style,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return
    setVisible(false)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`om-reveal ${className}`}
      data-visible={visible === false ? 'false' : undefined}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
