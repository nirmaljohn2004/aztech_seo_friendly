"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"

const trustBadges = [
  "In-house installation team",
  "Large stock — fast delivery",
  "20+ years UAE experience",
]

export function HeroSection() {
  const videoRef      = useRef<HTMLVideoElement>(null)
  const sectionRef    = useRef<HTMLDivElement>(null)
  const textRef       = useRef<HTMLDivElement>(null)


  // ─── Entry animation ──────────────────────────────────────────────────────
  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const raf = requestAnimationFrame(() => el.setAttribute("data-animate", "true"))
    return () => cancelAnimationFrame(raf)
  }, [])

  // ─── rAF: ensure video playback ───────────────────────────────────────────
  useEffect(() => {
    let raf: number

    const tick = () => {
      const video    = videoRef.current

      if (video) {
        // Keep video in "playing" state for GPU compositor (mix-blend-mode needs this)
        // Multiple play() calls on muted video are safe — no pending guard needed
        if (video.paused && !video.seeking) video.play().catch(() => {})
        if (video.playbackRate !== 1)       video.playbackRate = 1
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])


  return (
    <div ref={sectionRef} id="home" className="pt-[84px] md:pt-[92px]" aria-label="Aztech LED — Dubai LED Screen Supplier">
      <div className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden bg-[var(--bg-primary)]">

        <div className="absolute top-0 left-0 font-serif font-bold text-[var(--accent)] opacity-[0.03] pointer-events-none select-none leading-none z-0"
          style={{ fontSize: "min(55vw,600px)", transform: "translate(-18%,-12%)" }} aria-hidden="true">A</div>

        <div className="relative z-10 min-h-[calc(100vh-128px)] flex flex-col lg:grid lg:grid-cols-[0.48fr_0.52fr]">

          {/* LEFT */}
          <div ref={textRef} className="relative flex flex-col justify-center px-[var(--section-pad-x)] pt-12 pb-10 lg:min-h-[calc(100vh-128px)] lg:pt-4 lg:pb-8">
            <div className="w-full max-w-[570px]">
              <p className="eyebrow hero-item mb-3 lg:mb-5" style={{ "--hero-delay": "0ms" } as React.CSSProperties}>
              DUBAI&apos;S TRUSTED LED SPECIALISTS
            </p>
              <h1 className="font-serif hero-item font-extrabold leading-[1.02] text-[var(--text-primary)] mb-5 lg:mb-5"
              style={{ fontSize: "clamp(3rem,4.9vw,5rem)", "--hero-delay": "100ms" } as React.CSSProperties}>
              Illuminate<br />
              <span className="relative inline-block">
                Your Vision
              </span>
            </h1>
              <p className="font-sans hero-item font-light leading-[1.65] text-[var(--text-secondary)] max-w-[510px] mb-6 lg:mb-7"
              style={{ fontSize: "clamp(0.95rem,1vw,1.05rem)", "--hero-delay": "200ms" } as React.CSSProperties}>
              From high-resolution indoor displays to weather-proof outdoor billboards —
              Aztech has been illuminating UAE&apos;s most iconic spaces for over 20 years.
              Trusted by ADNOC, RTA, Dubai Cricket Stadium and 500+ clients.
            </p>
              <div className="flex hero-item flex-wrap gap-3 mb-5 lg:mb-6" style={{ "--hero-delay": "300ms" } as React.CSSProperties}>
              <a href="#contact" className="inline-flex min-h-12 items-center px-7 py-3.5 bg-[var(--accent)] text-white font-sans text-sm font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-px hover:shadow-lg transition-all duration-200">Get a Free Quote</a>
              <a href="#projects" className="inline-flex min-h-12 items-center px-7 py-3.5 border-[1.5px] border-[var(--border-medium)] text-[var(--text-body)] font-sans text-sm font-semibold rounded-[var(--radius-sm)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200">View Our Projects</a>
            </div>
              <div className="flex hero-item flex-wrap gap-x-6 gap-y-2.5 border-t border-[var(--border-light)] pt-4" style={{ "--hero-delay": "400ms" } as React.CSSProperties}>
              {trustBadges.map(b => (
                <div key={b} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[var(--success)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[0.78rem] text-[var(--text-secondary)]">{b}</span>
                </div>
              ))}
            </div>
              <div className="hidden lg:flex items-center gap-3 mt-4 hero-item" style={{ "--hero-delay": "700ms" } as React.CSSProperties}>
                <div className="relative h-8 w-px bg-[var(--border-medium)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] scroll-indicator-dot" />
                </div>
                <span className="font-sans text-[0.65rem] text-[var(--text-muted)] tracking-[0.2em] uppercase">Scroll to explore</span>
              </div>
            </div>
          </div>

          {/* RIGHT: video */}
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-[var(--section-pad-x)] pb-10 lg:min-h-[calc(100vh-128px)] lg:px-8 lg:py-6">
            <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent lg:block" aria-hidden="true" />
            <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-[8px] border border-white/40 shadow-[0_24px_80px_rgba(17,17,17,0.18)] lg:min-h-0">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/20 via-transparent to-white/10" aria-hidden="true" />
              <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ mixBlendMode: "multiply" }}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-fallback.jpg"
              aria-label="LED module animation"
            >
              <source src="/videos/aztech-hero-cinematic.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
