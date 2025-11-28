import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FileText, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/types/project";

interface ProjectsPreviewProps {
  projects: Project[];
  maxProjects?: number;
}

const ProjectsPreview = ({ projects, maxProjects = 3 }: ProjectsPreviewProps) => {
  const featuredProjects = projects.slice(0, maxProjects);

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-2 text-foreground">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Selected work at the intersection of research and industry
            </p>
          </div>
          <Button
            variant="ghost"
            className="rounded-sm min-h-[44px] self-start sm:self-auto"
            asChild
          >
            <Link to="/projects">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-lg transition-smooth border-border hover:border-foreground/20 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3 p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg font-serif font-semibold group-hover:text-foreground transition-smooth line-clamp-2">
                  {project.title}
                </CardTitle>
                {project.pitch && (
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                    {project.pitch}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs rounded-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0 p-4 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {project.links.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-sm text-xs flex-1 min-w-[80px] min-h-[44px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links.github, "_blank");
                      }}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-sm text-xs flex-1 min-w-[80px] min-h-[44px]"
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
                      className="rounded-sm text-xs flex-1 min-w-[80px] min-h-[44px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links.paper, "_blank");
                      }}
                    >
                      <FileText className="h-3 w-3 mr-1" />
                      Paper
                    </Button>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-3 rounded-sm text-xs min-h-[44px]"
                  asChild
                >
                  <Link to={`/project/${project.slug}`}>
                    View Details
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;

