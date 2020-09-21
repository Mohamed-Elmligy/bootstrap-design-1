$(function () {
    'use strict';
    // handil window hight
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
     
    $('.slider, .carousel-item').height( winH - (upperH + navH ));

    //featured work shuffle
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