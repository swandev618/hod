"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  MessageCircle,
  ClipboardCheck,
  CreditCard,
  FileText,
  CheckCircle,
  Camera,
  Settings,
  Heart,
  Shield,
  Eye,
  UserCheck,
  Lock,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const steps = [
  { icon: MessageCircle, title: "상담 신청", description: "간단한 정보 입력을 통해 맞춤 상담을 신청합니다.", step: "01" },
  { icon: ClipboardCheck, title: "매니저 상담", description: "전담 매니저와의 1:1 상담을 통해 당신의 성향과 가치관을 깊이 이해합니다.", step: "02" },
  { icon: CreditCard, title: "상담 후 결제", description: "서비스 방향에 대한 충분한 안내 후 신중하게 참여를 결정합니다.", step: "03" },
  { icon: FileText, title: "서류 제출 및 인증", description: "신뢰 기반 매칭을 위해 학력, 직업, 신원 등 철저한 인증을 진행합니다.", step: "04" },
  { icon: CheckCircle, title: "최종 승인", description: "모든 검증을 통과한 회원만 프라이빗 매칭 시스템에 등록됩니다.", step: "05" },
  { icon: Camera, title: "프로필 촬영", description: "전문 촬영과 컨설팅을 통해 당신의 매력을 가장 잘 담아냅니다.", step: "06" },
  { icon: Settings, title: "서비스 제공", description: "분석 기반 매칭 설계를 통해 최적의 인연을 제안합니다.", step: "07" },
  { icon: Heart, title: "매칭 성공", description: "자연스럽고 편안한 만남을 통해 관계의 시작을 함께로 만들어갑니다.", step: "08" },
];

const prepaidFeatures = [
  "기간 내 무제한 매칭",
  "전담 매니저 1:1 관리",
  "프로필 컨설팅 & 이미지 메이킹",
  "만남 주선 및 일정 조율",
  "성혼까지 책임 매칭",
];

const postpaidFeatures = [
  "1회 1명 소개",
  "기본 프로필 검증",
  "만남 주선 및 일정 조율",
  "만남 이후 피드백 관리",
];

const benefits = [
  { number: "01", title: "소중한 인연 초대", description: "프라이빗 네트워크를 통해 더 좋은 인연을 연결해드립니다." },
  { number: "02", title: "마음을 전하는 선물", description: "커피 쿠폰, 작은 선물 등 특별한 혜택을 제공합니다." },
  { number: "03", title: "오프라인 모임 참여", description: "품격 있는 사람들과의 프라이빗 모임에 초대합니다." },
];

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              PROCESS 01
            </span>
            <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              가입 절차 안내
            </h1>
            <p className="mt-4 text-muted max-w-xl">
              체계적인 설계와 검증을 통해 당신에게 가장 적합한 인연을 연결합니다.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.05}>
                <div className="bg-cream rounded-2xl p-6 text-center h-full">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <div className="w-12 h-12 mx-auto mt-3 flex items-center justify-center rounded-full bg-white text-gold">
                    <step.icon size={20} />
                  </div>
                  <h3 className="mt-3 font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 bg-dark rounded-2xl p-8 text-center">
              <h3 className="text-white font-semibold text-lg">
                당신의 인연을 시작할 준비가 되셨나요?
              </h3>
              <p className="mt-2 text-white/70 text-sm">
                무료 상담을 통해 당신에게 맞는 인연을 만나보세요.
              </p>
              <Link
                href="/consultation"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
              >
                무료 상담 신청하기 <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-cream">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionTitle
              label="JOINING FEE"
              title="가입 비용 안내"
              description="선불은 무제한 매칭, 후불은 1회 소개 방식으로 진행됩니다."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-dark rounded-2xl p-8 text-white h-full">
                <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                  선불 결제 (일시불)
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold">무제한 매칭</h3>
                <p className="mt-2 text-white/70 text-sm">
                  원하는 기간 동안 제한 없이 무제한으로 매칭을 제공합니다.
                </p>
                <p className="mt-6 text-4xl font-bold">
                  4,000,000<span className="text-lg font-normal text-white/70">원</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {prepaidFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/90">
                      <Check size={14} className="text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-border rounded-2xl p-8 h-full">
                <span className="inline-block px-3 py-1 bg-cream-dark text-charcoal text-xs font-medium rounded-full">
                  후불 결제 (건별)
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold text-charcoal">1회 소개 매칭</h3>
                <p className="mt-2 text-muted text-sm">
                  매니저가 엄선한 1명을 소개받고 만남을 진행합니다.
                </p>
                <p className="mt-6 text-4xl font-bold text-charcoal">
                  200,000<span className="text-lg font-normal text-muted">원</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {postpaidFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                      <Check size={14} className="text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-dark">
        <div className="container-narrow">
          <ScrollReveal>
            <SectionTitle
              label="MEMBERSHIP PRIVILEGES"
              title="회원만을 위한 프라이빗 혜택"
              description="인연의 집 회원에게만 제공되는 특별한 경험을 만나보세요."
              dark
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.number} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <span className="text-gold font-bold text-sm">{benefit.number}</span>
                  <h3 className="mt-3 text-white font-semibold text-lg">{benefit.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <span className="mt-4 inline-block px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-xs rounded-full">
                    Members Only
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-t border-border">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "검증된 회원만 매칭" },
              { icon: Eye, label: "허위 정보 즉시 탈퇴" },
              { icon: UserCheck, label: "1:1 전담 매니저 운영" },
              { icon: Lock, label: "비공개 프라이버시 보호" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-2">
                  <item.icon size={20} className="text-gold" />
                  <span className="text-xs text-muted font-medium">{item.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
