/**
 * News Item Template
 * Copy this template to add a new news item to src/data/news.ts
 * 
 * Usage:
 * 1. Copy the template below
 * 2. Fill in all the fields
 * 3. Add it to the newsItems array in src/data/news.ts
 * 4. News items are displayed in reverse chronological order (newest first)
 */

import { NewsItem } from "@/types/news";
import { generateId } from "@/utils/contentHelpers";

export const newsTemplate: NewsItem = {
  id: generateId("news"), // Auto-generated
  date: "Jan 2025", // Format: "MMM YYYY" (e.g., "Jan 2025", "Sep 2024")
  title: "Your News Title",
  links: [ // Optional: Array of related links
    { label: "blogpost", url: "https://your-blog-url.com", icon: "🤗" }, // icon is optional
    { label: "demo", url: "https://your-demo-url.com" },
    { label: "coverage by Publication", url: "https://article-url.com", icon: "📰" },
  ],
  tag: "Research", // Options: "Research", "Awards", "Press"
};

/**
 * Date Format:
 * - Use "MMM YYYY" format (e.g., "Jan 2025", "Sep 2024", "Jul 2023")
 * - For current month: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
 * 
 * Tag Options:
 * - "Research" - For research publications, papers, etc.
 * - "Awards" - For awards, fellowships, recognitions
 * - "Press" - For media coverage, interviews, articles
 * 
 * Links:
 * - Each link can have: label (required), url (required), icon (optional emoji)
 * - Links are displayed in parentheses after the title
 * - Format: (🤗 blogpost / demo / 📰 coverage by Publication)
 * 
 * Display Order:
 * - News items are typically sorted by date (newest first)
 * - Make sure to add new items at the beginning of the array
 */

