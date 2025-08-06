"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/magicui/card"
import { motion } from "framer-motion"

interface Skill {
  name: string
  logo: string
}

interface SkillItemProps {
  skill: Skill
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className="
          group
          relative
          flex 
          items-center 
          justify-center 
          p-4
          transition-all
          duration-300
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
          rounded-2xl
          shadow-lg
          hover:shadow-xl
          hover:shadow-gray-200/30
          dark:hover:shadow-gray-800/30
          w-28 h-28
          sm:w-32 sm:h-32
          overflow-hidden
        "
        tabIndex={0}
        aria-describedby={`tooltip-${skill.name}`}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/15 dark:to-purple-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Skill logo container with blur effect */}
        <div
          className={`
            relative z-10 flex items-center justify-center w-full h-full
            transition-filter duration-300
            ${isHovered ? "blur-sm" : ""}
          `}
        >
          <Image
            src={skill.logo || "/placeholder.svg"}
            alt={`${skill.name} logo`}
            width={48}
            height={48}
            className="
              object-contain 
              transition-all
              duration-300
              group-hover:scale-110
              filter
              drop-shadow-sm
            "
          />
        </div>

        {/* Subtle border glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out blur-sm -z-10" />
      </Card>

      {/* Original centered tooltip */}
      {isHovered && (
        <div
          id={`tooltip-${skill.name}`}
          className="
            absolute 
            top-1/2 
            left-1/2 
            transform 
            -translate-x-1/2 
            -translate-y-1/2 
            bg-gray-800 
            dark:bg-gray-900
            text-white 
            px-3
            py-2  
            rounded-md 
            text-sm
            shadow-lg 
            flex 
            items-center 
            justify-center 
            pointer-events-none
            z-50 
            whitespace-nowrap
          "
          role="tooltip"
        >
          <p className="font-medium">{skill.name}</p>
        </div>
      )}
    </motion.div>
  )
}

export default SkillItem
