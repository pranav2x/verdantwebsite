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
        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200 px-4 py-2 rounded-full shadow-lg"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        {t("footer.languages")}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-2xl z-50 min-w-[160px] overflow-hidden">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
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
