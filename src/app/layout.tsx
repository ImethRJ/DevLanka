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
  title: "DevLanka — Senior Full-Stack Engineering & UI/UX Architecture Studio",
  description:
    "DevLanka crafts ultra-fluid, high-converting bespoke websites and full-stack web applications for ambitious brands worldwide.",
  keywords: [
    "Full-Stack Web Development",
    "UI/UX Agency",
    "Next.js 15 Developer",
    "React 19 App",
    "Framer Motion Portfolio",
    "Bespoke Web Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased min-h-screen">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
