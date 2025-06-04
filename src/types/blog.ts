
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: BlogContent[];
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface BlogContent {
  type: 'text' | 'image' | 'code' | 'heading' | 'quote';
  content: string;
  language?: string; // for code blocks
  level?: number; // for headings (1-6)
  caption?: string; // for images
}

export interface BlogFilter {
  tag: string;
  label: string;
}
