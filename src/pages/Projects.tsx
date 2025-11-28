import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projects, projectFilters } from "../data/projects";
import ProjectCardEnhanced from "@/components/ProjectCardEnhanced";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  // Calculate tag popularity for visualization
  const tagCounts = projects.reduce((acc, project) => {
    project.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const maxCount = Math.max(...Object.values(tagCounts));

  return (
    <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-16 sm:pb-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-3 sm:mb-4 text-foreground">
            Research & Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Selected work spanning machine learning, computer vision, NLP, and
            quantum computing.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-start mb-8 sm:mb-12">
          <Select value={activeFilter} onValueChange={setActiveFilter}>
            <SelectTrigger className="w-full sm:w-48 rounded-sm min-h-[44px]">
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

        {/* Projects List - Same format as Research */}
        <div className="space-y-4 sm:space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCardEnhanced key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
