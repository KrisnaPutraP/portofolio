import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          raleway.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Gradient Blobs */}
            <div className="fixed inset-0 overflow-hidden">
              {/* Top left */}
              <div className="absolute top-20 left-1/4 -translate-x-1/2 h-64 w-64 rounded-full bg-pink-400/30 dark:bg-pink-600/20 blur-[60px] animate-pulse" />
              
              {/* Top right */}
              <div className="absolute top-40 right-1/4 translate-x-1/2 h-48 w-48 rounded-full bg-purple-400/25 dark:bg-purple-600/20 blur-[50px] animate-pulse delay-300" />
              
              {/* Center left */}
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-56 w-56 rounded-full bg-blue-400/25 dark:bg-blue-600/20 blur-[55px] animate-pulse delay-500" />
              
              {/* Center right */}
              <div className="absolute top-1/2 right-1/3 -translate-y-1/2 h-52 w-52 rounded-full bg-indigo-400/25 dark:bg-indigo-600/20 blur-[45px] animate-pulse delay-700" />
              
              {/* Bottom left */}
              <div className="absolute bottom-40 left-1/4 -translate-x-1/2 h-44 w-44 rounded-full bg-cyan-400/30 dark:bg-cyan-600/20 blur-[40px] animate-pulse delay-1000" />
              
              {/* Bottom right */}
              <div className="absolute bottom-20 right-1/4 translate-x-1/2 h-60 w-60 rounded-full bg-sky-400/25 dark:bg-sky-600/20 blur-[50px] animate-pulse delay-[1200ms]" />
            </div>
            
            {/* Content Container */}
            <div className="relative px-6 py-12 sm:py-24">
              {children}
              <Navbar />
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}