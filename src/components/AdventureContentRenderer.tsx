
import { AdventureContent } from '../types/adventure';
import { Code2 } from 'lucide-react';

interface AdventureContentRendererProps {
  content: AdventureContent[];
}

const AdventureContentRenderer = ({ content }: AdventureContentRendererProps) => {
  const renderContent = (item: AdventureContent, index: number) => {
    switch (item.type) {
      case 'heading':
        const HeadingTag = `h${item.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag 
            key={index} 
            className={`font-bold mb-4 mt-8 ${
              item.level === 1 ? 'text-2xl sm:text-3xl lg:text-4xl' :
              item.level === 2 ? 'text-xl sm:text-2xl lg:text-3xl' :
              item.level === 3 ? 'text-lg sm:text-xl lg:text-2xl' :
              item.level === 4 ? 'text-base sm:text-lg lg:text-xl' : 'text-sm sm:text-base lg:text-lg'
            }`}
          >
            {item.content}
          </HeadingTag>
        );
      
      case 'text':
        return (
          <div 
            key={index} 
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-6 text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                   .replace(/\n/g, '<br/>')
            }}
          />
        );
      
      case 'image':
        return (
          <figure key={index} className="my-6 sm:my-8">
            <img
              src={item.content}
              alt={item.caption || 'Adventure image'}
              className="w-full rounded-lg shadow-lg"
            />
            {item.caption && (
              <figcaption className="text-center text-xs sm:text-sm text-muted-foreground mt-2 italic">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      
      case 'code':
        return (
          <div key={index} className="my-6">
            <div className="bg-muted rounded-lg overflow-hidden border">
              <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
                <div className="flex items-center space-x-2">
                  <Code2 className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {item.language || 'Code'}
                  </span>
                </div>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono">
                  {item.content}
                </code>
              </pre>
            </div>
          </div>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-primary pl-4 sm:pl-6 py-4 my-6 bg-primary/5 rounded-r-lg">
            <p className="text-base sm:text-lg italic text-foreground/90">
              "{item.content}"
            </p>
          </blockquote>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
};

export default AdventureContentRenderer;
