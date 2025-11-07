import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-hero-gradient p-2 rounded-lg shadow-medium group-hover:shadow-large transition-all duration-300">
              <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">St. Mary's School</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Kankipadu</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('academics')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Academics
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-hero-gradient hover:opacity-90 shadow-medium hover:shadow-large transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('academics')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Academics
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-hero-gradient hover:opacity-90"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
