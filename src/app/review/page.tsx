"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Tabs } from "@/components/ui/Tabs";
import { Star, ChevronLeft, ChevronRight, Users, Heart, Calendar, RotateCcw } from "lucide-react";
import Link from "next/link";

const reviewCategories = [
  { id: "all", label: "전체" },
  { id: "values", label: "가치관 매칭" },
  { id: "mbti", label: "MBTI 매칭" },
  { id: "saju", label: "사주 매칭" },
  { id: "date", label: "데이트 후기" },
  { id: "proposal", label: "프로포즈 후기" },
];

const reviews = [
  {
    id: 1,
    category: "values",
    quote: "이런 매칭은 처음이에요",
    content: "자연스럽게 대화가 이어지고, 공통점이 정말 많았어요. 좋은 인연을 만나게 해주셔서 감사합니다.",
    age: "30세",
    job: "직장인",
    rating: 5,
  },
  {
    id: 2,
    category: "values",
    quote: "가치관이 맞는게 이렇게 중요한지 몰랐어요",
    content: "연애할 때마다 반복되던 문제들이 이번엔 정말 달라졌어요. 진짜 제 사람을 만난 느낌이에요.",
    age: "29세",
    job: "디자이너",
    rating: 5,
  },
  {
    id: 3,
    category: "mbti",
    quote: "부담 없이 만났는데 계속 보고 싶어졌어요",
    content: "억지스럽지 않고, 서로를 존중하는 분위기가 너무 마음에 들었어요.",
    age: "33세",
    job: "사업가",
    rating: 5,
  },
  {
    id: 4,
    category: "proposal",
    quote: "인연의 집 선택하길 정말 잘했어요",
    content: "담당 매니저님이 제 성향을 너무 잘 이해해주셔서 믿음이 갔어요. 지금은 행복하게만 하고 있습니다!",
    age: "31세",
    job: "공무원",
    rating: 5,
  },
];

const stats = [
  { icon: Users, value: 1286, label: "누적 성혼 회원 수", suffix: "명" },
  { icon: Heart, value: 78, label: "만족도", suffix: "%" },
  { icon: Calendar, value: 3.6, label: "평균 교제 기간", suffix: "개월", isDecimal: true },
  { icon: RotateCcw, value: 92, label: "재이용 의사", suffix: "%" },
];

export default function ReviewPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredReviews =
    activeCategory === "all"
      ? reviews
      : reviews.filter((r) => r.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              REAL REVIEW
            </span>
            <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              조건이 아니라,<br />
              <span className="text-gold">사람</span>을 만났습니다
            </h1>
            <p className="mt-4 text-muted">
              인연의 집을 통해 시작된 실제 이야기
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-24">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="bg-cream rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <blockquote className="font-serif text-2xl md:text-3xl font-bold text-charcoal leading-snug">
                  &ldquo;소개팅이랑<br />완전히 달랐어요&rdquo;
                </blockquote>
                <p className="mt-4 text-muted leading-relaxed">
                  처음부터 편안했고, 억지로 맞추는 느낌이 아니라 자연스럽게 이어졌어요.
                  이 사람이라면 괜찮겠다라는 생각이 들었습니다.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm text-charcoal font-medium">32세 / 직장인</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 bg-cream-dark rounded-2xl flex items-center justify-center">
                <span className="text-muted text-sm">회원 사진</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-12">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
              회원들의 진솔한 이야기
            </h2>
            <Tabs
              tabs={reviewCategories}
              defaultTab="all"
              onChange={setActiveCategory}
            />
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredReviews.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 0.05}>
                <div className="bg-white border border-border rounded-2xl p-5 h-full hover:border-gold/30 transition-colors">
                  <blockquote className="font-semibold text-charcoal text-sm leading-snug">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-muted leading-relaxed">
                    {review.content}
                  </p>
                  <div className="mt-4 flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={10} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted">
                    {review.age} / {review.job}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-cream">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <stat.icon size={24} className="mx-auto text-gold mb-3" />
                  <span className="text-3xl font-bold text-charcoal">
                    {stat.isDecimal ? (
                      stat.value.toString()
                    ) : (
                      <AnimatedCounter end={stat.value as number} />
                    )}
                    <span className="text-lg text-muted font-normal">{stat.suffix}</span>
                  </span>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">
              인연의 집을 만나고 달라진 이야기
            </h2>
            <p className="text-sm text-muted mb-8">
              단순한 만남이 아닌, 삶의 방향이 함께 맞는 인연을 만나 회원님들의 변화를 확인해보세요.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-semibold text-charcoal mb-4">BEFORE</h3>
                <ul className="space-y-2">
                  {[
                    "소개팅 번복과 실패",
                    "조건 중심의 피로한 만남",
                    "관계가 오래가지 않음",
                    "미래가 보이지 않는 시간들",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-gold/5 border border-gold/20 rounded-2xl p-6">
                <h3 className="font-semibold text-gold mb-4">AFTER</h3>
                <ul className="space-y-2">
                  {[
                    "자연스럽고 편안한 만남",
                    "가치관 중심의 깊은 연결",
                    "서로를 이해하고 존중하는 관계",
                    "함께하는 미래가 기대되는 시간",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
              당신의 이야기로<br />다음 리뷰의 주인공이 되어보세요
            </h2>
            <Link
              href="/consultation"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
            >
              무료 상담 신청하기 <ChevronRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
