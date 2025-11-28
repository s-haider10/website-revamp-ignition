import Hero from "@/components/Hero";
import ResearchHighlight from "@/components/ResearchHighlight";
import ProjectsPreview from "@/components/ProjectsPreview";
import NewsSection from "@/components/NewsSection";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Featured research paper (placeholder - replace with actual data)
  const featuredResearch = {
    title: "Multimodal Learning Systems for Personalized Education",
    venue: "ICML",
    year: "2024",
    impact:
      "Architected multimodal ed-tech chatbot with audio/vision sentiment analysis, boosting context awareness by 40% and improving personalized learning metrics.",
    authors: ["Syed Ali Haider", "Prof. Hongyi Wen"],
    paperUrl: "#",
    codeUrl: "#",
    demoUrl: "#",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  };

  return (
    <div>
      <Hero />

      {/* News Section */}
      <NewsSection />

      {/* Research Highlight Section */}
      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-2 text-foreground">
                Featured Research
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Latest work at the intersection of AI and human-computer
                interaction
              </p>
            </div>
            <Button
              variant="ghost"
              className="rounded-sm min-h-[44px] self-start sm:self-auto"
              asChild
            >
              <Link to="/research">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          <ResearchHighlight {...featuredResearch} />
        </div>
      </section>

      {/* Projects Preview */}
      {projects.length > 0 && (
        <ProjectsPreview projects={projects} maxProjects={3} />
      )}
    </div>
  );
};

export default Index;
