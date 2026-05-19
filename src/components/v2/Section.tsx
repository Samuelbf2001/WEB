import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  surface?: "default" | "alt" | "cream" | "white" | "navy-mist" | "teal-mist" | "sand-mist" | "navy-dark";
  size?: "default" | "compact" | "spacious";
  eyebrow?: string;
}

const surfaceMap = {
  default: "bg-v2-surface",
  alt: "bg-v2-surface-alt",
  cream: "bg-v2-surface-cream",
  white: "bg-v2-surface-white",
  "navy-mist": "bg-v2-surface-navy-mist",
  "teal-mist": "bg-v2-surface-teal-mist",
  "sand-mist": "bg-v2-surface-sand-mist",
  "navy-dark": "bg-v2-ink-heading text-v2-ink-inverse",
};

const sizeMap = {
  compact: "py-16 md:py-20",
  default: "py-20 md:py-28 lg:py-32",
  spacious: "py-24 md:py-32 lg:py-40",
};

export const Section = ({
  className,
  surface = "default",
  size = "default",
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(surfaceMap[surface], sizeMap[size], "relative", className)}
      {...props}
    >
      {children}
    </section>
  );
};

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "teal" | "navy" | "sand";
}

export const Eyebrow = ({ children, className, variant = "teal" }: EyebrowProps) => {
  const colorMap = {
    teal: "text-v2-accent-teal-deep",
    navy: "text-v2-accent-blue",
    sand: "text-[#8a7a4f]",
  };
  return (
    <span
      className={cn(
        "inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em]",
        colorMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Section;
