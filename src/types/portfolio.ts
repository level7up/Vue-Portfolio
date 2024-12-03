export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
}

export interface ThemeConfig {
  isDark: boolean;
}