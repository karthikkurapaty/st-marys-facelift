import { GraduationCap, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-hero-gradient p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">St. Mary's School</h3>
                <p className="text-sm opacity-80">Kankipadu</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Established in 1987, St. Mary's School has been providing quality education 
              to students in Kankipadu, Krishna District. We are committed to academic 
              excellence and character development.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@stmarysschool.edu" 
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#academics" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Academics
                </a>
              </li>
              <li>
                <a href="#facilities" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Kankipadu, Krishna District</li>
              <li>Andhra Pradesh, India</li>
              <li className="pt-2">
                <a href="mailto:info@stmarysschool.edu" className="hover:underline">
                  info@stmarysschool.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm opacity-90">
          <p>© {currentYear} St. Mary's School, Kankipadu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
