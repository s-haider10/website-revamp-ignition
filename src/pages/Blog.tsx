import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const navigate = useNavigate();

  // Get all unique tags
  const allTags = [
    "All",
    ...Array.from(new Set(blogPosts.flatMap((post) => post.tags))),
  ];

  const filteredPosts =
    selectedTag === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(selectedTag));

  // Calculate tag popularity for visualization
  const tagCounts = blogPosts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const maxCount = Math.max(...Object.values(tagCounts));

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">
            Writing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Thoughts on research, engineering, and building at the intersection
            of AI and infrastructure.
          </p>
          {filteredPosts.length === 0 && (
            <div className="mt-8 p-6 bg-muted/30 rounded-sm border border-border">
              <p className="text-muted-foreground">
                More articles coming soon. Check back for insights on AI
                research, startup engineering, and deep tech.
              </p>
            </div>
          )}
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-start mb-12">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-48 rounded-sm">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag === "All" ? "All Posts" : tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-lg transition-smooth cursor-pointer border-border hover:border-foreground/20"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif font-semibold group-hover:text-foreground transition-smooth line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs rounded-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs rounded-sm">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
