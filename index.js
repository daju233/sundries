"use strict";

const fuckyou = function () {
  alert("There's nothing here!");
};
const button = document.querySelectorAll(".button");

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    const boody = document.querySelector("body");
    boody.style.display = "flex";
  }
};

button.forEach((element) => {
  element.addEventListener("click", fuckyou);
});
