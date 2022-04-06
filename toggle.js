let button = document.getElementsByClassName("bar1");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("-show"); 
  });
}

// let button = document.getElementsByClassName("bar1");
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function () {
//     this.nextElementSibling.classList.toggle("-show");
//   });
// }
