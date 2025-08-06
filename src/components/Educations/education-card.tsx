"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar"
import { Badge } from "@/components/magicui/badge"
import { Card, CardHeader } from "@/components/magicui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRightIcon, GraduationCapIcon, CalendarIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface EducationCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
}

export const EducationCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: EducationCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
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
            from-white/90
            to-gray-50/90
            dark:from-gray-800/90
            dark:to-gray-700/90
            backdrop-blur-sm
            border
            border-gray-200/60
            dark:border-gray-600/60
            hover:border-primary/30
            dark:hover:border-primary/40
            hover:shadow-xl
            hover:shadow-primary/10
            dark:hover:shadow-primary/20
            rounded-2xl
          "
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/8 dark:to-primary/12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6">
            {/* Mobile: Stack layout, Desktop: Side-by-side */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Enhanced Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex-shrink-0"
              >
                <Avatar className="size-16 sm:size-18 border-2 border-primary/20 dark:border-primary/30 bg-background shadow-lg ring-2 ring-primary/10 dark:ring-primary/20">
                  <AvatarImage
                    src={logoUrl || "/placeholder.svg"}
                    alt={altText}
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                    {altText[0]}
                  </AvatarFallback>
                </Avatar>
              </motion.div>

              {/* Content Area */}
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <CardHeader className="p-0 space-y-3">
                  {/* Header Row - Mobile Stack, Desktop Row */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2">
                        <GraduationCapIcon className="size-4 sm:size-5 text-primary/70 dark:text-primary/80 flex-shrink-0" />
                        <h3 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300 text-center sm:text-left">
                          {title}
                        </h3>
                        <ChevronRightIcon
                          className={cn(
                            "size-4 text-muted-foreground/60 transform transition-all duration-300 ease-out flex-shrink-0 sm:hidden",
                            "group-hover:text-primary group-hover:translate-x-1",
                            isExpanded ? "rotate-90" : "rotate-0",
                          )}
                        />
                      </div>

                      {/* Badges */}
                      {badges && badges.length > 0 && (
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3 ml-0 sm:ml-7">
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

                    {/* Period - Mobile Full Width, Desktop Right */}
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground bg-muted/50 dark:bg-muted/30 px-3 py-1.5 rounded-full border border-muted-foreground/20 w-full sm:w-fit mx-auto sm:mx-0">
                      <CalendarIcon className="size-3 sm:size-4 flex-shrink-0" />
                      <span className="tabular-nums text-xs sm:text-sm whitespace-nowrap">{period}</span>
                      <ChevronRightIcon
                        className={cn(
                          "size-4 text-muted-foreground/60 transform transition-all duration-300 ease-out flex-shrink-0 hidden sm:block",
                          "group-hover:text-primary group-hover:translate-x-1",
                          isExpanded ? "rotate-90" : "rotate-0",
                        )}
                      />
                    </div>
                  </div>

                  {/* Subtitle */}
                  {subtitle && (
                    <div className="flex items-start justify-center sm:justify-start gap-2 sm:gap-3">
                      <div className="w-4 sm:w-5 flex-shrink-0 hidden sm:block" /> {/* Spacer to align with icon above */}
                      <p className="text-base font-medium text-muted-foreground/90 leading-relaxed text-center sm:text-left">{subtitle}</p>
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
                      marginTop: isExpanded ? 12 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-2 sm:gap-3">
                      <div className="w-4 sm:w-5 flex-shrink-0 hidden sm:block" /> {/* Spacer */}
                      <div className="flex-1 p-3 sm:p-4 bg-muted/30 dark:bg-muted/20 rounded-xl border border-muted-foreground/10">
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </Card>
      </Link>
    </motion.div>
  )
}
