import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        hover ? "glass-card-hover" : "glass-card",
        className
      )}
    >
      {children}
    </div>
  );
};
