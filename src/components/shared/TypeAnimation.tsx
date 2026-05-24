"use client";

import { useState, useEffect, useRef } from "react";

interface TypeAnimationProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypeAnimation({
  words,
  className = "",
  speed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypeAnimationProps) {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const currentWord = words[wordIndexRef.current];

    if (isDeletingRef.current) {
      if (text.length > 0) {
        const timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        const timer = setTimeout(() => {
          setText(words[wordIndexRef.current].substring(0, 1));
        }, speed);
        return () => clearTimeout(timer);
      }
    } else {
      if (text.length < currentWord.length) {
        const timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          isDeletingRef.current = true;
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [text, words, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse ml-0.5 text-purple-400">|</span>
    </span>
  );
}
