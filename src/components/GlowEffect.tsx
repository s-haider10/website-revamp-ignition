import { ReactNode } from "react";

interface GlowEffectProps {
  children: ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

const GlowEffect = ({
  children,
  className = "",
  intensity = "medium",
}: GlowEffectProps) => {
  const intensityClasses = {
    low: "hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]",
    medium: "hover:shadow-[0_0_30px_rgba(148,163,184,0.4)]",
    high: "hover:shadow-[0_0_40px_rgba(148,163,184,0.5)]",
  };

  return (
    <div
      className={`transition-all duration-300 ${intensityClasses[intensity]} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowEffect;

