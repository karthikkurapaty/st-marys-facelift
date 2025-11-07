import { Book, Calculator, Globe, Microscope, Languages, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import classroomImage from "@/assets/classroom.jpg";

const Academics = () => {
  const subjects = [
    { icon: Book, name: "English", color: "text-primary", bgColor: "bg-primary/10" },
    { icon: Calculator, name: "Mathematics", color: "text-secondary", bgColor: "bg-secondary/10" },
    { icon: Microscope, name: "Science", color: "text-accent", bgColor: "bg-accent/10" },
    { icon: Globe, name: "Social Studies", color: "text-primary", bgColor: "bg-primary/10" },
    { icon: Languages, name: "Languages", color: "text-secondary", bgColor: "bg-secondary/10" },
    { icon: Palette, name: "Arts & Crafts", color: "text-accent", bgColor: "bg-accent/10" },
  ];

  return (
    <section id="academics" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm">Academics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Curriculum
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our English medium curriculum for grades 6-10 is designed to provide students 
            with a well-rounded education that prepares them for future success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {subjects.map((subject, index) => (
                <Card 
                  key={index}
                  className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6">
                    <div className={`${subject.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <subject.icon className={`h-6 w-6 ${subject.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {subject.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={classroomImage} 
                alt="Modern Classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-primary">6-10</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Grade Levels</h3>
              <p className="text-muted-foreground">
                Comprehensive education from middle school through secondary level
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Languages className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">English Medium</h3>
              <p className="text-muted-foreground">
                All subjects taught in English to enhance language proficiency
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Academic Session</h3>
              <p className="text-muted-foreground">
                Annual session commencing in April with structured curriculum
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Academics;
