export interface NewsItem {
  id: string;
  date: string;
  title: string;
  links?: Array<{ label: string; url: string; icon?: string }>;
  tag: string;
}

