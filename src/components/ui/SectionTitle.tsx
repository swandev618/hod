import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  className,
  dark,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "block text-xs uppercase tracking-[0.2em] font-medium mb-3",
            dark ? "text-gold-light" : "text-gold"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight",
          dark ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
