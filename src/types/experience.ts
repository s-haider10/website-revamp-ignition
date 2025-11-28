export interface Experience {
  id: string;
  period: string;
  company: string;
  logo: string;
  title: string;
  tag: "academic" | "industry";
  category: string;
  achievements: string[];
  impactMetrics?: string[];
}

export interface ExperienceFilter {
  category: string;
  label: string;
}

