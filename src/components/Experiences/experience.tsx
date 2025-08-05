"use client"

import type { FC } from "react"
import BlurFade from "@/components/magicui/blur-fade"
import Section from "@/components/Containers/section"
import { ExperienceCard } from "@/components/Experiences/experience-card"
import { DATA } from "@/data/data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar"
import { motion } from "framer-motion"
import { BuildingIcon, MapPinIcon } from "lucide-react"

const Experience: FC = () => (
  <Section id="experience" title="My Experience">
    <div className="flex flex-col gap-y-12">
      {DATA.experience.map((company, companyIndex) => (
        <BlurFade key={company.company} delay={0.3 + companyIndex * 0.1}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
          >
            {/* Company Header */}
            <div className="relative mb-8">
              <div
                className="
                  flex items-center gap-6 p-6 
                  bg-gradient-to-br from-white/90 to-gray-50/90 
                  dark:from-gray-800/90 dark:to-gray-700/90
                  backdrop-blur-sm
                  border border-gray-200/60 dark:border-gray-600/60
                  rounded-2xl shadow-lg
                  hover:shadow-xl transition-all duration-500
                  group
                "
              >
                {/* Company Avatar */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative flex-shrink-0"
                >
                  <Avatar className="size-20 sm:size-24 border-2 border-primary/20 dark:border-primary/30 bg-background shadow-lg ring-2 ring-primary/10 dark:ring-primary/20 rounded-2xl">
                    <AvatarImage
                      src={company.logoUrl || "/placeholder.svg"}
                      alt={company.company}
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-bold text-xl rounded-2xl">
                      {company.company[0]}
                    </AvatarFallback>
                  </Avatar>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>

                {/* Company Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <BuildingIcon className="size-6 text-primary/70 dark:text-primary/80 flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                      {company.company}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="size-4 flex-shrink-0" />
                    <p className="text-sm sm:text-base font-medium">{company.location}</p>
                  </div>

                  {/* Company badges if any */}
                  {company.badges && company.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {company.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="
                            px-3 py-1 text-xs font-medium
                            bg-primary/10 dark:bg-primary/20
                            text-primary dark:text-primary-foreground
                            border border-primary/20 dark:border-primary/30
                            rounded-full
                          "
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>

              {/* Timeline connector */}
              {companyIndex < DATA.experience.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/30 to-transparent" />
              )}
            </div>

            {/* Roles */}
            <div className="relative pl-8 sm:pl-12">
              {/* Timeline line for roles */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

              <div className="flex flex-col gap-y-6">
                {company.roles.map((role, roleIndex) => (
                  <div key={`${company.company}-${role.title}-${roleIndex}`} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-6 sm:-left-8 top-6 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg" />

                    <ExperienceCard
                      title={role.title}
                      subtitle={company.location}
                      href={company.href}
                      badges={company.badges}
                      period={`${role.start} - ${role.end ?? "Present"}`}
                      description={role.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </BlurFade>
      ))}
    </div>
  </Section>
)

export default Experience
