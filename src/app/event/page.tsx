"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, ArrowRight, Check, Gift, Trophy, Star } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    status: "신청중",
    category: "HOTEL",
    title: "와인과 함께하는 인연의 밤",
    date: "5. 24 (토) 19:00",
    location: "서울 강남",
    description: "와인과 대화를 통해 자연스럽게 가까워지는 시간",
  },
  {
    id: 2,
    status: "신청중",
    category: "PICNIC",
    title: "봄날의 피크닉 데이트",
    date: "5. 8 (일) 14:00",
    location: "경기 가평",
    description: "자연 속에서 즐기는 가벼운 게임과 달콤한 1:1 대화",
  },
  {
    id: 3,
    status: "예정",
    category: "CLASS",
    title: "달콤한 베이킹 클래스",
    date: "6. 22 (일) 15:00",
    location: "서울 마포",
    description: "함께 만드는 즐거움 속에서 마음도 가까워지는 시간",
  },
  {
    id: 4,
    status: "예정",
    category: "CONCERT",
    title: "어쿠스틱 힐링 콘서트",
    date: "7. 5 (토) 18:00",
    location: "서울 상수",
    description: "감성 가득한 음악과 함께하는 특별한 만남",
  },
];

const missions = [
  { icon: Check, label: "출석 체크", description: "매일 로그인하기", points: 10 },
  { icon: Star, label: "프로필 업데이트", description: "프로필 정보 수정하기", points: 10 },
  { icon: Gift, label: "매칭 피드 좋아요", description: "최근 매칭 카드에 좋아요", points: 10 },
  { icon: Trophy, label: "게시글 작성", description: "커뮤니티에 글 작성하기", points: 20 },
];

const rewards = [
  "프라이빗 예약권",
  "카페 기프티콘",
  "혜택 환전소",
  "오프라인 우선권",
];

export default function EventPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="text-xs italic text-gold font-serif">Offline Event</span>
            <h1 className="mt-2 font-serif text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              오프라인 행사
            </h1>
            <p className="mt-4 text-muted max-w-lg">
              다양한 만남의 기회와 매일의 작은 미션으로 더 가까워지는 인연.
              오프라인 행사부터 데일리 미션까지, 특별한 경험과 리워드를 만나보세요.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Event Grid */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-charcoal">오프라인 행사</h2>
            <Link href="#" className="text-sm text-muted hover:text-gold transition-colors">
              지난 행사 보기 <ArrowRight size={12} className="inline" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.05}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-md transition-all group">
                  <div className="aspect-[4/3] bg-charcoal/5 relative">
                    <Badge
                      variant={event.status === "신청중" ? "gold" : "default"}
                      className="absolute top-3 left-3"
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gold font-medium uppercase">
                      {event.category}
                    </span>
                    <h3 className="mt-1 font-semibold text-charcoal">{event.title}</h3>
                    <div className="mt-3 space-y-1">
                      <p className="flex items-center gap-1.5 text-xs text-muted">
                        <Calendar size={12} /> {event.date}
                      </p>
                      <p className="flex items-center gap-1.5 text-xs text-muted">
                        <MapPin size={12} /> {event.location}
                      </p>
                    </div>
                    <p className="mt-3 text-xs text-muted leading-relaxed">
                      {event.description}
                    </p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center gap-1 text-xs text-gold font-medium hover:underline"
                    >
                      자세히 보기 <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-charcoal rounded-full text-sm font-medium hover:border-gold hover:text-gold transition-colors"
            >
              모든 행사 보기 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Mission */}
      <section className="py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <span className="text-xs italic text-gold font-serif">Daily Mission</span>
                <h2 className="mt-1 font-serif text-2xl font-bold text-charcoal">
                  데일리 미션
                </h2>
                <p className="mt-1 text-sm text-muted">
                  매일의 작은 실천으로 리워드 포인트를 받아보세요!
                </p>
              </div>
              <Link href="#" className="text-sm text-gold font-medium hover:underline">
                미션 참여 내역 <ArrowRight size={12} className="inline" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ScrollReveal className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {missions.map((mission) => (
                  <div
                    key={mission.label}
                    className="bg-white border border-border rounded-xl p-4 hover:border-gold/30 transition-colors"
                  >
                    <mission.icon size={18} className="text-gold mb-2" />
                    <h4 className="text-sm font-semibold text-charcoal">{mission.label}</h4>
                    <p className="text-xs text-muted mt-1">{mission.description}</p>
                    <span className="mt-2 inline-block text-xs text-gold font-medium">
                      {mission.points}P
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-charcoal mb-1">나의 리워드 포인트</h3>
                <p className="text-3xl font-bold text-gold">2,450<span className="text-sm font-normal text-muted ml-1">P</span></p>
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-xs text-muted font-medium mb-3">포인트 교환 혜택</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {rewards.map((reward) => (
                      <span
                        key={reward}
                        className="text-xs text-charcoal bg-cream rounded-lg px-3 py-2 text-center"
                      >
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
              지금 바로 특별한 만남에 참여해보세요
            </h2>
            <p className="mt-2 text-white/70 text-sm">
              인연의 집이 준비한 다양한 이벤트와 미션이 당신을 기다립니다.
            </p>
            <Link
              href="/consultation"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
            >
              이벤트 참여하기 <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
