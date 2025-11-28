/**
 * Project Template
 * Copy this template to add a new project to src/data/projects.ts
 * 
 * Usage:
 * 1. Copy the template below
 * 2. Fill in all the fields
 * 3. Add it to the projects array in src/data/projects.ts
 */

import { Project } from "@/types/project";
import { generateSlug, generateId, getCurrentDate, calculateReadTime } from "@/utils/contentHelpers";

export const projectTemplate: Project = {
  id: generateId("project"), // Auto-generated
  title: "Your Project Title",
  slug: generateSlug("Your Project Title"), // Auto-generated from title
  excerpt: "A brief 1-2 sentence description of your project that appears in project cards.",
  pitch: "Optional: A two-line pitch that appears on the homepage preview cards.",
  date: getCurrentDate(), // Auto-generated (current date)
  readTime: "5 min read", // Will be calculated from content
  tags: ["Tag1", "Tag2", "Tag3"], // Add relevant tags
  image: "/path/to/image.jpg", // Path to project image (800x400px recommended)
  author: {
    name: "Syed Ali Haider",
    avatar: "/favicon.ico",
  },
  links: {
    github: "https://github.com/yourusername/project", // Or "#" if not available
    demo: "https://your-demo-url.com", // Or "#" if not available
    paper: "#", // Link to paper if published, or "#"
    website: "#", // Optional: project website
  },
  youtubeUrl: "#", // Optional: YouTube demo URL
  youtubeEmbedHtml: "", // Optional: YouTube embed HTML code
  tech: ["React", "TypeScript", "Python"], // Technologies used
  impactMetrics: [ // Optional: Key metrics/results
    "Metric 1",
    "Metric 2",
  ],
  content: [
    {
      type: "heading",
      level: 1,
      content: "Project Title",
    },
    {
      type: "text",
      content: "Introduction paragraph describing the project, its purpose, and key highlights.",
    },
    {
      type: "heading",
      level: 2,
      content: "Technical Details",
    },
    {
      type: "text",
      content: "Detailed technical description of the project.",
    },
    {
      type: "code",
      language: "typescript",
      content: `// Example code block
function example() {
  return "Hello World";
}`,
    },
    {
      type: "image",
      content: "/path/to/image.jpg",
      caption: "Optional image caption",
    },
    {
      type: "quote",
      content: "Optional quote or testimonial about the project.",
    },
    {
      type: "heading",
      level: 2,
      content: "Results & Impact",
    },
    {
      type: "text",
      content: "Describe the results, impact, and any metrics achieved.",
    },
  ],
};

/**
 * Content Types Reference:
 * - "heading": { type: "heading", level: 1-6, content: "Heading text" }
 * - "text": { type: "text", content: "Paragraph text with **bold** and *italic* markdown" }
 * - "code": { type: "code", language: "typescript", content: "code here" }
 * - "image": { type: "image", content: "/path/to/image.jpg", caption: "Optional caption" }
 * - "quote": { type: "quote", content: "Quote text" }
 */

