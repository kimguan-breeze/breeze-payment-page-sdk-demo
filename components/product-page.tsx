"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { BreezePaymentPage, PaymentPageStatus } from "@breeze.cash/ui";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { addToPaymentHistory } from "@/app/payment-history";
import { Suspense, useCallback, useEffect, useState } from "react";

function ProductImage() {
  return (
    <div className="aspect-square bg-card rounded-lg overflow-hidden border border-border">
      <img
        src="/premium-wireless-headphones-product-shot.jpg"
        alt="Premium Wireless Headphones"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ProductRating() {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
      ))}
      <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
    </div>
  );
}

function ProductFeatures() {
  return (
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
  );
}

function ProductInfo() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className="bg-secondary text-secondary-foreground"
          >
            Premium Audio
          </Badge>
          <ProductRating />
        </div>
        <CardTitle className="text-3xl font-bold text-card-foreground text-balance">
          Premium Wireless Headphones
        </CardTitle>
        <CardDescription className="text-lg">
          <span className="text-3xl font-bold text-secondary">$299.99</span>
          <span className="text-muted-foreground line-through ml-2">
            $399.99
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-card-foreground leading-relaxed">
          Experience premium sound quality with our flagship wireless
          headphones. Featuring active noise cancellation, 30-hour battery life,
          and premium materials for the ultimate listening experience.
        </p>
        <ProductFeatures />
      </CardContent>
    </Card>
  );
}

function PaymentSection() {
  const router = useRouter();
  const [paymentPage, setPaymentPage] = useState<{
    pageId: string;
    clientSecret: string;
  }>();

  const params = useSearchParams();
  const isIframe = params?.get("iframe") === "true";

  const handleIFrameRequest = useCallback(
    async (event: MessageEvent) => {
      if (event.data.type === "request-global-config") {
        const iframe = document.querySelector("iframe");
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            {
              type: "request-global-config",
              config: {
                applePayEnabled: true,
                crossDomainName: location.host,
              },
            },
            "*"
          );
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    window.addEventListener("message", handleIFrameRequest);

    return () => {
      window.removeEventListener("message", handleIFrameRequest);
    };
  }, [handleIFrameRequest]);

  useEffect(() => {
    const createPaymentPage = async () => {
      const res = await fetch("/api/payment_page", {
        method: "POST",
      });
      const data = await res.json();
      setPaymentPage({ pageId: data.id, clientSecret: data.clientSecret });
    };
    createPaymentPage();
  }, []);

  if (!paymentPage) return null;

  const handlePaymentStatusChange = (status: PaymentPageStatus) => {
    switch (status) {
      case "PAID":
        addToPaymentHistory(paymentPage.pageId);
        router.push("/success");
        break;
      case "EXPIRED":
        router.push("/expired");
        break;
      default:
        break;
    }
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground">
          Secure Checkout
        </CardTitle>
        <CardDescription>
          Complete your purchase securely with our trusted payment system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border border-border rounded-lg overflow-hidden bg-background h-[100vh]">
          {isIframe ? (
            <iframe
              id="breeze-payment-page"
              src={`https://pay.qa.breeze.cash/${paymentPage.pageId}/${paymentPage.clientSecret}`}
              className="w-full h-full"
              allow="payment *"
            />
          ) : (
            <BreezePaymentPage
              pageId={paymentPage.pageId}
              clientSecret={paymentPage.clientSecret}
              style={{
                width: "100%",
                height: "100%",
              }}
              sandbox
              onPaymentStatusChange={handlePaymentStatusChange}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <ProductImage />
          <ProductInfo />
        </div>
        <div className="space-y-6">
          <Suspense>
            <PaymentSection />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
