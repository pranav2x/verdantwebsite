import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            UseVerdant
          </Link>
          <Link href="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">About UseVerdant</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              UseVerdant was born from a simple idea: everyone should be able to connect with the natural world around
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
                UseVerdant was founded in 2024 by Ehsan (16) and Pranav (15), two passionate environmental advocates who
                met through their school's environmental club. Their shared love for nature and competitive spirit in
                Envirothon competitions sparked the idea for an AI-powered plant identification app.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through countless hours spent studying ecosystems and participating in environmental competitions, Ehsan
                and Pranav realized that many people struggle to identify the plants around them. They saw an
                opportunity to bridge this knowledge gap using technology, making botanical expertise accessible to
                everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a school project has evolved into a comprehensive platform that combines their
                environmental knowledge with cutting-edge AI technology. Their goal is to inspire others to connect with
                nature the same way their environmental club and Envirothon experiences connected them to the natural
                world.
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
