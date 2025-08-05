import type { FC } from "react"
import BlurFade from "@/components/magicui/blur-fade"
import Section from "@/components/Containers/section"
import { EducationCard } from "@/components/Educations/education-card"
import { DATA } from "@/data/data"

const Education: FC = () => (
  <Section id="education" title="Education">
    <div className="flex flex-col gap-y-6">
      {DATA.education.map((education, id) => (
        <BlurFade key={education.school} delay={0.4 + id * 0.1}>
          <EducationCard
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
)

export default Education
