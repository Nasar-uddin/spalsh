$(document).ready(function () {
    var navbar = $('.navbar-default');
    window.onscroll = function (e) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            navbar.css({
                backgroundColor: "#0ec080",
                padding: "0"
            });
        } else if (document.body.scrollTop < 301 || document.documentElement.scrollTop < 301) {
            navbar.css({
                backgroundColor: "transparent",
                padding: "15px 0px"
            });
        }
    }
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:15,
        items:2
    });
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
