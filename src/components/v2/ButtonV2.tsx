import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonV2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "navy";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const variantMap = {
  primary:
    "v2-btn-shimmer bg-gradient-to-r from-v2-accent-blue to-v2-accent-teal text-white shadow-[0_8px_24px_rgba(0,191,165,0.22)] hover:shadow-[0_14px_36px_rgba(0,191,165,0.34)] hover:-translate-y-0.5 active:scale-[0.97]",
  secondary:
    "bg-v2-ink-heading text-white hover:bg-v2-ink-heading/90 shadow-[0_4px_16px_rgba(10,35,66,0.18)] active:scale-[0.97]",
  navy:
    "bg-v2-ink-heading text-white hover:bg-v2-ink-heading/90 shadow-[0_4px_16px_rgba(10,35,66,0.18)] hover:-translate-y-0.5 active:scale-[0.97]",
  outline:
    "border border-v2-border-medium text-v2-ink-heading bg-white/60 backdrop-blur hover:bg-white hover:border-v2-accent-teal/60 hover:-translate-y-0.5 active:scale-[0.97]",
  ghost:
    "text-v2-ink-heading hover:bg-v2-ink-heading/5 active:scale-[0.97]",
};

const sizeMap = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-13 px-7 py-3.5 text-base",
};

export const ButtonV2 = forwardRef<HTMLButtonElement, ButtonV2Props>(
  ({ asChild = false, className, variant = "primary", size = "md", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-lato font-semibold transition-[transform,box-shadow,background-color,border-color,opacity] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-v2-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-v2-surface disabled:opacity-50",
          variantMap[variant],
          sizeMap[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ButtonV2.displayName = "ButtonV2";

export default ButtonV2;
