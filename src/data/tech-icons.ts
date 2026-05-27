import { IconType } from "react-icons";
import {
  SiLaravel, SiExpress, SiFlutter, SiKotlin,
  SiTailwindcss, SiMysql, SiRedis, SiNodedotjs,
  SiUnity, SiAframe, SiGooglegemini,
} from "react-icons/si";

export const TECH_ICONS: Record<string, IconType> = {
  Laravel: SiLaravel,
  ExpressJS: SiExpress,
  Flutter: SiFlutter,
  Kotlin: SiKotlin,
  Tailwind: SiTailwindcss,
  MySQL: SiMysql,
  Redis: SiRedis,
  NodeJS: SiNodedotjs,
  Unity: SiUnity,
  AR: SiAframe,
  "Gemini AI": SiGooglegemini,
};

export const TECH_COLORS: Record<string, string> = {
  Laravel: "#FF2D20",
  ExpressJS: "#000000",
  Flutter: "#02569B",
  Kotlin: "#7F52FF",
  Tailwind: "#06B6D4",
  MySQL: "#4479A1",
  Redis: "#DC382D",
  NodeJS: "#339933",
  Unity: "#FFFFFF",
  AR: "#FF6B35",
  "Gemini AI": "#4285F4",
};
