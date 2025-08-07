import { useState, useEffect, useCallback } from 'react';
import { motion } from "framer-motion";
import { TextAnimate } from '@/components/magicui/text-animate';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar";
import { DATA } from "@/data/data";
import MorphingText from '@/components/magicui/morphing-text';

const TypeWriter = ({ text, onComplete }: { text: string; onComplete: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;
    let timeouts: NodeJS.Timeout[] = [];
    let currentIndex = 0;

    const type = () => {
      if (currentIndex <= text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          type();
        }, 50);
        timeouts.push(timeout);
      } else {
        setIsTyping(false);
        onComplete();
      }
    };

    type();
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [text, onComplete, isTyping]);

  return <span className="break-words">{displayText}</span>;
};

export default function AnimatedHeader() {
  const [step, setStep] = useState(0);
  const mainText = "Hi, I'm Krisna Putra Purnomo.";
  const expertiseAreas = [
    "Fullstack Development",
    "Software Engineering",
    "Data Science",
    "Machine Learning",
    "Web-3 Development",
  ];

  const handleMainTextComplete = useCallback(() => {
    setStep(1);
  }, []);

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 mb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-12 items-start text-center lg:text-left">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-w-0"
          >
            <h1 className="text-4xl sm:text-5xl xl:text-6xl/none font-bold tracking-tight max-w-full overflow-hidden">
              <TypeWriter text={mainText} onComplete={handleMainTextComplete} />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="min-h-[1.5em] relative"
          >
            <div className="absolute -left-2 -right-2 top-1/2 -translate-y-1/2 h-full bg-gradient-to-r from-purple-100 via-pink-100 to-cyan-100 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-cyan-950/30 blur-xl opacity-50 rounded-lg" />
            <TextAnimate
              className="text-lg sm:text-xl text-muted-foreground relative"
              animation="blurInUp"
              by="character"
              once={true}
              delay={1}
            >
              You can call me Krisna or Kris.
            </TextAnimate>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="min-h-[3em]"
          >
            <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-black-200">
              Hardworking problem solver who&apos;s 
              into the emerging world of Machine Learning and Data Science.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <Avatar className="size-48 lg:size-56 rounded-2xl border-2 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                <AvatarFallback className="bg-gradient-to-br from-purple-100 to-pink-100">{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="max-w-4xl mx-auto mt-16 text-center pt-20"
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              I am experienced in
            </h2>
            <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-50" />
          </motion.div>

          <div className="w-full">
            <MorphingText 
              texts={expertiseAreas}
              className="h-12 lg:h-16 text-4xl lg:text-5xl font-extrabold" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}