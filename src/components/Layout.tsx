
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Navigation />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-sm hover:bg-muted min-h-[44px] min-w-[44px] transition-smooth"
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

      <main className="min-h-[calc(100vh-12rem)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/s-haider10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-sm hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/haider-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-sm hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sh6070@nyu.edu"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-sm hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
