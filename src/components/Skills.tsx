import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "JavaScript", "Python", "SQL"],
      color: "bg-primary"
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["HTML", "CSS", "React", "Object-Oriented Programming"],
      color: "bg-accent"
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: ["VS Code", "Code Blocks", "PyCharm", "File Handling"],
      color: "bg-primary"
    },
    {
      title: "Specialized Skills",
      icon: "🔬",
      skills: ["Data Structures & Algorithms", "Database Management", "Deep Learning", "YOLO/OpenCV"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building robust solutions with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="w-full justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-card border-0 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about staying current with emerging technologies and best practices. 
              Currently expanding expertise in advanced React patterns, modern web development 
              frameworks, and exploring AI/ML applications in software development.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;