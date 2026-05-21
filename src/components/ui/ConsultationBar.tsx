"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useCtaState } from "@/context/CtaContext";
import { PhoneVerifyInput } from "@/components/ui/PhoneVerifyInput";

export function ConsultationBar() {
  const { expanded, setExpanded } = useCtaState();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    code: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요";
    if (!formData.gender) newErrors.gender = "성별을 선택해주세요";
    if (!formData.age.trim()) newErrors.age = "나이를 입력해주세요";
    if (!formData.phone.trim()) newErrors.phone = "연락처를 입력해주세요";
    else if (!/^\d{10,11}$/.test(formData.phone.replace(/-/g, "")))
      newErrors.phone = "올바른 연락처를 입력해주세요";
    if (!formData.code.trim()) newErrors.code = "인증번호를 입력해주세요";
    else if (!/^\d{6}$/.test(formData.code))
      newErrors.code = "6자리 숫자를 입력해주세요";
    if (!agreed) newErrors.agreed = "개인정보수집에 동의해주세요";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
      setFormData({
        name: "",
        gender: "",
        age: "",
        phone: "",
        code: "",
      });
      setAgreed(false);
      setExpanded(false);
    }
  }

  const inputBase =
    "w-full px-3 py-2.5 bg-white/10 border rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold";
  const selectBase =
    "w-full px-3 py-2.5 bg-white/10 border rounded text-sm text-white/80 focus:outline-none focus:border-gold appearance-none";

  function borderClass(field: string) {
    return errors[field] ? "border-red-400" : "border-white/20";
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-30">
        {expanded ? (
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/인집_메인화면_이미지/고정CTA.png')",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />

            <button
              onClick={() => setExpanded(false)}
              className="absolute top-2 right-4 z-20 text-white/50 hover:text-white text-xs flex items-center gap-1"
            >
              접기 <ChevronDown size={12} />
            </button>

            <div className="relative z-10 container-wide py-8 md:py-10">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    src="/인집_메인화면_이미지/logo-gold.png"
                    alt="인연의집 로고"
                    className="h-8 w-auto"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white">
                      당신의 <span className="text-gold">인연</span>, 지금{" "}
                      <span className="text-gold">시작</span>해보세요
                    </h2>
                    <p className="text-[11px] md:text-xs text-white/60 mt-0.5">
                      프라이빗한 1:1 맞춤 상담원 통해 인연을 만나보세요
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    <div>
                      <input
                        type="text"
                        placeholder="이름 (예: 홍길동)"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`${inputBase} ${borderClass("name")}`}
                      />
                      {errors.name && (
                        <p className="text-[10px] mt-0.5 text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <select
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className={`${selectBase} ${borderClass("gender")}`}
                      >
                        <option value="">성별</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                      </select>
                      {errors.gender && (
                        <p className="text-[10px] mt-0.5 text-red-400">
                          {errors.gender}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="나이 (예: 34)"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        className={`${inputBase} ${borderClass("age")}`}
                      />
                      {errors.age && (
                        <p className="text-[10px] mt-0.5 text-red-400">
                          {errors.age}
                        </p>
                      )}
                    </div>
                    <PhoneVerifyInput
                      value={formData.phone}
                      onChange={(v) =>
                        setFormData({ ...formData, phone: v })
                      }
                      error={errors.phone}
                      variant="dark"
                    />
                    <div>
                      <input
                        type="text"
                        placeholder="인증번호 6자리 입력"
                        value={formData.code}
                        onChange={(e) =>
                          setFormData({ ...formData, code: e.target.value })
                        }
                        className={`${inputBase} ${borderClass("code")}`}
                      />
                      {errors.code && (
                        <p className="text-[10px] mt-0.5 text-red-400">
                          {errors.code}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="accent-gold w-3.5 h-3.5"
                      />
                      <span className={errors.agreed ? "text-red-400" : ""}>
                        개인정보수집 및 이용동의
                      </span>
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
          </div>
        ) : (
          <div className="relative bg-black">
            <div className="relative z-10 container-wide py-3 md:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    src="/인집_메인화면_이미지/logo-gold.png"
                    alt="인연의집 로고"
                    className="h-6 md:h-7 w-auto"
                  />
                  <div>
                    <h2 className="text-sm md:text-base font-bold text-white">
                      당신의 <span className="text-gold">인연</span>, 지금{" "}
                      <span className="text-gold">시작</span>해보세요
                    </h2>
                    <p className="text-[10px] md:text-xs text-white/60 mt-0.5">
                      프라이빗한 1:1 맞춤 상담원 통해 인연을 만나보세요
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-b from-[#e7c692] to-[#caa76a] text-dark rounded font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity"
                  >
                    무료 상담 신청
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-white/30 text-white rounded font-medium text-xs md:text-sm hover:bg-white/10 transition-colors"
                  >
                    카톡 상담
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={expanded ? "h-52 md:h-44" : "h-14 md:h-16"} />
    </>
  );
}
