
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, TrendingUp, Ruler, Mountain } from 'lucide-react';
import { adventures } from '../data/adventures';
import AdventureContentRenderer from '../components/AdventureContentRenderer';
import ReadingProgress from '../components/ReadingProgress';

const AdventurePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const adventure = adventures.find(a => a.slug === slug);
  
  if (!adventure) {
    return (
      <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Adventure Not Found</h1>
          <Button onClick={() => navigate('/adventures')} className="min-h-[44px]">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Adventures
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Hard': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Extreme': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <ReadingProgress />
      
      <div className="pt-20 sm:pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6 sm:mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/adventures')}
              className="hover:bg-primary/10 min-h-[44px]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Adventures
            </Button>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] sm:aspect-[21/9] mb-6 sm:mb-8 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={adventure.image}
              alt={adventure.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Adventure Header */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {adventure.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {adventure.title}
            </h1>
            
            {/* Adventure Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              <div className="flex items-center space-x-2 text-muted-foreground p-3 rounded-lg bg-muted/50">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium truncate">{adventure.location}</span>
              </div>
              
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(adventure.difficulty)}`}>
                  {adventure.difficulty}
                </span>
              </div>
              
              {adventure.distance && (
                <div className="flex items-center space-x-2 text-muted-foreground p-3 rounded-lg bg-muted/50">
                  <Ruler className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{adventure.distance}</span>
                </div>
              )}
              
              {adventure.elevation && (
                <div className="flex items-center space-x-2 text-muted-foreground p-3 rounded-lg bg-muted/50">
                  <Mountain className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{adventure.elevation}</span>
                </div>
              )}
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground border-t border-b border-primary/20 py-4">
              <div className="flex items-center">
                <img
                  src={adventure.author.avatar}
                  alt={adventure.author.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
                />
                <span>By {adventure.author.name}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden sm:inline">
                  {new Date(adventure.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="sm:hidden">
                  {new Date(adventure.date).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {adventure.readTime}
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6">
              {adventure.excerpt}
            </p>
          </div>

          {/* Adventure Content */}
          <div className="prose prose-sm sm:prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground">
            <AdventureContentRenderer content={adventure.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventurePage;
