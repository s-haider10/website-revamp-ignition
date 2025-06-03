// src/components/content/Narrative.tsx
import { Link } from "react-router-dom"; // Changed from next/link

export default function NarrativeContent() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <p className="mb-4">
        Hi, I'm a senior at <strong>NYU</strong> studying and building
        intelligent systems.
      </p>

      <p className="mb-4">
        Along the way, I've had the privilege of learning from and working with
        incredible mentors, including{" "}
        <a
          href="https://whongyi.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Prof. Hongyi Wen
        </a>
        ,{" "}
        <a
          href="https://www.di.ens.fr/~ponce/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Prof. Jean Ponce
        </a>
        , and{" "}
        <a
          href="https://www.umarsaif.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Dr. Umar Saif
        </a>
        . Their guidance has shaped my research interests and approach to
        solving challenging problems.
      </p>

      <p className="mb-4">
        My journey so far has been about exploring how systems can learn and
        adapt, just like we do. I've worked on exciting projects in areas like{" "}
        <strong>recommendation systems, computer vision, and NLP</strong>,
        always aiming to make technology more intuitive and accessible.
      </p>

      <p className="mb-4">
        On the side I've been exploring the intersection of{" "}
        <strong>quantum technologies</strong> and computation, exploring their
        potential under the mentorship of{" "}
        <a
          href="https://shanghai.nyu.edu/academics/faculty/directory/tim-byrnes"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Prof. Tim Byrnes
        </a>
      </p>
    </div>
  );
}
