import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import HomeButton from "@/components/home-button";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-app-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amodhyh.vercel.app"),
  title: {
    default: "Amodh Herath",
    template: "%s | Amodh Herath",
  },
  description:
    "Backend software engineer focused on distributed architecture and system reliability.",
  openGraph: {
    siteName: "Amodh Herath",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      suppressHydrationWarning
      className={cn(geistSans.variable, geistMono.variable)}
    >
      <body
        className="min-h-screen"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex h-14 max-w-5xl items-center justify-end px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <HomeButton />
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <div className="flex-1 pt-12">
            {children}
          </div>
        </ThemeProvider>
        
        <Suspense fallback={null}>
          <Analytics mode={"production"} />
          <SpeedInsights />
        </Suspense>

      </body>
    </html>
  );
}
