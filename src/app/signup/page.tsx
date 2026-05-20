"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="w-full max-w-lg mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-wide">
                SIGN UP
              </h1>
              <p className="mt-3 text-sm text-muted">
                인연의 집 회원이 되어
              </p>
              <p className="text-sm text-muted">
                특별한 만남의 기회를 경험해보세요.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="font-semibold text-charcoal mb-1">회원정보 입력</h2>
              <p className="text-xs text-muted mb-6">
                정확한 정보 입력은 더욱 안전하고 만족스러운 매칭에 도움이 됩니다.
              </p>

              <div className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      닉네임 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="닉네임을 입력해주세요"
                      className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="이메일을 입력해주세요"
                      className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1.5">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
                      className="flex-1 px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <button
                      type="button"
                      className="px-4 py-3 border border-border rounded-lg text-xs font-medium text-charcoal hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
                    >
                      핸드폰 인증하기
                    </button>
                  </div>
                </div>

                {/* Gender & Marriage */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      성별 <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg text-sm text-muted focus:outline-none focus:border-gold transition-colors">
                      <option value="">선택</option>
                      <option value="male">남성</option>
                      <option value="female">여성</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      결혼구분 <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg text-sm text-muted focus:outline-none focus:border-gold transition-colors">
                      <option value="">선택</option>
                      <option value="single">미혼</option>
                      <option value="divorced">돌싱</option>
                    </select>
                  </div>
                </div>

                {/* Birthday & Password */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      생년월일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-border rounded-lg text-sm text-muted focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      비밀번호 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="비밀번호를 입력해주세요"
                        className="w-full px-4 py-3 pr-10 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"
                      >
                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1.5">
                    비밀번호 확인 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="비밀번호를 다시 입력해주세요"
                      className="w-full px-4 py-3 pr-10 border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"
                    >
                      {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-center gap-2 text-xs text-muted cursor-pointer mt-4">
                  <input type="checkbox" className="accent-gold" />
                  <span>
                    <Link href="/terms" className="underline text-gold">이용약관</Link> 및{" "}
                    <Link href="/privacy" className="underline text-gold">개인정보처리방침</Link>에 동의합니다.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-8 py-3.5 bg-charcoal text-white rounded-lg font-medium hover:bg-dark transition-colors"
              >
                가입 신청
              </button>

              <p className="mt-4 text-center text-xs text-muted">
                이미 회원이신가요?{" "}
                <Link href="/login" className="text-gold font-medium underline">
                  로그인
                </Link>
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
