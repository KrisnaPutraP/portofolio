import { FC } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/Containers/section";
import { ExperienceCard } from "@/components/Experiences/experience-card";
import { DATA } from "@/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar";

const Experience: FC = () => (
  <Section id="experience" title="My Experience">
    <div className="flex flex-col gap-y-8">
      {DATA.experience.map((company, companyIndex) => (
        <BlurFade key={company.company} delay={0.3 + companyIndex * 0.05}>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="border-2 size-16 bg-background shadow-md rounded-none">
                <AvatarImage
                  src={company.logoUrl}
                  alt={company.company}
                  className="object-contain p-2"
                />
                <AvatarFallback className="bg-muted">{company.company[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-primary">{company.company}</h2>
                <p className="text-muted-foreground text-sm">{company.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              {company.roles.map((role, roleIndex) => (
                <ExperienceCard
                  key={`${company.company}-${role.title}-${roleIndex}`}
                  title={role.title}
                  subtitle={company.location} 
                  href={company.href}
                  badges={company.badges}
                  period={`${role.start} - ${role.end ?? "Present"}`}
                  description={role.description}
                />
              ))}
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  </Section>
);

export default Experience;