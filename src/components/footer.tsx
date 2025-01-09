"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const timeZone = "Asia/Bangkok"; // UTC+7 time zone identifier

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formattedTime = now.toLocaleString("en-US", options);
      setCurrentTime(formattedTime);
    };

    // Initial call to set the time immediately
    updateTime();

    // Update the time every second
    const timerId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, [timeZone]);

  return (
    <footer className={cn("mt-auto py-8 border-t", className)}>
      <div className="container flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {currentYear} {DATA.name}. All rights reserved.</span>
          <Link
          href={`https://github.com/KrisnaPutraP/portofolio`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <Github className="size-4" />
          <span>Source Code</span>
        </Link> 
        </div>
        <span>({currentTime})</span>
      </div>
    </footer>
  );
};

export default Footer;
