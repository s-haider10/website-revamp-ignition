
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, FileText } from 'lucide-react';

const ProjectsSection = () => {
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

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex space-x-2">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
