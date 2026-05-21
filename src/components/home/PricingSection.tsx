"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const unlimitedBenefits = [
  "기간 내 무제한 매칭",
  "전담 매니저 1:1 관리",
  "프로필 컨설팅 & 이미지 메이킹",
  "만남 주선 및 일정 조율",
  "성혼까지 확인 매칭",
];

const singleBenefits = [
  "1회 1명 소개",
  "기본 프로필 검증",
  "만남 주선 및 일정 조율",
  "만남 이후 피드백 관리",
];

const privileges = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path
          d="M8 12l4-4 4 4M16 12l4-4 4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16h24v10a2 2 0 01-2 2H6a2 2 0 01-2-2V16z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M16 16v12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "소중한 인연 초대",
    description:
      "프라이빗 네트워킹을 통해 더 좋은 인연을 전해드립니다.",
    image: "/인집_메인화면_이미지/혜택1.png",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path
          d="M16 6c-3.3 0-6 2.3-6 5.5C10 17 16 24 16 24s6-7 6-12.5C22 8.3 19.3 6 16 6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "마음을 전하는 선물",
    description:
      "진심 무료, 작은 선물로 특별한 혜택을 제공합니다.",
    image: "/인집_메인화면_이미지/혜택2.png",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 28c0-3 2-5 4-5s4 2 4 5M18 28c0-3 2-5 4-5s4 2 4 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "오프라인 모임 참여",
    description:
      "같은 뜻의 사람들과의 프라이빗한 모임에 초대됩니다.",
    image: "/인집_메인화면_이미지/혜택3.jpg",
  },
];

export function PricingSection() {
  return (
    <>
      {/* 가입 비용 안내 */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionTitle
              label="JOINING FEE"
              title="가입 비용 안내"
              description="선불은 무제한 매칭, 후불은 1회 소개 방식으로 진행됩니다."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {/* 선불 결제 - 무제한 매칭 */}
            <ScrollReveal direction="left" className="h-full">
              <div className="relative h-full">
                {/* Gold Seal Badge */}
                <div className="hidden md:flex absolute -left-8 -top-8 z-10 w-[100px] h-[100px] items-center justify-center">
                  <Image
                    src="/인집_메인화면_이미지/goldSeal.png"
                    alt="가장 선호하는 이용 방식"
                    width={100}
                    height={100}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
                  />
                  <span className="relative z-10 text-[9px] font-bold text-charcoal leading-tight text-center">
                    가장
                    <br />
                    선호하는
                    <br />
                    이용 방식
                  </span>
                </div>

                <div className="bg-charcoal text-white text-left rounded-2xl p-8 md:p-10 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <span className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/70 tracking-wide">
                      선불 결제 (일시불)
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold">
                    무제한 매칭
                  </h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    원하는 기간 동안 제한 없이
                    <br />
                    무제한으로 매칭을 제공합니다.
                  </p>

                  <p className="text-4xl md:text-5xl font-bold mt-8 tracking-tight">
                    4,000,000
                    <span className="text-base font-medium">원</span>
                  </p>

                  <div className="mt-8 border-t border-white/15" />

                  <ul className="mt-6 space-y-3 flex-1">
                    {unlimitedBenefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-white/80"
                      >
                        <Check size={15} className="text-gold shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-right font-serif text-4xl italic text-white/10 select-none">
                    Unlimited
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 후불 결제 - 1회 소개 매칭 */}
            <ScrollReveal direction="right" className="h-full">
              <div className="relative h-full">
                {/* Silver Seal Badge */}
                <div className="hidden md:flex absolute -right-8 -top-8 z-10 w-[100px] h-[100px] items-center justify-center">
                  <Image
                    src="/인집_메인화면_이미지/silverSeal.png"
                    alt="부담 없이 시작하고 싶은 분께 추천"
                    width={100}
                    height={100}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
                  />
                  <span className="relative z-10 text-[9px] font-bold text-charcoal/60 leading-tight text-center">
                    부담 없이
                    <br />
                    시작하고 싶은
                    <br />
                    분께 추천
                  </span>
                </div>

                <div className="bg-white border border-border text-left rounded-2xl p-8 md:p-10 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <span className="inline-block border border-gold/30 rounded-full px-4 py-1.5 text-xs text-gold tracking-wide">
                      후불 결제 (건별)
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                    1회 소개 매칭
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    매니저가 엄선한 1명을 소개하고
                    <br />
                    만남을 진행합니다.
                  </p>

                  <p className="text-4xl md:text-5xl font-bold text-charcoal mt-8 tracking-tight">
                    200,000
                    <span className="text-base font-medium">원</span>
                  </p>

                  <div className="mt-8 border-t border-border" />

                  <ul className="mt-6 space-y-3 flex-1">
                    {singleBenefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-muted"
                      >
                        <Check size={15} className="text-gold shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 프로그램 더보기 */}
          <ScrollReveal>
            <div className="mt-14 max-w-5xl mx-auto">
              <Link
                href="/service"
                className="flex items-center justify-between border border-border rounded-xl px-6 py-4 hover:border-gold/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 text-muted"
                  >
                    <path
                      d="M9 12h6M9 16h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm font-medium text-charcoal">
                    프로그램 더보기
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted hidden md:inline">
                    프로그램별 상세 내용과 혜택을 확인하실 수 있습니다.
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted group-hover:text-gold group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 회원만을 위한 프라이빗 혜택 */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                MEMBERSHIP PRIVILEGES
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-white">
                회원만을 위한 프라이빗 혜택
              </h2>
              <p className="mt-4 text-white/50 text-sm md:text-base">
                인연의 집 회원에게만 제공되는 특별한 경험을 만나보세요.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {privileges.map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 0.12}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="text-gold text-xs font-semibold tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 text-gold/70">
                    {item.icon}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="inline-block text-[10px] uppercase tracking-[0.15em] text-gold/80 border border-gold/30 rounded-full px-3 py-1">
                      Members Only
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
