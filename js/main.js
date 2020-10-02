$(function () {
    'use strict';

        //===== nicescroll script ========== 

    $("body").niceScroll({
        cursorcolor: '#ec1c23',
        cursorwidth: '10px',
        cursorborder: '2px solid #ec1c23',
        cursorborderradius: 10,
    });
    //========= handil window hight ============
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
     
    $('.slider, .carousel-item').height( winH - (upperH + navH ));

    //=========== featured work shuffle ==========
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imges .col-md-12 img').css('opacity', 1);
        }else {
            $('.shuffle-imges .col-md-12 img').css('opacity', '.08'); 
            $($(this).data('class')).css('opacity', 1); 
        }
    });  
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}