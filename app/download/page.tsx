import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            Verdant
          </Link>
          <Link href="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Download Verdant</h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Get Verdant on your device and start identifying plants instantly. Available for iOS and Android.
          </p>

          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-sm"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </Button>

            <p className="text-sm text-muted-foreground">Coming soon to Android</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">System Requirements</h3>
              <p className="text-sm text-muted-foreground">iOS 14.0 or later</p>
              <p className="text-sm text-muted-foreground">Camera access required</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">App Size</h3>
              <p className="text-sm text-muted-foreground">45.2 MB</p>
              <p className="text-sm text-muted-foreground">Additional data downloaded as needed</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Languages</h3>
              <p className="text-sm text-muted-foreground">English, Spanish, French</p>
              <p className="text-sm text-muted-foreground">More languages coming soon</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
