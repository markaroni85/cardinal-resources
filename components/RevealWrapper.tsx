'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function RevealWrapper({ children, className = '' }: RevealWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => {
      revealEls.forEach((el) => observer.unobserve(el))
    }
  }, [pathname])

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  )
}
