
function getSrc(source)
{
    document.getElementById('active-video').src = source;
    new Promise((resolve) => setTimeout(resolve, 200))
    document.getElementById('active-video').click();
}

// When the user scrolls the page, execute myFunction
// document.getElementById("letsScroll").onscroll = function() {
//     tourFunction()
//     };
//
// // Get the navbar
// var navbarTour = document.getElementById("navbar-menu");
//
// // Get the offset position of the navbar
// var stickyTour = navbarTour.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function tourFunction() {
//   if (document.getElementById("letsScroll").scrollTop >= stickyTour) {
//     navbarTour.classList.add("sticky")
//     var stickyClass = document.getElementsByClassName("sticky")[0]
//     while (document.getElementById("letsScroll").scrollTop >= stickyTour) {
//       stickyClass.style.top = document.getElementById("letsScroll").scrollTop
//     }
//     console.log(stickyTour, document.getElementById("letsScroll").scrollTop)
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-menu");
var content = document.getElementsByClassName("content")[0];
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    content.style.paddingTop = "60px"
    if (content.children[1].classList.contains("push-down")){
      document.getElementsByClassName("push-down")[0].style.paddingTop = "60px"
    }
  } else {
    navbar.classList.remove("sticky");
    content.style.paddingTop = "0px"
    if (content.children[1].classList.contains("push-down")){
      document.getElementsByClassName("push-down")[0].style.paddingTop = "0px"
    }
  }
}
