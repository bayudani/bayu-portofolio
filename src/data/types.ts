export interface Stat {
  label: string;
  value: string;
}

export interface Social {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface ProfileData {
  name: string;
  role: string;
  location: string;
  bio: string;
  avatar: string;
  stats: Stat[];
  stack: string[];
  socials: Social;
}

export interface ProjectDetails {
  overview: string;
  features: string[];
  stack: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  cat: string;
  desc: string;
  image: string;
  color: string;
  tags: string[];
  link: string;
  github?: string;
  featured?: boolean;
  details: ProjectDetails;
}

export interface Experience {
  role: string;
  event: string;
  year: string;
  desc: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  grade?: string;
}

export interface Award {
  title: string;
  rank: string;
  desc: string;
  year: string;
}

export interface Journey {
  year: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
