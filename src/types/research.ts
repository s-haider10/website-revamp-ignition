export interface ResearchPublication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  abstract: string;
  paperUrl?: string;
  codeUrl?: string;
  slidesUrl?: string;
  demoUrl?: string;
  citations?: number;
  tags: string[];
  image?: string; // Poster or image URL
}

