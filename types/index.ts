export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  fullDescription: string;
  fullDescriptionEn?: string;
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
  titleEn?: string;
  organization: string;
  location?: string;
  date: string;
  dateEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}
