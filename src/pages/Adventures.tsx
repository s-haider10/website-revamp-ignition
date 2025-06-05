import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  User,
  MapPin,
  TrendingUp,
  Mountain,
} from "lucide-react";
import { adventures } from "../data/adventures";

const Adventures = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const navigate = useNavigate();

  // Get all unique tags
  const allTags = [
    "All",
    ...Array.from(new Set(adventures.flatMap((adventure) => adventure.tags))),
  ];

  const filteredAdventures =
    selectedTag === "All"
      ? adventures
      : adventures.filter((adventure) => adventure.tags.includes(selectedTag));

  // Calculate tag popularity for visualization
  const tagCounts = adventures.reduce((acc, adventure) => {
    adventure.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const maxCount = Math.max(...Object.values(tagCounts));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Hard":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case "Extreme":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen  pt-20 sm:pt-24 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-primary to-[#194e6b] via-blue-400 bg-clip-text text-transparent">
              Life on the Pale Blue Dot{" "}
            </span>
            <span className="ml-2">🌎</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground italic font-serif text-center max-w-3xl mx-auto leading-relaxed px-4 mt-4">
            <span className="font-mono"> </span>
            "Somewhere, something incredible is waiting to be known." - Carl
            Sagan
            <span className="font-mono"> </span>
          </p>
        </div>

        {/* Tag Visualization */}
        <div className="mb-8 p-6 bg-muted/20 rounded-lg">
          <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
            <Mountain className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
            Vibe
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {Object.entries(tagCounts).map(([tag, count]) => {
              const intensity = (count / maxCount) * 100;
              return (
                <div
                  key={tag}
                  className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform p-2 rounded-md hover:bg-primary/5"
                  onClick={() => setSelectedTag(tag)}
                >
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-primary to-primary/70"
                    style={{ opacity: intensity / 100 }}
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {tag} ({count})
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-8 sm:mb-16 px-4">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-full max-w-xs sm:w-64 border-primary/20 focus:ring-primary min-h-[44px]">
              <SelectValue placeholder="Filter by adventure type" />
            </SelectTrigger>
            <SelectContent>
              {allTags.map((tag) => (
                <SelectItem
                  key={tag}
                  value={tag}
                  className="min-h-[44px] flex items-center"
                >
                  {tag === "All" ? "All Adventures" : tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Adventures Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filteredAdventures.map((adventure) => (
            <Card
              key={adventure.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 hover:scale-[1.02]"
              onClick={() => navigate(`/adventure/${adventure.slug}`)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <Badge
                    variant="secondary"
                    className={`text-xs ${getDifficultyColor(
                      adventure.difficulty
                    )}`}
                  >
                    {adventure.difficulty}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{adventure.location}</span>
                  </div>
                </div>

                <CardTitle className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {adventure.title}
                </CardTitle>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="truncate">{adventure.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="truncate">
                      {new Date(adventure.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{adventure.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 p-4 sm:p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {adventure.excerpt}
                </p>

                {/* Adventure Stats */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  {adventure.distance && (
                    <div className="flex items-center px-2 py-1 bg-primary/10 rounded-full">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span className="truncate">{adventure.distance}</span>
                    </div>
                  )}
                  {adventure.elevation && (
                    <div className="flex items-center px-2 py-1 bg-primary/10 rounded-full">
                      <Mountain className="h-3 w-3 mr-1" />
                      <span className="truncate">{adventure.elevation}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {adventure.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {adventure.tags.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/20"
                    >
                      +{adventure.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adventures;
