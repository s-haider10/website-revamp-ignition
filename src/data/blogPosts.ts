import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "quantum-supremacy-guide",
    title: "Understanding Quantum Supremacy: A Practical Guide",
    excerpt:
      "Exploring the implications of quantum supremacy and what it means for the future of computing. A deep dive into current achievements and future possibilities in quantum research.",
    date: "2024-02-15",
    readTime: "8 min read",
    tags: ["Quantum Computing", "Research", "Technology"],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    slug: "quantum-supremacy-guide",
    author: {
      name: "Haider",
      avatar: "/profile.jpg",
    },
    content: [
      {
        type: "heading",
        content: "Introduction to Quantum Supremacy",
        level: 2,
      },
      {
        type: "text",
        content:
          "Quantum supremacy represents a pivotal moment in computing history where quantum computers demonstrate computational abilities beyond the reach of classical computers. This milestone isn't just theoretical—it has profound implications for cryptography, optimization, and scientific simulation.",
      },
      {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
        caption: "Quantum computing hardware in a laboratory setting",
      },
      {
        type: "heading",
        content: "Key Principles",
        level: 2,
      },
      {
        type: "text",
        content:
          "At its core, quantum supremacy relies on three fundamental quantum mechanical phenomena:",
      },
      {
        type: "text",
        content:
          "1. **Superposition**: Qubits can exist in multiple states simultaneously\n2. **Entanglement**: Quantum particles become correlated in ways impossible classically\n3. **Interference**: Quantum amplitudes can interfere constructively or destructively",
      },
      {
        type: "code",
        language: "python",
        content: `# Example: Creating a quantum superposition state
  from qiskit import QuantumCircuit, QuantumRegister
  # Create a quantum circuit with 2 qubits
  qreg = QuantumRegister(2, 'q')
  circuit = QuantumCircuit(qreg)
  # Apply Hadamard gate to create superposition
  circuit.h(qreg[0])
  # Create entanglement
  circuit.cx(qreg[0], qreg[1])
  print("Quantum circuit created successfully!")`,
      },
      {
        type: "quote",
        content:
          "The power of quantum computing lies not in replacing classical computers entirely, but in solving specific problems exponentially faster.",
      },
      {
        type: "heading",
        content: "Real-World Applications",
        level: 2,
      },
      {
        type: "text",
        content:
          "Quantum supremacy opens doors to revolutionary applications across multiple domains. In cryptography, it challenges current security paradigms while enabling quantum-safe communication protocols. For optimization problems, quantum algorithms can explore solution spaces more efficiently than classical approaches.",
      },
      {
        type: "text",
        content:
          "In my research at NYU, I've focused on practical implementations of quantum algorithms for educational gaming platforms. The QGameEngine project demonstrates how quantum concepts can be made accessible through interactive visualization and gamified learning experiences.",
      },
    ],
  },
];

export const blogFilters: { tag: string; label: string }[] = [
  { tag: "All", label: "All Posts" },
  { tag: "Quantum Computing", label: "Quantum Computing" },
  { tag: "Finance", label: "Finance" },
  { tag: "AI/ML", label: "AI/ML" },
  { tag: "Research", label: "Research" },
  { tag: "Career", label: "Career" },
];
