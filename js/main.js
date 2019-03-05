$("document").ready(function($){
// for navigation 
   var anchor = $('.nav-link');
   anchor.on('click', function (event) {
    if ($(window).width() <= 767) {
     if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
       scrollTop: $(hash).offset().top - 90
      }, 1000, function () {
       window.location.hash = hash - 90;
      });
     }
  
    } else if ($(window).width() >= 768 && $(window).width() <= 992) {
     if (this.hash !== "") {
      event.preventDefault();
      hash = this.hash;
      $('html, body').animate({
       scrollTop: $(hash).offset().top - 115
      }, 1000, function () {
       window.location.hash = hash - 115;
      });
     }
    }else if ($(window).width() > 991) {
       if (this.hash !== "") {
        event.preventDefault();
        hash = this.hash;
        $('html, body').animate({
         scrollTop: $(hash).offset().top - 100
        }, 1000, function () {
         window.location.hash = hash - 100;
        });
       }
      }
   });
    // end for navigation 

    // navbar change background
    var nav = $('#navbar');
    $(window).scroll(function () {
		
        if ($(this).scrollTop() > 0) {
            nav.addClass("sticky");
        } else {
            nav.removeClass("sticky");
        }
        });
})