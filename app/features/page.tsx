import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl sm:text-2xl font-bold text-foreground">
            Verdant
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-sm sm:text-base touch-manipulation">← Back to Home</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 text-center sm:text-left">Features</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-muted/30 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">AI Plant Identification</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Instantly identify any plant with our advanced AI technology. Simply snap a photo and get detailed
                information about the species, care instructions, and more.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-muted/30 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Plant Care Guide</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Get personalized care instructions for each plant you identify. Learn about watering schedules, sunlight
                requirements, and optimal growing conditions.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-muted/30 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Toxicity Information</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Stay safe with comprehensive toxicity information for pets and humans. Know which plants are safe to
                have around your family and furry friends.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-muted/30 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Plant Collection</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Build your personal plant collection and track your discoveries. Keep notes, photos, and care reminders
                for all your identified plants.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/download">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto min-h-[48px] touch-manipulation">
                Download Verdant Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
