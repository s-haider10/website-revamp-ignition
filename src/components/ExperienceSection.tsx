
import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar } from 'lucide-react';

const ExperienceSection = () => {
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

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{exp.company}</h3>
                          <p className="text-primary font-medium">{exp.title}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
    </section>
  );
};

export default ExperienceSection;
