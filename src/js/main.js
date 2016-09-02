$(document).ready(function(){
  anchorScroll();
  stickyNav();
});


function anchorScroll() {
  $("a").on('click', function(){
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
        window.location.hash = hash;
      })
    }  
  });
}

function stickyNav() {
  var navTop = $("#navbar").position().top;
  $(window).scroll(function(){
    
    console.log(navTop);
    
    if ($(window).scrollTop() > $("#navbar").position().top){
      $("#navbar").addClass("navbarFixed");
      $(window)
    }
    if ($(window).scrollTop() < navTop - 1){
      $("#navbar").removeClass("navbarFixed");
    }
  });
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = $(".project");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}