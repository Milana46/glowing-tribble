$(function(){

    let header=$("#header");
    let intro=$("#intro");
    let introH=intro.innerHeight();
    let ScrollPos=$(window).scrollTop();
    checkScroll(ScrollPos,introH);

    $(window).on("scroll  resize",function() {

        introH=intro.innerHeight();

        ScrollPos=$(this).scrollTop();

        checkScroll(ScrollPos,introH);

    });

    function checkScroll()
    {
        if (ScrollPos > introH){
            header.addClass("fixed");
        }
        else
        {
            header.removeClass("fixed");
        }
    }

 $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId=$(this).data('scroll');
    let elementOffset=$(elementId).offset().top;
    nav.removeClass("show");

    $("html, body").animate({
        scrollTop:elementOffset -120

    }, 700); 
 });

 let nav=$("#nav");
 $("#burger").on("click",function(event){
    event.preventDefault();

    nav.toggleClass("show");

 });


 let clider=$("#commentclider");
    clider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:false
  });



});           