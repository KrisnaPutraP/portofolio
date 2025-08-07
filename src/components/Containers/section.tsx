import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-visible",
        "border border-slate-200/50 dark:border-slate-800/50",
        "bg-gradient-to-br from-white/50 via-slate-50/30 to-white/50",
        "dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50",
        "backdrop-blur-[12px]",
        "p-6 sm:p-8",
        "transition-all duration-500 ease-out",
        "hover:border-border hover:shadow-xl",
        "group",
        "rounded-lg",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
      </div>

      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
        {/* Top left corner */}
        <div className="absolute left-0 top-0 h-[2px] w-8 bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute left-0 top-0 h-8 w-[2px] bg-gradient-to-b from-primary to-transparent" />
        
        {/* Top right corner */}
        <div className="absolute right-0 top-0 h-[2px] w-8 bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute right-0 top-0 h-8 w-[2px] bg-gradient-to-b from-primary to-transparent" />
        
        {/* Bottom left corner */}
        <div className="absolute bottom-0 left-0 h-[2px] w-8 bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute bottom-0 left-0 h-8 w-[2px] bg-gradient-to-t from-primary to-transparent" />
        
        {/* Bottom right corner */}
        <div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute bottom-0 right-0 h-8 w-[2px] bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* Section Title */}
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h2>
        <div className="h-[1px] flex-1 bg-border opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Container */}
      <div className="relative">
        <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;