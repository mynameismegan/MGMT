
function getSrc(source)
{
    document.getElementById('active-video').src = source;
    new Promise((resolve) => setTimeout(resolve, 200))
    document.getElementById('active-video').click();
}


function setActive(elem)
{
  document.getElementsByClassName("active")[0].classList.remove("active")
  if (elem == 'all'){
    document.getElementsByClassName("fltr-controls")[0].classList.add("active")
  }
  else if (elem == '1') {
    document.getElementsByClassName("fltr-controls")[1].classList.add("active")
  }
  else if (elem == '2') {
    document.getElementsByClassName("fltr-controls")[2].classList.add("active")
  }
  else if (elem == '3') {
    document.getElementsByClassName("fltr-controls")[3].classList.add("active")
  }
  else if (elem == '4') {
    document.getElementsByClassName("fltr-controls")[4].classList.add("active")
  }
}

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
    if (content.children.length > 1){
      if (content.children[1].classList.contains("push-down")){
      document.getElementsByClassName("push-down")[0].style.paddingTop = "60px"
      }
    }
  } else {
    navbar.classList.remove("sticky");
    content.style.paddingTop = "0px"
    if (content.children.length > 1){
      if (content.children[1].classList.contains("push-down")){
      document.getElementsByClassName("push-down")[0].style.paddingTop = "0px"
      }
    }
  }
}
