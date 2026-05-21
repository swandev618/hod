"use client";

import { ArrowRight } from "lucide-react";
import { PhoneVerifyInput } from "@/components/ui/PhoneVerifyInput";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/인집_메인화면_이미지/고정CTA.png')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container-wide py-10 md:py-14">
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center gap-4 md:gap-6">
            <img
              src="/인집_메인화면_이미지/logo-gold.png"
              alt="인연의집 로고"
              className="h-9 w-auto"
            />
            <div>
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                당신의 <span className="text-gold">인연</span>, 지금{" "}
                <span className="text-gold">시작</span>해보세요
              </h2>
              <p className="mt-1 text-white/60 text-xs md:text-sm">
                프라이빗한 1:1 맞춤 상담원 통해 인연을 만나보세요
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <input
                type="text"
                placeholder="이름 (예: 홍길동)"
                className="px-3 py-2.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <select className="px-3 py-2.5 bg-white/10 border border-white/20 rounded text-sm text-white/80 focus:outline-none focus:border-gold appearance-none">
                <option value="">성별</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
              <input
                type="text"
                placeholder="나이 (예: 34)"
                className="px-3 py-2.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <PhoneVerifyInput
                value=""
                onChange={() => {}}
                variant="dark"
              />
              <input
                type="text"
                placeholder="인증번호 6자리 입력"
                className="px-3 py-2.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
            </div>

            {/* Bottom row */}
            <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer">
                <input type="checkbox" className="accent-gold w-3.5 h-3.5" />
                <span>개인정보수집 및 이용동의</span>
                <button
                  type="button"
                  className="text-gold underline text-xs"
                >
                  [보기]
                </button>
              </label>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-b from-[#e7c692] to-[#caa76a] text-dark rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  무료 상담 신청
                  <ArrowRight size={14} />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white rounded font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  카톡 상담
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
