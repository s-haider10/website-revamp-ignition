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
    <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            A journey through world-class institutions, building a strong
            foundation in computer science and mathematics.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-0">
                <div className="flex flex-col xl:flex-row">
                  {/* Left side - Institution info */}
                  <div className="xl:w-1/3 p-6 sm:p-8 bg-muted/30">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover border-2 border-border flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg sm:text-xl text-foreground">
                          {edu.institution}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="text-sm truncate">
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-foreground">
                            Degree
                          </span>
                        </div>
                        <p className="text-primary font-medium text-sm sm:text-base">
                          {edu.degree}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-foreground">
                            Period
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {edu.period}
                        </p>
                        <span
                          className={`inline-block px-3 py-1 text-xs font-medium rounded-full mt-2 ${
                            edu.status === "Current"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="xl:w-2/3 p-6 sm:p-8">
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        <span className="font-semibold text-foreground"></span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {edu.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4"></h4>
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-muted-foreground flex items-start leading-relaxed text-sm sm:text-base"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
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
