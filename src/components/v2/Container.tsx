import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export const Container = ({ className, size = "default", ...props }: ContainerProps) => {
  const maxWidth = {
    narrow: "max-w-[880px]",
    default: "max-w-[1200px]",
    wide: "max-w-[1320px]",
  }[size];

  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-8 lg:px-12", maxWidth, className)}
      {...props}
    />
  );
};

export default Container;
