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
    setTimeout(() => {
      setShowSecret(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      {showSecret && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl p-8 mx-4 text-center shadow-2xl max-w-md">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">You Found the Secret!</h2>
            <p className="text-lg text-gray-600 mb-4">Use Code</p>
            <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 mb-4">
              <code className="text-xl font-bold text-green-800">FOUNDERSGIFT10</code>
            </div>
            <p className="text-gray-600">On Your Order For a Discount!</p>
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
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%
          );
          animation: shimmer 3s infinite;
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/forest-canopy-illustration.png')",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            height: "100%",
            minHeight: "100vh",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll">
              <div className="space-y-6">
                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-none">
                  {t("hero.title")}
                </h1>
                <p className="text-2xl lg:text-3xl text-black font-semibold tracking-wide">{t("hero.subtitle")}</p>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg font-bold">
                  {typedText}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-10 py-5 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ring-2 ring-green-500/20 hover:ring-green-500/40 shimmer-effect"
                  style={{
                    filter:
                      "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 20px rgba(34, 197, 94, 0.4))",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                  }}
                >
                  <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t("hero.download")}
                </Button>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="relative z-10" ref={heroImageRef}>
                <div className="relative w-full max-w-2xl mx-auto">
                  <div
                    className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl drop-shadow-2xl w-[320px] h-[36rem] z-40"
                    style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))" }}
                  >
                    <div className="bg-white rounded-[1.5rem] overflow-hidden w-full h-full relative">
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
                          <div className="relative w-64 h-44">
                            <div className="border-2 border-white rounded-lg w-full h-full shadow-lg">
                              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-4 border-t-4 border-white rounded-tl-lg"></div>
                              <div className="absolute -top-1 -right-1 w-4 h-4 border-r-4 border-t-4 border-white rounded-tr-lg"></div>
                              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-4 border-b-4 border-white rounded-bl-lg"></div>
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-4 border-b-4 border-white rounded-br-lg"></div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-white py-6 flex justify-center items-center gap-8">
                          <button className="bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                          </button>
                          <button
                            onClick={handleSecretClick}
                            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
                          >
                            <div className="w-12 h-12 border-2 border-white rounded-full"></div>
                          </button>
                          <div className="w-8"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -right-12 top-16 bg-gray-900 rounded-[2rem] p-2 shadow-2xl drop-shadow-2xl w-[320px] h-[36rem] z-30"
                    style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))" }}
                  >
                    <div className="bg-white rounded-[1.5rem] overflow-hidden w-full h-full relative">
                      <div className="p-6 bg-white h-full flex flex-col overflow-y-auto">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                            <img
                              src={currentPlant.image || "/placeholder.svg"}
                              alt={currentPlant.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800">{currentPlant.name}</h3>
                            <p className="text-sm text-gray-600 italic">{currentPlant.scientific}</p>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 2l3 8h8l-6.5 5 2.5 8L9 18l-7 5 2.5-8L-2 10h8L9 2z" />
                              </svg>
                            </div>
                            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-700 leading-relaxed">{currentPlant.description}</p>
                        </div>

                        <div className="text-sm text-gray-600 mb-3">
                          <span className="font-semibold">Scientific name:</span> {currentPlant.scientific}
                        </div>

                        <div className="text-sm text-gray-600 mb-3">
                          <span className="font-semibold">Family:</span> {currentPlant.family}
                        </div>

                        <div className="text-sm text-gray-600 mb-4">
                          <span className="font-semibold">Native to:</span> {currentPlant.native}
                        </div>

                        <div className="space-y-3 text-sm text-gray-600 mb-6">
                          <h4 className="font-semibold text-gray-800">Key Characteristics:</h4>
                          {currentPlant.characteristics.map((characteristic, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                              <div
                                className={`w-3 h-3 bg-${characteristic.color}-500 rounded-full flex-shrink-0`}
                              ></div>
                              <span className="text-gray-700">{characteristic.text}</span>
                            </div>
                          ))}
                        </div>

                        <div className="text-sm text-gray-600 mb-4 font-medium">
                          More examples of {currentPlant.name}
                        </div>

                        <div className="mt-auto">
                          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                            + Add to My Collection
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-20 top-32 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 w-40">
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

                    <div className="absolute -right-24 top-48 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 w-40">
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

                    <div className="absolute -right-28 top-64 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 w-40">
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-black"></div>

      <footer className="relative bg-gradient-to-b from-background/80 to-foreground text-foreground py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/forest-canopy-illustration.png')",
            backgroundPosition: "center bottom",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">{t("hero.title")}</h3>
              <div className="space-y-1">
                <h4 className="font-bold text-black text-sm">{t("footer.contact")}</h4>
                <p className="text-black font-bold text-sm">
                  <a href="mailto:useverdantai@gmail.com" className="hover:text-foreground transition-colors">
                    useverdantai@gmail.com
                  </a>
                </p>
                <LanguagesDropdown />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-black">{t("footer.product")}</h4>
              <ul className="space-y-2 text-black font-bold">
                <li>
                  <Link href="/features" className="hover:text-foreground transition-colors">
                    {t("footer.features")}
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-foreground transition-colors">
                    {t("footer.download")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-black">{t("footer.company")}</h4>
              <ul className="space-y-2 text-black font-bold">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-black">{t("footer.connect")}</h4>
              <ul className="space-y-2 text-black font-bold">
                <li>
                  <a
                    href="https://twitter.com/useverdantai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/useverdantai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 mt-8 pt-8 text-center text-black font-bold">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
