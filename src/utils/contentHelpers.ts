/**
 * Content Helper Utilities
 * Functions to assist with content management and generation
 */

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Calculate estimated read time based on content
 * Assumes average reading speed of 200 words per minute
 */
export function calculateReadTime(content: string | Array<{ content: string }>): string {
  let wordCount = 0;

  if (typeof content === "string") {
    wordCount = content.split(/\s+/).filter((word) => word.length > 0).length;
  } else if (Array.isArray(content)) {
    // Handle structured content arrays
    wordCount = content
      .map((item) => item.content || "")
      .join(" ")
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  }

  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

/**
 * Generate a unique ID based on timestamp and random string
 */
export function generateId(prefix: string = ""): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return prefix ? `${prefix}-${timestamp}-${random}` : `${timestamp}-${random}`;
}

/**
 * Validate required fields for content items
 */
export function validateContent(
  item: Record<string, any>,
  requiredFields: string[]
): { valid: boolean; missing: string[] } {
  const missing = requiredFields.filter((field) => !item[field]);
  return {
    valid: missing.length === 0,
    missing,
  };
}

/**
 * Format date string to a consistent format
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().split("T")[0]; // YYYY-MM-DD format
}

/**
 * Get current date in YYYY-MM-DD format
 */
export function getCurrentDate(): string {
  return formatDate(new Date());
}

/**
 * Helper to create a new project with auto-generated fields
 */
export function createProjectTemplate(title: string) {
  const slug = generateSlug(title);
  const id = generateId("project");

  return {
    id,
    title,
    slug,
    date: getCurrentDate(),
    readTime: "5 min read", // Will be calculated from content
    excerpt: "",
    pitch: "",
    tags: [],
    image: "",
    author: {
      name: "Syed Ali Haider",
      avatar: "/favicon.ico",
    },
    links: {
      github: "#",
      demo: "#",
      paper: "#",
    },
    tech: [],
    content: [],
  };
}

/**
 * Helper to create a new blog post with auto-generated fields
 */
export function createBlogTemplate(title: string) {
  const slug = generateSlug(title);
  const id = generateId("blog");

  return {
    id,
    title,
    slug,
    date: getCurrentDate(),
    readTime: "5 min read",
    excerpt: "",
    tags: [],
    image: "",
    author: {
      name: "Syed Ali Haider",
      avatar: "/favicon.ico",
    },
    content: [],
  };
}

/**
 * Helper to create a new experience entry
 */
export function createExperienceTemplate() {
  return {
    id: generateId("exp"),
    period: "",
    company: "",
    logo: "",
    title: "",
    tag: "industry" as const,
    category: "",
    achievements: [],
    impactMetrics: [],
  };
}

/**
 * Helper to create a new news item
 */
export function createNewsTemplate() {
  return {
    id: generateId("news"),
    date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    title: "",
    links: [],
    tag: "Research",
  };
}

/**
 * Helper to create a new research publication
 */
export function createResearchTemplate() {
  return {
    id: generateId("research"),
    title: "",
    authors: [],
    venue: "",
    year: new Date().getFullYear().toString(),
    abstract: "",
    tags: [],
    citations: 0,
  };
}

