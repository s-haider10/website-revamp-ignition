
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import BlogContentRenderer from "../components/BlogContentRenderer";
import ReadingProgress from "../components/ReadingProgress";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-serif font-semibold mb-4 text-foreground">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-background pt-24 pb-24">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>

          {/* Header Image */}
          <div className="aspect-video overflow-hidden rounded-sm mb-8 bg-muted">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author.name}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-sm text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-semibold">
            <BlogContentRenderer content={post.content} />
          </article>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-sm object-cover border border-border"
                />
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    NYU Graduate | Quantum Computing Researcher
                  </p>
                </div>
              </div>
              <Button onClick={() => navigate('/blog')} className="rounded-sm">More Posts</Button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
