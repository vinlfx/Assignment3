"use strict";

// HIDE PERSONAL INFO
document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.querySelector(".emailInput").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // check email
  const infoText = document.querySelector(".infoText");
  const form = document.querySelector(".form");
  const information = document.querySelector(".information");

  if (email === "" || !regex.test(email)) {
    infoText.textContent = "Hãy nhập đúng định dạng email!";
    information.classList.add("hide");
  } else {
    infoText.textContent = "";
    form.classList.add("hide");
    information.classList.remove("hide");
  }
});

//HIDE JOB-INFO
document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".view-button");
  const contents = document.querySelectorAll(".content");

  viewButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (contents[index].classList.contains("hide")) {
        contents[index].classList.remove("hide");
        button.innerHTML = "🔼 View less";
      } else {
        contents[index].classList.add("hide");
        button.innerHTML = "🔽 View more";
      }
    });
  });
});

// hover chuột => show buttons
// function show_hide(x) {
//   var btn = document.getElementById("button_1");
//   if (x == 0) btn.style.display = "block";
//   else btn.style.display = "none";
// }
