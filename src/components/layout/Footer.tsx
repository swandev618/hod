import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "이용약관", href: "/terms" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "위치기반서비스 이용약관", href: "/location-terms" },
  { label: "문의하기", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="https://i.ibb.co/3ybYqRsq/logo-gold.png"
                alt="인연의집 로고"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-muted space-y-1">
            <p>서울특별시 강남구 테헤란로 123, 12층 (역삼동)</p>
            <p>
              <span>02-123-4567</span>
              <span className="mx-2">|</span>
              <span>inyeonhouse@inyeon.com</span>
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} 인연의 집. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-gold hover:border-gold transition-colors"
              aria-label="Instagram"
            >
              <Camera size={16} />
            </a>
            <a
              href="https://blog.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-gold hover:border-gold transition-colors text-xs font-bold"
              aria-label="Blog"
            >
              B
            </a>
            <a
              href="https://pf.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-gold hover:border-gold transition-colors"
              aria-label="KakaoTalk"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
