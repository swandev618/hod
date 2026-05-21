"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const valueCards = [
  {
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-9 h-9 text-gold"
      >
        <path d="M20 4v32M4 20h32" strokeLinecap="round" />
        <circle cx="20" cy="12" r="3" />
        <circle cx="20" cy="28" r="3" />
        <path d="M12 16c0-2 2-4 4-4M28 16c0-2-2-4-4-4" strokeLinecap="round" />
        <path d="M10 26l4-2m16 2l-4-2" strokeLinecap="round" />
      </svg>
    ),
    title: "데이트 스타일",
    bullets: ["데이트 횟수 & 시간", "데이트 예산", "데이트 분위기"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-9 h-9 text-gold"
      >
        <path
          d="M6 30l8-8 6 4 8-10 6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="14" r="2" />
        <path d="M20 16v4M18 18h4" strokeLinecap="round" />
        <rect x="4" y="6" width="32" height="28" rx="3" />
      </svg>
    ),
    title: "여행 스타일",
    bullets: ["여행 횟수 / 기간", "여행 방식 (휴양/백패킹)", "선호 여행지"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-9 h-9 text-gold"
      >
        <path d="M20 6c-6 0-10 4-10 8 0 6 10 16 10 16s10-10 10-16c0-4-4-8-10-8z" />
        <circle cx="20" cy="14" r="3" />
        <path d="M14 34h12" strokeLinecap="round" />
      </svg>
    ),
    title: "결혼 가치관",
    bullets: ["결혼 시기", "결혼식 비용 & 규모", "결혼식 장소 신념"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-9 h-9 text-gold"
      >
        <rect x="6" y="8" width="28" height="24" rx="3" />
        <path d="M6 16h28M14 8v-4M26 8v-4" strokeLinecap="round" />
        <path d="M14 22h4M14 28h8" strokeLinecap="round" />
        <circle cx="28" cy="26" r="5" />
        <path d="M26 26h4M28 24v4" strokeLinecap="round" />
      </svg>
    ),
    title: "라이프 & 재정",
    bullets: ["보험 가입 여부", "대출 및 부채 현황", "자산 관리 성향"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-9 h-9 text-gold"
      >
        <circle cx="20" cy="12" r="5" />
        <path d="M12 30c0-4 4-7 8-7s8 3 8 7" strokeLinecap="round" />
        <circle cx="10" cy="16" r="3" />
        <circle cx="30" cy="16" r="3" />
        <path d="M6 28c0-3 2-5 4-5M30 28c0-3 2-5 4-5" strokeLinecap="round" />
      </svg>
    ),
    title: "가족 & 미래",
    bullets: ["자녀 계획", "부모님과의 관계", "미래 라이프 스타일"],
  },
];

const sajuFeatures = [
  { icon: "☯", label: "오행 분석" },
  { icon: "💫", label: "궁합 점수" },
  { icon: "💍", label: "연애&결혼운" },
  { icon: "🔍", label: "상대 성향 분석" },
];

const dateSpots = [
  { src: "/인집_메인화면_이미지/hotel.png", label: "HOTEL" },
  { src: "/인집_메인화면_이미지/brunch.png", label: "BRUNCH" },
  { src: "/인집_메인화면_이미지/dining.png", label: "DINING" },
  { src: "/인집_메인화면_이미지/cafe.png", label: "CAFÉ" },
];

const mbtiTraits = [
  { label: "외향형", value: 75 },
  { label: "직관형", value: 72 },
  { label: "감정형", value: 66 },
  { label: "인식형", value: 71 },
  { label: "탐험형", value: 65 },
];

