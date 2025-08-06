"use client"

import type { FC } from "react"
import { motion } from "framer-motion"
import NavBar from "@/components/Navbars/top-navbar"
import ScrollProgress from "@/components/magicui/scroll-progress"
import BlurFade from "@/components/magicui/blur-fade"
import Projects from "@/components/Projects/projects"
import Contacts from "@/components/Contacts/contacts"
import { DATA } from "@/data/data"
import About from "@/components/About/about"
import Experience from "@/components/Experiences/experience"
import Education from "@/components/Educations/education"
import SkillCategory from "@/components/Skills/skillcategory"
import Section from "@/components/Containers/section"
import AnimatedHeader from "@/components/Header/animated-header"

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const Page: FC = () => {
  const sections = [
    { key: "about", component: <About /> },
    { key: "experience", component: <Experience /> },
    { key: "education", component: <Education /> },
    {
      key: "skills",
      component: (
        <Section id="skills" title="Skills">
          <BlurFade delay={0.5}>
            <div className="space-y-8 lg:space-y-10">
              <SkillCategory title="Programming Languages" skills={DATA.skills.languages} />
              <SkillCategory title="Frameworks & Libraries" skills={DATA.skills.frameworks} reverse={true} />
              <SkillCategory title="Tools & Technologies" skills={DATA.skills.tools} />
            </div>
          </BlurFade>
        </Section>
      ),
    },
  ]

  return (
    <>
      {/* Fixed navigation with improved positioning */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
        <ScrollProgress className="top-[64px]" />
      </div>

      {/* Main content with improved spacing and structure */}
      <motion.main
        className="flex flex-col min-h-screen w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero section with better spacing */}
        <motion.div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24" variants={fadeInUpVariants}>
          <AnimatedHeader />
        </motion.div>

        {/* Content sections with improved responsive spacing */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          {sections.map((section, index) => (
            <motion.section
              key={section.key}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                margin: "-80px",
                amount: 0.2,
              }}
              className="scroll-mt-20"
            >
              {section.component}
            </motion.section>
          ))}

          {/* Projects section with enhanced spacing */}
          <motion.section
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              margin: "-80px",
              amount: 0.2,
            }}
            className="scroll-mt-20"
          >
            <Projects />
          </motion.section>

          {/* Contacts section with proper bottom spacing */}
          <motion.section
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              margin: "-80px",
              amount: 0.2,
            }}
            className="scroll-mt-20 pb-8 sm:pb-12 lg:pb-16"
          >
            <Contacts />
          </motion.section>
        </div>
      </motion.main>
    </>
  )
}

export default Page
