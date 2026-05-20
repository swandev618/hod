"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "가치관 중심\n매칭 시스템",
    description: "서로의 가치를 존중하고, 인생의 중요한 선택을 함께할 수 있는 사람을 찾아드립니다.",
    href: "/service#values",
  },
  {
    number: "02",
    title: "MBTI\n무료 성향 테스트",
    description: "MBTI 기반으로 당신과 가장 잘 맞는 사람을 찾아드립니다.",
    href: "/service#mbti",
  },
  {
    number: "03",
    title: "사주 &\n궁합 분석",
    description: "사주와 궁합 분석으로 더 깊이 있는 인연을 연결합니다.",
    href: "/service#saju",
  },
  {
    number: "04",
    title: "큐레이팅\n데이트",
    description: "단순한 만남이 아닌, 특별한 경험으로 관계를 시작하세요.",
    href: "/service#curating",
  },
];

export function ServicePreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionTitle
            label="OUR SERVICE"
            title="왜 인연의 집인가?"
            description="단순한 만남이 아닌, 인생의 방향이 맞는 사람을 연결합니다."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group block bg-white border border-border rounded-2xl p-8 hover:border-gold/30 hover:shadow-md transition-all"
              >
                <span className="text-3xl font-serif text-gold/40 font-bold">
                  {service.number}
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-charcoal whitespace-pre-line leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기 <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
