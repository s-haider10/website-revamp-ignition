import { Project, ProjectFilter } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "QGameEngine",
    excerpt:
      "Interactive quantum computing educational platform with real-time circuit visualization and gamified learning experiences.",
    slug: "qgameengine",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Quantum Computing", "Web Development", "Education"],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    author: {
      name: "Shahzeb Haider",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    links: {
      github: "https://github.com/s-haider10/qgameengine",
      demo: "https://qgameengine.vercel.app",
      paper: "#",
    },
    tech: ["React", "Python", "Qiskit", "TypeScript"],
    content: [
      {
        type: "heading",
        level: 1,
        content: "QGameEngine: Revolutionizing Quantum Education",
      },
      {
        type: "text",
        content:
          "QGameEngine represents a paradigm shift in quantum computing education, combining **interactive visualization** with gamified learning to make complex quantum concepts accessible to students and researchers alike.\n\nBuilt during my time at NYU, this platform addresses the fundamental challenge of quantum computing education: making abstract quantum phenomena tangible and understandable.",
      },
      {
        type: "heading",
        level: 2,
        content: "Technical Architecture",
      },
      {
        type: "code",
        language: "python",
        content: `# Quantum circuit visualization engine
  from qiskit import QuantumCircuit, execute, Aer
  import numpy as np
  class QuantumVisualizer:
      def __init__(self, num_qubits=3):
          self.qc = QuantumCircuit(num_qubits)
          self.backend = Aer.get_backend('statevector_simulator')
      def add_gate(self, gate_type, qubit_index):
          if gate_type == 'H':
              self.qc.h(qubit_index)
          elif gate_type == 'X':
              self.qc.x(qubit_index)
          return self.get_state_vector()
      def get_state_vector(self):
          job = execute(self.qc, self.backend)
          result = job.result()
          return result.get_statevector()`,
      },
      {
        type: "text",
        content:
          "The platform's core strength lies in its **real-time quantum circuit simulator** that provides instant feedback as users build quantum algorithms. This immediate visualization helps bridge the gap between theoretical quantum mechanics and practical quantum computing.",
      },
      {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
        caption:
          "Real-time quantum circuit visualization interface showing superposition states",
      },
      {
        type: "heading",
        level: 2,
        content: "Impact and Results",
      },
      {
        type: "quote",
        content:
          "QGameEngine has transformed how we teach quantum computing at NYU. Students now engage with quantum concepts through interactive gameplay rather than abstract mathematics alone.",
      },
      {
        type: "text",
        content:
          "The platform has been adopted by **3 universities** and used by over **500 students** to learn quantum computing fundamentals. Key achievements include:\n\n• **40% improvement** in quantum concept comprehension scores\n• **60% increase** in student engagement with quantum coursework\n• **Published research** on gamified quantum education at QCE 2024",
      },
    ],
  },
];

export const projectFilters: ProjectFilter[] = [
  { tag: "All", label: "All Projects" },
  { tag: "Quantum Computing", label: "Quantum Computing" },
  { tag: "Finance Tech", label: "Finance Tech" },
  { tag: "AI/ML", label: "AI/ML" },
  { tag: "Web Development", label: "Web Development" },
  { tag: "Visualization", label: "Visualization" },
  { tag: "Education", label: "Education" },
  { tag: "Backend", label: "Backend" },
];
