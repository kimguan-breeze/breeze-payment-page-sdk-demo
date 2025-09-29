"use client";

import { PaymentHistory } from "@/components/payment-history";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Premium Wireless Headphones
        </h1>
        <div className="text-xl text-muted-foreground">
          Experience unparalleled sound quality with our flagship wireless
          headphones. Active noise cancellation, premium build, and exceptional
          comfort.
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/buy">
            <Button size="lg" className="cursor-pointer">
              Buy Now - $299.99
            </Button>
          </Link>
        </div>
      </div>

      <PaymentHistory />
    </main>
  );
}
