function toggleMenu() {
  let menu = document.querySelector("#navbar-mobile");
  let body = document.querySelector("body");
  menu.classList.toggle("d-none");
  body.classList.toggle("overflow-hidden");
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// sticky social media bar java 
window.console = window.console || function(t) {};
//dfsdfsdf
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
  //gfhdfg


$(document).ready(function () {
  $('#so-close').click(function () {
    $('.s-soft').addClass('so-collapse');
    $('#so-open').delay(300).css('left', '0');
  });

  $('#so-open').click(function () {
    $('#so-open').css('left', '-60px');
    $('.s-soft').removeClass('so-collapse');
  });});