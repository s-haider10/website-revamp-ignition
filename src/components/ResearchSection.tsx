import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Github, ExternalLink, Presentation, Quote } from "lucide-react";
import { ResearchPublication } from "@/types/research";
import { useState } from "react";

interface ResearchSectionProps {
  publications: ResearchPublication[];
}

const ResearchSection = ({ publications }: ResearchSectionProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-4 sm:space-y-6">
      {publications.map((pub) => {
        const isExpanded = expandedId === pub.id;
        return (
          <Card
            key={pub.id}
            className="border-border hover:border-foreground/20 transition-smooth overflow-hidden group"
          >
            <div className="grid md:grid-cols-3 gap-0">
              {pub.image && (
                <div className="md:col-span-1 aspect-video md:aspect-auto bg-muted overflow-hidden">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className={`${pub.image ? "md:col-span-2" : "md:col-span-3"}`}>
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-serif font-semibold mb-2 text-foreground leading-tight">
                        {pub.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                        <span className="font-medium break-words">{pub.authors.join(", ")}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-mono whitespace-nowrap">{pub.venue} {pub.year}</span>
                        {pub.citations !== undefined && (
                          <>
                            <span className="hidden sm:inline">•</span>
                            <span className="whitespace-nowrap">{pub.citations} citations</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  {/* Abstract Preview */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center gap-2 w-full text-left min-h-[44px] touch-manipulation"
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? "Hide abstract" : "Show abstract"}
                    >
                      <Quote className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1">
                        {isExpanded ? "Hide" : "Show"} Abstract
                      </span>
                      <span className={`transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}>
                        ↓
                      </span>
                    </button>
                    {isExpanded && (
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-6 animate-in fade-in slide-in-from-top-2 duration-200">
                        {pub.abstract}
                      </p>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {pub.paperUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-sm text-xs min-h-[44px]"
                        asChild
                      >
                        <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3 w-3 mr-1" />
                          Paper
                        </a>
                      </Button>
                    )}
                    {pub.codeUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-sm text-xs min-h-[44px]"
                        asChild
                      >
                        <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {pub.slidesUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-sm text-xs min-h-[44px]"
                        asChild
                      >
                        <a href={pub.slidesUrl} target="_blank" rel="noopener noreferrer">
                          <Presentation className="h-3 w-3 mr-1" />
                          Slides
                        </a>
                      </Button>
                    )}
                    {pub.demoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-sm text-xs min-h-[44px]"
                        asChild
                      >
                        <a href={pub.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ResearchSection;

