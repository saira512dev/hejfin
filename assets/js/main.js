window.onscroll = function() {fixNavbar()};

const navbar = document.getElementById("navbar");
const alert = document.querySelector(".alert");
const header = document.querySelector

var sticky = navbar.offsetTop;
console.log(window.screen.availWidth)

function fixNavbar() {
  if (window.pageYOffset > sticky && window.screen.availWidth > 768) {
    navbar.classList.add("sticky")
    alert.classList.add("move");
  } else {
    navbar.classList.remove("sticky");
    alert.classList.remove("move");
  }

//   if (window.pageYOffset < sticky && window.screen.availWidth < 420) {
//     console.log("HERE");
//     alert.classList.add('move-mobile');
//   } else {
//     alert.classList.remove('move-mobile')
//   }
 }