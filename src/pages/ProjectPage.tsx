import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Github,
  ExternalLink,
  FileText,
} from "lucide-react";
import ProjectContentRenderer from "../components/ProjectContentRenderer";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-serif font-semibold mb-4 text-foreground">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/projects")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/projects")}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        {/* Header Image or YouTube Video */}
        {project.youtubeEmbedHtml ? (
          <div className="aspect-video overflow-hidden rounded-sm mb-8 bg-muted">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: project.youtubeEmbedHtml }}
            />
          </div>
        ) : project.youtubeUrl ? (
          (() => {
            const extractYouTubeId = (url: string): string | null => {
              const regExp =
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
              const match = url.match(regExp);
              return match && match[2].length === 11 ? match[2] : null;
            };
            const videoId = extractYouTubeId(project.youtubeUrl);
            return videoId ? (
              <div className="aspect-video overflow-hidden rounded-sm mb-8 bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="aspect-video overflow-hidden rounded-sm mb-8 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })()
        ) : (
          <div className="aspect-video overflow-hidden rounded-sm mb-8 bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Project Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {project.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {project.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-sm text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-sm text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-sm"
                asChild
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.links.demo && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-sm"
                asChild
              >
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {project.links.paper && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-sm"
                asChild
              >
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Paper
                </a>
              </Button>
            )}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.excerpt}
          </p>
        </header>

        {/* Project Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-semibold">
          <ProjectContentRenderer content={project.content} />
        </article>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <img
                src={project.author.avatar}
                alt={project.author.name}
                className="w-12 h-12 rounded-sm object-cover border border-border"
              />
              <div>
                <p className="font-medium text-foreground">
                  {project.author.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  NYU CS & Math | AI Engineer
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/projects")}
              className="rounded-sm"
            >
              More Projects
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectPage;
