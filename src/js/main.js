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