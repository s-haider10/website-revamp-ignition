
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { projects, projectFilters } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const handleProjectClick = (project: typeof projects[0]) => {
    navigate(`/project/${project.slug}`);
  };

  // Calculate tag popularity for visualization
  const tagCounts = projects.reduce((acc, project) => {
    project.tags.forEach(tag => {
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
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Building scalable solutions at the intersection of quantum computing, financial technology, and artificial intelligence.
          </p>
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
                  onClick={() => setActiveFilter(tag)}
                >
                  <div 
                    className="w-4 h-4 rounded-full bg-primary"
                    style={{ opacity: intensity / 100 }}
                  />
                  <span className="text-sm">{tag} ({count})</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-16">
          <Select value={activeFilter} onValueChange={setActiveFilter}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {projectFilters.map((filter) => (
                <SelectItem key={filter.tag} value={filter.tag}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">{project.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.excerpt}
                </p>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.links.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.links.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.links.paper, '_blank');
                    }}
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Paper
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
