
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Profile Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Saad Haider"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          Saad Haider
        </h1>
        
        {/* Subheading */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
          <p className="font-mono">NYU '24 | Computer Science</p>
          <p className="font-medium">Quantum Computing • Financial Technology • AI Research</p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
          Building scalable solutions at the intersection of quantum computing, financial technology, and artificial intelligence. 
          Bridging the gap between cutting-edge research and real-world applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <Link to="/projects">
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            asChild
          >
            <Link to="/blog">
              Read Research
              <FileText className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground font-medium">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground font-medium">Open Source Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground font-medium">Industry Internships</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
