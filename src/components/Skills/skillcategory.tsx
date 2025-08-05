import type { FC } from "react"
import Marquee from "@/components/magicui/marquee"
import SkillItem from "@/components/Skills/skillitem"
import { Card } from "@/components/magicui/card"

interface Skill {
  name: string
  logo: string
}

interface SkillCategoryProps {
  title: string
  skills: readonly Skill[]
  reverse?: boolean
}

const SkillCategory: FC<SkillCategoryProps> = ({ title, skills, reverse = false }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600" />
      </div>

      <Card
        className="
        relative
        p-6
        bg-gradient-to-br
        from-white/70
        to-gray-50/70
        dark:from-gray-800/70
        dark:to-gray-700/70
        backdrop-blur-md
        border
        border-gray-200/60
        dark:border-gray-600/60
        rounded-2xl
        shadow-lg
        overflow-hidden
      "
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/8 dark:via-purple-400/8 dark:to-pink-400/8" />

        {/* Content */}
        <div className="relative z-10">
          <Marquee pauseOnHover={false} reverse={reverse} repeat={3} className="py-2">
            {skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </Marquee>
        </div>

        {/* Fade edges for better visual flow */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent dark:from-gray-800/80 pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent dark:from-gray-800/80 pointer-events-none z-20" />
      </Card>
    </div>
  )
}

export default SkillCategory
