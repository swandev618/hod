"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const newsCategories = [
  { id: "all", label: "전체" },
  { id: "notice", label: "공지" },
  { id: "update", label: "업데이트" },
  { id: "event", label: "이벤트" },
];

const featuredNews = {
  category: "event",
  categoryLabel: "EVENT",
  date: "2024.05.20",
  title: "프라이빗 파티 오픈 안내",
  description: "인연의 집만의 프라이빗 매칭 파티가 5월 25일 진행됩니다. 진정성 있는 만남의 자리에 초대합니다.",
};

const newsList = [
  {
    id: 1,
    category: "notice",
    categoryLabel: "공지",
    date: "2024.05.15",
    title: "5월 휴무 및 상담 일정 안내",
    description: "5월 휴무 일정과 상담 가능 시간을 안내드립니다. 이용에 참고 부탁드립니다.",
  },
  {
    id: 2,
    category: "update",
    categoryLabel: "업데이트",
    date: "2024.05.10",
    title: "매칭 시스템 고도화 업데이트",
    description: "더 정교하고 행복한 만남을 위해 매칭 시스템이 업그레이드 되었습니다.",
  },
  {
    id: 3,
    category: "event",
    categoryLabel: "이벤트",
    date: "2024.05.02",
    title: "5월 특별 이벤트 안내",
    description: "가정의 달 5월, 특별한 혜택과 이벤트를 준비했습니다.",
  },
  {
    id: 4,
    category: "notice",
    categoryLabel: "뉴스",
    date: "2024.04.28",
    title: "인연의 집 강남 라운지 확장 이전",
    description: "더 프라이빗하고 쾌적한 공간에서 회원님들을 모시겠습니다.",
  },
  {
    id: 5,
    category: "update",
    categoryLabel: "업데이트",
    date: "2024.04.20",
    title: "회원 데이터 분석 리포트 공개",
    description: "2024년 상반기 회원 데이터 분석 리포트를 공개합니다.",
  },
  {
    id: 6,
    category: "notice",
    categoryLabel: "공지",
    date: "2024.04.15",
    title: "상담 예약 시스템 변경 안내",
    description: "보다 편리한 상담 이용을 위해 예약 시스템이 변경되었습니다.",
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews =
    activeCategory === "all"
      ? newsList
      : newsList.filter((n) => n.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal italic">
              NEWS UPDATE
            </h1>
            <p className="mt-3 text-muted">
              인연의 집의 새로운 소식과 업데이트를 전해드립니다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-narrow">
          <Tabs
            tabs={newsCategories}
            defaultTab="all"
            onChange={setActiveCategory}
            className="justify-center"
          />
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-80 aspect-video bg-cream-dark rounded-xl flex-shrink-0" />
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="gold">{featuredNews.categoryLabel}</Badge>
                  <span className="text-xs text-muted">{featuredNews.date}</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  {featuredNews.title}
                </h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {featuredNews.description}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-muted hover:text-gold transition-colors"
                >
                  자세히 보기 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 pb-24">
        <div className="container-narrow">
          <h2 className="font-semibold text-xl text-charcoal mb-6">최신 뉴스</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNews.map((news, i) => (
              <ScrollReveal key={news.id} delay={i * 0.05}>
                <Link
                  href="#"
                  className="group block bg-white border border-border rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <div className="aspect-video bg-cream-dark relative">
                    <Badge className="absolute top-3 left-3">{news.categoryLabel}</Badge>
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-muted bg-white/80 px-2 py-0.5 rounded">
                      <Calendar size={10} />
                      {news.date}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-charcoal group-hover:text-gold transition-colors">
                      {news.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-2">
                      {news.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted group-hover:text-gold">
                      자세히 보기 <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full text-sm font-medium ${
                  page === 1
                    ? "bg-charcoal text-white"
                    : "text-muted hover:text-gold"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
