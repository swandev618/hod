import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* CEO Message */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              CEO MESSAGE
            </span>
            <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              &ldquo;가장 인간적인 인연을<br />설계해 드리겠습니다.&rdquo;
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-lg">
              <p className="text-muted leading-relaxed">
                안녕하세요, 인연의 집 신보경 대표입니다.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                단순한 조건의 나열은 결코 장기적인 행복을 보장하지 못합니다.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                인연의 집은 사람을 &lsquo;스펙&rsquo;이 아닌 &lsquo;삶의 방향&rsquo;으로 연결합니다.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                데이터와 검증 위에 감정과 신뢰를 더해 당신의 인생의 가장 중요한 선택을 함께 설계합니다.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <span className="text-charcoal font-medium">인연의 집 대표</span>
                <span className="font-serif text-xl text-gold italic">신보경</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Inyeon House */}
      <section className="py-24 bg-dark">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionTitle
              label="WHY INYEON HOUSE"
              title="조건을 넘어, 관계의 본질을 설계합니다."
              dark
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Expertise",
                title: "조건을 넘는 '사람 이해'의 전문성",
                description: "인연의 집은 단순한 학력, 직업, 소득 매칭이 아니라 사람을 이해하는 가슴에서 시작됩니다.",
              },
              {
                label: "Credibility",
                title: "시스템이 아닌 '태도'에서 시작되는 신뢰",
                description: "인연의 집의 신뢰는 고객을 대하는 태도와 경험의 일관성에서 만들어집니다.",
              },
              {
                label: "Efficiency",
                title: "빠른 매칭이 아니라, 실패없는 매칭",
                description: "인연의 집의 효율성은 '얼마나 빨리 만나게 하느냐'가 아니라 '얼마나 덜 실패하게 하느냐'에 있습니다.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="border border-white/10 rounded-2xl p-6">
                  <span className="text-xs italic text-gold font-serif">{item.label}</span>
                  <h3 className="mt-2 font-semibold text-white text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to sub pages */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/about/story"
              className="group flex items-center justify-between p-6 bg-white border border-border rounded-2xl hover:border-gold/30 transition-colors"
            >
              <div>
                <span className="text-xs text-gold uppercase tracking-wider">Videos</span>
                <h3 className="mt-1 font-semibold text-charcoal">브랜드 스토리 영상</h3>
              </div>
              <ArrowRight size={16} className="text-muted group-hover:text-gold transition-colors" />
            </Link>
            <Link
              href="/about/news"
              className="group flex items-center justify-between p-6 bg-white border border-border rounded-2xl hover:border-gold/30 transition-colors"
            >
              <div>
                <span className="text-xs text-gold uppercase tracking-wider">News</span>
                <h3 className="mt-1 font-semibold text-charcoal">뉴스 업데이트</h3>
              </div>
              <ArrowRight size={16} className="text-muted group-hover:text-gold transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
