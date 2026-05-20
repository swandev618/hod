"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCtaState } from "@/context/CtaContext";

const floatingItems = [
  { icon: Calendar, label: "방문예약", href: "#", color: "bg-gold" },
  {
    icon: Phone,
    label: "간편상담",
    href: "tel:02-123-4567",
    color: "bg-charcoal",
  },
  {
    icon: MessageCircle,
    label: "카톡상담",
    href: "https://pf.kakao.com",
    color: "bg-[#FAE100]",
  },
];

export function FloatingButtons() {
  const [expanded, setExpanded] = useState(false);
  const { expanded: ctaExpanded } = useCtaState();

  return (
    <div
      className={cn(
        "fixed right-[30px] z-40 flex flex-col-reverse items-end gap-2 transition-all duration-300",
        ctaExpanded ? "bottom-[300px] md:bottom-[260px]" : "bottom-[80px]",
      )}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-7 h-7 rounded-full shadow-lg flex items-center justify-center transition-all",
          expanded ? "bg-charcoal text-white rotate-180" : "bg-gold text-white",
        )}
        aria-label="빠른 상담"
      >
        <ChevronUp size={14} className="transition-transform" />
      </button>

      <AnimatePresence>
        {expanded &&
          floatingItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-sm font-medium",
                item.color,
                item.color === "bg-[#FAE100]" ? "text-charcoal" : "text-white",
              )}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  );
}
