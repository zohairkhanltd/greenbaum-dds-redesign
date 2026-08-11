import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { AppImageKitProvider } from "@/components/providers/imagekit-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dentist in Bethesda, MD | Bethesda Center for Family & Cosmetic Dentistry",
    template: "%s | Bethesda Center for Family & Cosmetic Dentistry",
  },
  description:
    "Personalized family, cosmetic, restorative, implant, laser and dental sleep care in Bethesda, MD. Dr. Bernard L. Greenbaum, DDS and Dr. Nhu Thuy H. Luong, DDS.",
  metadataBase: new URL("https://www.greenbaumdds.com"),
  keywords: [
    "Bethesda Dentist",
    "Bethesda Dental Sleep Medicine",
    "Sleep Apnea Bethesda",
    "Cosmetic Dentistry Bethesda",
    "Dental Implants Bethesda",
    "Dr Bernard Greenbaum",
    "Dr Nhu Thuy Luong",
    "Family Dentist 20817",
  ],
  authors: [{ name: "Bethesda Center for Family & Cosmetic Dentistry" }],
  openGraph: {
    title: "Dentist in Bethesda, MD | Bethesda Center for Family & Cosmetic Dentistry",
    description:
      "Personalized family, cosmetic, restorative, implant, laser and dental sleep care in Bethesda, MD.",
    url: "https://www.greenbaumdds.com",
    siteName: "Bethesda Center for Family & Cosmetic Dentistry",
    locale: "en_US",
    type: "website",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Bethesda Center for Family & Cosmetic Dentistry",
  image: "https://www.greenbaumdds.com/brand/greenbaum-mark.webp",
  telePhone: "(301) 812-4946",
  email: "info@greenbaumdds.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6410 Rockledge Drive, Suite 106",
    addressLocality: "Bethesda",
    addressRegion: "MD",
    postalCode: "20817",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.0264,
    longitude: -77.1423,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Preventive & Family Dentistry",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cosmetic Dentistry",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Sleep Medicine & Sleep Apnea Therapy",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Implants",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${cormorantGaramond.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        {/* Elfsight Google Reviews Script */}
        <script src="https://elfsightcdn.com/platform.js" async />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased selection:bg-brand-100 selection:text-brand-900">
        <AppImageKitProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-700 text-white font-semibold rounded-lg shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </AppImageKitProvider>
      </body>
    </html>
  );
}
