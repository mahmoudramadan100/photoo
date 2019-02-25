$(document).ready(function () {

  $('.skitter-large').skitter({
    fullscreen: true,
    dots: true,
    with_animations: ["swapBarsBack"],
    thumbs: false,
    numbers_align: "center",
    theme: "square",
    enable_navigation_keys: "true",
    navigation: "true",
    label_animation: "slideUp"
  });


  $("#light-slider").lightSlider({
    item: 1,
    speed: 700,
    pauseOnHover: true,
    auto: true,
    responsive : [
      {
          breakpoint:800,
          settings: {
              item:1,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1
            }
      }
  ]
  });

  $("#slider").lightSlider({
    item: 4,
    speed: 700,
    pauseOnHover: true,
    auto: true,
    pager: false,
    loop: true,
    responsive : [
      {
          breakpoint:800,
          settings: {
              item:1,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1
            }
      }
  ]
  });

  $(window).on('load',function(){ 
    $("body").css("overflow","auto");
    $(".loding-overlay").fadeOut(2000,
      function()
      {
    $(".breeding-rhombus-spinner").parent().fadeOut(2000);
    
      });
    });



  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});


});