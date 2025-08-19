import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
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
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-8">Contact Us</h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>

          <div className="grid gap-8 mb-12">
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">General Inquiries</h2>
              <p className="text-muted-foreground mb-2">hello@verdantapp.com</p>
              <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Technical Support</h2>
              <p className="text-muted-foreground mb-2">support@verdantapp.com</p>
              <p className="text-sm text-muted-foreground">For app issues, bugs, or technical questions</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Business Partnerships</h2>
              <p className="text-muted-foreground mb-2">partnerships@verdantapp.com</p>
              <p className="text-sm text-muted-foreground">For collaboration opportunities and business inquiries</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">You can also reach us on social media</p>
            <div className="flex justify-center gap-4">
              <Link href="/twitter">
                <Button variant="outline">Twitter</Button>
              </Link>
              <Link href="/instagram">
                <Button variant="outline">Instagram</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
