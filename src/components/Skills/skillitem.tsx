"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/magicui/card";

interface Skill {
  name: string;
  logo: string;
}

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mx-3" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Card
        className="
          flex 
          items-center 
          justify-center 
          p-6  /* Increased padding */
          transition-transform 
          transform-gpu 
          hover:scale-105 
          bg-white 
          dark:bg-gray-800 
          border 
          border-gray-200 
          dark:border-gray-600 
          rounded-lg 
          shadow-md
          w-48 h-48  /* Increased width and height */
        "
        tabIndex={0}
        aria-describedby={`tooltip-${skill.name}`}
      >
        <div
          className={`
            p-4  /* Adjusted padding */
            rounded 
            flex 
            items-center 
            justify-center 
            bg-gray-100 
            dark:bg-gray-700 
            transition-filter 
            duration-300
            ${isHovered ? "blur-sm" : ""}
            w-full h-full
          `}
        >
          <Image
            src={skill.logo}
            alt={`${skill.name} logo`}
            width={96}  // Increased image size
            height={96} // Increased image size
            className="
              object-contain 
              mix-blend-normal 
              dark:mix-blend-normal
            "
          />
        </div>
      </Card>
      {isHovered && (
        <div
          id={`tooltip-${skill.name}`}
          className="
            absolute 
            top-1/2 
            left-1/2 
            transform 
            -translate-x-1/2 
            -translate-y-1/2 
            bg-gray-800 
            text-white 
            px-8
            py-4  
            rounded-md 
            text-md
            shadow-lg 
            flex 
            items-center 
            justify-center 
            pointer-events-none
            z-50 
          "
          role="tooltip"
        >
          <p className="font-semibold">{skill.name}</p>
        </div>
      )}
    </div>
  );
};

export default SkillItem;