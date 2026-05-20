"use client";

import { Users, Heart, BarChart3, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Users,
    title: "가치관 심층 분석",
    description: "라이프스타일, 인생관, 연애관, 가치관 등 핵심 항목 분석",
  },
  {
    icon: Heart,
    title: "다차원 가치 매칭",
    description: "단순 선호도 매칭이 아닌, 가치관의 일치도와 조화도를 정밀하게 분석",
  },
  {
    icon: BarChart3,
    title: "검증된 데이터 기반",
    description: "축적된 매칭 데이터를 기반으로 정확도 높은 추천 제공",
  },
  {
    icon: ShieldCheck,
    title: "전문 컨설턴트 검토",
    description: "AI 분석 결과를 전문 컨설턴트가 최종 검토하여 신뢰도 강화",
  },
];

export function WhyInyeonSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionTitle
            label="WHY INYEON HOUSE"
            title="왜 인연의 집인가?"
            description="단순한 만남이 아닌, 인생의 방향이 맞는 사람을 연결합니다. 과학적인 분석과 인간적인 섬세함으로, 진정성 있는 인연을 만들어갑니다."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gold/10 text-gold mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-semibold text-charcoal text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
