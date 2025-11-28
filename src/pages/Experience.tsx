import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, FileText, Briefcase, Filter } from "lucide-react";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences, experienceCategories } from "@/data/experience";

export default function Experience() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const downloadCV = (type: "academic" | "industry") => {
    const filename =
      type === "academic"
        ? "Haider_Academic_CV.pdf"
        : "Haider_Industry_Resume.pdf";
    console.log(`Downloading ${filename}`);
    window.open(`${filename}`, "_blank");
  };

  // Filter out research/academic experiences - only show industry
  const filteredExperiences = experiences
    .filter((exp) => exp.tag === "industry")
    .filter((exp) => {
      const matchesCategory =
        selectedCategory === "all" || exp.category === selectedCategory;
      return matchesCategory;
    });

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">
            Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Building across startups, Fortune 500 companies, and venture capital.
          </p>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Filter by:
              </span>
            </div>

            {/* Category filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48 rounded-sm">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {experienceCategories.map((cat) => (
                  <SelectItem key={cat.category} value={cat.category}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* CV Download Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-16 p-6 bg-muted/30 rounded-sm border border-border">
            <div className="flex items-center space-x-2 text-foreground">
              <FileText className="h-5 w-5" />
              <span className="font-medium text-sm">View:</span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => downloadCV("academic")}
                className="rounded-sm hover:bg-foreground hover:text-background transition-smooth"
              >
                <Download className="h-4 w-4 mr-2" />
                Academic CV
              </Button>
              <Button
                variant="outline"
                onClick={() => downloadCV("industry")}
                className="rounded-sm hover:bg-foreground hover:text-background transition-smooth"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Industry Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Card Grid Layout - YC Founder Style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              period={exp.period}
              company={exp.company}
              logo={exp.logo}
              title={exp.title}
              tag={exp.tag}
              category={exp.category}
              achievements={exp.achievements}
              impactMetrics={exp.impactMetrics}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
