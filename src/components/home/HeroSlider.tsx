"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart2, Heart, Users, Gem } from "lucide-react";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    subtitle: "PREMIUM MATCHMAKING SERVICE",
    title: "CHANCE\nTO DESTINY",
    description: "우연이 인연이 되는 공간, 인연의집",
    image: "/images/hero/001.png",
  },
  {
    id: 2,
    subtitle: "PRIVATE MATCHMAKING",
    title: "진심이 닿는 순간,\n인연이 시작됩니다",
    description: "프라이빗 매칭으로 만나는 특별한 인연",
    image: "/images/hero/002.png",
  },
  {
    id: 3,
    subtitle: "VALUE-BASED MATCHING",
    title: "가치관이 맞는\n인연을 찾아드립니다",
    description: "128개 항목 분석으로 진정한 인연을 연결합니다",
    image: "/images/hero/003.png",
  },
  {
    id: 4,
    subtitle: "YOUR STORY BEGINS HERE",
    title: "당신만의 인연,\n여기서 시작됩니다",
    description: "1:1 맞춤 매칭으로 운명적 만남을 설계합니다",
    image: "/images/hero/004.png",
  },
];

function TypewriterTitle({ text, speed = 50, startDelay = 100 }: { text: string; speed?: number; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const startTimer = setTimeout(() => {
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timer = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);

  return (
    <div className="relative">
      <h1 aria-hidden className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-pre-line invisible">
        {text}
      </h1>
      <h1 className="absolute inset-0 font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line">
        {displayed}
        <span
          className={`inline-block w-[3px] h-[0.85em] bg-gold ml-1 align-middle ${
            done ? "animate-blink" : ""
          }`}
        />
      </h1>
    </div>
  );
}

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index, 1400);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Content - animated per slide */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-light mb-4">
                {slides[activeIndex].subtitle}
              </p>
              <TypewriterTitle text={slides[activeIndex].title} />
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
                {slides[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons - always visible */}
          <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white rounded font-medium hover:bg-gold-dark transition-colors"
            >
              상담 신청하기
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white rounded font-medium hover:bg-white/10 transition-colors"
            >
              인연의 집 소개
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-wide pb-20 md:pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-0 max-w-[960px]">
            {[
              { icon: BarChart2, title: "과학적 분석", desc: "정교한 성향 분석과 매칭 시스템" },
              { icon: Heart, title: "진정성 있는 매칭", desc: "회원님의 가치관과 라이프스타일 반영" },
              { icon: Users, title: "프라이빗 & 안전", desc: "신원 검증과 철저한 회원 관리" },
              { icon: Gem, title: "품격 있는 경험", desc: "전문 커플매니저의 밀착 케어" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5 ${
                  i === 0
                    ? "opacity-85"
                    : "opacity-85 pl-6 border-l border-gold/30"
                } ${i === 2 ? "max-md:border-l-0 max-md:pl-0" : ""}`}
              >
                <item.icon size={20} className="text-gold/70 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-gold whitespace-nowrap">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/75 mt-1 whitespace-nowrap max-md:whitespace-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Indicator */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-5">
        <span className="font-serif text-sm font-semibold text-white/80 tracking-wider">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-col items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-[6px] rounded-full transition-all duration-400 ${
                i === activeIndex
                  ? "h-[22px] bg-gold"
                  : "h-[6px] bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center gap-2 mt-2 cursor-pointer"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <path d="M14 9v10M10 15l4 4 4-4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[9px] font-medium tracking-[0.15em] text-white/50 text-center leading-snug">
            SCROLL<br />DOWN
          </span>
        </motion.div>
      </div>
    </section>
  );
}
