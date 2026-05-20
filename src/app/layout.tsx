import type { Metadata } from "next";
import { playfair, pretendard } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ConsultationBar } from "@/components/ui/ConsultationBar";
import { CtaProvider } from "@/context/CtaContext";
import { DevToolsGuard } from "@/components/DevToolsGuard";
import "./globals.css";

export const metadata: Metadata = {
  title: "인연의 집 | PRIVATE MATCHMAKING",
  description:
    "프라이빗 매칭으로 만나는 특별한 인연. 가치관 중심 매칭 시스템으로 진정성 있는 인연을 만들어갑니다.",
  keywords: ["매칭", "결혼정보회사", "프라이빗 매칭", "인연의 집", "가치관 매칭"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${playfair.variable} ${pretendard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <DevToolsGuard />
        <CtaProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <ConsultationBar />
        </CtaProvider>
      </body>
    </html>
  );
}
