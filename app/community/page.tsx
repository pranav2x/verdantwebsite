import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
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
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 text-center sm:text-left">Join Our Community</h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed text-center sm:text-left">
            Connect with fellow plant enthusiasts, share discoveries, and learn from experts in our growing community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Discord Server</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Join our active Discord community for real-time plant identification help, care advice, and botanical
                discussions.
              </p>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 min-h-[48px] touch-manipulation">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="text-sm sm:text-base">Join Discord</span>
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Reddit Community</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Participate in discussions, share plant photos, and get help from our knowledgeable Reddit community.
              </p>
              <Button variant="outline" className="w-full bg-transparent min-h-[48px] touch-manipulation">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
                <span className="text-sm sm:text-base">Visit r/VerdantApp</span>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 text-center sm:text-left">Community Guidelines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Be Respectful</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Treat all community members with kindness and respect, regardless of their plant knowledge level.
                </p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Share Knowledge</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Help others learn by sharing your plant care experiences and identification tips.
                </p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Stay On Topic</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Keep discussions focused on plants, gardening, and botanical topics.
                </p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">No Spam</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Avoid promotional content and keep discussions genuine and helpful.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Ready to Connect?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 px-4">
              Join thousands of plant lovers sharing their passion for botany and nature.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link href="/twitter">
                <Button variant="outline" className="w-full sm:w-auto min-h-[44px] touch-manipulation">Twitter</Button>
              </Link>
              <Link href="/instagram">
                <Button variant="outline" className="w-full sm:w-auto min-h-[44px] touch-manipulation">Instagram</Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full sm:w-auto min-h-[44px] touch-manipulation">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
