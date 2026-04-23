import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aztech LED | #1 LED Screen Supplier in Dubai, UAE | Indoor & Outdoor Displays",
  description: "Aztech LED — Dubai's trusted LED screen supplier for 20+ years. Indoor LED displays, outdoor billboards, transparent LED, video walls & custom installations. Trusted by ADNOC, RTA, Dubai Mall. Get a free quote today.",
  keywords: "LED screen Dubai, LED display supplier UAE, outdoor LED billboard Dubai, indoor LED screen UAE, video wall Dubai, transparent LED display, LED screen installation Dubai, digital signage UAE, LED screen price Dubai, P2 LED screen Dubai",
  authors: [{ name: "Aztech LED General Trading LLC" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: "website",
    url: "https://aztech-seo-friendly.vercel.app/",
    title: "Aztech LED | #1 LED Screen Supplier in Dubai, UAE",
    description: "Dubai's most trusted LED display company. 20+ years experience. Indoor, outdoor, transparent LED screens & video walls. Serving ADNOC, RTA, Dubai Mall & 500+ clients.",
    siteName: "Aztech LED General Trading LLC",
    locale: "en_AE",
    images: [
      {
        url: "https://aztech-seo-friendly.vercel.app/images/hero_led_wall_1774782256673.png",
        width: 1200,
        height: 800,
        alt: "Large LED video wall display in a modern Dubai commercial space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aztech LED | #1 LED Screen Supplier in Dubai, UAE",
    description: "Dubai's most trusted LED display company. Indoor, outdoor & specialty LED screens. 20+ years. 500+ clients.",
    images: ["https://aztech-seo-friendly.vercel.app/images/hero_led_wall_1774782256673.png"],
  },
  alternates: {
    canonical: "https://aztech-seo-friendly.vercel.app/",
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai, UAE',
    'geo.position': '25.2048493;55.2707828',
    'ICBM': '25.2048493, 55.2707828',
    'http-equiv-Content-Language': 'en',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero image for LCP */}
        <link rel="preload" as="image" href="/images/hero_led_wall_1774782256673.png" />
        {/* Geo tags for UAE local SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.position" content="25.2048493;55.2707828" />
        <meta name="ICBM" content="25.2048493, 55.2707828" />
        <meta httpEquiv="Content-Language" content="en" />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aztech LED General Trading LLC",
              "image": "https://aztech-seo-friendly.vercel.app/images/hero_led_wall_1774782256673.png",
              "@id": "https://aztech-seo-friendly.vercel.app/",
              "url": "https://aztech-seo-friendly.vercel.app/",
              "telephone": "+97143574004",
              "priceRange": "AED 10,000 - AED 200,000+",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Nishwan Building, Near ADCB Metro Station, Karama",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "231331",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2048493,
                "longitude": 55.2707828
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": ["https://wa.me/971561425339"],
              "description": "Aztech LED is Dubai's leading LED screen supplier with 20+ years experience. We supply indoor displays, outdoor billboards, transparent LED, video walls and specialty screens across UAE.",
              "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "UAE"],
              "knowsAbout": ["LED Screen", "Digital Signage", "Outdoor Billboard", "Video Wall", "Indoor LED Display", "Transparent LED", "Architectural Lighting"]
            })
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aztech LED",
              "url": "https://aztech-seo-friendly.vercel.app/",
              "description": "Dubai's #1 LED screen supplier. Indoor, outdoor, specialty LED displays and video walls.",
              "publisher": {
                "@type": "Organization",
                "name": "Aztech LED General Trading LLC",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://aztech-seo-friendly.vercel.app/icon.svg",
                  "width": 512,
                  "height": 512
                }
              }
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aztech-seo-friendly.vercel.app/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://aztech-seo-friendly.vercel.app/#products" },
                { "@type": "ListItem", "position": 3, "name": "Solutions", "item": "https://aztech-seo-friendly.vercel.app/#solutions" },
                { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://aztech-seo-friendly.vercel.app/#projects" },
                { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://aztech-seo-friendly.vercel.app/#contact" }
              ]
            })
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the price of an LED screen in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LED screen prices in Dubai vary based on size, pixel pitch and type. Indoor LED screens start from AED 10,000, while large outdoor billboard displays range from AED 50,000 to AED 200,000+. Contact Aztech LED for a free custom quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Aztech LED supply outdoor LED screens in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED supplies weatherproof outdoor DIP and SMD LED displays rated up to 5000 nits for the UAE climate, suitable for billboards, building facades, and roadside signage across Dubai, Abu Dhabi, Sharjah and all Emirates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is pixel pitch and which one should I choose?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pixel pitch is the distance in millimetres between LED clusters. A smaller number (e.g. P1.2) means higher resolution suitable for close viewing indoors. A larger number (e.g. P6 or P10) is ideal for outdoor billboards viewed from a distance. Aztech stocks P1.2 to P10."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Aztech LED provide installation services in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED has a full in-house installation team that handles site survey, structural mounting, cable routing, screen assembly, controller configuration and final commissioning. No subcontractors are used."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer maintenance contracts for LED screens?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Aztech LED offers Annual Maintenance Contracts (AMC) covering preventive maintenance, emergency callouts, spare parts supply, remote monitoring and firmware updates with a 24-hour response SLA."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
