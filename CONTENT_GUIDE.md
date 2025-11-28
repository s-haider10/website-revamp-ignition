# Content Management Guide

This guide makes it super easy to add and edit content on your website. All content is stored in TypeScript files in the `src/data/` directory.

## Quick Start

1. **Find the right data file** in `src/data/`
2. **Copy the template** from `src/data/templates/`
3. **Fill in your content**
4. **Add it to the array** in the data file
5. **Done!** Your content will appear automatically

## Content Types

### 📁 Projects (`src/data/projects.ts`)

Projects showcase your technical work and research projects.

**Template:** `src/data/templates/projectTemplate.ts`

**Quick Add:**
```typescript
{
  id: generateId("project"),
  title: "My New Project",
  slug: generateSlug("My New Project"),
  excerpt: "Brief description",
  date: getCurrentDate(),
  readTime: "5 min read",
  tags: ["React", "TypeScript"],
  image: "/path/to/image.jpg",
  // ... see template for full structure
}
```

**Required Fields:**
- `title`, `excerpt`, `date`, `tags`, `image`, `slug`, `content`

**Optional Fields:**
- `pitch`, `youtubeUrl`, `impactMetrics`, `website` link

---

### 📝 Blog Posts (`src/data/blogPosts.ts`)

Blog posts for writing, thoughts, and articles.

**Template:** `src/data/templates/blogTemplate.ts`

**Quick Add:**
```typescript
{
  id: generateId("blog"),
  title: "My Blog Post",
  slug: generateSlug("My Blog Post"),
  excerpt: "Brief description",
  date: getCurrentDate(),
  readTime: "5 min read",
  tags: ["AI", "Research"],
  image: "/path/to/image.jpg",
  content: [/* content blocks */]
}
```

**Content Blocks:**
- `{ type: "heading", level: 1-6, content: "Title" }`
- `{ type: "text", content: "Paragraph with **bold** text" }`
- `{ type: "code", language: "typescript", content: "code here" }`
- `{ type: "image", content: "/path.jpg", caption: "Optional" }`
- `{ type: "quote", content: "Quote text" }`

---

### 🔬 Research (`src/data/research.ts`)

Research publications and papers.

**Template:** `src/data/templates/researchTemplate.ts`

**Quick Add:**
```typescript
{
  id: generateId("research"),
  title: "Paper Title",
  authors: ["Your Name", "Co-Author"],
  venue: "ICML",
  year: "2024",
  abstract: "Abstract text...",
  paperUrl: "https://arxiv.org/abs/...",
  codeUrl: "https://github.com/...",
  tags: ["Machine Learning", "NLP"]
}
```

**Common Venues:** ICML, NeurIPS, ICLR, AAAI, CVPR, ACL, Nature, Science

---

### 💼 Work Experience (`src/data/experience.ts`)

Work experience and internships.

**Template:** `src/data/templates/experienceTemplate.ts`

**Quick Add:**
```typescript
{
  id: generateId("exp"),
  period: "Jan 2024 - Present",
  company: "Company Name",
  logo: "company-logo.jpg", // Place in public/
  title: "Job Title",
  tag: "industry", // or "academic"
  category: "Startup", // or "VC", "Fortune 500", "Research Lab"
  achievements: ["Achievement 1", "Achievement 2"],
  impactMetrics: ["Metric 1", "Metric 2"] // Optional
}
```

**Categories:**
- `"Startup"` - Startup companies
- `"VC"` - Venture capital firms
- `"Fortune 500"` - Large corporations
- `"Research Lab"` - Academic research

**Logo Placement:**
- Add logo files to `public/` folder
- Reference by filename: `"company-logo.jpg"`

---

### 📰 News (`src/data/news.ts`)

News items, announcements, and updates.

**Template:** `src/data/templates/newsTemplate.ts`

**Quick Add:**
```typescript
{
  id: generateId("news"),
  date: "Jan 2025", // Format: "MMM YYYY"
  title: "News Title",
  links: [
    { label: "blogpost", url: "https://...", icon: "🤗" },
    { label: "demo", url: "https://..." }
  ],
  tag: "Research" // or "Awards", "Press"
}
```

**Date Format:** `"MMM YYYY"` (e.g., "Jan 2025", "Sep 2024")

**Tags:**
- `"Research"` - Research publications
- `"Awards"` - Awards and recognitions
- `"Press"` - Media coverage

