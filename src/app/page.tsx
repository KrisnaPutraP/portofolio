"use client";

import { FC, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import NavBar from "@/components/Navbars/top-navbar";
import ScrollProgress from "@/components/magicui/scroll-progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Projects from "@/components/Projects/projects";
import Contacts from "@/components/Contacts/contacts";
import { DATA } from "@/data/data";
import About from "@/components/About/about";
import Experience from "@/components/Experiences/experience";
import Education from "@/components/Educations/education";
import SkillCategory from '@/components/Skills/skillcategory';
import Section from "@/components/Containers/section";
import AnimatedHeader from '@/components/Header/animated-header';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const Page: FC = () => {
  return (
    <>
      <NavBar />
      <ScrollProgress className="top-[64px]" />
      <main className="flex flex-col min-h-[100dvh] w-full max-w-[1400px] mx-auto">
        <AnimatedHeader />
        <div className="px-4 sm:px-6 lg:px-8 space-y-16">
          {[
            <About key="about" />,
            <Experience key="experience" />,
            <Education key="education" />,
            <Section key="skills" id="skills" title="Skills">
              <BlurFade delay={0.5}>
                <div className="space-y-6">
                  <SkillCategory title="Programming Languages" skills={DATA.skills.languages} />
                  <SkillCategory title="Frameworks & Libraries" skills={DATA.skills.frameworks} reverse={true} />
                  <SkillCategory title="Tools & Technologies" skills={DATA.skills.tools} />
                </div>
              </BlurFade>
            </Section>
          ].map((section, index) => (
            <motion.div
              key={section.key}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              {section}
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <Projects />
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <Contacts />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Page;