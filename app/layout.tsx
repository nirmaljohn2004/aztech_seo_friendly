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
  description: "Aztech LED — Dubai's most trusted LED screen supplier with 20+ years experience. Indoor LED screens, outdoor LED displays, transparent LED, rental screens & custom digital signage across UAE. Call +971 4 357 4004.",
  keywords: "LED screen Dubai, LED screen supplier UAE, outdoor LED screen Dubai, indoor LED display UAE, digital signage Dubai, LED wall rental Dubai, transparent LED screen UAE, LED screen installation Dubai, LED display company UAE, Aztech LED, ledscreenuae, LED screen Karama Dubai",
  authors: [{ name: "Aztech General Trading LLC" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
  openGraph: {
    type: "website",
    url: "https://www.ledscreenuae.com/",
    title: "Aztech LED | #1 LED Screen Supplier in Dubai, UAE",
    description: "Dubai's most trusted LED screen supplier. 20+ years, 500+ clients, 1000+ projects. Indoor, outdoor, rental & custom LED display solutions across UAE.",
    siteName: "Aztech LED",
    locale: "en_AE",
    images: [
      {
        url: "https://www.ledscreenuae.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aztech LED - Dubai's Most Trusted LED Screen Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aztech LED | #1 LED Screen Supplier in Dubai, UAE",
    description: "Dubai's most trusted LED screen supplier. Indoor, outdoor, rental & custom LED display solutions. 20+ years, 1000+ projects.",
    images: ["https://www.ledscreenuae.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.ledscreenuae.com/",
    languages: {
      'en': 'https://www.ledscreenuae.com/',
      'ar': 'https://www.ledscreenuae.com/ar/',
    },
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1B3A5C',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.ledscreenuae.com/#business",
                  "name": "Aztech General Trading LLC",
                  "alternateName": ["Aztech LED", "Aztech General Trading"],
                  "url": "https://www.ledscreenuae.com",
                  "logo": "https://www.ledscreenuae.com/logo.png",
                  "image": "https://www.ledscreenuae.com/og-image.jpg",
                  "description": "Premium LED screen supplier in Dubai, UAE. Indoor LED displays, outdoor LED screens, transparent LED, digital signage, rental screens and custom LED solutions. 20+ years UAE experience.",
                  "telephone": "+971-4-357-4004",
                  "email": "info@ledscreenuae.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Al Nishwan Building, Near ADCB Metro Station, Karama",
                    "addressLocality": "Dubai",
                    "addressRegion": "Dubai",
                    "addressCountry": "AE",
                    "postalCode": "231331"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "25.2518",
                    "longitude": "55.3141"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "City", "name": "Abu Dhabi" },
                    { "@type": "City", "name": "Sharjah" },
                    { "@type": "City", "name": "Ajman" },
                    { "@type": "City", "name": "Fujairah" },
                    { "@type": "Country", "name": "United Arab Emirates" }
                  ],
                  "serviceType": [
                    "LED Screen Supply",
                    "Indoor LED Display",
                    "Outdoor LED Display",
                    "Transparent LED Screen",
                    "Rental LED Screen",
                    "Digital Signage",
                    "Custom LED Fabrication",
                    "Exterior Architectural Lighting",
                    "Audio Visual Integration",
                    "LED Screen Installation",
                    "LED Maintenance AMC"
                  ],
                  "priceRange": "AED",
                  "currenciesAccepted": "AED",
                  "paymentAccepted": "Cash, Bank Transfer, Cheque",
                  "sameAs": [
                    "https://www.linkedin.com/company/aztechled",
                    "https://www.instagram.com/aztechled",
                    "https://www.facebook.com/aztechled"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ledscreenuae.com/#website",
                  "url": "https://www.ledscreenuae.com",
                  "name": "Aztech LED",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.ledscreenuae.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
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
