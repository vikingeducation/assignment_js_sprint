var deg = 0;


var roulette = {
  init: function(){
    this.bank = 100;
    this.betScreen = document.getElementById("bet-screen");
    this.betInput = document.getElementById("bet-input");
    this.bankScreen = document.getElementById("bank-screen");
    this.bankInput = document.getElementById("bank-input");
    this.lostScreen = document.getElementById("lost-screen");
    this.resultScreen = document.getElementById("result");
    this.betInput.addEventListener("change", function(){this.showBet()}.bind(this));
  },

  restart: function(){
    this.lostScreen.classList.remove();
    this.init();
  },

  showBet: function(){
    this.betScreen.innerHTML = this.betInput.value
  },

  setBet: function(){
    if(+this.bankInput.value > this.bank)
      return this.bank;
    else
      return +this.bankInput.value;

  },

  payOut: function(amount){
    this.bank += amount * 36;
  },

  lose: function(amount){
    this.bank -= amount;
    if(this.bank <= 0){
      this.bank = 0;
      this.gameOver();
    }
  },

  gameOver(){
    this.lostScreen.classList.add("active");
  },

  collectBet: function(){
    var betValue = this.betInput.value;
    var betAmount = this.setBet();
    if(this.checkResults(betValue, this.spin())){
      this.payOut(betAmount);
    } else {
      this.lose(betAmount);
    }

    this.bankScreen.innerHTML = this.bank;
  },

  checkResults: function(choice, outcome){
    if(choice == outcome)
      return true;
    else
      return false;
  },


  spin: function(){
    var pos = Math.round(Math.random()*37);
    $('.wheel img.board').css('transition', 'all 0s');
    $('.wheel img.board').css('transform', 'rotate(-' + (deg % 360) + 'deg)');
    setTimeout(function(){roulette.animateWheel(pos)}, 100);
    setTimeout(function(){this.updateScreen(this.positions[pos])}.bind(this), 2000)
    return this.positions[pos];
  },

  animateWheel: function(pos){
    deg = (Math.round((360/37)*pos) + (Math.round(Math.random() * 3)+2)*360);
    $('.wheel img.board').css('transition', 'all 2s ease');
    $('.wheel img.board').css('transform', 'rotate(-' + deg + 'deg)');
  },

  updateScreen: function(num){
    this.resultScreen.innerHTML = num;
  },

  betScreen: null,
  betInput: null,
  bank: 100,
  bankScreen: null,
  bankInput: null,
  resultScreen: null,

  positions: {
    0: 0,
    1: 32,
    2: 15,
    3: 19,
    4: 4,
    5: 21,
    6: 2,
    7: 25,
    8: 17,
    9: 34,
    10: 6,
    11: 27,
    12: 13,
    13: 36,
    14: 11,
    15: 30,
    16: 8,
    17: 23,
    18: 10,
    19: 5,
    20: 24,
    21: 16,
    22: 33,
    23: 1,
    24: 20,
    25: 14,
    26: 31,
    27: 9,
    28: 22,
    29: 18,
    30: 29,
    31: 7,
    32: 28,
    33: 12,
    34: 35,
    35: 3,
    36: 26,
  }
}

$(function(){
  roulette.init();
  $('#bet-btn').on('click', function(){
    roulette.collectBet();
  })
  $('.restart').on('click', function(){
    roulette.restart();
  })
})
