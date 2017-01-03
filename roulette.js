var deg = 0;

var roulette = {
  spin: function(){
    $('.wheel img').css('transition', 'all 0s');
    $('.wheel img').css('transform', 'rotate(' + (deg % 360) + 'deg)');
    setTimeout(roulette.animateWheel, 100);
  },
  vertical: function(){
    $("body").removeClass();
    $('body').toggleClass('s' + (Math.round(Math.random()*4)));
  },
  animateWheel: function(){
    deg = (Math.round(Math.random()*2160) + 720);
    $('.wheel img').css('transition', 'all 2s ease');
    $('.wheel img').css('transform', 'rotate(' + deg + 'deg)');
  }
}

$('body').on('click', function(){
  roulette.spin();
  roulette.vertical();
})
