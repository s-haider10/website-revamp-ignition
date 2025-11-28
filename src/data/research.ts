import { ResearchPublication } from "../types/research";

export const researchPublications: ResearchPublication[] = [
  {
    id: "1",
    title: "Multimodal Learning Systems for Personalized Education",
    authors: ["Syed Ali Haider", "Prof. Hongyi Wen"],
    venue: "ICML",
    year: "2024",
    abstract: "We present a multimodal ed-tech chatbot system that combines audio and vision sentiment analysis to boost context awareness by 40%. The system leverages LLVMs (Llama 2, GPT-4) for optimal retrieval performance and includes a comprehensive evaluation framework for personalized learning metrics.",
    paperUrl: "#",
    codeUrl: "#",
    demoUrl: "#",
    citations: 0,
    tags: ["Multimodal Learning", "Education", "NLP", "Computer Vision"],
  },
  {
    id: "2",
    title: "Quantum Mean-Field Games: Extending Prisoner's Dilemma to N-Player Settings",
    authors: ["Syed Ali Haider", "Prof. Tim Byrnes"],
    venue: "Quantum Information Processing",
    year: "2024",
    abstract: "We extend the quantum Prisoner's Dilemma to n-player settings, developing strategies that outperform Nash equilibrium. Our simulation framework enables analysis of quantum mean-field games with applications in quantum game theory.",
    paperUrl: "#",
    codeUrl: "#",
    citations: 0,
    tags: ["Quantum Computing", "Game Theory", "Quantum Information"],
  },
  {
    id: "3",
    title: "Hybrid VQA Models with Cross-Attention Mechanisms",
    authors: ["Syed Ali Haider"],
    venue: "CVPR",
    year: "2024",
    abstract: "We engineer a hybrid Visual Question Answering (VQA) model combining MAE ViT and BERT with cross-attention mechanisms. Through LoRA fine-tuning, we achieve a 2.37% accuracy gain on COCO dataset while reducing inference latency through attention optimizations.",
    paperUrl: "#",
    codeUrl: "#",
    citations: 0,
    tags: ["Computer Vision", "NLP", "VQA", "Deep Learning"],
  },
  // Add more publications as needed
];

