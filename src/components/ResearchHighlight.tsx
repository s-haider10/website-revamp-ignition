import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface ResearchHighlightProps {
  title: string;
  venue: string;
  year: string;
  impact: string;
  authors?: string[];
  paperUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  image?: string;
}

const ResearchHighlight = ({
  title,
  venue,
  year,
  impact,
  authors,
  paperUrl,
  codeUrl,
  demoUrl,
  image,
}: ResearchHighlightProps) => {
  return (
    <Card className="border-border hover:border-foreground/20 transition-smooth overflow-hidden group">
      <div className="grid md:grid-cols-3 gap-0">
        {image && (
          <div className="md:col-span-1 aspect-video md:aspect-auto bg-muted overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className={`p-4 sm:p-6 ${image ? "md:col-span-2" : "md:col-span-3"}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-muted-foreground">
                  {venue} {year}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 text-foreground leading-tight">
                {title}
              </h3>
              {authors && (
                <p className="text-sm text-muted-foreground mb-3 break-words">
                  {authors.join(", ")}
                </p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {impact}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {paperUrl && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-sm text-xs min-h-[44px]"
                asChild
              >
                <a href={paperUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-3 w-3 mr-1" />
                  Paper
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-sm text-xs min-h-[44px]"
                asChild
              >
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button
                size="sm"
                variant="outline"
                className="rounded-sm text-xs min-h-[44px]"
                asChild
              >
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-3 w-3 mr-1" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ResearchHighlight;

