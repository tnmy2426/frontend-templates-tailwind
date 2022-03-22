// --------------- Sticky Nav -----------------
window.onscroll = function () {
   myFunction();
};

var navbar = document.querySelector("nav");
var content = document.querySelector("main");
var overlay = document.getElementById("mobileNav");
//  var footer = document.querySelector("footer");

// Get the offset position of the navbar
var sticky_nav = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if (window.pageYOffset >= sticky_nav) {
      navbar.classList.add("sticky_nav");
      content.classList.add("main_content");

      overlay.classList.remove("overlay");
      overlay.classList.add("overlay_scroll");
      //    footer.classList.add("footer_c");
   } else {
      navbar.classList.remove("sticky_nav");
      content.classList.remove("main_content");
      //    footer.classList.remove("footer_c");
   }
}

// ACTIVE LINK

// Get the container element
var nav = document.querySelector("nav");

// Get all buttons with class="btn" inside the container
var nav_links = nav.getElementsByClassName("nav_link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < nav_links.length; i++) {
   nav_links[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active_link");
      current[0].className = current[0].className.replace(" active_link", "");
      this.className += " active_link";
   });
}

// Mobile Menu Function
function openNav() {
   document.getElementById("mobileNav").style.width = "80%";
   document.getElementById("menu_btn").style.display = "none";
   document.getElementById("cross_btn").style.display = "flex";
}

function closeNav() {
   document.getElementById("mobileNav").style.width = "0%";
   document.getElementById("menu_btn").style.display = "flex";
   document.getElementById("cross_btn").style.display = "none";
}

// var menu_btn = document.getElementById("menu_btn")
