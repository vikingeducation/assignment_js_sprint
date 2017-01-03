var deg = 0;

var roulette = {
  spin: function(){
    $('.wheel img').css('transition', 'all 0s');
    $('.wheel img').css('transform', 'rotate(' + (deg % 360) + 'deg)');
    setTimeout(roulette.animateWheel, 100);
  },
  vertical: function(){
    $("body").removeClass();
    $('body').toggleClass('s' + (Math.round(Math.random()*4) + 1));
  },
  animateWheel: function(){
    deg = (Math.round(Math.random()*1080) + 720) + (deg % 360);
    $('.wheel img').css('transition', 'all 2s ease-out');
    $('.wheel img').css('transform', 'rotate(' + deg + 'deg)');
  }
}

$('body').on('click', function(){
  roulette.spin();
  roulette.vertical();
})
