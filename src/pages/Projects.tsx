
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, FileText } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Quantum Games', 'Finance', 'AI/ML'];

  const projects = [
    {
      title: "QGameEngine",
      category: "Quantum Games",
      date: "March 2024",
      tech: ["React", "Python", "Qiskit", "TypeScript"],
      description: "Interactive quantum computing educational platform with real-time circuit visualization and gamified learning experiences.",
      links: {
        github: "https://github.com/s-haider10/qgameengine",
        demo: "https://qgameengine.vercel.app",
        paper: "#"
      },
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
    },
    {
      title: "Trading Algorithm Optimizer",
      category: "Finance",
      date: "January 2024",
      tech: ["Python", "NumPy", "Pandas", "Docker"],
      description: "High-frequency trading algorithm optimization system reducing latency by 40% for institutional trading platforms.",
      links: {
        github: "https://github.com/s-haider10/trading-optimizer",
        demo: "#",
        paper: "#"
      },
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      title: "Neural Network Visualizer",
      category: "AI/ML",
      date: "November 2023",
      tech: ["PyTorch", "D3.js", "Flask", "WebGL"],
      description: "Real-time neural network architecture visualization tool for educational purposes and research analysis.",
      links: {
        github: "https://github.com/s-haider10/nn-visualizer",
        demo: "https://nn-visualizer.herokuapp.com",
        paper: "#"
      },
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    window.open(`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
  };

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
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6 py-2 font-medium text-sm"
            >
              {category}
            </Button>
          ))}
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
                  {project.description}
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
