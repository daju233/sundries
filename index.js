"use strict";

const fuckyou = function () {
  alert("There's nothing here!");
};
const button = document.querySelectorAll(".button");

button.forEach((element) => {
  element.addEventListener("click", fuckyou);
});
