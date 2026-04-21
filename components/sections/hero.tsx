"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import Image from "next/image"

const trustBadges = [
  "In-house installation team",
  "Large stock — fast delivery",
  "20+ years UAE experience",
]

export function HeroSection() {
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[var(--bg-primary)] overflow-hidden"
      aria-label="Aztech LED — Dubai LED Screen Supplier Hero"
    >
      {/* Background decorative A */}
      <div 
        className="absolute top-0 left-0 font-serif text-[600px] font-bold text-[var(--accent)] opacity-[0.04] pointer-events-none select-none leading-none"
        style={{ transform: "translate(-20%, -10%)" }}
        aria-hidden="true"
      >
        A
      </div>

      <div className="relative z-10 px-[var(--section-pad-x)] pt-[140px] pb-[60px] lg:pt-[160px] lg:pb-[80px] min-h-screen flex flex-col">
        <div className="flex-1 grid lg:grid-cols-[55%_45%] gap-12 items-center max-w-[var(--container-max)] mx-auto w-full">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <p className="eyebrow mb-4">
              DUBAI&apos;S TRUSTED LED SPECIALISTS
            </p>

            {/* Headline with animated words */}
            <h1 className="font-serif text-[clamp(3.2rem,5.5vw,5.5rem)] font-extrabold leading-[1.0] text-[var(--text-primary)] mb-6">
              <span 
                className={`inline-block ${animationStarted ? "word-animate" : "opacity-0"}`}
                style={{ animationDelay: "0s" }}
              >
                Illuminate
              </span>
              <br />
              <span className="relative inline-block">
                <span 
                  className={`inline-block ${animationStarted ? "word-animate" : "opacity-0"}`}
                  style={{ animationDelay: "0.08s" }}
                >
                  Your Vision
                </span>
                {/* SVG underline */}
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-4" 
                  viewBox="0 0 200 12" 
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 50 2, 100 8 Q 150 14, 198 6"
                    fill="none"
                    stroke="var(--copper)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className={animationStarted ? "svg-underline" : ""}
                  />
                </svg>
              </span>
            </h1>

            {/* Lead paragraph */}
            <p className="font-sans text-[1.1rem] font-light leading-[1.8] text-[var(--text-secondary)] max-w-[480px] mb-8">
              From high-resolution indoor displays to weather-proof outdoor billboards — Aztech has been illuminating UAE&apos;s most iconic spaces for over 20 years. Trusted by ADNOC, RTA, Dubai Cricket Stadium, and 500+ clients across the Emirates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-7">
              <a
                href="#contact"
                aria-label="Get a free LED screen quote from Aztech LED Dubai"
                className="inline-flex items-center px-7 py-[14px] bg-[var(--accent)] text-white font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(27,58,92,0.3)] transition-all duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="#projects"
                aria-label="View Aztech LED project portfolio"
                className="inline-flex items-center px-7 py-[14px] bg-transparent border-[1.5px] border-[var(--border-medium)] text-[var(--text-body)] font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                View Our Projects
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <Check className="w-[14px] h-[14px] text-[var(--success)]" aria-hidden="true" />
                  <span className="font-sans text-[0.8rem] text-[var(--text-secondary)]">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual block */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] lg:max-w-none aspect-[3/4] rounded-[4px] overflow-hidden">
              <Image 
                src="/images/hero_led_wall_1774782256673.png"
                alt="Large LED video wall display in a modern Dubai commercial space"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width={1200}
                height={1600}
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-auto pt-8">
          <div className="relative h-[60px] w-[1px] bg-[var(--border-medium)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[var(--border-medium)] scroll-indicator-dot" />
          </div>
          <span className="font-sans text-[0.7rem] text-[var(--text-muted)] tracking-[0.15em] uppercase">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
