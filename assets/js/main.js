const navbar = document.getElementById("navbar");
const alert = document.querySelector(".alert");
const mobileMenuIcon = document.querySelector('.mobile-menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileLinks = document.querySelectorAll('.mobile-link')

let sticky = navbar.offsetTop;
let stickyMobile = mobileMenu.offsetTop;

mobileMenuIcon.addEventListener("click", displayMobileMenu)

mobileLinks.forEach(link => link.addEventListener("click", displayMobileMenu))

function displayMobileMenu() {
  mobileMenu.classList.toggle('hidden')
}



// function fixNavbar() {
//   if (window.pageYOffset > sticky && window.screen.availWidth > 768) {
//     navbar.classList.add("sticky")
//     alert.classList.add("move");
//   } else {
//     navbar.classList.remove("sticky");
//     alert.classList.remove("move");
//   }
// }

// function fixNavbarMobile() {
//   if (window.pageYOffset > stickyMobile && window.screen.availWidth > 768) {
//     mobileMenu.classList.add("sticky")
//   } else {
//     mobileMenu.classList.remove("sticky");
//   }
// }

//  window.onscroll = function() {
  //fixNavbar()
  // fixNavbarMobile()
// };