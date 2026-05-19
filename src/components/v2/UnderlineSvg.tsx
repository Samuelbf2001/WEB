import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface UnderlinedProps {
  children: ReactNode;
  color?: "teal" | "sand" | "blue" | "white";
  className?: string;
  variant?: "underline" | "circle" | "scribble";
}

const colorMap = {
  teal: "stroke-v2-accent-teal",
  sand: "stroke-v2-accent-sand",
  blue: "stroke-v2-accent-blue",
  white: "stroke-white",
};

export const Underlined = ({
  children,
  color = "teal",
  className,
  variant = "underline",
}: UnderlinedProps) => {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className="absolute left-0 right-0 -bottom-1.5 w-full pointer-events-none"
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        height="14"
      >
        {variant === "underline" && (
          <path
            d="M3 10 Q 75 4, 150 8 T 297 9"
            fill="none"
            className={colorMap[color]}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        )}
        {variant === "circle" && (
          <path
            d="M10 8 Q 150 -4, 290 8 Q 150 22, 10 8"
            fill="none"
            className={colorMap[color]}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}
        {variant === "scribble" && (
          <>
            <path
              d="M3 6 Q 75 12, 150 6 T 297 8"
              fill="none"
              className={colorMap[color]}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M5 11 Q 80 7, 155 12 T 295 11"
              fill="none"
              className={cn(colorMap[color], "opacity-50")}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Underlined;
