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
        "relative rounded-lg border border-transparent bg-background/50 p-6 transition-all duration-300",
        "hover:border-border hover:bg-accent/10 hover:shadow-lg",
        "group",
        className
      )}
    >
      {/* Animated corner borders */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

      {/* Section Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default Section;