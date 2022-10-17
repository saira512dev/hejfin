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
