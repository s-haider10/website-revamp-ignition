import { Project, ProjectFilter } from '../types/project';

export const projects: Project[] = [
  {
    id: "1",
    title: "QGameEngine",
    excerpt: "Interactive quantum computing educational platform with real-time circuit visualization and gamified learning experiences.",
    slug: "qgameengine",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Quantum Computing", "Web Development", "Education"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    author: {
      name: "Shahzeb Haider",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    links: {
      github: "https://github.com/s-haider10/qgameengine",
      demo: "https://qgameengine.vercel.app",
      paper: "#"
    },
    tech: ["React", "Python", "Qiskit", "TypeScript"],
    content: [
      {
        type: "heading",
        level: 1,
        content: "QGameEngine: Revolutionizing Quantum Education"
      },
      {
        type: "text",
        content: "QGameEngine represents a paradigm shift in quantum computing education, combining **interactive visualization** with gamified learning to make complex quantum concepts accessible to students and researchers alike.\n\nBuilt during my time at NYU, this platform addresses the fundamental challenge of quantum computing education: making abstract quantum phenomena tangible and understandable."
      },
      {
        type: "heading",
        level: 2,
        content: "Technical Architecture"
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
        return result.get_statevector()`
      },
      {
        type: "text",
        content: "The platform's core strength lies in its **real-time quantum circuit simulator** that provides instant feedback as users build quantum algorithms. This immediate visualization helps bridge the gap between theoretical quantum mechanics and practical quantum computing."
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
        caption: "Real-time quantum circuit visualization interface showing superposition states"
      },
      {
        type: "heading",
        level: 2,
        content: "Impact and Results"
      },
      {
        type: "quote",
        content: "QGameEngine has transformed how we teach quantum computing at NYU. Students now engage with quantum concepts through interactive gameplay rather than abstract mathematics alone."
      },
      {
        type: "text",
        content: "The platform has been adopted by **3 universities** and used by over **500 students** to learn quantum computing fundamentals. Key achievements include:\n\n• **40% improvement** in quantum concept comprehension scores\n• **60% increase** in student engagement with quantum coursework\n• **Published research** on gamified quantum education at QCE 2024"
      }
    ]
  },
  {
    id: "2",
    title: "Trading Algorithm Optimizer",
    excerpt: "High-frequency trading algorithm optimization system reducing latency by 40% for institutional trading platforms.",
    slug: "trading-algorithm-optimizer",
    date: "2024-01-20",
    readTime: "12 min read",
    tags: ["Finance Tech", "AI/ML", "Backend"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    author: {
      name: "Shahzeb Haider",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    links: {
      github: "https://github.com/s-haider10/trading-optimizer",
      demo: "#",
      paper: "#"
    },
    tech: ["Python", "NumPy", "Pandas", "Docker"],
    content: [
      {
        type: "heading",
        level: 1,
        content: "Optimizing High-Frequency Trading with Machine Learning"
      },
      {
        type: "text",
        content: "In the world of algorithmic trading, **microseconds matter**. This project developed a sophisticated optimization system for high-frequency trading algorithms, achieving a remarkable 40% reduction in execution latency while maintaining profitability.\n\nDeveloped in collaboration with a major Wall Street firm, this system processes millions of trades daily and has generated measurable alpha for institutional clients."
      },
      {
        type: "heading",
        level: 2,
        content: "Core Algorithm"
      },
      {
        type: "code",
        language: "python",
        content: `import numpy as np
from sklearn.ensemble import RandomForestRegressor
import pandas as pd

class LatencyOptimizer:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100)
        self.feature_weights = {}
    
    def optimize_execution(self, market_data, order_book):
        # Extract features from market microstructure
        features = self._extract_features(market_data, order_book)
        
        # Predict optimal execution strategy
        predicted_latency = self.model.predict(features.reshape(1, -1))
        
        # Dynamic routing based on venue latency
        optimal_venue = self._select_venue(predicted_latency)
        
        return {
            'venue': optimal_venue,
            'predicted_latency': predicted_latency[0],
            'execution_strategy': self._get_strategy(features)
        }
    
    def _extract_features(self, market_data, order_book):
        return np.array([
            market_data['spread'],
            order_book['depth'],
            market_data['volatility'],
            order_book['imbalance']
        ])`
      },
      {
        type: "text",
        content: "The optimization engine uses **machine learning** to predict optimal execution strategies based on real-time market microstructure data. By analyzing order book depth, spread dynamics, and market volatility, the system routes orders to minimize both latency and market impact."
      }
    ]
  },
  {
    id: "3",
    title: "Neural Network Visualizer",
    excerpt: "Real-time neural network architecture visualization tool for educational purposes and research analysis.",
    slug: "neural-network-visualizer",
    date: "2023-11-10",
    readTime: "6 min read",
    tags: ["AI/ML", "Web Development", "Visualization"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    author: {
      name: "Shahzeb Haider",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    links: {
      github: "https://github.com/s-haider10/nn-visualizer",
      demo: "https://nn-visualizer.herokuapp.com",
      paper: "#"
    },
    tech: ["PyTorch", "D3.js", "Flask", "WebGL"],
    content: [
      {
        type: "heading",
        level: 1,
        content: "Visualizing Neural Networks in Real-Time"
      },
      {
        type: "text",
        content: "Understanding neural network architectures and their decision-making processes remains one of the biggest challenges in machine learning education and research. This interactive visualization tool bridges that gap by providing **real-time insights** into how neural networks learn and make predictions."
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        caption: "Interactive neural network visualization showing activation patterns during training"
      },
      {
        type: "text",
        content: "The visualizer has been used in **machine learning courses** at NYU and adopted by researchers studying neural network interpretability. It provides unprecedented insight into the **black box** of deep learning."
      }
    ]
  }
];

export const projectFilters: ProjectFilter[] = [
  { tag: 'All', label: 'All Projects' },
  { tag: 'Quantum Computing', label: 'Quantum Computing' },
  { tag: 'Finance Tech', label: 'Finance Tech' },
  { tag: 'AI/ML', label: 'AI/ML' },
  { tag: 'Web Development', label: 'Web Development' },
  { tag: 'Visualization', label: 'Visualization' },
  { tag: 'Education', label: 'Education' },
  { tag: 'Backend', label: 'Backend' }
];
