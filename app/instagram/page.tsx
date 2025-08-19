import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InstagramPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Follow Us on Instagram</h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Discover beautiful plant photography, identification stories, and botanical inspiration from our community.
          </p>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">@verdant.app</h2>
            <p className="text-muted-foreground mb-6">
              Beautiful plant photography, identification success stories, and daily botanical inspiration. Join our
              visual journey through the plant kingdom.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @verdant.app
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Visual content:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stunning plant photography</li>
                <li>• Before/after plant care transformations</li>
                <li>• User-submitted plant discoveries</li>
                <li>• Botanical art and illustrations</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Community features:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tag us in your plant photos</li>
                <li>• Stories and reels about plant care</li>
                <li>• Live Q&A sessions with botanists</li>
                <li>• Plant identification challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
