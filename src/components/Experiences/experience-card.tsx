"use client"

import { Badge } from "@/components/magicui/badge"
import { Card, CardHeader } from "@/components/magicui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRightIcon, BriefcaseIcon, CalendarIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ExperienceCardProps {
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
}

export const ExperienceCard = ({ title, subtitle, href, badges, period, description }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Link href={href || "#"} className="block cursor-pointer" onClick={handleClick}>
        <Card
          className="
            group
            relative
            overflow-hidden
            p-0
            transition-all 
            duration-500 
            ease-out
            bg-gradient-to-br
            from-white/80
            to-gray-50/80
            dark:from-gray-800/80
            dark:to-gray-700/80
            backdrop-blur-sm
            border
            border-gray-200/60
            dark:border-gray-600/60
            hover:border-primary/30
            dark:hover:border-primary/40
            hover:shadow-lg
            hover:shadow-primary/10
            dark:hover:shadow-primary/20
            rounded-xl
          "
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/8 dark:to-primary/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 p-5">
            <CardHeader className="p-0 space-y-3">
              {/* Header Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <BriefcaseIcon className="size-5 text-primary/70 dark:text-primary/80 flex-shrink-0" />
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                      {title}
                    </h3>
                    <ChevronRightIcon
                      className={cn(
                        "size-4 text-muted-foreground/60 transform transition-all duration-300 ease-out flex-shrink-0",
                        "group-hover:text-primary group-hover:translate-x-1",
                        isExpanded ? "rotate-90" : "rotate-0",
                      )}
                    />
                  </div>

                  {/* Badges */}
                  {badges && badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {badges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="
                            text-xs
                            font-medium
                            bg-primary/10
                            dark:bg-primary/20
                            text-primary
                            dark:text-primary-foreground
                            border-primary/20
                            dark:border-primary/30
                            hover:bg-primary/20
                            dark:hover:bg-primary/30
                            transition-colors
                            duration-300
                          "
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/50 dark:bg-muted/30 px-3 py-1.5 rounded-full border border-muted-foreground/20">
                  <CalendarIcon className="size-4" />
                  <span className="tabular-nums whitespace-nowrap">{period}</span>
                </div>
              </div>

              {/* Subtitle */}
              {subtitle && (
                <div className="flex items-start gap-3">
                  <div className="w-5 flex-shrink-0" /> {/* Spacer to align with icon above */}
                  <p className="text-sm font-medium text-muted-foreground/90">{subtitle}</p>
                </div>
              )}
            </CardHeader>

            {/* Expandable Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                  marginTop: isExpanded ? 16 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="overflow-hidden"
              >
                <div className="flex gap-3">
                  <div className="w-5 flex-shrink-0" /> {/* Spacer */}
                  <div className="flex-1 p-4 bg-muted/30 dark:bg-muted/20 rounded-lg border border-muted-foreground/10">
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </Card>
      </Link>
    </motion.div>
  )
}
