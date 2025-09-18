import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driven by passion for technology and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
              <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aspiring software engineer with a strong foundation in computer science, skilled in programming, 
                web development, and problem-solving. Proficient in object-oriented programming and passionate 
                about creating efficient, user-friendly software solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Master of Computer Applications at Graphic Era University with hands-on 
                experience from internships at Mezzotint and Bitsabio, where I've contributed to building 
                responsive web applications and enhanced user experiences.
              </p>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-bounce">
                  <span className="text-primary-foreground font-bold text-lg">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education Excellence</h4>
                  <p className="text-sm text-muted-foreground">MCA - 8.10 CGPA</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-bounce">
                  <span className="text-accent-foreground font-bold text-lg">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Professional Experience</h4>
                  <p className="text-sm text-muted-foreground">Frontend & Web Development</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-bounce">
                  <span className="text-primary-foreground font-bold text-lg">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Innovation Focus</h4>
                  <p className="text-sm text-muted-foreground">AI, Web Development & Problem Solving</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;