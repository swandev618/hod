"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    quote: "처음에는 반신반의했지만, 진심으로 저를 이해해주는 사람을 만나 지금은 하루하루가 너무 행복합니다.",
    age: "31세 남성 회원",
    partner: "29세 여성 회원",
    duration: "교제 8개월 만에 성혼",
    rating: 5,
  },
  {
    id: 2,
    quote: "여기서는 정말 진지한 분들만 있어서 더 믿음이 갔어요. 덕분에 평생 함께할 사람을 만났습니다.",
    age: "35세 여성 회원",
    partner: "37세 남성 회원",
    duration: "교제 6개월 만에 성혼",
    rating: 5,
  },
  {
    id: 3,
    quote: "섬세한 매칭과 꾸준한 관리 덕분에 좋은 인연을 만날 수 있었어요. 정말 감사합니다.",
    age: "33세 남성 회원",
    partner: "30세 여성 회원",
    duration: "교제 10개월 만에 성혼",
    rating: 5,
  },
];

export function ReviewCarousel() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionTitle
            label="REAL STORIES"
            title="진짜 인연이 만들어낸 이야기"
            description="우연의 집에서 시작된 행복한 결실, 회원님들의 진솔한 후기를 만나보세요."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-12 !pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm text-charcoal leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted">
                      {review.age} ♥ {review.partner}
                    </p>
                    <p className="text-xs text-gold font-medium mt-1">
                      {review.duration}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
