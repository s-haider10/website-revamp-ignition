
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Understanding Quantum Supremacy: A Practical Guide",
      excerpt: "Exploring the implications of quantum supremacy and what it means for the future of computing. A deep dive into current achievements and future possibilities.",
      date: "2024-02-15",
      readTime: "8 min read",
      category: "Quantum Computing",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      slug: "quantum-supremacy-guide"
    },
    {
      title: "Building Scalable Trading Systems with Python",
      excerpt: "How I optimized high-frequency trading algorithms at Goldman Sachs, reducing latency and improving performance through modern Python techniques.",
      date: "2024-01-28",
      readTime: "12 min read",
      category: "Finance Tech",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      slug: "scalable-trading-systems"
    },
    {
      title: "The Future of AI in Education: Interactive Learning",
      excerpt: "Examining how interactive AI tools are revolutionizing education, with insights from building QGameEngine and other educational platforms.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      slug: "ai-education-future"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, research insights, and lessons learned from building innovative solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
