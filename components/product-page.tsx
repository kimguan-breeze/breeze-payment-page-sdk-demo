import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Truck, RefreshCw, Star } from "lucide-react"

export function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl text-foreground">MerchantStore</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Details Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="aspect-square bg-card rounded-lg overflow-hidden border border-border">
              <img
                src="/premium-wireless-headphones-product-shot.jpg"
                alt="Premium Wireless Headphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Premium Audio
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-card-foreground text-balance">
                  Premium Wireless Headphones
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold text-secondary">$299.99</span>
                  <span className="text-muted-foreground line-through ml-2">$399.99</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground leading-relaxed">
                  Experience premium sound quality with our flagship wireless headphones. Featuring active noise
                  cancellation, 30-hour battery life, and premium materials for the ultimate listening experience.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Active Noise Cancellation (ANC)</li>
                    <li>• 30-hour battery life with quick charge</li>
                    <li>• Premium leather and aluminum construction</li>
                    <li>• Hi-Res Audio certified</li>
                    <li>• Multipoint Bluetooth connectivity</li>
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 border-border bg-transparent">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Secure Checkout</CardTitle>
                <CardDescription>Complete your purchase securely with our trusted payment system</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Payment Iframe */}
                <div className="border border-border rounded-lg overflow-hidden bg-background">
                  <iframe
                    src="https://link.qa.breeze.cash/link/plink_80126366fcbaa311"
                    className="w-full h-[70vh] border-0"
                    title="Secure Payment Checkout"
                    sandbox="allow-scripts allow-forms allow-same-origin"
                  />
                </div>
              </CardContent>
            </Card>

          
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                Support
              </a>
            </div>
            <p className="text-sm text-sidebar-foreground">© 2024 MerchantStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
