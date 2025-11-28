import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FileText, Play } from "lucide-react";
import { Project } from "@/types/project";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardEnhancedProps {
  project: Project;
}

const ProjectCardEnhanced = ({ project }: ProjectCardEnhancedProps) => {
  const navigate = useNavigate();

  const extractYouTubeId = (url?: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const hasYouTubeEmbed = !!project.youtubeEmbedHtml;
  const youtubeId = extractYouTubeId(project.youtubeUrl);
  const hasYouTube = youtubeId !== null || hasYouTubeEmbed;

  return (
    <Card
      className="group overflow-hidden hover:shadow-lg transition-smooth cursor-pointer border-border hover:border-foreground/20"
      onClick={() => navigate(`/project/${project.slug}`)}
    >
      <div className="grid md:grid-cols-3 gap-0">
        {/* Image or YouTube Video */}
        <div className="md:col-span-1 aspect-video md:aspect-auto bg-muted overflow-hidden">
          {hasYouTubeEmbed ? (
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: project.youtubeEmbedHtml || "" }}
            />
          ) : hasYouTube && youtubeId ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="md:col-span-2">
          <CardHeader className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg sm:text-xl font-serif font-semibold mb-2 text-foreground leading-tight">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                  <span className="font-mono whitespace-nowrap">{project.date}</span>
                </div>
              </div>
            </div>

            {/* Two-Line Pitch */}
            {project.pitch && (
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {project.pitch}
              </p>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs rounded-sm"
                >
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="outline" className="text-xs rounded-sm">
                  +{project.tech.length - 4}
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.excerpt}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.links.github && project.links.github !== "#" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-sm text-xs min-h-[44px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.links.github, "_blank");
                  }}
                >
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Button>
              )}
              {project.links.demo && project.links.demo !== "#" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-sm text-xs min-h-[44px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.links.demo, "_blank");
                  }}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Demo
                </Button>
              )}
              {project.links.paper && project.links.paper !== "#" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-sm text-xs min-h-[44px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.links.paper, "_blank");
                  }}
                >
                  <FileText className="h-3 w-3 mr-1" />
                  Paper
                </Button>
              )}
              {project.links.website && (
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-sm text-xs min-h-[44px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.links.website, "_blank");
                  }}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Site
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCardEnhanced;

