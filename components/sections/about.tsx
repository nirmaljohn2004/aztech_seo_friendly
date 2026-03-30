"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Package, Shield, Headphones, ArrowRight } from "lucide-react"

const achievements = [
  { icon: Zap, title: "In-House Team", subtitle: "Design to installation" },
  { icon: Package, title: "Large Stock", subtitle: "Ready for fast delivery" },
  { icon: Shield, title: "Quality Assured", subtitle: "Warranty on all products" },
  { icon: Headphones, title: "After-Sales AMC", subtitle: "Maintenance contracts" },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.12 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref}
      id="about" 
      className={`section-padding bg-[var(--bg-primary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="About Aztech"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        <div className="grid lg:grid-cols-[52%_48%] gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            <p className="eyebrow mb-3">WHO WE ARE</p>
            
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-5">
              Two Decades Of<br />Illuminating The UAE
            </h2>
            
            <div className="w-12 h-[2px] bg-[var(--accent)] mb-5" aria-hidden="true" />
            
            <p className="font-sans text-[1.1rem] font-light leading-[1.8] text-[var(--text-secondary)] mb-5">
              Aztech General Trading LLC has been illuminating the UAE for over 20 years. From our base in Karama, Dubai, we have grown from architectural lighting specialists into one of the UAE&apos;s most comprehensive LED display companies — trusted by government ministries, international hotel chains, hypermarkets, and stadiums alike.
            </p>
            
            <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-body)] mb-5">
              We began by exploring light — projecting it onto building facades, bridges, and hotel exteriors, turning architecture into landmarks. That obsession with light quality and precision carried into everything we do today: indoor LED screens that demand attention, outdoor displays that withstand the UAE summer, and custom-built LED installations that no one else can deliver.
            </p>
            
            <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-body)] mb-6">
              Unlike resellers, we maintain full in-house capability. Our team designs, fabricates, installs, and services every project from start to finish. No subcontractors. No finger-pointing. Just accountable, professional service — backed by a large UAE stock that means your project starts when you need it to.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 font-sans text-[0.9rem] font-medium text-[var(--accent)] hover:underline"
            >
              Read Our Full Company Story
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Visual */}
          <div>
            {/* About image */}
            <div className="relative aspect-[4/3] rounded-[var(--radius-md)] mb-4 overflow-hidden">
              <img 
                src="/images/about_team_install_1774782278140.png"
                alt="Professional office team collaborating on LED display projects"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-[var(--accent)] text-white font-sans text-[0.7rem] font-medium px-[10px] py-1 rounded-[2px]">
                Est. Dubai, UAE
              </div>
            </div>
            
            {/* Achievement cards */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item) => (
                <div 
                  key={item.title}
                  className="bg-[var(--bg-secondary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-light)]"
                >
                  <item.icon className="w-6 h-6 text-[var(--accent-mid)] mb-2" aria-hidden="true" />
                  <h3 className="font-sans text-[0.85rem] font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[0.78rem] text-[var(--text-secondary)]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
