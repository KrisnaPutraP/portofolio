import { FC } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import Section from "@/components/Containers/section";
import { DATA } from "@/data/data";

const About: FC = () => (
  <Section id="about" title="About">
    <div className="relative">
      {/* Decorative gradient background */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-pink-100/50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20 rounded-2xl blur-xl opacity-50" />
      
      {/* Content container */}
      <div className="relative">
        <BlurFade delay={0.2}>
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="relative mb-6 inline-block">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Let me introduce myself!
              </h2>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-50" />
            </div>

            {/* Main content */}
            <Markdown 
              className="
                prose dark:prose-invert 
                max-w-full 
                text-pretty 
                text-base sm:text-lg 
                leading-relaxed 
                text-gray-700 dark:text-gray-200
                [&>p]:mb-4
                [&>p:last-child]:mb-0
                font-medium
              "
            >
              {DATA.summary}
            </Markdown>

            {/* Decorative elements */}
            <div className="absolute -top-1 -right-1 size-16 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-1 -left-1 size-16 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-2xl" />
          </div>
        </BlurFade>
      </div>
    </div>
  </Section>
);

export default About;