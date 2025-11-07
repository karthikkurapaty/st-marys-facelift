import { Award, Users, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Education",
      description: "Established in 1987, providing excellence in education for over 36 years",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Co-Educational",
      description: "Inclusive learning environment welcoming students from all backgrounds",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: BookOpen,
      title: "English Medium",
      description: "Comprehensive curriculum delivered in English for grades 6-10",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Target,
      title: "Character Building",
      description: "Focused on developing well-rounded individuals with strong values",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold text-sm">About Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Building Tomorrow's Leaders Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            St. Mary's School, Kankipadu is a private unaided institution located in the rural area 
            of Kankipadu block, Krishna District, Andhra Pradesh. We are committed to providing 
            quality education that shapes young minds for a bright future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission & Vision
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At St. Mary's School, we strive to create an environment that fosters academic 
                excellence, moral values, and personal growth. Our mission is to develop students 
                who are not only academically proficient but also responsible citizens.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">Academic session starts in April annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">Located in accessible rural area with all-weather road</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">Managed by dedicated private management</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-hero-gradient p-6 rounded-xl text-primary-foreground">
                <div className="text-4xl font-bold mb-2">1987</div>
                <div className="text-sm opacity-90">Year Established</div>
              </div>
              <div className="bg-warm-gradient p-6 rounded-xl text-secondary-foreground">
                <div className="text-4xl font-bold mb-2">6-10</div>
                <div className="text-sm opacity-90">Grade Levels</div>
              </div>
              <div className="bg-accent-gradient p-6 rounded-xl text-accent-foreground">
                <div className="text-4xl font-bold mb-2">Rural</div>
                <div className="text-sm opacity-90">Location Type</div>
              </div>
              <div className="bg-hero-gradient p-6 rounded-xl text-primary-foreground">
                <div className="text-4xl font-bold mb-2">Pvt.</div>
                <div className="text-sm opacity-90">Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
