"use client";
import { getPaymentHistory } from "@/app/payment-history";
import { useEffect, useState } from "react";

export const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState<string[]>([]);

  useEffect(() => {
    const paymentHistory = getPaymentHistory();
    setPaymentHistory(paymentHistory?.split(",") || []);
  }, []);

  return (
    <div className="space-y-4 mt-4">
      {paymentHistory?.map((pageId, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 rounded-lg border"
        >
          <div className="flex items-center gap-4">
            <div className="text-lg font-medium">Order #{pageId}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground bg-green-200 font-bold px-2 py-1 rounded-md">
              Completed
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
