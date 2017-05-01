
function Roulette(startingAmount) {

  this.bankroll = startingAmount;

  this.randomNumber = function(range) {
    return Math.ceil(Math.random()*range);
  };

  this.spinWheel = function(){
    return this.randomNumber(36);
  };

  this.getValues = function(){
    var object = {};
    object.result = this.spinWheel();
    object.bet = parseInt($('input[id="bet"]').val());
    object.guess = parseInt($('input[id="guess"]').val());
    object.oddsMult = parseInt($('select').val());
    object.odds = $(':selected')[0].id
    console.log(object);
    return object
  }

  this.checkGuess= function(){
    var betInfo = this.getValues()
    // console.log(this.checkAgainstOdds(betInfo))
    var winnings = (betInfo.bet * betInfo.oddsMult - betInfo.bet)
    // console.log(winnings)
    $('.number').html('The ball stopped on number ' + betInfo.result)
    if (this.checkAgainstOdds(betInfo)){
      this.bankroll += winnings;
      $('.results').html('You won ' + winnings + '!')
    }
    else {
      this.bankroll -= betInfo.bet
      $('.results').html('You lost ' + betInfo.bet)
    }
  };

  this.checkAgainstOdds= function(obj){
    var result = obj.result
    var guess = obj.guess
    switch(obj.odds){
      case '':
        if (result === guess){ return true}
        else {return false}
        break;
      case '0':
        if (result === 0){return true}
        else {return false}
        break;
      case 'evens':
        if (result % 2 === 0){ return true }
        else {return false};
        break;
      case 'oddNums':
        if (result % 2 !== 0){ return true }
        else {return false};
        break;
      case '1-18':
        if (result >= 1 && result <= 18) {return true}
        else {return false}
        break;
      case '19-36':
        if (result >= 19) {return true}
        else {return false}
        break;
      case '1-12':
        if (result <=12) {return true}
        else {return false}
        break;
      case '13-24':
        if (result >= 13 && result <= 24) {return true}
        else {return false}
        break;
      case '25-36':
        if (result >= 25 && result <= 36) {return true}
        else {return false}
        break;
    }
  }

  this.getOdds = function(){
    return $('input[id="odds"]').val()
  }

};

$(document).ready(function(){

  function reset() {
    $('.results').empty();
    $('.number').empty();
    $('#bet').val('');
    $('#guess').val('');
  }
  var r = new Roulette(100)
  $('#money').html(r.bankroll);
  $('#wheel').click(function(){
    r.checkGuess();
    $('#money').html(r.bankroll);
  })
  $('#newGame').click(function(){
    var r = new Roulette(100)
    $('#money').html(r.bankroll)
    reset();
  })

})
