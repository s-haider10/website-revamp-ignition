
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Dartmouth College",
      logo: "https://web.dartmouth.edu/~bknauff/dharma_green.jpg",
      degree: "Master of Science in Computer Science",
      location: "Hanover, NH",
      period: "2024 - 2026",
      status: "Current",
      description: "Specializing in Machine Learning and Artificial Intelligence with focus on quantum computing applications.",
      highlights: [
        "Graduate Teaching Assistant for Advanced Algorithms",
        "Research in Quantum Machine Learning",
        "Dean's List for Academic Excellence"
      ]
    },
    {
      institution: "NYU Courant Institute",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=80&h=80&fit=crop",
      degree: "Mathematics Minor Study Away",
      location: "New York, NY",
      period: "Spring 2023",
      status: "Completed",
      description: "Advanced mathematics coursework focusing on mathematical foundations of computer science.",
      highlights: [
        "Real Analysis and Abstract Algebra",
        "Mathematical Logic and Set Theory",
        "Probability Theory and Statistics"
      ]
    },
    {
      institution: "NYU Shanghai",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=80&h=80&fit=crop",
      degree: "Bachelor of Science in Computer Science",
      location: "Shanghai, China",
      period: "2021 - 2024",
      status: "Completed",
      description: "Comprehensive computer science education with international perspective and cross-cultural experience.",
      highlights: [
        "Summa Cum Laude Graduate",
        "President of Computer Science Society",
        "Published research in quantum algorithms"
      ]
    },
    {
      institution: "Yale University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png",
      degree: "Yale Young Global Scholars",
      location: "New Haven, CT",
      period: "Summer 2020",
      status: "Completed",
      description: "Intensive summer program focusing on global affairs, leadership, and innovation in technology.",
      highlights: [
        "Innovation in Science & Technology Track",
        "Leadership and Global Affairs Certificate",
        "International Collaboration Project"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through world-class institutions, building a strong foundation in computer science and mathematics.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {educationData.map((edu, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Institution info */}
                  <div className="lg:w-1/3 p-8 bg-muted/30">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-16 h-16 rounded-lg object-cover border-2 border-border"
                      />
                      <div>
                        <h3 className="font-bold text-xl text-foreground">{edu.institution}</h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-foreground">Degree</span>
                        </div>
                        <p className="text-primary font-medium">{edu.degree}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-foreground">Period</span>
                        </div>
                        <p className="text-muted-foreground">{edu.period}</p>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mt-2 ${
                          edu.status === 'Current' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">Description</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Highlights</h4>
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-muted-foreground flex items-start leading-relaxed">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
