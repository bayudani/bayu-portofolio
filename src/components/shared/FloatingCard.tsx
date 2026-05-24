"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: number;
}

export function FloatingCard({ children, className = "", delay = 0, intensity = 6 }: FloatingCardProps) {
  const [duration] = useState(() => 4 + Math.random() * 2);

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
