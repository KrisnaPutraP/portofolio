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
import { ChatbotFAB } from "@/components/Chat/chatbot-fab"

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
      {/* Fixed navigation with improved z-index */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <NavBar />
        <ScrollProgress className="top-[64px]" />
      </div>

      {/* Main content with proper mobile spacing */}
      <motion.main
        className="relative flex flex-col min-h-screen w-full overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero section with proper mobile spacing */}
        <motion.div
          className="pt-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          variants={fadeInUpVariants}
        >
          <AnimatedHeader />
        </motion.div>

        {/* Content sections with improved mobile responsive spacing */}
        <div className="relative z-10 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24">
          {sections.map((section, index) => (
            <motion.section
              key={section.key}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                margin: "-50px",
                amount: 0.1,
              }}
              className="scroll-mt-20 w-full"
              style={{ minHeight: "50vh" }}
            >
              {section.component}
            </motion.section>
          ))}

          {/* Projects section with enhanced mobile spacing */}
          <motion.section
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              margin: "-50px",
              amount: 0.1,
            }}
            className="scroll-mt-20 w-full"
            style={{ minHeight: "50vh" }}
          >
            <Projects />
          </motion.section>

          {/* Contacts section with proper mobile bottom spacing */}
          <motion.section
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              margin: "-50px",
              amount: 0.1,
            }}
            className="scroll-mt-20 pb-20 sm:pb-24 lg:pb-32 w-full"
          >
            <Contacts />
          </motion.section>
        </div>
      </motion.main>

      {/* Chat FAB */}
      <ChatbotFAB />
    </>
  )
}

export default Page
