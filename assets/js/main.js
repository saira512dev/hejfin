window.onscroll = function() {fixNavbar()};

const navbar = document.getElementById("navbar");
const alert = document.querySelector(".alert");

var sticky = navbar.offsetTop;

function fixNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    alert.classList.add("move");
  } else {
    navbar.classList.remove("sticky");
    alert.classList.remove("move");
  }
}