
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, MapPin, TrendingUp, Mountain } from 'lucide-react';
import { adventures } from '../data/adventures';

const Adventures = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const navigate = useNavigate();

  // Get all unique tags
  const allTags = ['All', ...Array.from(new Set(adventures.flatMap(adventure => adventure.tags)))];
  
  const filteredAdventures = selectedTag === 'All' 
    ? adventures 
    : adventures.filter(adventure => adventure.tags.includes(selectedTag));

  // Calculate tag popularity for visualization
  const tagCounts = adventures.reduce((acc, adventure) => {
    adventure.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const maxCount = Math.max(...Object.values(tagCounts));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Hard': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Extreme': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50/30 to-background dark:from-orange-950/30 dark:via-amber-950/10 dark:to-background pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Adventures & Expeditions
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            From conquering mountain peaks to exploring hidden urban landscapes, join me on thrilling adventures that push boundaries and create unforgettable memories.
          </p>
        </div>

        {/* Tag Visualization */}
        <div className="mb-8 p-6 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/40 dark:to-amber-950/40 rounded-lg border border-orange-200 dark:border-orange-800">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Mountain className="h-5 w-5 mr-2 text-orange-600" />
            Popular Adventure Types
          </h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(tagCounts).map(([tag, count]) => {
              const intensity = (count / maxCount) * 100;
              return (
                <div
                  key={tag}
                  className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedTag(tag)}
                >
                  <div 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                    style={{ opacity: intensity / 100 }}
                  />
                  <span className="text-sm font-medium">{tag} ({count})</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Filter Dropdown */}
        <div className="flex justify-center mb-16">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-64 border-orange-200 dark:border-orange-800 focus:ring-orange-500">
              <SelectValue placeholder="Filter by adventure type" />
            </SelectTrigger>
            <SelectContent>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag === 'All' ? 'All Adventures' : tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Adventures Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredAdventures.map((adventure) => (
            <Card 
              key={adventure.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-orange-200/50 hover:border-orange-300 dark:border-orange-800/50 dark:hover:border-orange-700 bg-gradient-to-br from-white to-orange-50/30 dark:from-background dark:to-orange-950/10"
              onClick={() => navigate(`/adventure/${adventure.slug}`)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getDifficultyColor(adventure.difficulty)}`}
                  >
                    {adventure.difficulty}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {adventure.location}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-semibold group-hover:text-orange-600 transition-colors line-clamp-2">
                  {adventure.title}
                </CardTitle>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {adventure.author.name}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(adventure.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {adventure.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {adventure.excerpt}
                </p>
                
                {/* Adventure Stats */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  {adventure.distance && (
                    <div className="flex items-center px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {adventure.distance}
                    </div>
                  )}
                  {adventure.elevation && (
                    <div className="flex items-center px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      <Mountain className="h-3 w-3 mr-1" />
                      {adventure.elevation}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {adventure.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      {tag}
                    </Badge>
                  ))}
                  {adventure.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs border-orange-200 dark:border-orange-800">
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
