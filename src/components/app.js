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
