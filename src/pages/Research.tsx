import ResearchSection from "@/components/ResearchSection";
import { researchPublications } from "@/data/research";

const Research = () => {
  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-16 sm:pb-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-3 sm:mb-4 text-foreground">
            Research
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Publications and research contributions at the intersection of AI, quantum computing, and human-computer interaction.
          </p>
        </div>

        <ResearchSection publications={researchPublications} />
      </div>
    </div>
  );
};

export default Research;

