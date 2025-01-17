import { FC } from 'react';
import Marquee from "@/components/magicui/marquee";
import SkillItem from "@/components/Skills/skillitem";
import { Card } from "@/components/magicui/card";

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategoryProps {
  title: string;
  skills: readonly Skill[];
  reverse?: boolean;
}

const SkillCategory: FC<SkillCategoryProps> = ({ title, skills, reverse = false }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-muted-foreground">{title}</h3>
      <Card className="p-4 bg-background/50 backdrop-blur-sm">
        <Marquee 
          pauseOnHover={false} 
          reverse={reverse} 
          repeat={5}
        >
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </Card>
    </div>
  );
};

export default SkillCategory;