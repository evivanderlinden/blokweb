// JavaScript Document

//scroll to top micro interactie
var scrollButton2 = document.querySelector(".scroll-to-top");
scrollButton2.addEventListener("click", scrollToTop);
function scrollToTop() {
    document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}

//hamburger menu uitklappen
//code en hulp van CLifton van Henten
(function() {

  let hamburger = {
    nav: document.querySelector('nav:nth-of-type(2)'),
    navClick: document.querySelector('nav ul li:nth-of-type(4) a svg'),

    initialize() {
      this.navClick.addEventListener('click', () => { this.toggle(); });
    },

    toggle() {
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();
}());

// //Footer uitklap menu
var hetPark2 = document.getElementById("het_park_menu_footer");
var overEfteling = document.getElementById("over_efteling_menu");
var meerEfteling2 = document.getElementById("meer_efteling_menu_footer");
var nieuwsbrief = document.getElementById("nieuwsbrief_menu");


document.getElementById("het_park_btn_footer").addEventListener("click", function(){
  uitklappen(hetPark2);
});

document.getElementById("over_efteling_btn").addEventListener("click", function(){
  uitklappen(overEfteling);
});

document.getElementById("meer_efteling_btn_footer").addEventListener("click", function(){
  uitklappen(meerEfteling2);
});

document.getElementById("nieuwsbrief_btn").addEventListener("click", function(){
  uitklappen(nieuwsbrief);
});

//Navigatie uitklap menu
var hetPark = document.getElementById("het_park_menu");
var allSeizoen = document.getElementById("all_seizoen_menu");
var meerEfteling = document.getElementById("meer_efteling_menu");


document.getElementById("het_park_btn").addEventListener("click", function(){
  uitklappen(hetPark);
});

document.getElementById("all_seizoen_btn").addEventListener("click", function(){
  uitklappen(allSeizoen);
});

document.getElementById("meer_efteling_btn").addEventListener("click", function(){
  uitklappen(meerEfteling);
});

function uitklappen(menu){

  if (menu.style.display === "none"){
    menu.style.display = "block";

  }
  else {
    menu.style.display = "none";
  }
}
