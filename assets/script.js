// ScroolReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 1500,
});

ScrollReveal().reveal(".interval", { delay: 100, interval: 150 });

// Navbar Mobile
const hamburger = document.querySelector(".navbar-hamburger");
const navNavbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navNavbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navNavbar.classList.remove("active");
}))

window.onscroll = () => {
  navNavbar.classList.remove('active');
  hamburger.classList.remove('active');
}

// Desenvolvido por Renilson Medeiros [Malcoon] - Dezembro 2021

    // Twitter: @malcoon_
    // Instagram: @_malcoon
    // Github: github.com/malcoon