import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
  title: "SL-DevSolutions — Senior Full-Stack & UI/UX Studio",
  description:
    "SL-DevSolutions crafts ultra-fluid, high-converting bespoke websites and full-stack web applications for ambitious brands worldwide.",
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
    title: "SL-DevSolutions — Senior Full-Stack & UI/UX Studio",
    description:
      "SL-DevSolutions crafts ultra-fluid, high-converting bespoke websites and full-stack web applications for ambitious brands worldwide.",
    url: "https://sl-devsolutions.vercel.app",
    siteName: "SL-DevSolutions",
    images: [
      {
        url: "/SL-DevSolutions Banner.webp",
        width: 1200,
        height: 630,
        alt: "SL-DevSolutions Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SL-DevSolutions — Senior Full-Stack & UI/UX Studio",
    description:
      "SL-DevSolutions crafts ultra-fluid, high-converting bespoke websites and full-stack web applications for ambitious brands worldwide.",
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
    "Full-Stack Web Development",
    "UI/UX Agency",
    "Next.js 15 Developer",
    "React 19 App",
    "Framer Motion Portfolio",
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
    "@type": "WebSite",
    name: "SL-DevSolutions",
    alternateName: ["SL DevSolutions", "SL-DevSolutions Studio"],
    url: "https://sl-devsolutions.vercel.app",
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
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
