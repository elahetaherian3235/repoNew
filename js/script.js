"use strict";
const productSection = document.querySelector(".product-section");
const loginBtn = document.querySelector(".loginbtn");

const product = (async () => {
  try {
    const res = await fetch(
      "https://faradars.org/api/client/v2/landings/36486/products?page=1&limit=20",
    );
    const data = await res.json();
    console.log(data);
    productSection.innerHTML += data?.products
      ?.map((pr) => {
        return `<div class="card">
        <img src="${pr?.svg_featured_image}">
        <div class="card-container">
        <h3>${pr?.title}</h3>
        <p>${pr?.duration?.hours} ساعت</p>
        <p>${pr?.student_count}دانشجو</p>
        </div>
    </div>`;
      })
      .join(" ");
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    cards?.forEach((c) => {
      c.addEventListener("click", async (id) => {
        const result = await fetch(
          "https://faradars.org/api/client/v2/landings/36486/products?page=1&limit=20",
        );
        const data = await result.json();
        const idProduct = await data?.map((pr) => {
          idPrd = pr?.id;
          console.log(idProduct);
        });
        const res = await fetch(
          "https://faradars.org/api/client/v2/landings/36486/products?data?.id",
        );
        const resData = await res.json();
      });
    });
  } catch (error) {
    console.log(error);
  }
})();
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "pages/login.html";
});


