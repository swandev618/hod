"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/인집_메인화면_이미지/고정CTA.png')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container-wide py-14 md:py-20">
        <div className="flex flex-col items-start gap-6">
          <img
            src="https://i.ibb.co/3ybYqRsq/logo-gold.png"
            alt="인연의집 로고"
            className="h-10 w-auto"
          />

          <div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              당신의 <span className="text-gold">인연</span>, 지금 <span className="text-gold">시작</span>해보세요
            </h2>
            <p className="mt-2 text-white/70 text-sm md:text-base">
              프라이빗한 1:1 맞춤 상담원 통해 인연을 만나보세요
            </p>
          </div>

          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              <input
                type="text"
                placeholder="이름 (예: 홍길동)"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <select className="px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white/80 focus:outline-none focus:border-gold appearance-none">
                <option value="">성별</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
              <input
                type="text"
                placeholder="나이 (예: 34)"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                placeholder="연락처 (- 없이 입력)"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <select className="px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white/80 focus:outline-none focus:border-gold appearance-none">
                <option value="">민족여부</option>
                <option value="yes">해당</option>
                <option value="no">비해당</option>
              </select>
              <input
                type="text"
                placeholder="인증번호 6자리 입력"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
            </div>

            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <label className="flex items-center gap-2 text-sm text-white/70 cursor-pointer">
                <input type="checkbox" className="accent-gold w-4 h-4" />
                <span>개인정보수집 및 이용동의</span>
                <button type="button" className="text-gold underline text-xs">[보기]</button>
              </label>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-[#e7c692] to-[#caa76a] text-dark rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  무료 상담 신청
                  <ArrowRight size={14} />
                </button>
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  기존 상담
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
