import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 90843 59600",
      href: "tel:+919084359600",
      color: "bg-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kartikg02102000@gmail.com",
      href: "mailto:kartikg02102000@gmail.com",
      color: "bg-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kashipuri, Roorkee, Uttarakhand",
      href: "#",
      color: "bg-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="p-8 bg-gradient-card border-0 shadow-medium">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-primary" />
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with fellow developers, potential employers, 
                or anyone interested in discussing technology, projects, or collaboration opportunities. 
                Feel free to reach out through any of the channels below!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.label}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth group cursor-pointer"
                    onClick={() => contact.href !== "#" && window.open(contact.href)}
                  >
                    <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-bounce`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8 animate-fade-in">
            <Card className="p-8 bg-gradient-hero text-white border-0 shadow-strong">
              <h3 className="text-3xl font-bold mb-6">Ready to Work Together?</h3>
              <p className="text-white/90 leading-relaxed mb-8">
                I'm actively seeking opportunities in software development, particularly in 
                frontend development, web applications, and innovative tech solutions. 
                Let's discuss how I can contribute to your team's success.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('mailto:kartikg02102000@gmail.com')}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('tel:+919084359600')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-medium">
              <h4 className="text-xl font-bold mb-4 text-foreground">What I'm Looking For</h4>
              <div className="space-y-3">
                {[
                  "Frontend Developer positions",
                  "Full-stack development opportunities", 
                  "Internships in innovative tech companies",
                  "Collaborative project partnerships",
                  "Mentorship and learning opportunities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-card border-0 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              Thanks for Visiting!
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I appreciate you taking the time to learn about my work and experience. 
              I'm looking forward to connecting and exploring how we can create amazing 
              software solutions together.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;