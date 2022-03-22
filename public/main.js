// --------------- Sticky Nav -----------------
window.onscroll = function () {
   myFunction();
};

var navbar = document.querySelector("nav");
var content = document.querySelector("main");
//  var footer = document.querySelector("footer");

// Get the offset position of the navbar
var sticky_nav = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if (window.pageYOffset >= sticky_nav) {
      navbar.classList.add("sticky_nav");
      content.classList.add("main_content");
      //    footer.classList.add("footer_c");
   } else {
      navbar.classList.remove("sticky_nav");
      content.classList.remove("main_content");
      //    footer.classList.remove("footer_c");
   }
}
