"use client"

import { useEffect, useRef, useState } from "react"

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)
  
  useEffect(() => {
    if (isVisible) return

    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
        // [VITAL FIX] React 19 / Next 16 Router Cache often freezes state-driven className updates 
        // after soft navigating via the Back button. We MUST force the DOM class manually.
        entry.target.classList.add("visible")
        setIsVisible(true)
        observer.disconnect()
      }
    }, {
      root: null,
      rootMargin: '100px 0px',
      threshold: 0
    })

    const timer = setTimeout(() => {
      observer.observe(currentRef)
    }, 100)

    const failsafe = setTimeout(() => {
      if (currentRef) currentRef.classList.add("visible")
      setIsVisible(true)
    }, 3000) // Fallback just in case they leave it running in background

    return () => {
      clearTimeout(timer)
      clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [isVisible])

  return { ref, isVisible }
}