function MbtiResultCard() {
  return (
    <div className="max-w-[380px] mx-auto rounded-2xl border border-border p-8 md:p-10">
      <div className="text-center mb-6">
        <p className="text-sm text-muted mb-2">당신의 성향 유형</p>
        <h4 className="text-4xl md:text-5xl font-bold text-charcoal font-serif tracking-tight">
          ENFP
        </h4>
        <p className="text-sm text-muted mt-2">재기발랄한 스파크형</p>
      </div>
      <div className="space-y-5">
        {mbtiTraits.map((trait) => (
          <div key={trait.label} className="flex items-center gap-4">
            <span className="text-sm font-medium text-charcoal w-14 shrink-0">
              {trait.label}
            </span>
            <div className="flex-1 h-3 bg-cream-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full"
                style={{ width: `${trait.value}%` }}
              />
            </div>
            <span className="text-sm font-medium text-charcoal w-10 text-right">
              {trait.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CuratingDateCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-2 md:gap-3 h-[320px] md:h-[420px]">
      {dateSpots.map((spot, i) => (
        <div
          key={spot.label}
          className="relative rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-700 ease-in-out"
          style={{ flex: activeIndex === i ? 3 : 1 }}
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <Image
            src={spot.src}
            alt={spot.label}
            fill
            className="object-cover"
          />
          {/* Label */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-semibold tracking-[0.15em] uppercase whitespace-nowrap">
            {spot.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function WhyInyeonSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <ScrollReveal>
          <SectionTitle
            label="WHY INYEON'S HOUSE"
            title="왜 인연의 집인가?"
            description="단순한 만남이 아닌, 인생의 방향이 맞는 사람을 연결합니다. 과학적인 분석과 인간적인 섬세함으로, 진정성 있는 인연을 만들어갑니다."
          />
        </ScrollReveal>

        {/* 01. 가치관 중심 매칭 시스템 */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                01
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-3">
              가치관 중심 매칭 시스템
            </h3>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              조건이 아닌, &lsquo;삶의 방향이 맞는 사람&rsquo;을 찾아
              연결합니다.
              <br className="hidden md:block" />더 깊고 오래가는 관계를 위해,
              인연의 집은 가치관을 가장 중요하게 생각합니다.
            </p>
          </ScrollReveal>

          {/* Radar Chart + Couple Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-14">
            <ScrollReveal direction="left">
              <div className="relative aspect-square max-w-[480px] mx-auto">
                <Image
                  src="/인집_메인화면_이미지/why1-1.png"
                  alt="7개 핵심 가치 영역 레이더 차트 - 가치관, 라이프스타일, 성향, 의사소통, 감정관, 취향관, 신념관, 가족관"
                  fill
                  className="object-contain"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/인집_메인화면_이미지/why1-2.png"
                  alt="가치관이 맞는 커플의 대화"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 5 Value Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {valueCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="group bg-white rounded-xl p-5 border border-border hover:border-gold transition-all duration-300 hover:shadow-md h-full">
                  <div className="mb-3">{card.icon}</div>
                  <h4 className="font-semibold text-charcoal text-sm mb-2">
                    {card.title}
                  </h4>
                  <ul className="space-y-1">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-muted text-xs leading-relaxed"
                      >
                        · {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 02. MBTI 무료 성향 테스트 */}
        <div className="mt-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                02
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-3">
              MBTI 무료 성향 테스트
            </h3>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-10">
              서로를 이해하는 첫 단계,
              <br className="hidden md:block" />
              MBTI 기반 매칭으로 더 깊은 연결.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Test Area */}
            <ScrollReveal direction="left">
              <div className="bg-cream-dark rounded-2xl p-8 relative overflow-hidden">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-6">
                  <Image
                    src="/인집_메인화면_이미지/why2-1.png"
                    alt="MBTI 성향 테스트를 진행하는 모습"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  무료 테스트 시작 →
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Result Preview Card */}
            <ScrollReveal direction="right">
              <MbtiResultCard />
            </ScrollReveal>
          </div>
        </div>

        {/* 03. 사주 & 궁합 분석 */}
        <div className="mt-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                03
              </span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-3">
              사주 & 궁합 분석
            </h3>
            <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-10">
              전통적인 사주 궁합을 통해,
              <br className="hidden md:block" />더 조화롭고 안정적인 관계를
              만들어갑니다.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Saju Image + Score */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/인집_메인화면_이미지/why3.png"
                    alt="사주 궁합 상담"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Features + Button */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {sajuFeatures.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border"
                    >
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-sm font-medium text-charcoal">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="lg">
                  무료 사주 궁합 상담 →
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bridge Sentence */}
        <ScrollReveal>
          <div className="mt-24 mb-24 text-center">
            <p className="text-lg md:text-xl text-charcoal font-medium leading-relaxed">
              과학적 분석과 전통적 지혜의 만남으로,
              <br />
              <span className="text-gold font-semibold">
                더 정확하고 깊이 있는 인연을 만듭니다.
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* 04. 큐레이팅 데이트 */}
        <div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left: Title */}
            <ScrollReveal direction="left">
              <div className="md:w-[200px] shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                    04
                  </span>
                  <div className="h-px w-8 bg-gold/40" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-3">
                  큐레이팅
                  <br />
                  데이트
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  단순한 만남이 아닌,
                  <br />
                  특별한 경험으로 관계를
                  <br />
                  시작하세요.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Rotating Image Cards */}
            <ScrollReveal direction="right" className="flex-1 w-full">
              <CuratingDateCards />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
