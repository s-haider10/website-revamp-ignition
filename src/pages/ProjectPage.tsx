
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User, Github, ExternalLink, FileText } from "lucide-react";
import ProjectContentRenderer from "../components/ProjectContentRenderer";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/projects')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        {/* Header Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {project.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {project.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-2 mb-6">
            <Button size="sm" variant="outline" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-1" />
                Paper
              </a>
            </Button>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.excerpt}
          </p>
        </header>

        {/* Project Content */}
        <article className="prose prose-lg max-w-none">
          <ProjectContentRenderer content={project.content} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={project.author.avatar}
                alt={project.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{project.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  NYU Graduate | Full-Stack Developer
                </p>
              </div>
            </div>
            <Button onClick={() => navigate('/projects')}>
              More Projects
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectPage;
