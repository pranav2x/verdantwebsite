import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UpdatesPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Updates & News</h1>

          <div className="space-y-8">
            <article className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">Latest</span>
                <span className="text-sm text-muted-foreground">December 15, 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Verdant 2.1 Released</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our biggest update yet includes improved AI accuracy, faster identification speeds, and a completely
                redesigned plant care guide. We've also added support for identifying plant diseases and pests.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>25% faster plant identification</li>
                <li>New disease and pest detection</li>
                <li>Enhanced care recommendations</li>
                <li>Improved offline mode</li>
              </ul>
            </article>

            <article className="border-l-4 border-muted pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">November 28, 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Community Features Launch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Connect with fellow plant enthusiasts! Share your discoveries, get help with plant care, and join local
                plant communities through our new social features.
              </p>
            </article>

            <article className="border-l-4 border-muted pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">October 12, 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Verdant Reaches 1 Million Downloads</h2>
              <p className="text-muted-foreground leading-relaxed">
                Thank you to our amazing community! We've reached 1 million downloads and identified over 10 million
                plants worldwide. Here's to many more botanical discoveries together.
              </p>
            </article>

            <article className="border-l-4 border-muted pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">September 5, 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Verdant 2.0 - Major Update</h2>
              <p className="text-muted-foreground leading-relaxed">
                Complete app redesign with improved user interface, new plant database with 50,000+ species, and
                enhanced AI models for better accuracy.
              </p>
            </article>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to stay updated? Follow us for the latest news and updates.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/twitter">
                <Button variant="outline">Follow on Twitter</Button>
              </Link>
              <Link href="/community">
                <Button variant="outline">Join Community</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
