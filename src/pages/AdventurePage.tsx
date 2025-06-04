
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
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Adventure Not Found</h1>
          <Button onClick={() => navigate('/adventures')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Adventures
          </Button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-background dark:from-orange-950/20 dark:to-background">
      <ReadingProgress />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/adventures')}
              className="hover:bg-orange-100 dark:hover:bg-orange-900/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Adventures
            </Button>
          </div>

          {/* Hero Image */}
          <div className="aspect-[21/9] mb-8 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={adventure.image}
              alt={adventure.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Adventure Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {adventure.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {adventure.title}
            </h1>
            
            {/* Adventure Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">{adventure.location}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(adventure.difficulty)}`}>
                  {adventure.difficulty}
                </span>
              </div>
              
              {adventure.distance && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Ruler className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-medium">{adventure.distance}</span>
                </div>
              )}
              
              {adventure.elevation && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mountain className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-medium">{adventure.elevation}</span>
                </div>
              )}
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-b border-orange-200 dark:border-orange-800 py-4">
              <div className="flex items-center">
                <img
                  src={adventure.author.avatar}
                  alt={adventure.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>By {adventure.author.name}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(adventure.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {adventure.readTime}
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              {adventure.excerpt}
            </p>
          </div>

          {/* Adventure Content */}
          <div className="prose prose-lg max-w-none">
            <AdventureContentRenderer content={adventure.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventurePage;
