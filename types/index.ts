export type Locale = 'en' | 'es';

export interface LocalizedString {
  en: string;
  es: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  image: string;
  technologies: string[];
  isPublic: boolean;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  order: number;
}

export interface WorkExperience {
  id: string;
  title: LocalizedString;
  company: string;
  location: LocalizedString;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: LocalizedString;
  achievements: {
    en: string[];
    es: string[];
  };
  technologies: string[];
}

export interface Education {
  id: string;
  degree: LocalizedString;
  institution: string;
  location: LocalizedString;
  startDate: string;
  endDate: string;
  description: LocalizedString;
  gpa?: string;
}

export interface Timeline {
  work: WorkExperience[];
  education: Education[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  mediumUrl: string;
  publishedDate: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface Technology {
  name: string;
  icon: string;
  level: number;
  color: string;
}

export interface TechCategory {
  id: string;
  name: LocalizedString;
  technologies: Technology[];
}

export interface TechStack {
  categories: TechCategory[];
}

export type Theme = 'light' | 'dark';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
