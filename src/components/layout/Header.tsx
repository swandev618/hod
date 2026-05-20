"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "인연의 집 소개", href: "/about" },
  { label: "서비스", href: "/service" },
  { label: "이용 안내", href: "/process" },
  { label: "이벤트", href: "/event" },
  { label: "스토리", href: "/about/story" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-wide flex items-center justify-between h-20 pr-3 md:pr-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/3ybYqRsq/logo-gold.png"
              alt="인연의집 로고"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold",
                  scrolled ? "text-charcoal" : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded border transition-colors",
                scrolled
                  ? "border-charcoal/20 text-charcoal hover:border-gold hover:text-gold"
                  : "border-white/40 text-white hover:border-white"
              )}
            >
              로그인
            </Link>
            <Link
              href="/consultation"
              className="px-5 py-2 text-sm font-medium rounded bg-gold text-white hover:bg-gold-dark transition-colors"
            >
              상담 신청
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileNavOpen(true)}
            aria-label="메뉴 열기"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block w-6 h-0.5 transition-colors",
                  scrolled ? "bg-charcoal" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-colors",
                  scrolled ? "bg-charcoal" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block w-4 h-0.5 transition-colors",
                  scrolled ? "bg-charcoal" : "bg-white"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      <MobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        items={navItems}
      />
    </>
  );
}
