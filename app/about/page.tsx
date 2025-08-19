import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">About Verdant</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Verdant was born from a simple idea: everyone should be able to connect with the natural world around
              them, regardless of their botanical knowledge.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that understanding plants and nature should be accessible to everyone. Our AI-powered plant
                  identification technology makes it easy for anyone to learn about the plants they encounter, fostering
                  a deeper connection with the natural world.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where people are more connected to nature, where plant knowledge is democratized,
                  and where technology serves as a bridge between humans and the botanical world around us.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2024 by a team of botanists, AI researchers, and nature enthusiasts, Verdant combines
                cutting-edge machine learning with comprehensive botanical databases to create the most accurate plant
                identification app available.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team has spent years training our AI models on millions of plant images, working with botanical
                experts worldwide to ensure accuracy and reliability. We're committed to making plant identification not
                just accurate, but also educational and inspiring.
              </p>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
