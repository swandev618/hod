"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { Headphones, ArrowRight, Shield, UserCheck, Heart, Award } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  { id: "all", label: "전체" },
  { id: "join", label: "가입" },
  { id: "matching", label: "매칭" },
  { id: "cost", label: "비용" },
  { id: "security", label: "보안" },
  { id: "event", label: "이벤트" },
];

const faqItems = [
  {
    id: "1",
    category: "join",
    question: "가입 절차는 어떻게 되나요?",
    answer: "상담 신청 후 전담 매니저가 배정되며, 성향 및 가치관 분석 후 맞춤 매칭이 진행됩니다.",
  },
  {
    id: "2",
    category: "join",
    question: "가입 조건이 있나요?",
    answer: "만 20세 이상의 미혼 남녀로, 진정한 만남을 원하시는 분이라면 누구나 가입 가능합니다. 신원 확인 및 기본 인증 절차가 진행됩니다.",
  },
  {
    id: "3",
    category: "matching",
    question: "어떤 기준으로 매칭이 이루어지나요?",
    answer: "128개 세부 항목의 가치관 분석을 기반으로, AI 매칭 알고리즘과 전문 컨설턴트의 검토를 거쳐 최적의 인연을 추천합니다.",
  },
  {
    id: "4",
    category: "matching",
    question: "단순 조건 매칭과 무엇이 다른가요?",
    answer: "학력, 직업 등 외적 조건뿐 아니라 라이프스타일, 가치관, 소통 방식 등 내면적 호환성을 깊이 분석하여 장기적으로 행복한 관계를 설계합니다.",
  },
  {
    id: "5",
    category: "cost",
    question: "비용은 어떻게 구성되나요?",
    answer: "선불(무제한 매칭, 400만원)과 후불(건별 1회 소개, 20만원) 두 가지 방식이 있습니다. 자세한 내용은 상담을 통해 안내드립니다.",
  },
  {
    id: "6",
    category: "cost",
    question: "환불이 가능한가요?",
    answer: "서비스 이용 전 환불은 전액 가능하며, 이용 후에는 약관에 따라 잔여 기간 기준으로 환불이 진행됩니다.",
  },
  {
    id: "7",
    category: "security",
    question: "개인정보는 안전하게 보호되나요?",
    answer: "회원님의 모든 정보는 암호화 처리되며, 비공개 시스템으로 운영됩니다. 매칭 목적 외 사용은 절대 불가합니다.",
  },
  {
    id: "8",
    category: "security",
    question: "회원 정보는 검증되나요?",
    answer: "학력, 직업, 신원 등의 정보는 서류 인증과 자체 검증 시스템을 통해 철저히 확인합니다.",
  },
  {
    id: "9",
    category: "event",
    question: "오프라인 이벤트는 누구나 참여 가능한가요?",
    answer: "인연의 집 정회원에게 우선 참여 기회가 제공되며, 일부 이벤트는 비회원도 참여 가능합니다.",
  },
  {
    id: "10",
    category: "event",
    question: "데일리 미션은 왜 필요한가요?",
    answer: "매일의 작은 활동을 통해 프로필을 활성화하고, 매칭 정확도를 높이며, 리워드 포인트로 다양한 혜택을 받을 수 있습니다.",
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              FAQ
            </span>
            <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              궁금한 점을<br />미리 안내드립니다
            </h1>
            <p className="mt-4 text-muted max-w-lg">
              인연의 집은 신뢰를 기반으로 운영됩니다.
              자주 묻는 질문을 통해 궁금증을 해결해보세요.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-narrow">
          <Tabs
            tabs={faqCategories}
            defaultTab="all"
            onChange={setActiveCategory}
            className="justify-center"
          />
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container-narrow max-w-3xl">
          <ScrollReveal>
            <Accordion items={filteredFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-16 bg-cream">
        <div className="container-narrow max-w-3xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cream">
                <Headphones size={24} className="text-gold" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-semibold text-charcoal text-lg">
                  아직 궁금한 점이 있으신가요?
                </h3>
                <p className="text-sm text-muted mt-1">
                  전담 매니저가 직접 안내해드립니다.
                </p>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
              >
                나에게 맞는 인연 상담 받기 <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "100% 비공개 원칙", description: "모든 정보는 철저히 비공개로 관리됩니다." },
              { icon: UserCheck, label: "신원 철저 검증", description: "엄격한 검증 시스템으로 안심할 수 있습니다." },
              { icon: Heart, label: "전담 매니저 1:1 관리", description: "회원님의 성향에 맞는 맞춤 케어를 제공합니다." },
              { icon: Award, label: "성혼 후에도 지속 관리", description: "인연이 시작된 후에도 지속적인 관계 관리를 지원합니다." },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
                <div className="text-center">
                  <item.icon size={20} className="mx-auto text-gold mb-2" />
                  <h4 className="text-xs font-semibold text-charcoal">{item.label}</h4>
                  <p className="text-[11px] text-muted mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
