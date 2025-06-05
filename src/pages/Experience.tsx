import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Download, FileText, Briefcase, Filter } from "lucide-react";

export default function Experience() {
  const [selectedFilter, setSelectedFilter] = useState<string>("both");

  const experiences = [
    {
      period: "Jun 2025 - Present",
      company: "Intellia Advisors",
      logo: "intellia_logo.jpeg",
      title: "AI/ML Engineer",
      tag: "industry",
      category: "Startup",
      achievements: [
        "Joined core AI team at VC-backed (Gobi) startup reinventing consulting with AI",
        "Reporting directly to CTO; building RAG pipelines, fine-tuning LLMs, and scaling real-time inference infra",
        "Enabling AI-driven research, slide deck automation, and data prioritization to accelerate strategic insights in strat and finance",
      ],
    },

    {
      period: "May 2025 - Present",
      company: "Gobi Partners ",
      logo: "gobi-logo.jpg",
      title: "Spark Fellow",
      tag: "industry",
      category: "VC",
      achievements: [
        "Selected as 1 of 12 fellows from 2,000+ applicants (Top 0.6%)",
        "Product and AI/ML innovation track, working directly with portfolio startups",
        "Engaged in weekly roundtables with leading Pakistani founders and GPs",
        "Trained in venture capital, fundraising mechanics, and early-stage startup operations",
        "Positioned at the intersection of VC and frontier tech — bridging Silicon Valley playbooks with on-the-ground execution",
      ],
    },
    {
      period: "Jul '24 - Sep '24",
      company: "Khudi Ventures ",
      logo: "khudi.jpg", // Replace with actual path
      title: "ML Engineer (RecSys)",
      tag: "industry",
      category: "VC",
      achievements: [
        "Built matching algorithm for matrimony app → 10% engagement lift",
        "Deployed RL+NLP system with Gale-Shapley optimization for 10M+ users",
        "Architectured psychometric profiling for matchmaking personalization",
      ],
    },
    {
      period: "May '24 - Jul '24",
      company: "Reckitt Benckiser",
      logo: "reckitt.png",
      title: "Data Science Intern ",
      tag: "industry",
      category: "Fortune 500",
      achievements: [
        "Shipped predictive pricing models with 97.93% accuracy (XGBoost/ensemble)",
        "Productionized sales forecasting and price elasticity models for MENA region",
        "Designed custom regression algorithms for emerging markets",
      ],
    },
    {
      period: "Oct '24 - Dec '24",
      company: "NYU MAPS Lab",
      logo: "nyu.png",
      title: "Research Assistant ",
      tag: "academic",
      category: "Research Lab",
      achievements: [
        "Architected multimodal ed-tech chatbot with audio/vision sentiment analysis",
        "Implemented knowledge retrieval pipeline boosting context awareness by 40%",
        "Benchmarked LLVMs (Llama 2, GPT-4) for optimal retrieval performance",
        "Designed evaluation framework for personalized learning metrics",
      ],
    },
    {
      period: "Oct '24 - Dec '24",
      company: "NYU Quantum Technologies Lab",
      logo: "nyu.png",
      title: "Research Assistant",
      tag: "academic",
      category: "Research Lab",
      achievements: [
        "Extended quantum Prisoner's Dilemma to n-player settings",
        "Developed strategies outperforming Nash equilibrium",
        "Built simulation framework for quantum mean-field games",
      ],
    },

    {
      period: "May '24 - Aug '24",
      company: "NYU Dean's Undergraduate Research Fund",
      logo: "nyu.png",
      title: "Research Assistant",
      tag: "academic",
      category: "Research Lab",
      achievements: [
        "Engineered hybrid VQA model (MAE ViT + BERT) with cross-attention",
        "Achieved 2.37% accuracy gain on COCO via LoRA fine-tuning",
        "Reduced inference latency through attention optimizations",
      ],
    },
    {
      period: "Jan '24 - May '24",
      company: "NYU Stern",
      logo: "stern.jpg",
      title: "Research Assistant (Prof. Divya Singhvi)",
      tag: "academic",
      category: "Research Lab",
      achievements: [
        "Built RL-based 'nudge' system reducing churn in longitudinal study",
        "Implemented clustering on panel data for behavior segmentation",
        "Data acquistion, cleaning, and preprocessing for 10k+ user dataset",
      ],
    },
    {
      period: "Jun '23 - Sep '23",
      company: "Listen.Dev",
      logo: "listen.jpeg",
      title: "Software Engineer Intern",
      tag: "industry",
      category: "Startup",
      achievements: [
        "Created live cybersecurity monitor processing 20k+ supply chain attacks",
        "Designed GPT Turbo + LangChain pipeline for attack summarization",
        "Architected Flask backend with MySQL for real-time threat analysis",
      ],
    },
    {
      period: "Jan '23 - May '23",
      company: "NYU Interactive Media Lab",
      logo: "ima.png",
      title: "Research Assistant (Prof. Nicole Wang)",
      tag: "academic",
      category: "Research Lab",
      achievements: [
        "Developed LLM-based Gen-AI grader (GPT-4 Turbo + MongoDB)",
        "Automated grading for 500+ student submissions with 92% accuracy",
        "Optimized HPC pipeline for batch processing",
      ],
    },
    {
      period: "Aug '22 - Dec '22",
      company: "Jika.io",
      logo: "jika.jpeg", // Replace with actual path
      title: "Data Engineer Intern",
      tag: "industry",
      category: "Startup",
      achievements: [
        "Engineered MySQL → BigQuery ETL pipeline (DataGrip/SQL) → 60% faster processing",
        "Enabled real-time analytics for 1TB+ datasets",
        "Automated schema migration for 50+ tables with zero downtime",
        "Implemented data validation checks reducing errors by 85%",
      ],
    },
    {
      period: "May '22 - Aug '22",
      company: "AlfaBolt",
      logo: "alfabolt.jpeg", // Replace with actual path
      title: "Software Developer Intern",
      tag: "industry",
      category: "Startup",
      achievements: ["💻 Webapps + MERN"],
    },
  ];

  // Move state declarations here
  const [selectedCategory, setSelectedCategory] = useState("all");

  const downloadCV = (type: "academic" | "industry") => {
    const filename =
      type === "academic"
        ? "Haider_Academic_CV.pdf"
        : "Haider_Industry_Resume.pdf";
    console.log(`Downloading ${filename}`);
    window.open(`${filename}`, "_blank");
  };

  const filteredExperiences = experiences.filter((exp) => {
    const matchesTag = selectedFilter === "both" || exp.tag === selectedFilter;
    const matchesCategory =
      selectedCategory === "all" || exp.category === selectedCategory;
    return matchesTag && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Building across Research Labs, Startups, Fortune 500, and Venture
            Capital Funds.
          </p>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Filter by:
              </span>
            </div>

            {/* Tag filter
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select experience type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="both">Both</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="industry">Industry</SelectItem>
              </SelectContent>
            </Select> */}

            {/* Category filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="VC">VC</SelectItem>
                <SelectItem value="Startup">Startup</SelectItem>
                <SelectItem value="Research Lab">Research Lab</SelectItem>
                <SelectItem value="Fortune 500">Fortune 500</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CV Download Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 p-6 bg-muted/30 rounded-lg border border-border/50">
            <div className="flex items-center space-x-2 text-foreground">
              <FileText className="h-5 w-5" />
              <span className="font-medium">View:</span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => downloadCV("academic")}
                className="bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Full CV
              </Button>
              <Button
                variant="outline"
                onClick={() => downloadCV("industry")}
                className="bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Short Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-16">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-border"
                        />
                        <div>
                          <h3 className="font-bold text-xl text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            {exp.title}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <span
                              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                exp.tag === "academic"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                  : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              }`}
                            >
                              {exp.tag === "academic" ? "Academic" : "Industry"}
                            </span>
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                              {exp.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-6 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-muted-foreground flex items-start leading-relaxed"
                          >
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
}
