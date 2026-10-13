"use strict";
const formEl = document.querySelector(".form-login");
const userLoginInp = document.querySelector(".user-login");
const passLoginInp = document.querySelector(".pass-login");
const divError = document.querySelector(".error");

//FormLogin ********************************************
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  divError.innerHTML = "<p>⏳ Loading...</p>";
  try {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: userLoginInp.value,
        password: passLoginInp.value,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (!data.token) {
      alert(`${data?.message}`);
      userLoginInp.value = "";
      passLoginInp.value = "";
      divError.innerHTML = "";
    } else {
      window.location.href = "../index.html";
    }
  } catch (error) {
    console.log(error);
  }
});

window.addEventListener("load", () => {
  userLoginInp.value = "";
  passLoginInp.value = "";
  divError.innerHTML = "";
});
