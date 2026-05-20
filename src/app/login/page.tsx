"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { User, Lock, Eye, MessageCircle, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-md mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-wide">
                LOGIN
              </h1>
              <p className="mt-3 text-sm text-muted">
                소중한 인연을 위한 첫걸음,
              </p>
              <p className="text-sm text-muted">
                인연의 집에서 당신의 여정을 이어가세요.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    placeholder="아이디 또는 이메일을 입력해주세요"
                    className="w-full pl-11 pr-4 py-3.5 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    className="w-full pl-11 pr-11 py-3.5 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3.5 bg-charcoal text-white rounded-lg font-medium hover:bg-dark transition-colors"
              >
                로그인
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white text-muted">또는</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3.5 border border-border rounded-lg font-medium text-charcoal hover:border-[#FAE100] hover:bg-[#FAE100]/5 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16} className="text-[#3C1E1E]" />
                카카오톡으로 로그인
              </button>

              <div className="mt-6 flex items-center justify-between text-xs text-muted">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-gold" />
                  자동로그인
                </label>
                <div className="flex gap-3">
                  <Link href="#" className="hover:text-gold transition-colors">아이디 찾기</Link>
                  <span>|</span>
                  <Link href="#" className="hover:text-gold transition-colors">비밀번호 찾기</Link>
                </div>
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted">아직 인연의 집 회원이 아니신가요?</p>
              <Link
                href="/signup"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors"
              >
                회원가입 하기 <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
