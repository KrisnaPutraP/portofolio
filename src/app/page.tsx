import { type FC } from 'react';
import NavBar from "@/components/ui/top-navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Markdown from "react-markdown";
import Section from "@/components/section";
import Projects from "@/components/projects";
import Contacts from "@/components/contacts";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import SkillItem from "@/components/skillitem";
import Marquee from "@/components/ui/marquee";
import SkillCategory from '@/components/skillcategory';

const BLUR_FADE_DELAY = 0.05;

const Page: FC = () => {
  return (
    <>
      <NavBar />
      <ScrollProgress className="top-[64px]" />
      <main className="flex flex-col min-h-[100dvh] w-full max-w-[1400px] mx-auto">
        {/* Hero Section - Now uses more screen width */}
        <section id="hero" className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="text-lg md:text-xl lg:text-2xl max-w-2xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <div className="flex justify-center lg:justify-end">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-32 lg:size-40 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Content Grid - Better space utilization */}
        <div className="grid lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Section id="about" title="About">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  {DATA.summary}
                </Markdown>
              </BlurFade>
            </Section>

            <Section id="education" title="Education">
              <div className="flex flex-col gap-y-3">
                {DATA.education.map((education, id) => (
                  <BlurFade
                    key={education.school}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                  >
                    <ResumeCard
                      key={education.school}
                      href={education.href}
                      logoUrl={education.logoUrl}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.degree}
                      period={`${education.start} - ${education.end}`}
                    />
                  </BlurFade>
                ))}
              </div>
            </Section>
          </div>

          <div className="space-y-8">
            <Section id="work" title="My Experience">
              <div className="flex flex-col gap-y-3">
                {DATA.experience.map((experience, id) => (
                  <BlurFade
                    key={experience.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <ResumeCard
                      key={experience.company}
                      logoUrl={experience.logoUrl}
                      altText={experience.company}
                      title={experience.company}
                      subtitle={experience.title}
                      href={experience.href}
                      badges={experience.badges}
                      period={`${experience.start} - ${experience.end ?? "Present"}`}
                      description={experience.description}
                    />
                  </BlurFade>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* Full-width sections */}
        <div className="px-4 sm:px-6 lg:px-8 space-y-8 mt-8">
        <Section id="skills" title="Skills">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="space-y-6">
              <SkillCategory 
                title="Programming Languages" 
                skills={DATA.skills.languages} 
              />
              <SkillCategory 
                title="Frameworks & Libraries" 
                skills={DATA.skills.frameworks}
                reverse={true}
              />
              <SkillCategory 
                title="Tools & Technologies" 
                skills={DATA.skills.tools}
              />
            </div>
          </BlurFade>
        </Section>
          <Projects />
          <Contacts />
        </div>
      </main>
    </>
  );
};

export default Page;