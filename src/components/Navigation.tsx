
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Education', href: '/education' },
    { label: 'Adventures', href: '/adventures' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 xl:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`text-sm font-medium transition-colors relative group ${
              isActive(item.href) 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {item.label}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
              isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden min-h-[44px] min-w-[44px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border lg:hidden z-50 shadow-lg">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-base font-medium transition-colors py-3 px-2 rounded-md min-h-[44px] flex items-center ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
