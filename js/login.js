"use strict";
const formLoginEl = document.querySelector(".form-login");
const formOtpEl = document.querySelector(".form-otp");
const loginDiv = document.querySelector(".login");
const otpDiv = document.querySelector(".otp");
const userLoginInp = document.querySelector(".user-login");
const divError = document.querySelector(".error");

//FormLogin ********************************************
formLoginEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  divError.innerHTML = "<p>⏳ Loading...</p>";
  try {
    const res = await fetch("https://faradars.org/api/client/v1/auth/otp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        mobile: userLoginInp.value,
        digits: 5,
        platforms: "web",
        source: "faradars",
        recaptcha_token: "",
      }),
    });
    const data = await res.json();
    console.log(data);

    if (!data.status) {
      alert(`${data?.message}`);
      userLoginInp.value = "";
      divError.innerHTML = "";
    } else {
      alert(`${data?.message}`);
      otpDiv.classList.add("active");
      loginDiv.classList.remove("active");
      
    }
  } catch (error) {
    console.log(error);
  }
});


