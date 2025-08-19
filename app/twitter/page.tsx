import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TwitterPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Follow Us on Twitter</h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Stay updated with the latest plant discoveries, app updates, and botanical tips from the Verdant community.
          </p>

          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">@VerdantApp</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of plant enthusiasts sharing their discoveries, getting plant care tips, and connecting
              with nature through Verdant.
            </p>

            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Follow @VerdantApp
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">What you'll find:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Daily plant identification tips</li>
                <li>• App updates and new features</li>
                <li>• Community plant discoveries</li>
                <li>• Botanical facts and trivia</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Join the conversation:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Share your plant photos with #VerdantFinds</li>
                <li>• Ask questions and get help</li>
                <li>• Connect with plant lovers worldwide</li>
                <li>• Get featured on our feed</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
