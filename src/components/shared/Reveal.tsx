"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const directionVariants = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
};

export function Reveal({ children, className, delay = 0, direction = "up", duration = 0.6 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          ...directionVariants[direction],
        }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
