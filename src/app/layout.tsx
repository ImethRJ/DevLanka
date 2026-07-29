import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sl-devsolutions.vercel.app"),
  title: "SL Dev Solutions — Web Site Agency & Software Developers in Sri Lanka",
  description:
    "SL Dev Solutions is a top-rated web site agency and software development team based in Panadura, Sri Lanka. Specialized in web applications development, bespoke websites, and UI/UX design.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SL Dev Solutions — Software Developers in Sri Lanka & Panadura",
    description:
      "Looking for software developers near me or web site agency in Sri Lanka? SL Dev Solutions engineers high-performing web applications and custom software.",
    url: "https://sl-devsolutions.vercel.app",
    siteName: "SL Dev Solutions",
    images: [
      {
        url: "/SL-DevSolutions Banner.webp",
        width: 1200,
        height: 630,
        alt: "SL Dev Solutions Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SL Dev Solutions — Software Developers in Sri Lanka & Panadura",
    description:
      "Top-tier web site developers and software engineers in Panadura, Sri Lanka. Web applications development & UI/UX design.",
    images: ["/SL-DevSolutions Banner.webp"],
  },
  verification: {
    google: "googlea1eec9e2d3304b87",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/SL-DevSolutions Logo.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: [
    "SL-DevSolutions",
    "SL Dev Solutions",
    "SL DevSolutions",
    "Dev Solutions",
    "SL Dev Solutions Studio",
    "Software Developers in Srilanka",
    "Software Developers in Sri Lanka",
    "Software Developers in Panadura",
    "Software Developers near me",
    "Web Sites Developers",
    "Web Site Agency",
    "Web Applications Development",
    "Web Developers Sri Lanka",
    "Web Development Company Sri Lanka",
    "Web Design Agency Panadura",
    "Full-Stack Web Development",
    "UI/UX Agency Sri Lanka",
    "Next.js 15 Developer",
    "React 19 App",
    "Bespoke Web Design",
    "Sri Lanka Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SL Dev Solutions",
    alternateName: [
      "SL-DevSolutions",
      "SL DevSolutions",
      "SL Dev Solutions Studio",
      "Dev Solutions",
    ],
    url: "https://sl-devsolutions.vercel.app",
    logo: "https://sl-devsolutions.vercel.app/SL-DevSolutions%20Logo.webp",
    image: "https://sl-devsolutions.vercel.app/SL-DevSolutions%20Banner.webp",
    description:
      "Senior software developers and web site agency in Panadura, Sri Lanka specializing in bespoke web applications development and UI/UX design.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Panadura",
      addressRegion: "Western Province",
      addressCountry: "LK",
    },
    areaServed: [
      "Panadura",
      "Colombo",
      "Sri Lanka",
      "Worldwide",
    ],
    serviceType: [
      "Software Development",
      "Web Applications Development",
      "Web Site Agency Services",
      "UI/UX Design",
      "Bespoke Software Engineering",
    ],
  };

  return (
    <html lang="en" className={`${jakartaSans.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased min-h-screen">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
