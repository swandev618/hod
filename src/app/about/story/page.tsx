"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Play, ArrowRight } from "lucide-react";

const videoCategories = [
  { id: "all", label: "전체" },
  { id: "brand", label: "브랜드 스토리" },
  { id: "matching", label: "매칭 스토리" },
  { id: "event", label: "이벤트 현장" },
  { id: "expert", label: "전문가 인터뷰" },
  { id: "guide", label: "가이드 영상" },
];

const videos = [
  {
    id: 1,
    category: "brand",
    title: "인연의 집이 추구하는 가치",
    description: "단순한 만남이 아닌, 인생의 방향을 함께하는 관계 인연의 집의 철학을 영상에 담았습니다.",
    date: "2024.05.20",
    duration: "02:15",
  },
  {
    id: 2,
    category: "matching",
    title: "진정성 있는 만남을 위한 우리의 약속",
    description: "검증된 시스템과 사람 중심의 매칭 철학을 영상을 통해 확인하세요.",
    date: "2024.04.12",
    duration: "01:48",
  },
  {
    id: 3,
    category: "expert",
    title: "심리 전문가가 말하는 건강한 관계",
    description: "관계 심리 전문가가 전하는 건강한 관계를 위한 인사이트를 지금 만나보세요.",
    date: "2024.04.28",
    duration: "03:12",
  },
];

export default function StoryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white italic">
              VIDEOS
            </h1>
            <p className="mt-4 text-white/70">
              인연의 집의 철학과 진정성 있는 이야기를 영상으로 만나보세요.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-narrow">
          <Tabs
            tabs={videoCategories}
            defaultTab="all"
            onChange={setActiveCategory}
            className="justify-center"
          />
        </div>
      </section>

      {/* Video List */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="space-y-8">
            {filteredVideos.map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 0.05}>
                <div className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                  <div className="w-full md:w-96 flex-shrink-0 aspect-video bg-charcoal/5 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="text-charcoal ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gold uppercase font-medium tracking-wider">
                        {videoCategories.find((c) => c.id === video.category)?.label}
                      </span>
                      <span className="text-xs text-muted">{video.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {video.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted group-hover:text-gold transition-colors">
                      영상 보기 <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-charcoal rounded-full text-sm font-medium hover:border-gold hover:text-gold transition-colors">
              더 많은 영상 보기 <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
