"use strict";

const projectBox = document.querySelector("#projectBox > ul");
const project = document.querySelectorAll(".project");
let counter = 0;
setInterval(() => {
  if (counter < project.length - 1) {
    counter++;
    projectBox.style.transform = "translateX(" + 100 * counter + "%)";
  } else if (counter === project.length - 1) {
    counter = 0;
    projectBox.style.trnasform = "translateX(" + 100 * counter + "%)";
  }
  console.log("text");
});
