"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

const TOTAL_FRAMES = 240
const FRAME_PATH = (n: number) =>
  `/images/herosection/ezgif-frame-${String(n).padStart(3, "0")}.png`

const trustBadges = [
  "In-house installation team",
  "Large stock — fast delivery",
  "20+ years UAE experience",
]

export function HeroSection() {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const sectionRef  = useRef<HTMLDivElement>(null)
  const imagesRef   = useRef<(HTMLImageElement | null)[]>([])
  const frameRef    = useRef(0)
  const rafRef      = useRef<number | null>(null)
  const [loaded, setLoaded]                 = useState(false)
  const [animationStarted, setAnimationStarted] = useState(false)
  const [loadPct, setLoadPct]               = useState(0)

  // ─── Draw one frame (physical-pixel coordinates, no ctx.scale used) ───────
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current
    const img    = imagesRef.current[idx]
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const cw = canvas.width   // physical pixels
    const ch = canvas.height

    ctx.clearRect(0, 0, cw, ch)

    // Contain mode — show the full image, centred, no crop
    const ir = img.naturalWidth / img.naturalHeight
    const cr = cw / ch
    let dw: number, dh: number, dx: number, dy: number
    if (ir > cr) {
      dw = cw;  dh = cw / ir
      dx = 0;   dy = (ch - dh) / 2
    } else {
      dh = ch;  dw = ch * ir
      dy = 0;   dx = (cw - dw) / 2
    }
    ctx.drawImage(img, dx, dy, dw, dh)
  }

  // ─── Resize: sync canvas physical size to CSS size ────────────────────────
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr  = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width  = Math.round(rect.width  * dpr)
    canvas.height = Math.round(rect.height * dpr)
    drawFrame(frameRef.current)
  }

  // ─── Preload all 240 frames ───────────────────────────────────────────────
  useEffect(() => {
    let isCancelled = false
    const arr: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null)
    const loadingImages: HTMLImageElement[] = []
    let done = 0

    const checkDone = () => {
      if (isCancelled) return
      done++
      setLoadPct(Math.round((done / TOTAL_FRAMES) * 100))
      if (done === TOTAL_FRAMES) {
        imagesRef.current = arr
        setLoaded(true)
        requestAnimationFrame(() => { resizeCanvas(); drawFrame(0) })
      }
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image()
      loadingImages.push(img)
      const idx = i
      
      img.onload = () => {
        arr[idx] = img
        checkDone()
      }
      img.onerror = checkDone
      img.src = FRAME_PATH(i + 1)
      
      // Handle cached images that might not fire onload
      if (img.complete) {
        img.onload = null
        img.onerror = null
        arr[idx] = img
        checkDone()
      }
    }

    const timer = setTimeout(() => {
      if (!isCancelled) setAnimationStarted(true)
    }, 200)

    return () => {
      isCancelled = true
      clearTimeout(timer)
      loadingImages.forEach(img => {
        img.onload = null
        img.onerror = null
        img.src = ''
      })
    }
  }, [])

  // ─── Scroll → frame index ─────────────────────────────────────────────────
  useEffect(() => {
    if (!loaded) return
    const onScroll = () => {
      const sec = sectionRef.current
      if (!sec) return
      const pct = Math.max(0, Math.min(1,
        (window.scrollY - sec.offsetTop) / (sec.offsetHeight - window.innerHeight)
      ))
      const next = Math.min(Math.round(pct * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1)
      if (next !== frameRef.current) {
        frameRef.current = next
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => drawFrame(next))
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [loaded])

  // ─── Resize listener ──────────────────────────────────────────────────────
  useEffect(() => {
    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <div
      ref={sectionRef}
      id="home"
      style={{ height: "500vh" }}
      aria-label="Aztech LED — Dubai LED Screen Supplier"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--bg-primary)]">

        {/* Decorative watermark */}
        <div
          className="absolute top-0 left-0 font-serif font-bold text-[var(--accent)] opacity-[0.03] pointer-events-none select-none leading-none z-0"
          style={{ fontSize: "min(55vw,600px)", transform: "translate(-18%,-12%)" }}
          aria-hidden="true"
        >A</div>

        {/* ── Two-column layout filling full screen height ── */}
        <div className="relative z-10 h-full grid lg:grid-cols-2 grid-cols-1">

          {/* ──────────── LEFT: text ──────────── */}
          <div className="flex flex-col justify-center px-[var(--section-pad-x)] pt-24 pb-10 lg:pt-0 lg:pb-0 overflow-y-auto">

            <p className={`eyebrow mb-4 transition-all duration-700 ${animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              DUBAI&apos;S TRUSTED LED SPECIALISTS
            </p>

            <h1 className={`font-serif font-extrabold leading-[1.05] text-[var(--text-primary)] mb-5 transition-all duration-700 delay-100 ${animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontSize: "clamp(2.6rem,4.2vw,4.8rem)" }}>
              Illuminate<br />
              <span className="relative inline-block">
                Your Vision
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 8 Q 50 2, 100 8 Q 150 14, 198 6" fill="none" stroke="var(--copper)" strokeWidth="3" strokeLinecap="round"
                    className={animationStarted ? "svg-underline" : ""} />
                </svg>
              </span>
            </h1>

            <p className={`font-sans font-light leading-[1.85] text-[var(--text-secondary)] max-w-[420px] mb-8 transition-all duration-700 delay-200 ${animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontSize: "clamp(0.9rem,1.1vw,1.05rem)" }}>
              From high-resolution indoor displays to weather-proof outdoor billboards —
              Aztech has been illuminating UAE&apos;s most iconic spaces for over 20 years.
              Trusted by ADNOC, RTA, Dubai Cricket Stadium and 500+ clients.
            </p>

            <div className={`flex flex-wrap gap-3 mb-7 transition-all duration-700 delay-300 ${animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a href="#contact"
                aria-label="Get a free LED screen quote"
                className="inline-flex items-center px-6 py-3.5 bg-[var(--accent)] text-white font-sans text-sm font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-px hover:shadow-lg transition-all duration-200">
                Get a Free Quote
              </a>
              <a href="#projects"
                aria-label="View project portfolio"
                className="inline-flex items-center px-6 py-3.5 border-[1.5px] border-[var(--border-medium)] text-[var(--text-body)] font-sans text-sm font-semibold rounded-[var(--radius-sm)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200">
                View Our Projects
              </a>
            </div>

            <div className={`flex flex-wrap gap-x-5 gap-y-2 mb-10 transition-all duration-700 delay-[400ms] ${animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {trustBadges.map(b => (
                <div key={b} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[var(--success)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[0.78rem] text-[var(--text-secondary)]">{b}</span>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className={`hidden lg:flex items-center gap-3 absolute bottom-10 left-[var(--section-pad-x)] transition-all duration-1000 delay-700 ${animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="relative h-10 w-px bg-[var(--border-medium)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] scroll-indicator-dot" />
              </div>
              <span className="font-sans text-[0.65rem] text-[var(--text-muted)] tracking-[0.2em] uppercase">Scroll to explore</span>
            </div>
          </div>

          {/* ──────────── RIGHT: canvas ──────────── */}
          <div className="relative h-full overflow-hidden">

            {/* Loading ring */}
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="23" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="3" />
                  <circle cx="28" cy="28" r="23" fill="none" stroke="var(--accent)" strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 23}`}
                    strokeDashoffset={`${2 * Math.PI * 23 * (1 - loadPct / 100)}`}
                    style={{ transition: "stroke-dashoffset 0.15s linear" }} />
                </svg>
                <span className="font-sans text-[0.72rem] text-[var(--text-muted)]">Loading {loadPct}%</span>
              </div>
            )}

            <canvas
              ref={canvasRef}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${loaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
              style={{ mixBlendMode: "multiply" }}
              aria-label="Interactive LED module exploded-view — scroll to explore"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
