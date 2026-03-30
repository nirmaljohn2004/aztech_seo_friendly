"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Indoor vs Outdoor LED Screens: Which Do You Actually Need?",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Jan 2025",
    excerpt: "The choice between indoor and outdoor LED isn't just about weatherproofing. Brightness, pixel pitch, viewing distance, and content type all play a role. Here is how to decide.",
    image: "/images/blog_compare.png"
  },
  {
    title: "Pixel Pitch Explained: Choosing the Right Resolution for Your Space",
    category: "Technical Guide",
    readTime: "7 min read",
    date: "Dec 2024",
    excerpt: "P1.86 vs P2.5 vs P4 — what do these numbers mean and how do they affect what your audience sees? A plain-English guide for procurement managers and fit-out contractors.",
    image: "/images/blog_pixel.png"
  },
  {
    title: "Top 5 LED Display Trends Dominating Dubai in 2025",
    category: "Industry Insight",
    readTime: "4 min read",
    date: "Feb 2025",
    excerpt: "Transparent LED, kinetic screens, and AI-driven content management are reshaping how Dubai businesses use digital displays. What's worth investing in right now?",
    image: "/images/blog_trends.png"
  },
]

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref}
      id="blog" 
      className={`section-padding bg-[var(--bg-secondary)] reveal-section ${isVisible ? "visible" : ""}`}
      aria-label="Blog and resources"
    >
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow mb-3">LED KNOWLEDGE HUB</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.15] text-[var(--text-primary)] mb-4">
            Insights & Buying Guides
          </h2>
          <p className="font-sans text-[1rem] leading-[1.75] text-[var(--text-secondary)] max-w-[600px]">
            Practical advice on LED screen selection, installation and maintenance — written for UAE buyers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article 
              key={post.title}
              className="bg-white rounded-[var(--radius-md)] border border-[var(--border-light)] overflow-hidden group hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Blog Image */}
              <div className="relative aspect-[16/9] bg-[var(--bg-tertiary)] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block font-sans text-[0.7rem] font-medium px-[10px] py-[3px] bg-[var(--accent-light)] text-[var(--accent)] rounded-[var(--radius-full)] mb-3">
                  {post.category}
                </span>
                
                <h3 className="font-sans text-[1.05rem] font-semibold text-[var(--text-primary)] leading-[1.4] mb-2 line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                
                <p className="font-sans text-[0.88rem] text-[var(--text-secondary)] leading-[1.6] line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[0.75rem] text-[var(--text-muted)]">
                    {post.date} · {post.readTime}
                  </span>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 font-sans text-[0.85rem] font-medium text-[var(--accent)] hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-[1.5px] border-[var(--accent)] text-[var(--accent)] font-sans text-[0.9rem] font-semibold rounded-[var(--radius-sm)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
