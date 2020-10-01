
// JavaScript Document

//scroll to top micro interactie
var scrollButton = document.querySelector("main section:nth-of-type(2) a");
scrollButton.addEventListener("click", scrollToTop);

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 20);
    } else clearTimeout(scrollAnimation);
}

//zijkant navigatie animatie
var hamburger = document.querySelector("nav ul li:nth-of-type(4) a");
hamburger.addEventListener("click", openNav);

var sluitHamburger = document.querySelector("div a:nth-of-type(1)");
sluitHamburger.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("Sidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}
