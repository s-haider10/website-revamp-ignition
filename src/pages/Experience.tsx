
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, FileText, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "2023 - Present",
      company: "NYU Quantum Research Lab",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=50&h=50&fit=crop",
      title: "Graduate Research Assistant",
      achievements: [
        "Developed novel quantum algorithms reducing computational complexity by 35%",
        "Published 2 papers in peer-reviewed journals on quantum machine learning",
        "Mentored 5 undergraduate students in quantum computing research"
      ]
    },
    {
      period: "Summer 2023",
      company: "Goldman Sachs",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=50&h=50&fit=crop",
      title: "Software Engineering Intern",
      achievements: [
        "Optimized high-frequency trading algorithms reducing latency by 40%",
        "Built real-time risk monitoring dashboard using React and Python",
        "Collaborated with quantitative analysts on algorithmic trading strategies"
      ]
    },
    {
      period: "2022 - 2023",
      company: "NYU Computer Science Department",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=50&h=50&fit=crop",
      title: "Teaching Assistant",
      achievements: [
        "TA for Data Structures and Algorithms (CS 201) - 150+ students",
        "Designed interactive coding exercises improving student engagement by 60%",
        "Held weekly office hours and conducted exam review sessions"
      ]
    },
    {
      period: "2021 - 2022",
      company: "TechStart Innovations",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop",
      title: "Junior Software Developer",
      achievements: [
        "Developed full-stack web applications using MERN stack",
        "Implemented CI/CD pipelines reducing deployment time by 50%",
        "Led team of 3 developers on client-facing projects"
      ]
    }
  ];

  const downloadCV = (type: 'academic' | 'industry') => {
    // In a real implementation, you would serve actual PDF files
    const filename = type === 'academic' ? 'Saad_Haider_Academic_CV.pdf' : 'Saad_Haider_Industry_Resume.pdf';
    console.log(`Downloading ${filename}`);
    // Simulate download - replace with actual file URLs
    window.open(`/cvs/${filename}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            From quantum research to financial technology, building impactful solutions across diverse domains.
          </p>
          
          {/* CV Download Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 p-6 bg-muted/30 rounded-lg border border-border/50">
            <div className="flex items-center space-x-2 text-foreground">
              <FileText className="h-5 w-5" />
              <span className="font-medium">Download CV:</span>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => downloadCV('academic')}
                className="bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Academic CV
              </Button>
              <Button 
                variant="outline" 
                onClick={() => downloadCV('industry')}
                className="bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Industry Resume
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-border"
                        />
                        <div>
                          <h3 className="font-bold text-xl text-foreground">{exp.company}</h3>
                          <p className="text-primary font-semibold text-lg">{exp.title}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-6 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground flex items-start leading-relaxed">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
