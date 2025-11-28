/**
 * Blog Post Template
 * Copy this template to add a new blog post to src/data/blogPosts.ts
 * 
 * Usage:
 * 1. Copy the template below
 * 2. Fill in all the fields
 * 3. Add it to the blogPosts array in src/data/blogPosts.ts
 */

import { BlogPost } from "@/types/blog";
import { generateSlug, generateId, getCurrentDate, calculateReadTime } from "@/utils/contentHelpers";

export const blogTemplate: BlogPost = {
  id: generateId("blog"), // Auto-generated
  title: "Your Blog Post Title",
  slug: generateSlug("Your Blog Post Title"), // Auto-generated from title
  excerpt: "A brief 1-2 sentence description that appears in blog post cards and previews.",
  date: getCurrentDate(), // Auto-generated (current date)
  readTime: "5 min read", // Will be calculated from content
  tags: ["Tag1", "Tag2", "Tag3"], // Add relevant tags
  image: "/path/to/image.jpg", // Path to blog post image (800x400px recommended)
  author: {
    name: "Syed Ali Haider",
    avatar: "/favicon.ico",
  },
  content: [
    {
      type: "heading",
      level: 2,
      content: "Introduction",
    },
    {
      type: "text",
      content: "Your opening paragraph that hooks the reader and introduces the topic.",
    },
    {
      type: "heading",
      level: 2,
      content: "Main Content Section",
    },
    {
      type: "text",
      content: "Main content paragraphs. You can use **bold** and *italic* markdown formatting.",
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
      content: "Optional quote or highlight from the article.",
    },
    {
      type: "heading",
      level: 2,
      content: "Conclusion",
    },
    {
      type: "text",
      content: "Wrap up your thoughts and provide key takeaways.",
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

