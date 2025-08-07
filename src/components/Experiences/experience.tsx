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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-12">
        {DATA.experience.map((company, companyIndex) => (
          <BlurFade key={company.company} delay={0.3 + companyIndex * 0.1}>
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
            >
              {/* Company Header */}
              <div className="relative mb-4 sm:mb-6">
                <div
                  className="
                    flex flex-col items-center gap-3 p-4 sm:p-6 
                    sm:flex-row sm:items-center sm:gap-6
                    bg-gradient-to-br from-white/90 to-gray-50/90 
                    dark:from-gray-800/90 dark:to-gray-700/90
                    backdrop-blur-sm
                    border border-gray-200/60 dark:border-gray-600/60
                    rounded-xl sm:rounded-2xl shadow-lg
                    hover:shadow-xl transition-all duration-300
                    group
                    w-full
                  "
                >
                  {/* Company Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex-shrink-0"
                  >
                    <Avatar className="size-16 sm:size-20 border-2 border-primary/20 dark:border-primary/30 bg-background shadow-lg ring-2 ring-primary/10 dark:ring-primary/20 rounded-xl sm:rounded-2xl">
                      <AvatarImage
                        src={company.logoUrl || "/placeholder.svg"}
                        alt={company.company}
                        className="object-contain p-2 sm:p-3 transition-transform duration-300 group-hover:scale-105"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl">
                        {company.company[0]}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  {/* Company Info */}
                  <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                    <div className="flex flex-col items-center sm:items-start gap-2 mb-2">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
                        <BuildingIcon className="size-4 sm:size-5 text-primary/70 dark:text-primary/80 flex-shrink-0" />
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center sm:text-left break-words">
                          {company.company}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground mb-3 sm:mb-0 flex-wrap">
                      <MapPinIcon className="size-3 sm:size-4 flex-shrink-0" />
                      <p className="text-sm font-medium text-center sm:text-left break-words">{company.location}</p>
                    </div>

                    {/* Company badges if any */}
                    {company.badges && company.badges.length > 0 && (
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                        {company.badges.map((badge, index) => (
                          <span
                            key={index}
                            className="
                              px-2 sm:px-3 py-1 text-xs font-medium
                              bg-primary/10 dark:bg-primary/20
                              text-primary dark:text-primary-foreground
                              border border-primary/20 dark:border-primary/30
                              hover:bg-primary/20 dark:hover:bg-primary/30
                              transition-colors duration-300
                              rounded-full
                            "
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline connector - hidden on mobile */}
                {companyIndex < DATA.experience.length - 1 && (
                  <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-px h-8 sm:h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>

              {/* Roles */}
              <div className="space-y-3 sm:space-y-4 w-full">
                {company.roles.map((role, roleIndex) => (
                  <div key={`${company.company}-${role.title}-${roleIndex}`} className="w-full">
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
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </div>
  </Section>
)

export default Experience