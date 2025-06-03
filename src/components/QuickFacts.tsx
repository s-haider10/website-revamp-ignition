
import { Card, CardContent } from '@/components/ui/card';
import { Award, Code, Briefcase, GraduationCap, Zap } from 'lucide-react';

const QuickFacts = () => {
  const facts = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      text: "Published research on quantum algorithms at IEEE Quantum Computing Conference 2024"
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      text: "Built QGameEngine with React, Python, and Qiskit for interactive quantum education"
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      text: "Former Software Engineering Intern at Goldman Sachs, optimizing trading algorithms"
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      text: "NYU Computer Science graduate with focus on Quantum Computing and AI/ML"
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      text: "Passionate about bridging the gap between complex technology and practical applications"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Facts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {fact.icon}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {fact.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
