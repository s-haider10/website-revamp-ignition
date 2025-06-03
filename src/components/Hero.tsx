import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import NarrativeContent from "./content/Narrative";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [spacerHeight, setSpacerHeight] = useState("20vh"); // Reduced default
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateSpacerHeight = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const spaceNeeded = viewportHeight - headerHeight - 200; // Increased buffer to 200px

        // Adjusted limits for tighter spacing
        const minHeight = 50; // Reduced minimum
        const maxHeight = 300; // Reduced maximum
        const height = Math.max(minHeight, Math.min(maxHeight, spaceNeeded));

        setSpacerHeight(`${height}px`);
      }
    };

    calculateSpacerHeight();
    window.addEventListener("resize", calculateSpacerHeight);
    return () => window.removeEventListener("resize", calculateSpacerHeight);
  }, []);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-background to-muted/30">
      {/* Background Cover Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/cover_photo.jpg')" }}
      ></div>

      <div className="container mx-auto max-w-5xl text-center">
        {/* Header section */}
        <div ref={headerRef}>
          {/* Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <img
                src="profile.jpg"
                alt="Syed Ali Haider"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary/20 shadow-2xl object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Syed Ali Haider
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-4 space-y-2">
            {" "}
            {/* Reduced mb-8 to mb-4 */}
            <p className="font-mono">NYU '24 | Computer Science</p>
            <p className="font-medium">
              Quantum Computing • Financial Technology • AI Research
            </p>
          </div>
        </div>

        {/* Scroll Down Arrow - Moved inside headerRef and reduced spacing */}
        <div className="mb-8 flex justify-center">
          {" "}
          {/* Reduced mb-12 to mb-8 */}
          <div className="relative animate-pulse">
            <img
              src="arrows.svg"
              alt="Scroll Down"
              className="w-40 h-40 md:w-28 md:h-28 object-cover" // Reduced size
            />
          </div>
        </div>

        {/* Dynamic spacer with reduced height */}
        <div style={{ height: spacerHeight }} className="w-full"></div>

        {/* Narrative Content and everything below */}
        <div>
          <p className="max-w-4xl mx-auto text-justify mb-16 text-lg leading-relaxed text-muted-foreground">
            <NarrativeContent />
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
              <Link to="/experience">
                View Experience
                <FileText className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              className="rounded-full px-8 py-4 text-lg font-medium  hover:bg-primary hover:text-primary-foreground hover:border-primary"
              asChild
            >
              <Link to="/blog">
                Read Blog
                <FileText className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground font-medium">
                Research Papers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground font-medium">
                Open Source Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground font-medium">
                Industry Internships
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
