"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[50] h-[4px] origin-left",
        "bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        "dark:bg-gradient-to-r dark:from-cyan-600 dark:via-indigo-600 dark:to-pink-600",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}