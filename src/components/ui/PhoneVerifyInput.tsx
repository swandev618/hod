"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

interface PhoneVerifyInputProps {
  value: string;
  onChange: (value: string) => void;
  onVerify?: (phone: string) => void;
  error?: string;
  variant?: "dark" | "light";
}

export function PhoneVerifyInput({
  value,
  onChange,
  onVerify,
  error,
  variant = "dark",
}: PhoneVerifyInputProps) {
  const [sent, setSent] = useState(false);

  function handleVerify() {
    if (!value.trim()) return;
    setSent(true);
    onVerify?.(value);
  }

  const isDark = variant === "dark";

  return (
    <div>
      <div
        className={`flex items-center rounded overflow-hidden border ${
          error
            ? "border-red-400"
            : isDark
              ? "border-white/20"
              : "border-border"
        }`}
      >
        <div className={`flex items-center gap-2 flex-1 min-w-0 px-3 py-2.5 ${isDark ? "bg-white/10" : "bg-white"}`}>
          <Phone
            size={14}
            className={isDark ? "text-white/40 shrink-0" : "text-muted shrink-0"}
          />
          <input
            type="text"
            placeholder="연락처 (- 없이 입력)"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full bg-transparent text-sm focus:outline-none ${
              isDark
                ? "text-white placeholder:text-white/50"
                : "text-charcoal placeholder:text-muted/60"
            }`}
          />
        </div>
        <div
          className={`w-px self-stretch ${isDark ? "bg-white/20" : "bg-border"}`}
        />
        <button
          type="button"
          onClick={handleVerify}
          className={`shrink-0 px-4 py-2.5 text-xs font-semibold transition-colors ${
            isDark
              ? "bg-white/5 text-gold hover:bg-white/10"
              : "bg-cream text-gold hover:bg-cream-dark"
          }`}
        >
          {sent ? "재전송" : "인증하기"}
        </button>
      </div>
      {error && (
        <p className="text-[10px] mt-0.5 text-red-400">{error}</p>
      )}
    </div>
  );
}
