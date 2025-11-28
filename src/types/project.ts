export interface Project {
  id: string;
  title: string;
  excerpt: string;
  pitch?: string; // Two-line pitch for homepage
  content: ProjectContent[];
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  links: {
    github: string;
    demo: string;
    paper: string;
    website?: string;
  };
  youtubeUrl?: string; // YouTube demo URL or embed HTML
  youtubeEmbedHtml?: string; // YouTube embed HTML code
  tech: string[];
  impactMetrics?: string[]; // Key results/metrics
}

export interface ProjectContent {
  type: "text" | "image" | "code" | "heading" | "quote";
  content: string;
  language?: string; // for code blocks
  level?: number; // for headings (1-6)
  caption?: string; // for images
}

export interface ProjectFilter {
  tag: string;
  label: string;
}
