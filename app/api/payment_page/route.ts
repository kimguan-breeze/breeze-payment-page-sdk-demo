// Replace this with the one generated from API at https://docs.breeze.cash/docs/quick-start#2-create-a-product
const PRODUCT_ID = "prod_5b4bb18bb89c8f95";

export async function POST() {
  const body = {
    lineItems: [
      {
        product: PRODUCT_ID,
        quantity: 1,
      },
    ],
    successReturnUrl: "https://www.breeze.cash",
  };

  const basicAuth = Buffer.from(
    process.env.BREEZE_SANDBOX_API_KEY + ":"
  ).toString("base64");

  const res = await fetch("https://api.qa.breeze.cash/v1/payment_pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`,
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
