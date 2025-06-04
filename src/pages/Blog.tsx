
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, ArrowRight, Calendar, Filter } from "lucide-react";
import { blogPosts, blogFilters } from "../data/blogPosts";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const navigate = useNavigate();

  const filteredPosts = selectedTag === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Research & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughts on technology, research insights, and lessons learned from
            building innovative solutions at the intersection of academia and
            industry.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by topic:</span>
          </div>
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {blogFilters.map((filter) => (
                <SelectItem key={filter.tag} value={filter.tag}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground font-mono">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>

                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary font-medium"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Posts Found */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">No posts found</h3>
            <p className="text-muted-foreground mb-6">
              No blog posts match the selected filter. Try selecting a different topic.
            </p>
            <Button variant="outline" onClick={() => setSelectedTag("All")}>
              Show All Posts
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
