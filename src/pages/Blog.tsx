import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Quantum Supremacy: A Practical Guide",
      excerpt:
        "Exploring the implications of quantum supremacy and what it means for the future of computing. A deep dive into current achievements and future possibilities in quantum research.",
      date: "2024-02-15",
      readTime: "8 min read",
      category: "Quantum Computing",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      slug: "quantum-supremacy-guide",
    },
    {
      title: "Building Scalable Trading Systems with Python",
      excerpt:
        "How I optimized high-frequency trading algorithms at Goldman Sachs, reducing latency and improving performance through modern Python techniques and architectural patterns.",
      date: "2024-01-28",
      readTime: "12 min read",
      category: "Finance Tech",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      slug: "scalable-trading-systems",
    },
    {
      title: "The Future of AI in Education: Interactive Learning",
      excerpt:
        "Examining how interactive AI tools are revolutionizing education, with insights from building QGameEngine and other educational platforms that bridge theory and practice.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      slug: "ai-education-future",
    },
    {
      title: "From Academia to Industry: Lessons Learned",
      excerpt:
        "Reflections on transitioning between academic research and industry applications, including key insights on building products that matter and scaling impact.",
      date: "2023-12-05",
      readTime: "10 min read",
      category: "Career",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      slug: "academia-to-industry",
    },
    {
      title: "Quantum Machine Learning: State of the Art 2024",
      excerpt:
        "A comprehensive review of recent advances in quantum machine learning, including practical implementations and potential commercial applications.",
      date: "2023-11-20",
      readTime: "15 min read",
      category: "Quantum Computing",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      slug: "qml-state-of-art-2024",
    },
    {
      title: "Building YC-Quality Products: Technical Excellence",
      excerpt:
        "Key principles for building technically excellent products that scale, drawn from experience with successful startups and research-to-product transitions.",
      date: "2023-10-15",
      readTime: "9 min read",
      category: "Startups",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop",
      slug: "yc-quality-products",
    },
  ];

  const handlePostClick = (post: (typeof blogPosts)[0]) => {
    window.open(`/blog/${post.slug}`, "_blank");
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
              onClick={() => handlePostClick(post)}
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
                  <Badge variant="secondary" className="text-xs font-medium">
                    {post.category}
                  </Badge>
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
      </div>
    </div>
  );
};

export default Blog;
