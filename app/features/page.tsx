import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Features</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">AI Plant Identification</h2>
              <p className="text-muted-foreground leading-relaxed">
                Instantly identify any plant with our advanced AI technology. Simply snap a photo and get detailed
                information about the species, care instructions, and more.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Plant Care Guide</h2>
              <p className="text-muted-foreground leading-relaxed">
                Get personalized care instructions for each plant you identify. Learn about watering schedules, sunlight
                requirements, and optimal growing conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Toxicity Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stay safe with comprehensive toxicity information for pets and humans. Know which plants are safe to
                have around your family and furry friends.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Plant Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Build your personal plant collection and track your discoveries. Keep notes, photos, and care reminders
                for all your identified plants.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/download">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Download Verdant Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
