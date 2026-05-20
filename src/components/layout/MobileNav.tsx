"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-dark"
        >
          <div className="flex flex-col h-full px-6 py-8">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-gold">
                인연의 집
              </span>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white"
                aria-label="메뉴 닫기"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-2xl font-medium text-white hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={onClose}
                className="w-full py-3 text-center text-sm font-medium rounded-full border border-white/30 text-white hover:border-gold hover:text-gold transition-colors"
              >
                로그인
              </Link>
              <Link
                href="/consultation"
                onClick={onClose}
                className="w-full py-3 text-center text-sm font-medium rounded-full bg-gold text-white hover:bg-gold-dark transition-colors"
              >
                상담 신청
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
