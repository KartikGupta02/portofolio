import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      description: "Comprehensive C++ application for managing student, teacher, and staff records with automated ID generation and efficient data operations.",
      longDescription: "Developed a robust school management system using advanced C++ programming and file handling techniques. Features include automated unique serial ID generation, CRUD operations across multiple files, and optimized data retrieval using linked lists resulting in 30% faster performance.",
      technologies: ["C++", "Data Structures", "File Handling", "Linked Lists"],
      icon: <Database className="w-6 h-6" />,
      features: [
        "Automated unique ID system for students, teachers, and staff",
        "Complete CRUD operations across multiple files",
        "30% faster data retrieval using linked lists",
        "Comprehensive record management system"
      ],
      color: "bg-primary"
    },
    {
      title: "Object Detection using Deep Learning",
      description: "Real-time object detection system leveraging YOLO model and OpenCV for accurate identification and classification from video feeds.",
      longDescription: "Built a sophisticated object detection system using the YOLOv8 model and OpenCV library. Supports real-time detection from webcam input and pre-recorded videos with high accuracy across multiple object classes and optimized frame processing performance.",
      technologies: ["Python", "YOLO", "OpenCV", "Deep Learning", "Computer Vision"],
      icon: <Brain className="w-6 h-6" />,
      features: [
        "Real-time object detection using YOLOv8 model",
        "Multi-class object identification with confidence scores",
        "Support for webcam and video file processing",
        "Optimized FPS monitoring for real-time efficiency"
      ],
      color: "bg-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing technical expertise through innovative solutions and efficient implementations
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-bounce`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="hero" className="shadow-medium">
                      <Code className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground mb-6">Key Features</h4>
                  <div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-hero text-white border-0 shadow-strong">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and expanding my portfolio. Stay tuned for 
              upcoming web applications, mobile solutions, and innovative tech experiments.
            </p>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;