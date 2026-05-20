"use client";

import { Users, Heart, Gem, Scale } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { icon: Users, value: 45229, suffix: "+", label: "총 회원 수" },
  { icon: Heart, value: 85, suffix: "%", label: "매칭 성공률" },
  { icon: Gem, value: 72, suffix: "%", label: "연애 전환율" },
  { icon: Scale, value: 48, suffix: ":52", label: "남녀 회원 비율" },
];

export function StatsCounter() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              RESULT
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-charcoal">
              Beyond Matching.<br />Real Connection.
            </h2>
            <p className="mt-4 text-muted">
              우연의 집은 결과로 증명합니다.<br />
              데이터가 증명하는 실제 인연의 가치
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-cream border border-border">
                  <stat.icon size={22} className="text-gold" />
                </div>
                <div className="mt-4">
                  <span className="text-3xl md:text-4xl font-bold text-charcoal">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
