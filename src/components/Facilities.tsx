import { Building2, BookOpenCheck, Users, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import libraryImage from "@/assets/library.jpg";
import playgroundImage from "@/assets/playground.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Well-Maintained Classrooms",
      description: "Modern and well-equipped classrooms designed to facilitate effective learning",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpenCheck,
      title: "Library Resources",
      description: "Access to educational resources and reading materials for student development",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Dedicated Faculty",
      description: "Experienced teachers committed to student success and academic excellence",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TreePine,
      title: "Green Environment",
      description: "Located in a peaceful rural setting conducive to learning and growth",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="facilities" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">Facilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Modern Learning Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our school provides essential facilities and infrastructure to support 
            effective teaching and holistic student development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className={`${facility.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <facility.icon className={`h-7 w-7 ${facility.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-large group">
            <img 
              src={libraryImage} 
              alt="School Library" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Library Facilities</h3>
              <p className="text-muted-foreground">
                A collection of educational resources to support learning and research
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-large group">
            <img 
              src={playgroundImage} 
              alt="School Playground" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Sports & Recreation</h3>
              <p className="text-muted-foreground">
                Outdoor spaces for physical activities and sports development
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-medium">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            School Infrastructure
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Separate</div>
              <div className="text-muted-foreground">Head Teacher's Room</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Modern</div>
              <div className="text-muted-foreground">Building Structure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Rural</div>
              <div className="text-muted-foreground">Peaceful Location</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">All-Weather</div>
              <div className="text-muted-foreground">Road Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
