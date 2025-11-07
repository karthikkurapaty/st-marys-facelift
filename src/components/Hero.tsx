import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/school-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="St. Mary's School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">Excellence in Education Since 1987</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              St. Mary's School
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Nurturing young minds with quality education in Kankipadu, Krishna District. 
            We provide a comprehensive learning environment for grades 6-10 with a focus on 
            academic excellence and character development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-hero-gradient hover:opacity-90 shadow-medium hover:shadow-large transition-all duration-300 text-base md:text-lg group"
            >
              Explore Our School
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 hover:bg-muted text-base md:text-lg"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-1">36+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Grade Levels</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Dedicated Faculty</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-1">Co-Ed</div>
              <div className="text-sm text-muted-foreground">Inclusive Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
