$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    $('.close').click(function(){
      $('#top_popup img').hide();
      $('.close').hide();
    })
    $(".regular").slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
    $(".regular1").slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });
    $("#top_icon3").click(function(){
      $("#nav_pop").fadeIn(500)
    })
    $(".nav_close").click(function(){
      $("#nav_pop").fadeOut(300)
    })


})