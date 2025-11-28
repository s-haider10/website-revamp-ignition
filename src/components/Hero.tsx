import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import NarrativeContent from "./content/Narrative";
import CVDownloadDropdown from "./CVDownloadDropdown";
import TypingText from "./TypingText";
import GlowEffect from "./GlowEffect";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(148, 163, 184, 0.3) 0%, transparent 50%)`,
        }}
      />
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <GlowEffect intensity="medium">
                <div className="relative group">
                  <img
                    src="/favicon.ico"
                    alt="Syed Ali Haider"
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-border shadow-sm mx-auto sm:mx-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-foreground/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </GlowEffect>
            </div>
            <div className="flex-1 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight tracking-tight mb-4">
                Syed Ali Haider
              </h1>

              <div className="mb-6 space-y-3">
                {/* University Logos */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <GlowEffect intensity="low">
                    <img
                      src="/nyu.png"
                      alt="NYU"
                      className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 border-2 border-border/50 hover:border-foreground/30 hover:scale-110"
                    />
                  </GlowEffect>
                  <GlowEffect intensity="low">
                    <img
                      src="/dartmouth.jpg"
                      alt="Dartmouth"
                      className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 border-2 border-border/50 hover:border-foreground/30 hover:scale-110"
                    />
                  </GlowEffect>
                </div>
                <div className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed min-h-[1.5rem]">
                  <TypingText
                    texts={[
                      "AI Researcher + Founder",
                      "Building intelligent systems",
                      "At the intersection of research & industry",
                      "Scaling AI from lab to production",
                    ]}
                    speed={80}
                    deleteSpeed={40}
                    pauseTime={2500}
                    className="font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="mb-16 prose prose-sm sm:prose-base md:prose-lg max-w-none prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30 hover:prose-a:decoration-foreground/60">
          <NarrativeContent />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-16 sm:mb-20">
          <GlowEffect intensity="medium">
            <Button
              size="lg"
              className="rounded-sm px-5 sm:px-6 py-3 text-sm sm:text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 min-h-[44px] flex-1 sm:flex-initial min-w-[140px] hover:scale-105"
              asChild
            >
              <Link to="/projects">
                Research & Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </GlowEffect>

          <GlowEffect intensity="low">
            <Button
              variant="outline"
              size="lg"
              className="rounded-sm px-5 sm:px-6 py-3 text-sm sm:text-base font-medium border border-border hover:bg-muted transition-all duration-300 min-h-[44px] flex-1 sm:flex-initial min-w-[120px] hover:scale-105"
              asChild
            >
              <Link to="/experience">Experience</Link>
            </Button>
          </GlowEffect>

          <GlowEffect intensity="low">
            <Button
              variant="outline"
              size="lg"
              className="rounded-sm px-5 sm:px-6 py-3 text-sm sm:text-base font-medium border-2 border-border hover:bg-muted transition-all duration-300 min-h-[44px] flex-1 sm:flex-initial min-w-[100px] hover:scale-105"
              asChild
            >
              <Link to="/blog">Writing</Link>
            </Button>
          </GlowEffect>

          <div className="w-full sm:w-auto">
            <CVDownloadDropdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
