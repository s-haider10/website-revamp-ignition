
import { Outlet } from "react-router-dom";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      if (newIsDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newIsDark;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Navigation />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-muted min-h-[44px] min-w-[44px]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 sm:py-12 mt-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-6">
            <a
              href="https://github.com/s-haider10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="GitHub profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/haider-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sh6070@nyu.edu"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Send email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-mono px-4">
            "Somewhere, something incredible is waiting to be known." - Carl
            Sagan
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Haider. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
