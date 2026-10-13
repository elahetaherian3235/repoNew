"use strict";
const productSection = document.querySelector(".product-section");
const loginBtn = document.querySelector(".login");

const product = (async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);

    productSection.innerHTML += data
      ?.map((pr) => {
        return `<div class="card">
        <img src="${pr?.image}">
        <h3>${pr?.title}</h3>
        <p>${pr?.price}$</p>
    </div>`;
      })
      .join(" ");
  } catch (error) {
    console.log(error);
  }
})();
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "pages/login.html";
});
