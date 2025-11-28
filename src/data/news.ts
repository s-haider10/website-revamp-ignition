import { NewsItem } from "../types/news";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "Sep 2025",
    title: "ARE & Gaia2 are out!",
    links: [
      { label: "blogpost", url: "#", icon: "🤗" },
      { label: "demo", url: "#" },
      { label: "coverage by VentureBeat", url: "#", icon: "📰" },
    ],
    tag: "Research",
  },
  {
    id: "2",
    date: "Jul 2024",
    title: "Research Published at ICML 2024",
    links: [
      { label: "paper", url: "#" },
      { label: "code", url: "#" },
    ],
    tag: "Research",
  },
  {
    id: "3",
    date: "Jan 2025",
    title: "Selected as Gobi Partners Spark Fellow",
    links: [{ label: "announcement", url: "#" }],
    tag: "Awards",
  },
];

