"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion"; // Corrected import
import { ElementType } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends MotionProps {
  /**
   * The text content to animate
   */
  children: string;
  /**
   * The class name to be applied to the component
   */
  className?: string;
  /**
   * The class name to be applied to each segment
   */
  segmentClassName?: string;
  /**
   * The delay before the animation starts
   */
  delay?: number;
  /**
   * The duration of the animation
   */
  duration?: number;
  /**
   * Custom motion variants for the animation
   */
  variants?: Variants;
  /**
   * The element type to render
   */
  as?: ElementType;
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType;
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean;
  /**
   * Whether to animate only once
   */
  once?: boolean;
  /**
   * The animation preset to use
   */
  animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultItemAnimationVariants: Record<AnimationVariant, {
  container: Variants;
  item: Variants;
}> = {
  fadeIn: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  blurIn: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(10px)" },
    },
  },
  blurInUp: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -20, filter: "blur(10px)" },
    },
  },
  blurInDown: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 20, filter: "blur(10px)" },
    },
  },
  slideUp: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
    },
  },
  slideDown: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
    },
  },
  slideLeft: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { x: 20, opacity: 0 },
      show: { x: 0, opacity: 1 },
      exit: { x: -20, opacity: 0 },
    },
  },
  slideRight: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 },
    },
  },
  scaleUp: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { scale: 0.8, opacity: 0 },
      show: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
    },
  },
  scaleDown: {
    container: {
      hidden: {},
      show: {},
      exit: {},
    },
    item: {
      hidden: { scale: 1.2, opacity: 0 },
      show: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 },
    },
  },
};

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false, // Default is false
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion(Component);

  // Use provided variants or default variants based on animation type
  const finalVariants = animation
    ? {
        container: {
          ...defaultItemAnimationVariants[animation].container,
          show: {
            ...defaultItemAnimationVariants[animation].container.show,
            transition: {
              staggerChildren: staggerTimings[by],
            },
          },
          exit: {
            ...defaultItemAnimationVariants[animation].container.exit,
            transition: {
              staggerChildren: staggerTimings[by],
              staggerDirection: -1,
            },
          },
        },
        item: defaultItemAnimationVariants[animation].item,
      }
    : defaultItemAnimationVariants.fadeIn;

  let segments: string[] = [];
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/);
      break;
    case "character":
      segments = children.split("");
      break;
    case "line":
      segments = children.split("\n");
      break;
    case "text":
    default:
      segments = [children];
      break;
  }

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        viewport={startOnView ? { once } : undefined} // Added viewport prop
        className={cn("whitespace-pre-wrap", className)}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName,
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}
