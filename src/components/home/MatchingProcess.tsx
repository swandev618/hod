"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  MessageCircle,
  ClipboardCheck,
  CreditCard,
  FileText,
  CheckCircle,
  Camera,
  Settings,
  Heart,
} from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "프라이빗 상담 시작", step: "01" },
  { icon: ClipboardCheck, title: "정밀 프로파일링", step: "02" },
  { icon: CreditCard, title: "상담 후 결제", step: "03" },
  { icon: FileText, title: "서류 제출 및 인증", step: "04" },
  { icon: CheckCircle, title: "최종 승인", step: "05" },
  { icon: Camera, title: "프로필 촬영", step: "06" },
  { icon: Settings, title: "서비스 제공", step: "07" },
  { icon: Heart, title: "매칭 성공", step: "08" },
];

export function MatchingProcess() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-narrow">
        <ScrollReveal>
          <SectionTitle
            label="MATCHING PROCESS"
            title="인연의 집 매칭 여정"
            description="한 사람 한 사람의 가치를 존중하며, 진심이 닿는 인연을 만듭니다."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.05}>
              <div className="bg-white rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                  Step {step.step}
                </span>
                <div className="w-12 h-12 mx-auto mt-3 flex items-center justify-center rounded-full bg-cream text-gold">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-charcoal">
                  {step.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
