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
  //variabele hamburger

  var hamburger = {
    //begin variabelen
    nav: document.querySelector('nav:nth-of-type(2)'),
    navClick: document.querySelector('nav ul li:nth-of-type(4) a'),
    //animatie hamburger menu
    menu: document.getElementById('hamburger_icon'),
    stroke1: document.querySelector('#hamburger_icon path:nth-of-type(1)'),
    stroke2: document.querySelector('#hamburger_icon path:nth-of-type(2)'),
    stroke3: document.querySelector('#hamburger_icon path:nth-of-type(3)'),

    //event listener voor navigatie
    initialize() {
      this.navClick.addEventListener('click', () => { this.toggle(); });
    },

    //toggle van classes in css
    toggle() {
      this.nav.classList.toggle('expanded');
      this.stroke1.classList.toggle('rotate');
      this.stroke2.classList.toggle('rotate');
      this.stroke3.classList.toggle('rotate');
    },
    //einde variabelen
  };

  hamburger.initialize();
}());

//vorbeeld W3 Schools

// var person = {
//   firstName  : "John",
//   lastName   : "Doe",
//   id     : 5566,
//   function() {
//     return this.firstName;
//   }
// };

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