**Display:** News items appear in reverse chronological order (newest first)

---

## Helper Functions

Import from `@/utils/contentHelpers`:

- `generateSlug(title)` - Auto-generate URL-friendly slug
- `generateId(prefix)` - Generate unique ID
- `getCurrentDate()` - Get current date in YYYY-MM-DD format
- `calculateReadTime(content)` - Calculate read time from content
- `createProjectTemplate(title)` - Get pre-filled project template
- `createBlogTemplate(title)` - Get pre-filled blog template

**Example:**
```typescript
import { generateSlug, generateId, getCurrentDate } from "@/utils/contentHelpers";

const newProject = {
  id: generateId("project"),
  slug: generateSlug("My Project Title"),
  date: getCurrentDate(),
  // ... rest of fields
};
```

---

## Image Guidelines

### Project & Blog Images
- **Recommended size:** 800x400px
- **Format:** JPG or PNG
- **Location:** `public/` folder
- **Reference:** `/image-name.jpg` (leading slash)

### Company Logos
- **Recommended size:** Square (e.g., 200x200px)
- **Format:** JPG or PNG
- **Location:** `public/` folder
- **Reference:** `"logo-name.jpg"` (no leading slash in data files)

---

## Content Best Practices

### Projects
- Write a compelling `excerpt` (1-2 sentences)
- Add a `pitch` for homepage previews
- Include `impactMetrics` for key results
- Use clear, descriptive `tags`
- Structure `content` with headings and sections

### Blog Posts
- Hook readers with a strong opening
- Use headings to structure content
- Include code examples where relevant
- Add images to break up text
- End with clear takeaways

### Research
- Write comprehensive `abstract` (2-3 paragraphs)
- Include all co-authors
- Add relevant `tags` for discoverability
- Link to paper, code, and demo when available

### Experience
- Focus on achievements and impact
- Use metrics in `impactMetrics`
- Be specific in `achievements` (what, how, result)
- Keep `period` format consistent

### News
- Use concise, attention-grabbing titles
- Add relevant links (paper, demo, coverage)
- Use emoji icons sparingly
- Keep date format consistent

---

## Editing Existing Content

1. Open the relevant data file in `src/data/`
2. Find the item by `id` or `title`
3. Edit the fields directly
4. Save - changes appear immediately (after rebuild)

**Tip:** Use your editor's search (Cmd/Ctrl+F) to find items quickly.

---

## File Structure

```
src/
├── data/
│   ├── projects.ts          # All projects
│   ├── blogPosts.ts         # All blog posts
│   ├── research.ts          # All research publications
│   ├── experience.ts        # All work experience
│   ├── news.ts              # All news items
│   └── templates/           # Copy-paste templates
│       ├── projectTemplate.ts
│       ├── blogTemplate.ts
│       ├── researchTemplate.ts
│       ├── experienceTemplate.ts
│       └── newsTemplate.ts
├── types/                   # TypeScript type definitions
│   ├── project.ts
│   ├── blog.ts
│   ├── experience.ts
│   ├── news.ts
│   └── index.ts            # Central export
└── utils/
    └── contentHelpers.ts   # Helper functions
```

---

## Quick Reference

| Content Type | File | Template | Key Fields |
|-------------|------|----------|------------|
| Projects | `projects.ts` | `projectTemplate.ts` | title, excerpt, content, tags |
| Blog Posts | `blogPosts.ts` | `blogTemplate.ts` | title, excerpt, content, tags |
| Research | `research.ts` | `researchTemplate.ts` | title, authors, venue, abstract |
| Experience | `experience.ts` | `experienceTemplate.ts` | company, title, period, achievements |
| News | `news.ts` | `newsTemplate.ts` | date, title, links, tag |

---

## Troubleshooting

**Content not appearing?**
- Check that the item is added to the array
- Verify all required fields are filled
- Check for TypeScript errors in your editor
- Restart the dev server

**Images not loading?**
- Ensure images are in `public/` folder
- Check file paths (use `/` for public folder)
- Verify file extensions match

**Type errors?**
- Check that all required fields are present
- Verify field types match the interface
- Import types from `@/types` if needed

---

## Need Help?

- Check the templates in `src/data/templates/` for examples
- Look at existing content in data files for reference
- All types are defined in `src/types/` for reference

Happy content creating! 🚀

