"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguagesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { setLanguage, t } = useLanguage()

  const languages = [
    { code: "en" as const, name: "English" },
    { code: "es" as const, name: "Español" },
    { code: "fr" as const, name: "Français" },
    { code: "de" as const, name: "Deutsch" },
    { code: "it" as const, name: "Italiano" },
    { code: "pt" as const, name: "Português" },
    { code: "zh" as const, name: "中文" },
    { code: "ja" as const, name: "日本語" },
    { code: "ko" as const, name: "한국어" },
    { code: "ar" as const, name: "العربية" },
  ]

  const handleLanguageSelect = (language: {
    code: "en" | "es" | "fr" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ar"
    name: string
  }) => {
    setLanguage(language.code)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-black font-bold hover:text-foreground transition-colors p-0 h-auto justify-start"
      >
        {t("footer.languages")}
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
