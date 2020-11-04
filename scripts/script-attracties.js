//scroll to top micro interactie
var scrollButton2 = document.querySelector(".scroll-to-top");
scrollButton2.addEventListener("click", scrollToTop);
function scrollToTop() {
    document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}

//hamburger menu uitklappen
//code en hulp van CLifton van Henten
(function() {

  var hamburger = {
    nav: document.querySelector('nav:nth-of-type(2)'),
    navClick: document.querySelector('nav ul li:nth-of-type(4) a svg'),
    anim: document.querySelector('.attracties-main section svg:nth-of-type(1)'),
    //animatie hamburger menu
    menu: document.getElementById('hamburger_icon'),
    stroke1: document.querySelector('#hamburger_icon path:nth-of-type(1)'),
    stroke2: document.querySelector('#hamburger_icon path:nth-of-type(2)'),
    stroke3: document.querySelector('#hamburger_icon path:nth-of-type(3)'),

    initialize() {
      this.navClick.addEventListener('click', () => { this.toggle(); });
    },

    toggle() {
      this.nav.classList.toggle('expanded');
      this.anim.classList.toggle('hidden');
      this.stroke1.classList.toggle('rotate');
      this.stroke2.classList.toggle('rotate');
      this.stroke3.classList.toggle('rotate');
    },
  };

  hamburger.initialize();
}());

//mijn oude code voor uitklappen hamburger menu

// var hamburger = document.querySelector("nav ul li:nth-of-type(4) a");
// hamburger.addEventListener("click", openNav);
//
// var sluitHamburger = document.querySelector("div a:nth-of-type(1)");
// sluitHamburger.addEventListener("click", closeNav);
//
// function openNav() {
//   document.getElementById("Sidenav").style.width = "100%";
// }
//
// function closeNav() {
//   document.getElementById("Sidenav").style.width = "0";
// }


//load more button
var loadMoreButton = document.querySelector(".attracties-main button");
loadMoreButton.addEventListener("click", loadMore);

function loadMore(){
  var attractiesHidden = document.getElementById("attracties-hidden");
  attractiesHidden.style.display = "block";
  loadMoreButton.style.display = "none";
  }

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
