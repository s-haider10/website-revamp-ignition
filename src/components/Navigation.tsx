import { useState } from "react";
import { Menu, X, Download, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "Work", href: "/experience" },
    { label: "Writing", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const downloadCV = (type: "academic" | "industry") => {
    const filename =
      type === "academic"
        ? "Haider_Academic_CV.pdf"
        : "Haider_Industry_Resume.pdf";
    window.open(`/${filename}`, "_blank");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`text-sm font-medium transition-smooth relative group ${
              isActive(item.href)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-200 ${
                isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        ))}
        {/* CV Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="text-sm font-medium transition-smooth relative group text-muted-foreground hover:text-foreground min-h-[44px] flex items-center"
            >
              <Download className="h-4 w-4 mr-1.5" />
              CV/Resume
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-sm">
            <DropdownMenuItem
              onClick={() => downloadCV("academic")}
              className="cursor-pointer min-h-[44px] flex items-center gap-3"
            >
              <FileText className="h-4 w-4 text-foreground" />
              <div className="flex flex-col">
                <span className="font-medium">Academic CV</span>
                <span className="text-xs text-muted-foreground">Full, detailed</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => downloadCV("industry")}
              className="cursor-pointer min-h-[44px] flex items-center gap-3"
            >
              <Briefcase className="h-4 w-4 text-foreground" />
              <div className="flex flex-col">
                <span className="font-medium">Industry Resume</span>
                <span className="text-xs text-muted-foreground">One-pager</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
          <nav
            className="container mx-auto px-4 py-6 space-y-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-base font-medium transition-smooth py-3 px-2 rounded-sm min-h-[44px] flex items-center ${
                  isActive(item.href)
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            {/* CV Options for Mobile */}
            <div className="pt-2 border-t border-border mt-2">
              <div className="text-xs font-medium text-muted-foreground px-2 py-2 mb-1">
                CV/Resume
              </div>
              <button
                onClick={() => {
                  downloadCV("academic");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-base font-medium transition-smooth py-3 px-2 rounded-sm min-h-[44px] flex items-center gap-3 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <FileText className="h-4 w-4" />
                <div className="flex flex-col">
                  <span>Academic CV</span>
                  <span className="text-xs text-muted-foreground">Full, detailed</span>
                </div>
              </button>
              <button
                onClick={() => {
                  downloadCV("industry");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-base font-medium transition-smooth py-3 px-2 rounded-sm min-h-[44px] flex items-center gap-3 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <Briefcase className="h-4 w-4" />
                <div className="flex flex-col">
                  <span>Industry Resume</span>
                  <span className="text-xs text-muted-foreground">One-pager</span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
