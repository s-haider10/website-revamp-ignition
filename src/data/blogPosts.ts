
import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: "quantum-supremacy-guide",
    title: "Understanding Quantum Supremacy: A Practical Guide",
    excerpt: "Exploring the implications of quantum supremacy and what it means for the future of computing. A deep dive into current achievements and future possibilities in quantum research.",
    date: "2024-02-15",
    readTime: "8 min read",
    tags: ["Quantum Computing", "Research", "Technology"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    slug: "quantum-supremacy-guide",
    author: {
      name: "Haider",
      avatar: "/profile.jpg"
    },
    content: [
      {
        type: 'heading',
        content: 'Introduction to Quantum Supremacy',
        level: 2
      },
      {
        type: 'text',
        content: 'Quantum supremacy represents a pivotal moment in computing history where quantum computers demonstrate computational abilities beyond the reach of classical computers. This milestone isn\'t just theoretical—it has profound implications for cryptography, optimization, and scientific simulation.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop',
        caption: 'Quantum computing hardware in a laboratory setting'
      },
      {
        type: 'heading',
        content: 'Key Principles',
        level: 2
      },
      {
        type: 'text',
        content: 'At its core, quantum supremacy relies on three fundamental quantum mechanical phenomena:'
      },
      {
        type: 'text',
        content: '1. **Superposition**: Qubits can exist in multiple states simultaneously\n2. **Entanglement**: Quantum particles become correlated in ways impossible classically\n3. **Interference**: Quantum amplitudes can interfere constructively or destructively'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Example: Creating a quantum superposition state
from qiskit import QuantumCircuit, QuantumRegister

# Create a quantum circuit with 2 qubits
qreg = QuantumRegister(2, 'q')
circuit = QuantumCircuit(qreg)

# Apply Hadamard gate to create superposition
circuit.h(qreg[0])

# Create entanglement
circuit.cx(qreg[0], qreg[1])

print("Quantum circuit created successfully!")`
      },
      {
        type: 'quote',
        content: 'The power of quantum computing lies not in replacing classical computers entirely, but in solving specific problems exponentially faster.'
      },
      {
        type: 'heading',
        content: 'Real-World Applications',
        level: 2
      },
      {
        type: 'text',
        content: 'Quantum supremacy opens doors to revolutionary applications across multiple domains. In cryptography, it challenges current security paradigms while enabling quantum-safe communication protocols. For optimization problems, quantum algorithms can explore solution spaces more efficiently than classical approaches.'
      },
      {
        type: 'text',
        content: 'In my research at NYU, I\'ve focused on practical implementations of quantum algorithms for educational gaming platforms. The QGameEngine project demonstrates how quantum concepts can be made accessible through interactive visualization and gamified learning experiences.'
      }
    ]
  },
  {
    id: "scalable-trading-systems",
    title: "Building Scalable Trading Systems with Python",
    excerpt: "How I optimized high-frequency trading algorithms at Goldman Sachs, reducing latency and improving performance through modern Python techniques and architectural patterns.",
    date: "2024-01-28",
    readTime: "12 min read",
    tags: ["Finance", "Python", "Performance"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    slug: "scalable-trading-systems",
    author: {
      name: "Haider",
      avatar: "/profile.jpg"
    },
    content: [
      {
        type: 'heading',
        content: 'The Challenge of High-Frequency Trading',
        level: 2
      },
      {
        type: 'text',
        content: 'In the world of high-frequency trading, every microsecond counts. During my time working on trading systems, I discovered that optimizing performance isn\'t just about faster algorithms—it\'s about rethinking entire architectural patterns.'
      }
    ]
  },
  {
    id: "ai-education-future",
    title: "The Future of AI in Education: Interactive Learning",
    excerpt: "Examining how interactive AI tools are revolutionizing education, with insights from building QGameEngine and other educational platforms that bridge theory and practice.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["AI/ML", "Education", "Interactive"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    slug: "ai-education-future",
    author: {
      name: "Haider",
      avatar: "/profile.jpg"
    },
    content: [
      {
        type: 'heading',
        content: 'Transforming Education Through AI',
        level: 2
      },
      {
        type: 'text',
        content: 'Artificial Intelligence is reshaping how we approach education, moving beyond traditional lecture-based learning to interactive, personalized experiences that adapt to individual student needs.'
      }
    ]
  },
  {
    id: "academia-to-industry",
    title: "From Academia to Industry: Lessons Learned",
    excerpt: "Reflections on transitioning between academic research and industry applications, including key insights on building products that matter and scaling impact.",
    date: "2023-12-05",
    readTime: "10 min read",
    tags: ["Career", "Research", "Industry"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    slug: "academia-to-industry",
    author: {
      name: "Haider",
      avatar: "/profile.jpg"
    },
    content: [
      {
        type: 'heading',
        content: 'Bridging Two Worlds',
        level: 2
      },
      {
        type: 'text',
        content: 'The transition from academic research to industry application presents unique challenges and opportunities. Having navigated both environments, I\'ve learned valuable lessons about impact, scale, and practical implementation.'
      }
    ]
  }
];

export const blogFilters: { tag: string; label: string }[] = [
  { tag: 'All', label: 'All Posts' },
  { tag: 'Quantum Computing', label: 'Quantum Computing' },
  { tag: 'Finance', label: 'Finance' },
  { tag: 'AI/ML', label: 'AI/ML' },
  { tag: 'Research', label: 'Research' },
  { tag: 'Career', label: 'Career' }
];
