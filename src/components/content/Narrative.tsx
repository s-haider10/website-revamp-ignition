// src/components/content/Narrative.tsx

export default function NarrativeContent() {
  return (
    <div className="space-y-5 sm:space-y-6 text-sm sm:text-base leading-relaxed text-foreground">
      <p>
        I'm an <strong className="font-semibold">AI researcher</strong> and <strong className="font-semibold">founder</strong> building intelligent systems at the intersection of machine learning, 
        human-computer interaction, and infrastructure. Currently a senior at <strong className="font-semibold">NYU</strong> with 
        research spanning <strong className="font-semibold">recommendation systems, computer vision, NLP, and quantum computing</strong>.
      </p>

      <p>
        My research is guided by mentors including{" "}
        <a
          href="https://whongyi.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:no-underline transition-smooth decoration-foreground/40 hover:decoration-foreground/60"
        >
          Prof. Hongyi Wen
        </a>
        {" "}(NYU MAPS Lab),{" "}
        <a
          href="https://www.di.ens.fr/~ponce/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:no-underline transition-smooth decoration-foreground/40 hover:decoration-foreground/60"
        >
          Prof. Jean Ponce
        </a>
        {" "}(ENS Paris), and{" "}
        <a
          href="https://www.umarsaif.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:no-underline transition-smooth decoration-foreground/40 hover:decoration-foreground/60"
        >
          Dr. Umar Saif
        </a>
        . I've published research on multimodal learning systems and quantum game theory, 
        with work appearing at top-tier venues.
      </p>

      <p>
        As a <strong className="font-semibold">founder</strong>, I've built production ML systems at VC-backed startups and Fortune 500 companies, 
        scaling recommendation engines and deploying real-time inference infrastructure. 
        Currently building AI/ML systems at a VC-backed startup (Gobi Partners portfolio) and contributing to 
        quantum computing research under{" "}
        <a
          href="https://shanghai.nyu.edu/academics/faculty/directory/tim-byrnes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:no-underline transition-smooth decoration-foreground/40 hover:decoration-foreground/60"
        >
          Prof. Tim Byrnes
        </a>
        . Bridging the gap between cutting-edge research and scalable production systems.
      </p>
    </div>
  );
}
