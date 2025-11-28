/**
 * Research Publication Template
 * Copy this template to add a new research publication to src/data/research.ts
 * 
 * Usage:
 * 1. Copy the template below
 * 2. Fill in all the fields
 * 3. Add it to the researchPublications array in src/data/research.ts
 */

import { ResearchPublication } from "@/types/research";
import { generateId } from "@/utils/contentHelpers";

export const researchTemplate: ResearchPublication = {
  id: generateId("research"), // Auto-generated
  title: "Your Research Paper Title",
  authors: ["Your Name", "Co-Author Name", "Another Author"],
  venue: "Conference or Journal Name", // e.g., "ICML", "NeurIPS", "Nature"
  year: new Date().getFullYear().toString(), // Auto-generated (current year)
  abstract: "A comprehensive abstract describing your research, methodology, contributions, and results. This should be 2-3 paragraphs long.",
  paperUrl: "https://arxiv.org/abs/xxxx.xxxxx", // Link to paper, or "#" if not available
  codeUrl: "https://github.com/yourusername/repo", // Link to code repository, or "#"
  slidesUrl: "#", // Optional: Link to presentation slides
  demoUrl: "#", // Optional: Link to demo
  citations: 0, // Number of citations (update as needed)
  tags: ["Machine Learning", "Deep Learning", "NLP"], // Research areas/topics
  image: "/path/to/image.jpg", // Optional: Paper figure, poster, or related image
};

/**
 * Common Venues:
 * - "ICML" (International Conference on Machine Learning)
 * - "NeurIPS" (Neural Information Processing Systems)
 * - "ICLR" (International Conference on Learning Representations)
 * - "AAAI" (Association for the Advancement of Artificial Intelligence)
 * - "CVPR" (Computer Vision and Pattern Recognition)
 * - "ACL" (Association for Computational Linguistics)
 * - "Nature", "Science", etc.
 */

