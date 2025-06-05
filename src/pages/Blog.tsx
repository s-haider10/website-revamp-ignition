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
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Op-eds and Insights
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"></p>
        </div>

        {/* Tag Visualization */}
        <div className="mb-8 p-6 bg-muted/20 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(tagCounts).map(([tag, count]) => {
              const intensity = (count / maxCount) * 100;
              return (
                <div
                  key={tag}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  <div
                    className="w-4 h-4 rounded-full bg-primary"
                    style={{ opacity: intensity / 100 }}
                  />
                  <span className="text-sm">
                    {tag} ({count})
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-16">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-64">
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
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author.name}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
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
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
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
