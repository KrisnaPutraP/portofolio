import type React from "react"
import Navbar from "@/components/Navbars/bottom-navbar"
import { ThemeProvider } from "@/components/Themes/theme-provider"
import { TooltipProvider } from "@/components/magicui/tooltip"
import { DATA } from "@/data/data"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/magicui/toaster"
import Footer from "@/components/Footer/footer"
import { ChatbotFAB } from "@/components/Chat/chatbot-fab"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex flex-col min-h-screen bg-background font-sans antialiased", raleway.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Enhanced background with better positioning and smoother animations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-16 left-1/4 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-400/20 dark:from-pink-600/15 dark:to-rose-600/15 blur-[80px] animate-pulse" />
              <div className="absolute top-32 right-1/4 translate-x-1/2 h-56 w-56 rounded-full bg-gradient-to-r from-purple-400/20 to-violet-400/20 dark:from-purple-600/15 dark:to-violet-600/15 blur-[70px] animate-pulse delay-300" />
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-600/15 dark:to-cyan-600/15 blur-[75px] animate-pulse delay-500" />
              <div className="absolute top-1/2 right-1/3 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-r from-indigo-400/20 to-blue-400/20 dark:from-indigo-600/15 dark:to-blue-600/15 blur-[65px] animate-pulse delay-700" />
              <div className="absolute bottom-32 left-1/4 -translate-x-1/2 h-52 w-52 rounded-full bg-gradient-to-r from-cyan-400/25 to-teal-400/25 dark:from-cyan-600/15 dark:to-teal-600/15 blur-[60px] animate-pulse delay-1000" />
              <div className="absolute bottom-16 right-1/4 translate-x-1/2 h-68 w-68 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-400/20 dark:from-sky-600/15 dark:to-blue-600/15 blur-[70px] animate-pulse delay-[1200ms]" />
            </div>

            {/* Improved main content area with better responsive spacing */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-16 lg:pt-20 pb-8 sm:pb-16">
                <div className="w-full max-w-7xl mx-auto">{children}</div>
              </main>

              {/* Navigation and Footer with proper z-index */}
              <div className="relative z-20">
                <Navbar />
                <Footer />
              </div>
            </div>

            {/* AI Chatbot */}
            <ChatbotFAB />

            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
