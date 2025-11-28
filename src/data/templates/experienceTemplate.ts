/**
 * Work Experience Template
 * Copy this template to add a new work experience to src/data/experience.ts
 * 
 * Usage:
 * 1. Copy the template below
 * 2. Fill in all the fields
 * 3. Add it to the experiences array in src/data/experience.ts
 * 4. Make sure to add the logo file to the public folder
 */

import { Experience } from "@/types/experience";
import { generateId } from "@/utils/contentHelpers";

export const experienceTemplate: Experience = {
  id: generateId("exp"), // Auto-generated
  period: "Jan 2024 - Present", // Date range (e.g., "Jun 2024 - Sep 2024" or "Jan 2024 - Present")
  company: "Company Name",
  logo: "company-logo.jpg", // Logo filename (place in public folder)
  title: "Your Job Title",
  tag: "industry", // Either "industry" or "academic"
  category: "Startup", // Options: "Startup", "VC", "Fortune 500", "Research Lab"
  impactMetrics: [ // Optional: Key metrics/achievements (2-3 items)
    "Metric 1 (e.g., '10% improvement in X')",
    "Metric 2 (e.g., 'Deployed system for 1M+ users')",
  ],
  achievements: [ // Detailed achievements (3-5 bullet points)
    "First achievement with specific details and impact",
    "Second achievement with metrics if possible",
    "Third achievement describing your contributions",
    "Fourth achievement highlighting technical skills used",
  ],
};

/**
 * Category Options:
 * - "Startup" - For startup companies
 * - "VC" - For venture capital firms
 * - "Fortune 500" - For large corporations
 * - "Research Lab" - For academic research positions
 * 
 * Tag Options:
 * - "industry" - For industry/work experience
 * - "academic" - For academic/research positions
 * 
 * Logo Placement:
 * - Place logo files in the public/ folder
 * - Reference them by filename only (e.g., "company-logo.jpg")
 */

