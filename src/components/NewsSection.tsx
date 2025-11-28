import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/types/news";
import { newsItems } from "@/data/news";

interface NewsSectionProps {
  news?: NewsItem[];
}

const NewsSection = ({ news = newsItems }: NewsSectionProps) => {
  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      Research: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      Awards: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      Press: "bg-green-500/10 text-green-500 border-green-500/20",
      Default: "bg-muted text-muted-foreground border-border",
    };
    return colors[tag] || colors.Default;
  };

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-2 text-foreground">
            Recent News
          </h2>
        </div>

        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-3 border-b border-border/50 last:border-b-0"
            >
              <div className="flex flex-col gap-1 min-w-[80px] sm:min-w-[100px]">
                <div className="font-mono text-sm text-muted-foreground">
                  {item.date}
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs rounded-sm border ${getTagColor(
                    item.tag
                  )} w-fit`}
                >
                  {item.tag}
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-foreground font-medium">
                    {item.title}
                  </span>
                  {item.links && item.links.length > 0 && (
                    <span className="text-muted-foreground text-sm">
                      (
                      {item.links.map((link, idx) => (
                        <span key={idx}>
                          {link.icon && (
                            <span className="mr-1">{link.icon}</span>
                          )}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground hover:underline transition-colors"
                          >
                            {link.label}
                          </a>
                          {idx < item.links!.length - 1 && " / "}
                        </span>
                      ))}
                      )
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
