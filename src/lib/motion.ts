import type { TargetAndTransition, Transition, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleHover: {
  whileHover: TargetAndTransition;
  transition: Transition;
} = {
  whileHover: { scale: 1.03 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};
