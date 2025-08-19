"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function VerdantLanding() {
  const heroImageRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="min-h-screen bg-background">
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
                  UseVerdant
                </h1>
                <p className="text-2xl lg:text-3xl text-black font-semibold tracking-wide">
                  Snap a plant. Know instantly.
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg font-bold">
                  Identify plants, learn their impact, and get expert insights with our AI-powered plant identification
                  app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ring-2 ring-green-500/20 hover:ring-green-500/40 shimmer-effect"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on App Store
                </Button>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="relative z-10" ref={heroImageRef}>
                <div className="relative w-full max-w-lg mx-auto">
                  <div
                    className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl drop-shadow-2xl w-64 h-[32rem] z-40"
                    style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))" }}
                  >
                    <div className="bg-white rounded-[2rem] overflow-hidden w-full h-full relative">
                      {/* Camera viewfinder with lotus flowers */}
                      <div className="relative flex-1 bg-gray-100 h-full">
                        <img
                          src="/pink-lotus-pond.png"
                          alt="Lotus flowers in camera view"
                          className="w-full h-full object-cover"
                        />

                        {/* Camera scanning frame */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-48 h-36">
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
                          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 border-2 border-white rounded-full"></div>
                          </div>
                          <div className="w-8"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -right-16 top-20 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl drop-shadow-2xl w-64 h-[32rem] z-30"
                    style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))" }}
                  >
                    <div className="bg-white rounded-[2rem] overflow-hidden w-full h-full relative">
                      <div className="p-4 bg-white h-full flex flex-col">
                        {/* Header with plant image and name */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                            <img src="/pink-lotus-pond.png" alt="Lotus" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800">Sacred Lotus</h3>
                            <p className="text-sm text-gray-600 italic">Nelumbo nucifera</p>
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

                        <div className="text-xs text-gray-600 mb-3">
                          <span className="font-medium">Scientific name:</span> Nelumbo nucifera
                        </div>

                        <div className="text-xs text-gray-600 mb-3">
                          <span className="font-medium">Family:</span> Nelumbonaceae
                        </div>

                        <div className="text-xs text-gray-600 mb-3">
                          <span className="font-medium">Native to:</span> Asia and Australia
                        </div>

                        <div className="flex gap-4 text-xs text-gray-500 mb-4">
                          <span className="text-blue-600 border-b border-blue-600 pb-1">Basic info</span>
                          <span>Care</span>
                          <span>Uses</span>
                        </div>

                        <div className="space-y-2 text-xs text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Aquatic perennial plant</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Blooms in summer</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Sacred in many cultures</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>Edible seeds and roots</span>
                          </div>
                        </div>

                        <div className="text-xs text-gray-600 mb-4">More examples of Sacred Lotus</div>

                        <div className="mt-auto">
                          <button className="w-full bg-blue-500 text-white text-sm py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                            + Add to My Collection
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-16 top-32 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 w-40">
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

                    <div className="absolute -right-20 top-48 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 w-40">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">Beneficial</p>
                          <p className="text-xs text-gray-600">to ecosystem</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-24 top-64 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 w-40">
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
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">UseVerdant</h3>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-black">Product</h4>
              <ul className="space-y-2 text-black font-bold">
                <li>
                  <Link href="/features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-foreground transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-black">Company</h4>
              <ul className="space-y-2 text-black font-bold">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-black">Connect</h4>
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

            <div className="space-y-4">
              <h4 className="font-bold text-black">Contact</h4>
              <ul className="space-y-2 text-black font-bold">
                <li>
                  <a href="mailto:useverdantai@gmail.com" className="hover:text-foreground transition-colors">
                    useverdantai@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 mt-8 pt-8 text-center text-black font-bold">
            <p>&copy; 2025 UseVerdant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
