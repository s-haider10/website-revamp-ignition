import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ExperienceCardProps {
  period: string;
  company: string;
  logo: string;
  title: string;
  tag: "academic" | "industry";
  category: string;
  achievements: string[];
  impactMetrics?: string[];
}

const ExperienceCard = ({
  period,
  company,
  logo,
  title,
  category,
  achievements,
  impactMetrics,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Startup:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      VC: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      "Fortune 500":
        "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
      "Research Lab":
        "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    };
    return colors[cat] || "bg-muted text-foreground border-border";
  };

  return (
    <Card
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 bg-card"
    >
      {/* Animated gradient on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-5 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(148, 163, 184, 0.4) 0%, transparent 50%)`,
          }}
        />
      )}

      <CardContent className="p-6 relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative group/logo">
            <img
              src={logo}
              alt={company}
              className="w-14 h-14 rounded-full object-cover border-2 border-border group-hover:border-foreground/40 transition-all duration-300 flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/0 to-foreground/10 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-foreground transition-colors">
                {company}
              </h3>
              <Badge
                variant="outline"
                className={`text-xs rounded-sm border ${getCategoryColor(
                  category
                )} transition-all duration-300 group-hover:scale-105`}
              >
                {category}
              </Badge>
            </div>
            <p className="font-medium text-foreground/90 mb-2 group-hover:text-foreground transition-colors">
              {title}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
              <Calendar className="h-3 w-3" />
              <span className="font-mono">{period}</span>
            </div>
          </div>
        </div>

        {/* Impact Metrics - Prominently Displayed */}
        {impactMetrics && impactMetrics.length > 0 && (
          <div className="mb-4 p-4 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15 rounded-sm border border-primary/20 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                Impact
              </span>
            </div>
            <div className="space-y-1.5">
              {impactMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements - Progressive Disclosure */}
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 mb-2 flex items-center gap-2 w-full text-left group/button"
          >
            <span>{isExpanded ? "Hide" : "Show"} Details</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              } group-hover/button:translate-x-1`}
            />
          </button>
          {isExpanded && (
            <ul className="space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-300">
              {achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground flex items-start leading-relaxed group-hover:text-muted-foreground/90 transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-primary/80 transition-colors"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
