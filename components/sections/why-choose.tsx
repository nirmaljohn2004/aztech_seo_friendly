"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useEffect, useRef, useState } from "react"
import { Calendar, Users, Landmark, Package, Wrench, Award } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "20+ Years in UAE",
    description: "Aztech has been operating in the UAE since before most of our competitors existed. That means deep supplier relationships, unmatched local knowledge, and a reputation built on results — not marketing.",
  },
  {
    icon: Users,
    title: "In-House Everything",
    description: "We do not subcontract. Our in-house team handles design, fabrication, installation, cabling, configuration, and after-sales — giving you a single accountable partner for the entire project lifecycle.",
  },
  {
    icon: Landmark,
    title: "Government-Grade Track Record",
    description: "Our portfolio includes ADNOC HQ, RTA Dubai, Parliament Palace Abu Dhabi, and Ajman Municipality. When institutions demand the highest reliability, they call Aztech.",
  },
  {
    icon: Package,
    title: "Large UAE Stock",
    description: "We maintain substantial on-hand inventory across all major product lines. That means your project starts on schedule — not after a 6-week wait for an import shipment.",
  },
  {
    icon: Wrench,
    title: "After-Sales & AMC",
    description: "Installation day is not the end of our relationship. We offer Annual Maintenance Contracts (AMC), emergency response, remote monitoring, spare parts supply, and firmware updates.",
  },
  {
    icon: Award,
    title: "Trusted by 500+ Clients",
    description: "From hypermarkets to hospitals, from schools to stadiums — 500+ UAE businesses have trusted Aztech. Our growth has been entirely referral and repeat — the most honest measure of quality.",
  },
]

export function WhyChooseSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section 
      ref={ref}
      className={`section-padding bg-[var(--bg-secondary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="Why choose Aztech"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">THE AZTECH DIFFERENCE</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-4">
            Why Serious Buyers Choose Aztech
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-secondary)] max-w-[600px] mx-auto">
            With dozens of LED suppliers in Dubai, here is what makes Aztech the choice for clients who cannot afford to get it wrong.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white p-8 rounded-[var(--radius-md)] border border-[var(--border-light)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:border-[var(--border-accent)] transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-[var(--accent-light)] rounded-[8px] flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
              </div>
              
              <h3 className="font-sans text-[1.05rem] font-semibold text-[var(--text-primary)] mb-3">
                {feature.title}
              </h3>
              
              <p className="font-sans text-[0.9rem] leading-[1.7] text-[var(--text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
