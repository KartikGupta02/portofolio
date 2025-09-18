import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Bitsabio",
      period: "Ongoing",
      location: "Remote",
      status: "Current",
      description: "Working on developing and maintaining websites using HTML, CSS, JavaScript and React. Collaborating with team in creating responsive designs and improving website functionality.",
      achievements: [
        "Developing responsive web applications using React",
        "Improving website functionality and user experience",
        "Collaborating with development team on various projects",
        "Working with modern web technologies and best practices"
      ],
      color: "bg-accent"
    },
    {
      title: "Front-End Developer Intern",
      company: "Mezzotint",
      period: "6 Months",
      location: "Remote",
      status: "Completed",
      description: "Contributed to building responsive, user-friendly web applications by developing and enhancing front-end features using HTML, CSS, JavaScript, and React.",
      achievements: [
        "Developed and enhanced responsive front-end features",
        "Improved UI/UX design for better user experience",
        "Optimized application performance and loading speeds",
        "Collaborated with development team to deliver high-quality solutions"
      ],
      color: "bg-primary"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Graphic Era Deemed to be University",
      period: "Aug 2023 – Jun 2025",
      location: "Dehradun, India",
      cgpa: "8.10",
      status: "Pursuing"
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "H.N.B. Garhwal University",
      period: "Aug 2019 – Jun 2022",
      location: "Srinagar, India",
      cgpa: "7.23",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth animate-slide-in-left group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${exp.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={exp.status === "Current" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {exp.status}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={edu.institution}
                className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-lg text-accent font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={edu.status === "Pursuing" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {edu.status}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CGPA:</span>
                  <Badge variant="outline" className="font-semibold">
                    {edu.cgpa}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;