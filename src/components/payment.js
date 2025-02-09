export const payment = (job_id) => {
  fetch(
    `https://nexthire-backend.vercel.app/payment/make_payment/${job_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
        window.location.href = data.payment_url;
    })
    .catch((error) => console.error("Error:", error));
};
