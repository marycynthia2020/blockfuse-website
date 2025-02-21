const mobileNav = document.getElementById("mobile-nav-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", toggleClass);

function toggleClass() {
  mobileNav.classList.toggle("open");
  if (mobileNav.className === "hidden open") {
    return (hamburger.src = "/images/closebtn.svg");
  }
  hamburger.src = "/images/hamburger.svg";
}
