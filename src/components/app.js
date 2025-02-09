import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showCompany = () => {
  fetch("https://nexthire-backend.vercel.app/job/company/")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("companies");
      container.innerHTML = "";
      data.forEach((company) => {
        const option = document.createElement("option");
        option.value = company.id;
        option.textContent = company.name;
        container.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error :", error);
    });
};

export const uniqueTransaction = (size = 10) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < size; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const CheckoutHandel = (e,salary, receiver, job_id) => {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const zip = document.getElementById("zip").value;
  const amount = salary;
  const user_id = localStorage.getItem("user_id");

  const info = {
    name: name,
    email: email,
    address: address,
    zip: zip,
    Order: false,
    total_amount: amount,
    sender: user_id,
    job: Number(job_id),
    receiver: receiver,
    tran_id: uniqueTransaction(),
  };

  console.log(info);

  fetch(`https://nexthire-backend.vercel.app/payment/status/${user_id}/`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status == "YES") {
        if (name && email && address && zip) {
          fetch(
            `https://nexthire-backend.vercel.app/payment/checkout/${data.id}/`,
            {
              method: "PATCH",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(info),
            }
          )
            .then((res) => {
              if (res.ok) {
                window.location.href = `/make_payment/${salary}`;
              }
              return res.json();
            })
            .catch((error) => console.error(error));
        } else {
          toast.error("Fill all the field for checkout.");
        }
      } else {
        if (name && email && address && zip) {
          fetch("https://nexthire-backend.vercel.app/payment/checkout/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(info),
          })
            .then((res) => {
              if (res.ok) {
                window.location.href = `/make_payment/${salary}`;
              }
              return res.json();
            })
            .catch((error) => console.error(error));
        } else {
          toast.error("Fill all the field for checkout.");
        }
      }
    });
};
