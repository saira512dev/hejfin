const navbar = document.getElementById("navbar");
const alert = document.querySelector(".alert");
const mobileMenuIcon = document.querySelector('.mobile-menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileLinks = document.querySelectorAll('.mobile-link')
const calendlyButton = document.querySelector('.calendly-popup')
const calendly = document.querySelector('.calendly')
const calendlyClose = document.querySelector('.calendly-close')
const calendlyFrame = document.querySelector('.calendly-frame')

let sticky = navbar.offsetTop;
let stickyMobile = mobileMenu.offsetTop;

mobileMenuIcon.addEventListener("click", displayMobileMenu)

mobileLinks.forEach(link => link.addEventListener("click", displayMobileMenu))

calendlyButton.addEventListener("click", showCalendly)

calendlyClose.addEventListener("click", hideCalendly)

function hideCalendly(){
  calendly.classList.add("hidden")
  calendlyButton.classList.remove("hidden")
  calendlyFrame.classList.add('hidden')
  calendlyClose.classList.add('hidden')
}

function showCalendly() {
  console.log("YEEEY")
  calendly.classList.remove("hidden")
  calendlyButton.classList.add("hidden")
  calendlyFrame.classList.remove('hidden')
  calendlyClose.classList.remove('hidden')
}

function displayMobileMenu() {
  mobileMenu.classList.toggle('hidden')
}
