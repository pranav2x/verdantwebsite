import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information
              when you use Verdant.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Photos:</strong> We process the plant photos you take for identification purposes. Photos are
                  not stored on our servers unless you choose to save them to your collection.
                </p>
                <p>
                  <strong>Usage Data:</strong> We collect anonymous usage statistics to improve our AI models and app
                  performance.
                </p>
                <p>
                  <strong>Account Information:</strong> If you create an account, we store your email address and any
                  profile information you provide.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Plant Identification:</strong> Photos are processed by our AI to identify plants and provide
                  information.
                </p>
                <p>
                  <strong>App Improvement:</strong> Anonymous usage data helps us improve identification accuracy and
                  app features.
                </p>
                <p>
                  <strong>Communication:</strong> We may send you updates about the app or respond to your support
                  requests.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use industry-standard encryption to protect your data in transit and at rest.</p>
                <p>Your photos are processed securely and are not shared with third parties.</p>
                <p>You can delete your account and all associated data at any time through the app settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to access, update, or delete your personal information.</p>
                <p>You can opt out of data collection for app improvement purposes in the settings.</p>
                <p>You can contact us at privacy@verdantapp.com for any privacy-related questions.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy, please contact us at privacy@verdantapp.com or
                through our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>

            <div className="text-sm text-muted-foreground border-t border-border pt-8">
              <p>Last updated: December 15, 2024</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
