import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Kankipadu, Krishna District",
      subContent: "Andhra Pradesh, India",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "Contact School Office",
      subContent: "For admission inquiries",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@stmarysschool.edu",
      subContent: "Reach out anytime",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sat: 9:00 AM - 4:00 PM",
      subContent: "Closed on Sundays",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold text-sm">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about admissions or want to learn more about our school? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`${info.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`h-7 w-7 ${info.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-foreground font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {info.subContent}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border shadow-large">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Enter your name"
                      className="border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-border"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your inquiry..."
                    className="border-border min-h-32"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-hero-gradient hover:opacity-90 shadow-medium hover:shadow-large transition-all duration-300 text-base"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
