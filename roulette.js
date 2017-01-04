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
    this.updateScreen(0);
    this.bankScreen.innerHTML = this.bank;
  },

  restart: function(){
    this.lostScreen.classList.remove("active");
    this.init();
    $('.wheel img.board').css('transform', 'rotate(0deg)');

  },

  showBet: function(){
    this.betScreen.innerHTML = this.betInput.value
  },

  setBet: function(){
    if(+this.bankInput.value < 0){
      this.bankInput.value = +this.bankInput.value * -1 
    }

    if(+this.bankInput.value > this.bank)
      return this.bank;
    else
      return +this.bankInput.value;

  },

  payOut: function(amount, multiplier){

    this.bank += amount * multiplier;
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
    if(this.checkResults(betValue, this.spin().value)){
      this.payOut(betAmount, 36);
    } else {
      this.lose(betAmount);
    }

    this.updateBank()
  },

  betColor: function(color){
    var betAmount = this.setBet();
    if(this.checkResults(color, this.spin().color)){
      this.payOut(betAmount, 1);
    } else {
      this.lose(betAmount);
    }

    this.updateBank()
  },

  betParity: function(parity){
    var betAmount = this.setBet();
    if(this.checkResults(+parity, this.spin().value % 2)){
      this.payOut(betAmount, 1);
    } else {
      this.lose(betAmount);
    }

    this.updateBank()

  },

  updateBank: function(){
    setTimeout(function(){
      this.bankScreen.innerHTML = this.bank;
    }.bind(this), 2000)
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
    this.updateScreen(this.positions[pos].value);
    return this.positions[pos];
  },

  animateWheel: function(pos){
    deg = (Math.round((360/37)*pos) + (Math.round(Math.random() * 3)+2)*360);
    $('.wheel img.board').css('transition', 'all 2s ease');
    $('.wheel img.board').css('transform', 'rotate(-' + deg + 'deg)');
  },

  updateScreen: function(num){
    setTimeout(function(){
      this.resultScreen.innerHTML = num;}.bind(this), 
      2000)
  },


  betScreen: null,
  betInput: null,
  bank: 100,
  bankScreen: null,
  bankInput: null,
  resultScreen: null,

  positions: {
    0: {value: 0, color: "green" }, 
    1: {value: 32, color: "red" }, 
    2: {value: 15, color: "black" }, 
    3: {value: 19, color: "red" }, 
    4: {value: 4, color: "black" },
    5: {value: 21, color: "red" }, 
    6: {value: 2, color: "black" }, 
    7: {value: 25, color: "red" }, 
    8: {value: 17, color: "black" }, 
    9: {value: 34, color: "red" }, 
    10: {value: 6, color: "black" }, 
    11: {value: 27, color: "red" }, 
    12: {value: 13, color: "black" }, 
    13: {value: 36, color: "red" }, 
    14: {value: 11, color: "black" }, 
    15: {value: 30, color: "red" }, 
    16: {value: 8, color: "black" }, 
    17: {value: 23, color: "red" }, 
    18: {value: 10, color: "black" }, 
    19: {value: 5, color: "red" }, 
    20: {value: 24, color: "black" }, 
    21: {value: 16, color: "red" }, 
    22: {value: 33, color: "black" }, 
    23: {value: 1, color: "red" }, 
    24: {value: 20, color: "black" }, 
    25: {value: 14, color: "red" }, 
    26: {value: 31, color: "black" }, 
    27: {value: 9, color: "red" }, 
    28: {value: 22, color: "black" }, 
    29: {value: 18, color: "red" }, 
    30: {value: 29, color: "black" }, 
    31: {value: 7, color: "red" }, 
    32: {value: 28, color: "black" }, 
    33: {value: 12, color: "red" }, 
    34: {value: 35, color: "black" }, 
    35: {value: 3, color: "red" }, 
    36: {value: 26, color: "black" } 
  }
}

$(function(){
  roulette.init();
  $('#bet-btn').on('click', function(){
    roulette.collectBet();
  })
  $('.restart').each(function(){
    $(this).on('click', function(){
      roulette.restart();
    })
  })
  $('.bet-color').each(function(){
    $(this).on('click', function(){
      roulette.betColor($(this).data("color"));
    })
  })

  $('.bet-parity').each(function(){
    $(this).on('click', function(){
      roulette.betParity($(this).data("parity"));
    })
  })
})
