import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  image?: string;
  title: string;
  description?: string;
  badge?: string;
  className?: string;
  variant?: "default" | "dark" | "bordered";
  aspectRatio?: "square" | "video" | "portrait";
  children?: React.ReactNode;
}

export function Card({
  image,
  title,
  description,
  badge,
  className,
  variant = "default",
  aspectRatio = "video",
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl overflow-hidden transition-all duration-300",
        {
          "bg-white shadow-sm hover:shadow-md": variant === "default",
          "bg-dark text-white": variant === "dark",
          "border border-border bg-white hover:border-gold/30": variant === "bordered",
        },
        className
      )}
    >
      {image && (
        <div
          className={cn("relative overflow-hidden", {
            "aspect-square": aspectRatio === "square",
            "aspect-video": aspectRatio === "video",
            "aspect-[3/4]": aspectRatio === "portrait",
          })}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-gold text-white rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        <h3
          className={cn(
            "font-semibold text-lg",
            variant === "dark" ? "text-white" : "text-charcoal"
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              variant === "dark" ? "text-white/70" : "text-muted"
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
