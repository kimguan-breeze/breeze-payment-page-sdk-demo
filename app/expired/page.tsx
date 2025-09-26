"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Expired() {
  const router = useRouter();

  return (
    <main className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto bg-card border-border">
        <CardHeader className="text-center">
          <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
          <CardTitle className="text-2xl font-bold text-card-foreground">
            Payment Expired
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            This payment session has expired. Please try again with a new
            payment session.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Return to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
