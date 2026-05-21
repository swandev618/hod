"use client";

import { Users, Heart, Gem, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 45229, suffix: "+", label: "총 회원 수" },
  { icon: Heart, value: 85, suffix: "%", label: "매칭 성공률" },
  { icon: Gem, value: 72, suffix: "%", label: "연애 전환율" },
  { icon: Scale, value: 48, suffix: ":52", label: "남녀 회원 비율" },
];

export function StatsCounter() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                RESULT
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-[2.75rem] font-bold text-charcoal leading-tight">
                Beyond Matching.
                <br />
                Real Connection.
              </h2>
              <div className="mt-8 w-10 h-px bg-charcoal/30" />
              <p className="mt-6 text-muted text-base md:text-lg leading-relaxed">
                인연의 집은 결과로 증명합니다.
                <br />
                데이터가 증명하는 실제 인연의 가치
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Vertical Stats */}
          <div className="space-y-8 md:space-y-10">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.12}>
                <div className="flex items-center gap-5 md:gap-7">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center rounded-full border border-gold/40">
                    <stat.icon
                      size={24}
                      strokeWidth={1.4}
                      className="text-gold"
                    />
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </span>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
