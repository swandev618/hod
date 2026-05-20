import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "dark" | "success";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
        {
          "bg-cream-dark text-charcoal": variant === "default",
          "bg-gold/10 text-gold": variant === "gold",
          "bg-dark text-white": variant === "dark",
          "bg-green-50 text-green-700": variant === "success",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
