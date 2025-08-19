"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import LanguagesDropdown from "@/components/LanguagesDropdown"
import { useLanguage } from "@/contexts/LanguageContext"

export default function VerdantLanding() {
  const heroImageRef = useRef<HTMLDivElement>(null)
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0)
  const [showSecret, setShowSecret] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const { t } = useLanguage()

  const plants = [
    {
      name: t("plant.sacredLotus"),
      scientific: "Nelumbo nucifera",
      family: "Nelumbonaceae",
      native: "Asia and Australia",
      image: "/pink-lotus-pond.png",
      description:
        "The sacred lotus is revered across many cultures for its spiritual significance and remarkable ability to emerge pristine from muddy waters. This aquatic perennial produces stunning pink or white flowers up to 8 inches in diameter.",
      characteristics: [
        { text: "Aquatic perennial plant", color: "green" },
        { text: "Blooms in summer months", color: "blue" },
        { text: "Sacred in Buddhism & Hinduism", color: "purple" },
        { text: "Edible seeds and roots", color: "orange" },
        { text: "Self-cleaning leaves", color: "red" },
        { text: "Symbolizes purity & rebirth", color: "pink" },
      ],
    },
    {
      name: t("plant.sunflower"),
      scientific: "Helianthus annuus",
      family: "Asteraceae",
      native: "North America",
      image: "/bright-sunflower-field.png",
      description:
        "Sunflowers are iconic for their impressive height and bright yellow petals. These remarkable plants exhibit heliotropism, turning their flower heads to follow the sun's path across the sky.",
      characteristics: [
        { text: "Annual flowering plant", color: "green" },
        { text: "Follows sun movement daily", color: "blue" },
        { text: "Produces edible oil-rich seeds", color: "purple" },
        { text: "Attracts bees & butterflies", color: "orange" },
        { text: "Can grow 12+ feet tall", color: "red" },
        { text: "Native American crop", color: "pink" },
      ],
    },
    {
      name: t("plant.japaneseMapleleaf"),
      scientific: "Acer palmatum",
      family: "Sapindaceae",
      native: "Japan and Korea",
      image: "/red-japanese-maple-leaves.png",
      description:
        "Japanese maples are prized ornamental trees known for their delicate, hand-shaped leaves and spectacular autumn colors. These deciduous trees come in hundreds of cultivars with stunning seasonal displays.",
      characteristics: [
        { text: "Deciduous ornamental tree", color: "green" },
        { text: "Stunning fall color display", color: "blue" },
        { text: "Popular in Japanese gardens", color: "purple" },
        { text: "Shade tolerant species", color: "orange" },
        { text: "Over 300 cultivars available", color: "red" },
        { text: "Delicate palmate leaves", color: "pink" },
      ],
    },
    {
      name: t("plant.birdOfParadise"),
      scientific: "Strelitzia reginae",
      family: "Strelitziaceae",
      native: "South Africa",
      image: "/orange-bird-of-paradise.png",
      description:
        "The Bird of Paradise is renowned for its exotic, bird-like flowers featuring vibrant orange and blue petals. This tropical plant reaches 5-6 feet in height with large, paddle-shaped leaves.",
      characteristics: [
        { text: "Tropical flowering plant", color: "green" },
        { text: "Distinctive bird-like flowers", color: "blue" },
        { text: "Popular indoor houseplant", color: "purple" },
        { text: "Needs bright indirect light", color: "orange" },
        { text: "Large paddle-shaped leaves", color: "red" },
        { text: "Symbol of tropical paradise", color: "pink" },
      ],
    },
    {
      name: t("plant.peaceLily"),
      scientific: "Spathiphyllum wallisii",
      family: "Araceae",
      native: "Central America",
      image: "/white-peace-lily.png",
      description:
        "Peace lilies are beloved houseplants known for their elegant white flowers and glossy green foliage. These plants are excellent air purifiers and relatively low-maintenance for beginners.",
      characteristics: [
        { text: "Indoor flowering plant", color: "green" },
        { text: "Excellent air purifying qualities", color: "blue" },
        { text: "Low light tolerant species", color: "purple" },
        { text: "Easy care for beginners", color: "orange" },
        { text: "Droops when needs water", color: "red" },
        { text: "White spathes not true flowers", color: "pink" },
      ],
    },
  ]

  const currentPlant = plants[currentPlantIndex]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".animate-on-scroll")
    sections.forEach((section) => observer.observe(section))

    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.3
        heroImageRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlantIndex((prevIndex) => (prevIndex + 1) % plants.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [plants.length])

  useEffect(() => {
    const fullText = t("hero.description")
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typeInterval)
      }
    }, 80) // Adjust speed - 80ms per character gives about 5 seconds for full sentence

    return () => clearInterval(typeInterval)
  }, [t])

  const handleSecretClick = () => {
    setShowSecret(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {showSecret && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-300">
          <div className="relative bg-gradient-to-br from-background via-background/95 to-primary/10 rounded-3xl p-8 mx-4 text-center shadow-2xl max-w-md border border-primary/20 animate-in zoom-in-95 duration-300 backdrop-blur-lg">
            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-green-600/20 to-primary/25 rounded-full blur-xl"></div>
            
            {/* Gift icon with animation */}
            <div className="relative mb-6">
              <div className="text-5xl animate-bounce">🎁</div>
              <div className="absolute inset-0 text-5xl animate-pulse opacity-50">✨</div>
            </div>
            
            {/* Title with clean contrasting text */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
              Made by Pranav and Ehsan
            </h2>
            <div className="text-2xl mb-4">❤️</div>
            
            {/* Subtitle with clean typography */}
            <p className="text-lg font-medium text-foreground mb-6">
              Special Founders' Gift
            </p>
            
            {/* Code container with themed styling */}
            <div className="relative mb-6">
              <div className="bg-foreground/5 border-2 border-primary/30 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-foreground mb-2">Use Code</p>
                <code className="text-2xl font-bold text-foreground tracking-wider font-mono">
                  FOUNDERSGIFT10
                </code>
              </div>
            </div>
            
            {/* Footer text with clean styling */}
            <p className="text-foreground font-medium">
              Get 10% off your first order! 🌱
            </p>
            
            {/* Close button */}
            <button 
              onClick={() => setShowSecret(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-foreground/10 hover:bg-foreground/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-primary/20"
            >
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .hero-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        

        
        /* Fixed swipe animation to prevent white flash by using opacity transitions and proper background coverage */
        .plant-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #f3f4f6;
        }
        
        .plant-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.6s ease-in-out;
        }
        
        .plant-image.active {
          opacity: 1;
        }
        
        .plant-image.inactive {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 md:opacity-60"
          style={{
            backgroundImage: "url('/forest-canopy-illustration.png')",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            height: "100%",
            minHeight: "100vh",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
        
        {/* Languages Dropdown in top-right corner */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
          <LanguagesDropdown />
        </div>
        
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-24 max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center min-h-[calc(100vh-4rem)] sm:min-h-[80vh]">
            <div className="space-y-6 sm:space-y-8 animate-on-scroll flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-none">
                  {t("hero.title")}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-semibold tracking-wide">{t("hero.subtitle")}</p>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg font-bold mx-auto lg:mx-0">
                  {typedText}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px] touch-manipulation"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t("hero.download")}
                </Button>
              </div>
            </div>

            <div className="relative animate-on-scroll flex justify-center order-1 lg:order-2 w-full">
              <div className="relative z-10 w-full max-w-2xl lg:max-w-4xl" ref={heroImageRef}>
                <div className="relative">
                  {/* Mobile: Stack phones vertically, Desktop: Side by side */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 md:gap-3 lg:gap-4 sm:pl-4 md:pl-8 lg:pl-16">
                    {/* First phone - Scanner Screen */}
                    <div
                      className="relative bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-2xl drop-shadow-2xl w-[200px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[320px] h-[24rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem] xl:h-[36rem] z-40 flex-shrink-0"
                      style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))" }}
                    >
                      <div className="bg-white rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden w-full h-full relative">
                        <div className="relative flex-1 bg-gray-100 h-full overflow-hidden">
                          <div className="plant-container">
                            {plants.map((plant, index) => (
                              <img
                                key={index}
                                src={plant.image || "/placeholder.svg"}
                                alt={`${plant.name} in camera view`}
                                className={`plant-image ${index === currentPlantIndex ? "active" : "inactive"}`}
                              />
                            ))}
                          </div>

                          {/* Camera scanning frame */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-32 sm:w-40 md:w-48 lg:w-64 h-24 sm:h-28 md:h-32 lg:h-44">
                              <div className="border-2 border-white rounded-lg w-full h-full shadow-lg">
                                <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-l-4 border-t-4 border-white rounded-tl-lg"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-r-4 border-t-4 border-white rounded-tr-lg"></div>
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-l-4 border-b-4 border-white rounded-bl-lg"></div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-r-4 border-b-4 border-white rounded-br-lg"></div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 bg-white py-3 sm:py-4 md:py-6 flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
                            <button className="bg-gray-100 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-2 touch-manipulation min-h-[40px] min-w-[40px]">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                              </svg>
                            </button>
                            <button
                              onClick={handleSecretClick}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer touch-manipulation"
                            >
                              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 border-2 border-white rounded-full"></div>
                            </button>
                            <div className="w-4 sm:w-6 md:w-8"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second phone - Details/Info Screen */}
                    <div className="relative mt-4 sm:mt-8 md:mt-12 lg:mt-16">
                      <div
                        className="relative bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-2xl drop-shadow-2xl w-[200px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[320px] h-[24rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem] xl:h-[36rem] z-30 flex-shrink-0"
                        style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))" }}
                      >
                        <div className="bg-white rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden w-full h-full relative">
                          <div className="p-3 sm:p-4 md:p-6 bg-white h-full flex flex-col overflow-y-auto">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                  src={currentPlant.image || "/placeholder.svg"}
                                  alt={currentPlant.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 truncate">{currentPlant.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 italic truncate">{currentPlant.scientific}</p>
                              </div>
                              <div className="flex gap-1 flex-shrink-0">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded flex items-center justify-center">
                                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 2l3 8h8l-6.5 5 2.5 8L9 18l-7 5 2.5-8L-2 10h8L9 2z" />
                                  </svg>
                                </div>
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded flex items-center justify-center">
                                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3 sm:mb-4">
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{currentPlant.description}</p>
                            </div>

                            <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                              <span className="font-semibold">Scientific name:</span> {currentPlant.scientific}
                            </div>

                            <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                              <span className="font-semibold">Family:</span> {currentPlant.family}
                            </div>

                            <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                              <span className="font-semibold">Native to:</span> {currentPlant.native}
                            </div>

                            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                              <h4 className="font-semibold text-gray-800">Key Characteristics:</h4>
                              {currentPlant.characteristics.map((characteristic, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                                  <div
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 bg-${characteristic.color}-500 rounded-full flex-shrink-0`}
                                  ></div>
                                  <span className="text-gray-700 text-xs sm:text-sm">{characteristic.text}</span>
                                </div>
                              ))}
                            </div>

                            <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-medium">
                              More examples of {currentPlant.name}
                            </div>

                            <div className="mt-auto">
                              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors touch-manipulation min-h-[40px]">
                                + Add to My Collection
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Information bubbles positioned around the second phone - only show on very large screens */}
                        <div className="hidden 2xl:block absolute -right-16 top-8 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-40 w-36">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800">Non-toxic</p>
                              <p className="text-xs text-gray-600">to humans</p>
                            </div>
                          </div>
                        </div>

                        <div className="hidden 2xl:block absolute -right-20 top-24 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-40 w-36">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L22 9.27l-5 4.87 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800">Beneficial</p>
                              <p className="text-xs text-gray-600">to ecosystem</p>
                            </div>
                          </div>
                        </div>

                        <div className="hidden 2xl:block absolute -right-24 top-40 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-40 w-36">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800">Easy care</p>
                              <p className="text-xs text-gray-600">low maintenance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-black"></div>

      <footer className="relative bg-gradient-to-b from-background/80 to-foreground text-foreground py-8 sm:py-12 lg:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/forest-canopy-illustration.png')",
            backgroundPosition: "center bottom",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">{t("hero.title")}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto sm:mx-0">
                Discover, identify, and learn about plants with advanced AI technology.
              </p>
            </div>

            {/* Product Section */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="font-bold text-base sm:text-lg text-black">{t("footer.product")}</h4>
              <ul className="space-y-2 sm:space-y-3 text-black font-bold">
                <li>
                  <Link href="/features" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1 touch-manipulation">
                    {t("footer.features")}
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1 touch-manipulation">
                    {t("footer.download")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="font-bold text-base sm:text-lg text-black">{t("footer.company")}</h4>
              <ul className="space-y-2 sm:space-y-3 text-black font-bold">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1 touch-manipulation">
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1 touch-manipulation">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/updates" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1 touch-manipulation">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="font-bold text-base sm:text-lg text-black">{t("footer.connect")}</h4>
              <ul className="space-y-2 sm:space-y-3 text-black font-bold">
                <li>
                  <a
                    href="https://twitter.com/useverdantai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors text-sm sm:text-base flex items-center gap-2 justify-center sm:justify-start py-1 touch-manipulation min-h-[44px]"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/useverdantai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors text-sm sm:text-base flex items-center gap-2 justify-center sm:justify-start py-1 touch-manipulation min-h-[44px]"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.297-3.33c.881-.881 2.033-1.371 3.33-1.371c1.297 0 2.448.49 3.33 1.371c.881.882 1.371 2.033 1.371 3.33c0 1.297-.49 2.448-1.371 3.33c-.882.807-2.033 1.297-3.33 1.297zm7.598 0c-1.297 0-2.448-.49-3.33-1.297c-.881-.882-1.371-2.033-1.371-3.33c0-1.297.49-2.448 1.371-3.33c.882-.881 2.033-1.371 3.33-1.371c1.297 0 2.448.49 3.33 1.371c.881.882 1.371 2.033 1.371 3.33c0 1.297-.49 2.448-1.371 3.33c-.882.807-2.033 1.297-3.33 1.297z"/>
                    </svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-black font-bold text-sm sm:text-base">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
