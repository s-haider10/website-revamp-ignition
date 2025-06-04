
export interface Adventure {
  id: string;
  title: string;
  excerpt: string;
  content: AdventureContent[];
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  distance?: string;
  elevation?: string;
}

export interface AdventureContent {
  type: 'text' | 'image' | 'code' | 'heading' | 'quote';
  content: string;
  language?: string; // for code blocks
  level?: number; // for headings (1-6)
  caption?: string; // for images
}

export interface AdventureFilter {
  tag: string;
  label: string;
}
