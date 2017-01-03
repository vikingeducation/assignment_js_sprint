var deg = 0;


var roulette = {
  init: function(){
    this.bank = 100;
    this.betScreen = document.getElementById("bet-screen");
    this.betInput = document.getElementById("bet-input");
    this.bankScreen = document.getElementById("bank-screen");
    this.bankInput = document.getElementById("bank-input");
    this.betInput.addEventListener("change", this.showBet)
  },

  showBet: function(){
    this.betScreen.innerHTML = this.betInput.value
  },

  collectBet: function(){
    var betValue = this.betInput.value;
    var result = this.spin();  
    return this.checkResults(betValue, result);
  },

  checkResults: function(choice, outcome){
    if(choice == outcome)
      return true;
    else 
      return false;
  },


  spin: function(){
    $('.wheel img').css('transition', 'all 0s');
    $('.wheel img').css('transform', 'rotate(' + (deg % 360) + 'deg)');
    var pos = Math.round(Math.random()*37);
    setTimeout(roulette.animateWheel(pos), 100);
    return this.positions[pos];
  },

  animateWheel: function(pos){
    deg = (Math.round(360/38)*pos + Math.round(Math.random() * 4)*360);
    $('.wheel img').css('transition', 'all 2s ease');
    $('.wheel img').css('transform', 'rotate(' + deg + 'deg)');
  },

  betScreen: null,
  betInput: null,
  bank: 100,
  bankScreen: null,
  bankInput: null,

  positions: {
    0: 00,
    1: 27,
    2: 10,
    3: 35,
    4: 39,
    5: 12,
    6: 8,
    7: 19,
    8: 31,
    9: 18,
    10: 6,
    11: 21,
    12: 33,
    13: 16,
    14: 4,
    15: 23,
    16: 35,
    17: 14,
    18: 2,
    19: 0,
    20: 28,
    21: 9,
    22: 26,
    23: 30,
    24: 11,
    25: 7,
    26: 20,
    27: 32,
    28: 17,
    29: 5,
    30: 22,
    31: 34,
    32: 15,
    33: 3,
    34: 24,
    35: 36,
    36: 13,
    37: 1
  }
}

$(function(){
$('#bet-btn').on('click', function(){
  roulette.collectBet();
})
})
