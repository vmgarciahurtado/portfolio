export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  coverImage: string;
  gallery?: string[];
  isPublic: boolean;
  githubUrl?: string;
  youtubeUrl?: string;
  liveUrl?: string;
}

export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
}
