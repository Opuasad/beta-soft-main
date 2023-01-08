var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth =$('.carousel-item').width();


var scrollPosition = 0;

$('.carousel-control-next').on('click',function(){
    if(scrollPosition <(carouselWidth -(cardWidth * 4))){

    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft:scrollPosition},
    600);
    }
});

$('.carousel-control-prev').on('click',function(){
    if(scrollPosition > 0){
    scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({scrollLeft:scrollPosition},
    600);
    }
}); 