"use strict";

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".nav-container").style.right = 0;
});

document.querySelector(".nav-burger").addEventListener("click", () => {
  document.querySelector(".nav-container").style.right = "400px";
});
