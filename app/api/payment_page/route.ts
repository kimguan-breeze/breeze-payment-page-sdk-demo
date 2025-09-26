export async function POST(request: Request) {
  const body = {
    lineItems: [
      {
        product: "prod_5b4bb18bb89c8f95",
        quantity: 1,
      },
    ],
    successReturnUrl: "https://www.breeze.cash",
  };

  const res = await fetch("https://api.qa.breeze.cash/v1/payment_pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        process.env.BREEZE_SANDBOX_API_KEY + ":"
      ).toString("base64")}`,
    },
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await res.json();
  } catch (err) {
    return Response.json(
      { error: "Invalid response from payment service" },
      { status: 500 }
    );
  }

  if (!res.ok) {
    return Response.json(
      { error: data?.message || "Payment page creation failed" },
      { status: res.status }
    );
  }
  return Response.json(data.data);
}
