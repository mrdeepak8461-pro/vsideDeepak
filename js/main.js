  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:false,
    autoplay:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        }
    }
});