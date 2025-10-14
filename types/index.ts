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
