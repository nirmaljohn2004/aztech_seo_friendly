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
  const currentTimeRef = useRef(0)
  const durationRef    = useRef(0)


  // ─── Entry animation ──────────────────────────────────────────────────────
  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const raf = requestAnimationFrame(() => el.setAttribute("data-animate", "true"))
    return () => cancelAnimationFrame(raf)
  }, [])

  // ─── Duration capture ─────────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const capture = () => {
      const dur = video.duration
      if (dur && isFinite(dur) && dur > 0) durationRef.current = dur
      else if (video.seekable.length > 0) {
        const end = video.seekable.end(video.seekable.length - 1)
        if (isFinite(end) && end > 0) durationRef.current = end
      }
    }
    video.addEventListener("loadedmetadata", capture)
    video.addEventListener("durationchange",  capture)
    video.addEventListener("canplay",         capture)
    capture()
    return () => {
      video.removeEventListener("loadedmetadata", capture)
      video.removeEventListener("durationchange",  capture)
      video.removeEventListener("canplay",         capture)
    }
  }, [])

  // ─── rAF: ensure playing + scroll scrub ───────────────────────────────────
  useEffect(() => {
    let raf: number

    const tick = () => {
      const sec      = sectionRef.current
      const video    = videoRef.current
      const duration = durationRef.current

      if (video) {
        // Keep video in "playing" state for GPU compositor (mix-blend-mode needs this)
        // Multiple play() calls on muted video are safe — no pending guard needed
        if (video.paused && !video.seeking) video.play().catch(() => {})
        if (video.playbackRate !== 0)       video.playbackRate = 0
      }

      if (sec && video && duration > 0) {
        const rect         = sec.getBoundingClientRect()
        const scrollHeight = sec.offsetHeight - window.innerHeight
        const pct = scrollHeight > 0 ? Math.max(0, Math.min(1, -rect.top / scrollHeight)) : 0
        const target = pct * duration
        currentTimeRef.current += (target - currentTimeRef.current) * 0.12
        if (Math.abs(video.currentTime - currentTimeRef.current) > 0.001) {
          video.currentTime = currentTimeRef.current
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])


  return (
    <div ref={sectionRef} id="home" className="lg:h-[500vh]" aria-label="Aztech LED — Dubai LED Screen Supplier">
      <div className="lg:sticky lg:top-0 lg:h-screen w-full overflow-hidden bg-[var(--bg-primary)]">

        <div className="absolute top-0 left-0 font-serif font-bold text-[var(--accent)] opacity-[0.03] pointer-events-none select-none leading-none z-0"
          style={{ fontSize: "min(55vw,600px)", transform: "translate(-18%,-12%)" }} aria-hidden="true">A</div>

        <div className="relative z-10 lg:h-full flex flex-col lg:justify-center lg:grid lg:grid-cols-2">

          {/* LEFT */}
          <div ref={textRef} className="flex flex-col px-[var(--section-pad-x)] pt-28 pb-14 lg:justify-center lg:pt-0 lg:pb-0">
            <p className="eyebrow hero-item mb-3 lg:mb-4" style={{ "--hero-delay": "0ms" } as React.CSSProperties}>
              DUBAI&apos;S TRUSTED LED SPECIALISTS
            </p>
            <h1 className="font-serif hero-item font-extrabold leading-[1.05] text-[var(--text-primary)] mb-4 lg:mb-5"
              style={{ fontSize: "clamp(2.8rem,8vw,4.8rem)", "--hero-delay": "100ms" } as React.CSSProperties}>
              Illuminate<br />
              <span className="relative inline-block">
                Your Vision
              </span>
            </h1>
            <p className="font-sans hero-item font-light leading-[1.75] text-[var(--text-secondary)] max-w-[420px] mb-6 lg:mb-8"
              style={{ fontSize: "clamp(0.88rem,1.1vw,1.05rem)", "--hero-delay": "200ms" } as React.CSSProperties}>
              From high-resolution indoor displays to weather-proof outdoor billboards —
              Aztech has been illuminating UAE&apos;s most iconic spaces for over 20 years.
              Trusted by ADNOC, RTA, Dubai Cricket Stadium and 500+ clients.
            </p>
            <div className="flex hero-item flex-wrap gap-3 mb-5 lg:mb-7" style={{ "--hero-delay": "300ms" } as React.CSSProperties}>
              <a href="#contact" className="inline-flex items-center px-6 py-3.5 bg-[var(--accent)] text-white font-sans text-sm font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-px hover:shadow-lg transition-all duration-200">Get a Free Quote</a>
              <a href="#projects" className="inline-flex items-center px-6 py-3.5 border-[1.5px] border-[var(--border-medium)] text-[var(--text-body)] font-sans text-sm font-semibold rounded-[var(--radius-sm)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200">View Our Projects</a>
            </div>
            <div className="flex hero-item flex-wrap gap-x-5 gap-y-2" style={{ "--hero-delay": "400ms" } as React.CSSProperties}>
              {trustBadges.map(b => (
                <div key={b} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[var(--success)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[0.78rem] text-[var(--text-secondary)]">{b}</span>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3 absolute bottom-10 left-[var(--section-pad-x)] hero-item" style={{ "--hero-delay": "700ms" } as React.CSSProperties}>
              <div className="relative h-10 w-px bg-[var(--border-medium)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] scroll-indicator-dot" />
              </div>
              <span className="font-sans text-[0.65rem] text-[var(--text-muted)] tracking-[0.2em] uppercase">Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT: video (playing state enforced by rAF tick) */}
          <div className="hidden lg:flex items-center justify-center relative h-full overflow-hidden">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ mixBlendMode: "multiply" }}
              muted
              autoPlay
              playsInline
              preload="auto"
              aria-label="LED module animation"
            >
              <source src="/images/hero-smooth.webm" type="video/webm" />
              <source src="/images/hero-smooth.mp4"  type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
    </div>
  )
}
