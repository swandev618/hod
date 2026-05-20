"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { ArrowRight, Heart, Compass, Star, Wine } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "values", label: "가치관 매칭" },
  { id: "mbti", label: "MBTI 테스트" },
  { id: "saju", label: "사주 & 궁합" },
  { id: "curating", label: "큐레이팅 데이트" },
];

const valueItems = [
  { category: "연애관", count: 24 },
  { category: "결혼관", count: 28 },
  { category: "가족관", count: 22 },
  { category: "경제관", count: 32 },
  { category: "미래관", count: 22 },
];

const matchingFactors = [
  { label: "소비 성향", percent: 90 },
  { label: "저축 및 투자 성향", percent: 85 },
  { label: "재정 목표", percent: 88 },
  { label: "경제적 가치관", percent: 95 },
  { label: "부채에 대한 인식", percent: 92 },
];

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState("values");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              OUR SERVICE
            </span>
            <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              데이터와 전문가의 안목으로<br />
              당신의 <span className="text-gold">인연</span>을 설계합니다.
            </h1>
            <p className="mt-4 text-muted max-w-xl">
              조건만 보는 만남이 아닌, 가치관과 성향, 운명까지 다각도로 분석하여 인생의 동반자를 찾을 수 있도록 돕습니다.
            </p>
            <Link
              href="/consultation"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-charcoal/20 text-charcoal rounded-full text-sm font-medium hover:border-gold hover:text-gold transition-colors"
            >
              상담 신청하기 <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 border-b border-border">
        <div className="container-narrow">
          <Tabs
            tabs={categories}
            defaultTab="values"
            onChange={setActiveTab}
            className="justify-center"
          />
        </div>
      </section>

      {/* Value Matching Section */}
      {activeTab === "values" && (
        <section className="py-24">
          <div className="container-narrow">
            <ScrollReveal>
              <SectionTitle
                label="01"
                title="가치관 매칭의 과학"
                description="겉으로 보이는 조건이 아닌, 삶의 방향과 현실적인 가치관이 일치하는지 128개 세부 항목으로 정밀하게 분석합니다."
                align="left"
              />
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="bg-cream rounded-2xl p-8">
                  <h3 className="font-semibold text-lg text-charcoal mb-6">
                    가치관 분석 리포트 예시
                  </h3>
                  <div className="space-y-4">
                    {matchingFactors.map((factor) => (
                      <div key={factor.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-charcoal">{factor.label}</span>
                          <span className="text-gold font-semibold">{factor.percent}%</span>
                        </div>
                        <div className="h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gold rounded-full transition-all duration-1000"
                            style={{ width: `${factor.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                    128개 세부 항목 예시
                  </h4>
                  <p className="text-sm text-muted mb-6">
                    다섯 가지 가치관 영역에서 세부적으로 분석합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {valueItems.map((item) => (
                      <div
                        key={item.category}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm"
                      >
                        <Heart size={14} className="text-gold" />
                        <span className="text-charcoal">{item.category}</span>
                        <span className="text-muted">({item.count})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* MBTI Section */}
      {activeTab === "mbti" && (
        <section className="py-24">
          <div className="container-narrow">
            <ScrollReveal>
              <SectionTitle
                label="02"
                title="MBTI 무료 성향 테스트"
                description="MBTI 기반으로 당신과 가장 잘 맞는 사람을 찾아드립니다."
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-12 bg-white border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Compass size={28} className="text-gold" />
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      성향 · 연애 스타일 · 소통 방식 분석
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">
                    MBTI를 기반으로 성향과 연애 스타일, 소통 방식까지 분석하여
                    가장 잘 맞는 상대를 찾아드립니다.
                  </p>
                  <Link
                    href="/service/mbti-test"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold rounded-full text-sm font-medium hover:bg-gold hover:text-white transition-colors"
                  >
                    무료 테스트 <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="w-40 h-40 rounded-full border-4 border-cream flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-serif font-bold text-gold">MBTI</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Saju Section */}
      {activeTab === "saju" && (
        <section className="py-24">
          <div className="container-narrow">
            <ScrollReveal>
              <SectionTitle
                label="03"
                title="사주 & 궁합 분석"
                description="사주와 궁합 분석으로 더 깊이 있는 인연을 연결합니다."
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-12 bg-white border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Star size={28} className="text-gold" />
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      궁합 · 연애 흐름 · 결혼 가능성 분석
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">
                    과학적 분석과 전통적 지혜의 만남으로,
                    더 정확하고 깊이 있는 인연을 만듭니다.
                  </p>
                  <Link
                    href="/service/saju"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold rounded-full text-sm font-medium hover:bg-gold hover:text-white transition-colors"
                  >
                    무료 사주 상담 <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Curating Date Section */}
      {activeTab === "curating" && (
        <section className="py-24">
          <div className="container-narrow">
            <ScrollReveal>
              <SectionTitle
                label="04"
                title="큐레이팅 데이트"
                description="단순한 만남이 아닌, 특별한 경험으로 관계를 시작하세요."
                align="left"
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["HOTEL", "NIGHT", "DINING", "TRAVEL"].map((category, i) => (
                <ScrollReveal key={category} delay={i * 0.1}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Wine size={16} className="text-gold mb-2" />
                      <span className="block text-white font-serif text-lg font-bold uppercase">
                        {category}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
