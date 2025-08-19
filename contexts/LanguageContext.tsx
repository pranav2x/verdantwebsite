"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es" | "fr" | "de" | "it" | "pt" | "zh" | "ja" | "ko" | "ar"

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "Snap a plant. Know instantly.",
    "hero.description":
      "Identify plants, learn their impact, and get expert insights with AI-powered plant recognition.",
    "hero.download": "Download on the App Store",

    // Plant Details
    "plant.sacredLotus": "Sacred Lotus",
    "plant.sunflower": "Sunflower",
    "plant.japaneseMapleleaf": "Japanese Maple Leaf",
    "plant.birdOfParadise": "Bird of Paradise",
    "plant.peaceLily": "Peace Lily",
    "plant.family": "Family",
    "plant.nativeRegion": "Native Region",
    "plant.characteristics": "Key Characteristics",
    "plant.toxicity": "Toxicity",
    "plant.nonToxic": "Non-toxic",
    "plant.mildlyToxic": "Mildly toxic",
    "plant.toxic": "Toxic",
    "plant.careLevel": "Care Level",
    "plant.easy": "Easy",
    "plant.moderate": "Moderate",
    "plant.difficult": "Difficult",
    "plant.sunlight": "Sunlight",
    "plant.fullSun": "Full sun",
    "plant.partialSun": "Partial sun",
    "plant.shade": "Shade",
    "plant.water": "Water",
    "plant.low": "Low",
    "plant.medium": "Medium",
    "plant.high": "High",

    // Footer
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.download": "Download",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.privacy": "Privacy",
    "footer.connect": "Connect",
    "footer.contact": "Contact",
    "footer.languages": "Languages",
    "footer.copyright": "© 2025 UseVerdant. All rights reserved.",
  },
  es: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "Fotografía una planta. Conócela al instante.",
    "hero.description":
      "Identifica plantas, aprende su impacto y obtén información experta con reconocimiento de plantas impulsado por IA.",
    "hero.download": "Descargar en App Store",

    // Plant Details
    "plant.sacredLotus": "Loto Sagrado",
    "plant.sunflower": "Girasol",
    "plant.japaneseMapleleaf": "Hoja de Arce Japonés",
    "plant.birdOfParadise": "Ave del Paraíso",
    "plant.peaceLily": "Lirio de la Paz",
    "plant.family": "Familia",
    "plant.nativeRegion": "Región Nativa",
    "plant.characteristics": "Características Clave",
    "plant.toxicity": "Toxicidad",
    "plant.nonToxic": "No tóxico",
    "plant.mildlyToxic": "Ligeramente tóxico",
    "plant.toxic": "Tóxico",
    "plant.careLevel": "Nivel de Cuidado",
    "plant.easy": "Fácil",
    "plant.moderate": "Moderado",
    "plant.difficult": "Difícil",
    "plant.sunlight": "Luz Solar",
    "plant.fullSun": "Sol completo",
    "plant.partialSun": "Sol parcial",
    "plant.shade": "Sombra",
    "plant.water": "Agua",
    "plant.low": "Bajo",
    "plant.medium": "Medio",
    "plant.high": "Alto",

    // Footer
    "footer.product": "Producto",
    "footer.features": "Características",
    "footer.download": "Descargar",
    "footer.company": "Empresa",
    "footer.about": "Acerca de",
    "footer.privacy": "Privacidad",
    "footer.connect": "Conectar",
    "footer.contact": "Contacto",
    "footer.languages": "Idiomas",
    "footer.copyright": "© 2025 UseVerdant. Todos los derechos reservados.",
  },
  fr: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "Photographiez une plante. Connaissez-la instantanément.",
    "hero.description":
      "Identifiez les plantes, apprenez leur impact et obtenez des informations d'experts avec la reconnaissance de plantes alimentée par l'IA.",
    "hero.download": "Télécharger sur l'App Store",

    // Plant Details
    "plant.sacredLotus": "Lotus Sacré",
    "plant.sunflower": "Tournesol",
    "plant.japaneseMapleleaf": "Feuille d'Érable Japonais",
    "plant.birdOfParadise": "Oiseau de Paradis",
    "plant.peaceLily": "Lys de la Paix",
    "plant.family": "Famille",
    "plant.nativeRegion": "Région Native",
    "plant.characteristics": "Caractéristiques Clés",
    "plant.toxicity": "Toxicité",
    "plant.nonToxic": "Non toxique",
    "plant.mildlyToxic": "Légèrement toxique",
    "plant.toxic": "Toxique",
    "plant.careLevel": "Niveau de Soins",
    "plant.easy": "Facile",
    "plant.moderate": "Modéré",
    "plant.difficult": "Difficile",
    "plant.sunlight": "Lumière du Soleil",
    "plant.fullSun": "Plein soleil",
    "plant.partialSun": "Soleil partiel",
    "plant.shade": "Ombre",
    "plant.water": "Eau",
    "plant.low": "Faible",
    "plant.medium": "Moyen",
    "plant.high": "Élevé",

    // Footer
    "footer.product": "Produit",
    "footer.features": "Fonctionnalités",
    "footer.download": "Télécharger",
    "footer.company": "Entreprise",
    "footer.about": "À propos",
    "footer.privacy": "Confidentialité",
    "footer.connect": "Se connecter",
    "footer.contact": "Contact",
    "footer.languages": "Langues",
    "footer.copyright": "© 2025 UseVerdant. Tous droits réservés.",
  },
  de: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "Fotografiere eine Pflanze. Erkenne sie sofort.",
    "hero.description":
      "Identifiziere Pflanzen, lerne ihre Auswirkungen kennen und erhalte Experteneinblicke mit KI-gestützter Pflanzenerkennung.",
    "hero.download": "Im App Store herunterladen",

    // Plant Details
    "plant.sacredLotus": "Heiliger Lotus",
    "plant.sunflower": "Sonnenblume",
    "plant.japaneseMapleleaf": "Japanisches Ahornblatt",
    "plant.birdOfParadise": "Paradiesvogel",
    "plant.peaceLily": "Friedenslilie",
    "plant.family": "Familie",
    "plant.nativeRegion": "Heimatregion",
    "plant.characteristics": "Hauptmerkmale",
    "plant.toxicity": "Toxizität",
    "plant.nonToxic": "Ungiftig",
    "plant.mildlyToxic": "Leicht giftig",
    "plant.toxic": "Giftig",
    "plant.careLevel": "Pflegeaufwand",
    "plant.easy": "Einfach",
    "plant.moderate": "Mäßig",
    "plant.difficult": "Schwierig",
    "plant.sunlight": "Sonnenlicht",
    "plant.fullSun": "Volle Sonne",
    "plant.partialSun": "Teilsonne",
    "plant.shade": "Schatten",
    "plant.water": "Wasser",
    "plant.low": "Niedrig",
    "plant.medium": "Mittel",
    "plant.high": "Hoch",

    // Footer
    "footer.product": "Produkt",
    "footer.features": "Funktionen",
    "footer.download": "Herunterladen",
    "footer.company": "Unternehmen",
    "footer.about": "Über uns",
    "footer.privacy": "Datenschutz",
    "footer.connect": "Verbinden",
    "footer.contact": "Kontakt",
    "footer.languages": "Sprachen",
    "footer.copyright": "© 2025 UseVerdant. Alle Rechte vorbehalten.",
  },
  it: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "Fotografa una pianta. Conoscila all'istante.",
    "hero.description":
      "Identifica le piante, impara il loro impatto e ottieni informazioni esperte con il riconoscimento delle piante alimentato dall'IA.",
    "hero.download": "Scarica sull'App Store",

    // Plant Details
    "plant.sacredLotus": "Loto Sacro",
    "plant.sunflower": "Girasole",
    "plant.japaneseMapleleaf": "Foglia di Acero Giapponese",
    "plant.birdOfParadise": "Uccello del Paradiso",
    "plant.peaceLily": "Giglio della Pace",
    "plant.family": "Famiglia",
    "plant.nativeRegion": "Regione Nativa",
    "plant.characteristics": "Caratteristiche Chiave",
    "plant.toxicity": "Tossicità",
    "plant.nonToxic": "Non tossico",
    "plant.mildlyToxic": "Leggermente tossico",
    "plant.toxic": "Tossico",
    "plant.careLevel": "Livello di Cura",
    "plant.easy": "Facile",
    "plant.moderate": "Moderato",
    "plant.difficult": "Difficile",
    "plant.sunlight": "Luce Solare",
    "plant.fullSun": "Pieno sole",
    "plant.partialSun": "Sole parziale",
    "plant.shade": "Ombra",
    "plant.water": "Acqua",
    "plant.low": "Basso",
    "plant.medium": "Medio",
    "plant.high": "Alto",

    // Footer
    "footer.product": "Prodotto",
    "footer.features": "Caratteristiche",
    "footer.download": "Scarica",
    "footer.company": "Azienda",
    "footer.about": "Chi siamo",
    "footer.privacy": "Privacy",
    "footer.connect": "Connetti",
    "footer.contact": "Contatto",
    "footer.languages": "Lingue",
    "footer.copyright": "© 2025 UseVerdant. Tutti i diritti riservati.",
  },
  pt: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "Fotografe uma planta. Conheça-a instantaneamente.",
    "hero.description":
      "Identifique plantas, aprenda seu impacto e obtenha insights de especialistas com reconhecimento de plantas alimentado por IA.",
    "hero.download": "Baixar na App Store",

    // Plant Details
    "plant.sacredLotus": "Lótus Sagrado",
    "plant.sunflower": "Girassol",
    "plant.japaneseMapleleaf": "Folha de Bordo Japonês",
    "plant.birdOfParadise": "Ave do Paraíso",
    "plant.peaceLily": "Lírio da Paz",
    "plant.family": "Família",
    "plant.nativeRegion": "Região Nativa",
    "plant.characteristics": "Características Principais",
    "plant.toxicity": "Toxicidade",
    "plant.nonToxic": "Não tóxico",
    "plant.mildlyToxic": "Levemente tóxico",
    "plant.toxic": "Tóxico",
    "plant.careLevel": "Nível de Cuidado",
    "plant.easy": "Fácil",
    "plant.moderate": "Moderado",
    "plant.difficult": "Difícil",
    "plant.sunlight": "Luz Solar",
    "plant.fullSun": "Sol pleno",
    "plant.partialSun": "Sol parcial",
    "plant.shade": "Sombra",
    "plant.water": "Água",
    "plant.low": "Baixo",
    "plant.medium": "Médio",
    "plant.high": "Alto",

    // Footer
    "footer.product": "Produto",
    "footer.features": "Recursos",
    "footer.download": "Baixar",
    "footer.company": "Empresa",
    "footer.about": "Sobre",
    "footer.privacy": "Privacidade",
    "footer.connect": "Conectar",
    "footer.contact": "Contato",
    "footer.languages": "Idiomas",
    "footer.copyright": "© 2025 UseVerdant. Todos os direitos reservados.",
  },
  zh: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "拍摄植物。立即识别。",
    "hero.description": "通过AI驱动的植物识别，识别植物、了解其影响并获得专家见解。",
    "hero.download": "在App Store下载",

    // Plant Details
    "plant.sacredLotus": "圣莲",
    "plant.sunflower": "向日葵",
    "plant.japaneseMapleleaf": "日本枫叶",
    "plant.birdOfParadise": "天堂鸟",
    "plant.peaceLily": "和平百合",
    "plant.family": "科",
    "plant.nativeRegion": "原产地",
    "plant.characteristics": "主要特征",
    "plant.toxicity": "毒性",
    "plant.nonToxic": "无毒",
    "plant.mildlyToxic": "轻微毒性",
    "plant.toxic": "有毒",
    "plant.careLevel": "护理难度",
    "plant.easy": "容易",
    "plant.moderate": "中等",
    "plant.difficult": "困难",
    "plant.sunlight": "阳光",
    "plant.fullSun": "全日照",
    "plant.partialSun": "半日照",
    "plant.shade": "阴凉",
    "plant.water": "水分",
    "plant.low": "低",
    "plant.medium": "中",
    "plant.high": "高",

    // Footer
    "footer.product": "产品",
    "footer.features": "功能",
    "footer.download": "下载",
    "footer.company": "公司",
    "footer.about": "关于",
    "footer.privacy": "隐私",
    "footer.connect": "连接",
    "footer.contact": "联系",
    "footer.languages": "语言",
    "footer.copyright": "© 2025 UseVerdant. 保留所有权利。",
  },
  ja: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "植物を撮影。瞬時に識別。",
    "hero.description": "AI搭載の植物認識で植物を識別し、その影響を学び、専門家の洞察を得ましょう。",
    "hero.download": "App Storeでダウンロード",

    // Plant Details
    "plant.sacredLotus": "聖なる蓮",
    "plant.sunflower": "ひまわり",
    "plant.japaneseMapleleaf": "日本のカエデの葉",
    "plant.birdOfParadise": "極楽鳥花",
    "plant.peaceLily": "平和のユリ",
    "plant.family": "科",
    "plant.nativeRegion": "原産地",
    "plant.characteristics": "主な特徴",
    "plant.toxicity": "毒性",
    "plant.nonToxic": "無毒",
    "plant.mildlyToxic": "軽度の毒性",
    "plant.toxic": "有毒",
    "plant.careLevel": "ケアレベル",
    "plant.easy": "簡単",
    "plant.moderate": "普通",
    "plant.difficult": "困難",
    "plant.sunlight": "日光",
    "plant.fullSun": "直射日光",
    "plant.partialSun": "半日陰",
    "plant.shade": "日陰",
    "plant.water": "水",
    "plant.low": "少ない",
    "plant.medium": "普通",
    "plant.high": "多い",

    // Footer
    "footer.product": "製品",
    "footer.features": "機能",
    "footer.download": "ダウンロード",
    "footer.company": "会社",
    "footer.about": "について",
    "footer.privacy": "プライバシー",
    "footer.connect": "接続",
    "footer.contact": "連絡先",
    "footer.languages": "言語",
    "footer.copyright": "© 2025 UseVerdant. 全著作権所有。",
  },
  ko: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "식물을 촬영하세요. 즉시 식별하세요.",
    "hero.description": "AI 기반 식물 인식으로 식물을 식별하고, 그 영향을 배우며, 전문가 통찰을 얻으세요.",
    "hero.download": "App Store에서 다운로드",

    // Plant Details
    "plant.sacredLotus": "신성한 연꽃",
    "plant.sunflower": "해바라기",
    "plant.japaneseMapleleaf": "일본 단풍잎",
    "plant.birdOfParadise": "극락조화",
    "plant.peaceLily": "평화 백합",
    "plant.family": "과",
    "plant.nativeRegion": "원산지",
    "plant.characteristics": "주요 특징",
    "plant.toxicity": "독성",
    "plant.nonToxic": "무독성",
    "plant.mildlyToxic": "약간 독성",
    "plant.toxic": "독성",
    "plant.careLevel": "관리 수준",
    "plant.easy": "쉬움",
    "plant.moderate": "보통",
    "plant.difficult": "어려움",
    "plant.sunlight": "햇빛",
    "plant.fullSun": "직사광선",
    "plant.partialSun": "부분 햇빛",
    "plant.shade": "그늘",
    "plant.water": "물",
    "plant.low": "적음",
    "plant.medium": "보통",
    "plant.high": "많음",

    // Footer
    "footer.product": "제품",
    "footer.features": "기능",
    "footer.download": "다운로드",
    "footer.company": "회사",
    "footer.about": "소개",
    "footer.privacy": "개인정보",
    "footer.connect": "연결",
    "footer.contact": "연락처",
    "footer.languages": "언어",
    "footer.copyright": "© 2025 UseVerdant. 모든 권리 보유.",
  },
  ar: {
    // Hero Section
    "hero.title": "UseVerdant",
    "hero.subtitle": "التقط صورة نبات. اعرفه فوراً.",
    "hero.description":
      "تعرف على النباتات، وتعلم تأثيرها، واحصل على رؤى الخبراء مع التعرف على النباتات المدعوم بالذكاء الاصطناعي.",
    "hero.download": "تحميل من متجر التطبيقات",

    // Plant Details
    "plant.sacredLotus": "اللوتس المقدس",
    "plant.sunflower": "عباد الشمس",
    "plant.japaneseMapleleaf": "ورقة القيقب الياباني",
    "plant.birdOfParadise": "طائر الجنة",
    "plant.peaceLily": "زنبق السلام",
    "plant.family": "العائلة",
    "plant.nativeRegion": "المنطقة الأصلية",
    "plant.characteristics": "الخصائص الرئيسية",
    "plant.toxicity": "السمية",
    "plant.nonToxic": "غير سام",
    "plant.mildlyToxic": "سام قليلاً",
    "plant.toxic": "سام",
    "plant.careLevel": "مستوى العناية",
    "plant.easy": "سهل",
    "plant.moderate": "متوسط",
    "plant.difficult": "صعب",
    "plant.sunlight": "ضوء الشمس",
    "plant.fullSun": "شمس كاملة",
    "plant.partialSun": "شمس جزئية",
    "plant.shade": "ظل",
    "plant.water": "ماء",
    "plant.low": "قليل",
    "plant.medium": "متوسط",
    "plant.high": "عالي",

    // Footer
    "footer.product": "المنتج",
    "footer.features": "الميزات",
    "footer.download": "تحميل",
    "footer.company": "الشركة",
    "footer.about": "حول",
    "footer.privacy": "الخصوصية",
    "footer.connect": "اتصل",
    "footer.contact": "اتصال",
    "footer.languages": "اللغات",
    "footer.copyright": "© 2025 UseVerdant. جميع الحقوق محفوظة.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language)
  }

  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
