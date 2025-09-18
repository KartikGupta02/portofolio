import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-card/80 backdrop-blur-md rounded-full border border-border/50 shadow-medium px-2 py-2">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full transition-smooth ${
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground shadow-soft" 
                    : "hover:bg-muted"
                }`}
              >
                {item.icon}
                <span className="ml-2 hidden lg:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <Button
          variant="default"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 shadow-medium"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-48 justify-start gap-3 transition-smooth ${
                    activeSection === item.id 
                      ? "bg-primary text-primary-foreground shadow-soft" 
                      : "hover:bg-muted"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;