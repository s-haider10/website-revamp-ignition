import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Dartmouth College",
      logo: "dartmouth.jpg",
      degree: "Master of Science in Computer Science",
      location: "Hanover, NH",
      period: "2025 - 2026",
      status: "Current",
      description:
        "Specializing in Artificial Intelligence with focus on entrepreneurship.",
      highlights: ["Joining in Fall 2025", "Thesis track program"],
    },
    {
      institution: "NYU Shanghai",
      logo: "nyush.png",
      degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
      location: "Shanghai, China",
      period: "2021 - 2025",
      status: "Completed",
      description:
        "NYU Shanghai is aone of the three degree granting campus of New York University and the first Sino-US university in China. The liberal arts curriculum emphasizes interdisciplinary learning and global perspectives.",
      highlights: [
        "Dean's List for Academic Excellence",
        "Research Assistant in AI and Machine Learning",
        "Lead Learning Assistant for 10 CS Courses",
        "Two-time recipient of the NYU Shanghai Undergraduate Research Assistantship Grant",
        "Recipient of Dean Undergraduate Research Award",
        "Recipient of the NYUSH Research Symposium Most Popular Award",
        "Intermediate Fluency in Mandarin",
      ],
    },
    {
      institution: "NYU Courant Institute of Mathematical Sciences",
      logo: "courant.jpg",
      degree: "Study Away",
      location: "New York, NY",
      period: "Freshman Year & Junior Year",
      status: "Completed",
      description: " Study Away | Coursework | Research ",
      highlights: [
        "Completed a two-year study away program at NYU Courant Institute",
        "Courses in Algorithms, Linear Algebra, Calculus, Mathematical Logic and Graph Theory, Probability Theory, Statistics, Operations Optimization, and Quantum Computing",
        "Research projects in computer vision and recommender systems",
      ],
    },

    {
      institution: "Yale Young Global Scholars",
      logo: "yygs.jpg",
      degree: "Pre-Collegiate Program in Yale University",
      location: "New Haven, CT",
      period: "Summer 2020",
      status: "Completed",
      description:
        "Intensive summer program in science and engineering, with a focus on solving global challenges through technological innovation.",
      highlights: [
        "Applied Science & Engineering Track",
        "Program Alumni Ambassador",
        "Recipient of full scholarship",
        "Capstone Project: Cloud Seeding - Technology for Climate Change",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">
            Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A journey through world-class institutions, building a strong foundation in computer science and mathematics.
          </p>
        </div>

        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-sm hover:shadow-md transition-smooth border-border hover:border-foreground/20"
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Institution info */}
                  <div className="lg:w-1/3 p-6 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-12 h-12 rounded-sm object-cover border border-border flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="font-serif font-semibold text-lg text-foreground">
                          {edu.institution}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                          <span className="text-xs">
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="h-4 w-4 text-foreground" />
                        </div>
                        <p className="text-foreground font-medium text-sm">
                          {edu.degree}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-foreground" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {edu.period}
                        </p>
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-medium rounded-sm mt-2 ${
                            edu.status === "Current"
                              ? "bg-muted text-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:w-2/3 p-6">
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <BookOpen className="h-4 w-4 text-foreground" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {edu.description}
                      </p>
                    </div>

                    <div>
                      <ul className="space-y-2.5">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-muted-foreground flex items-start leading-relaxed text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{highlight}</span>
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
