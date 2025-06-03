
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Saad Haider"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Saad Haider
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          NYU '24 | Computer Science | Innovation Through Code
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate software engineer and researcher specializing in quantum computing, 
          machine learning, and full-stack development. Building the future through innovative technology solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-3"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-3"
            onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Blog
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
