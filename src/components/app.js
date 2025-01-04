export const showCategorie = () => {
  fetch("https://nexthire-backend.onrender.com/job/categories/")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("categories");
      container.innerHTML = "";
      data.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.categorie;
        container.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error :", error);
    });
};

export const showCompany = () => {
  fetch("https://nexthire-backend.onrender.com/job/company/")
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
