let btn = document.querySelector("button");
let div = document.getElementById("re");
// let classes = document.getElementsByClassName("hidden");
let btn1 = document.querySelector(".btn");
let btn2 = document.querySelector("#btn");
let btn3 = document.querySelector("#btn.btn");
let btn4 = document.querySelector("#btn .btn");
btn.addEventListener("click", () => {
//   if (div.style.display === "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
  if (div.classList.contains('hidden')) {
    div.classList.replace("hidden", "block");
  } else {
    div.classList.replace("block", "hidden");
  }
// div.classList.toggle('hidden');
// div.classList.toggle('block');
  
});