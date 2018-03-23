function roulette9000(bankRoll){
  var ready = confirm("Are you ready to play Roulette9000?")

  if (ready === true){
    this.cash = parseInt(prompt("GREAT!!! How much money would do you have to start with"), 10)
    }
  else {
    alert("Okay, come back when you are ready...")
  }
  return this.cash;
}



var instructions = function(){
    console.log(
      "INSTRUCTIONS:\n"+
        "To start run roulette9000()\n"+
        "To spin run spin(BET, $ amount)\n"+
        "BET = a number 1 -36 or\n"+
        "'0' even, odd, '1 to 18' '19 to 36' or \n"+
        "'1st 12', '2nd 12', '3rd 12' \n"+
        "To check your cash run bankRoll()\n"+
        "To add cash run buyIn('Cash amount')\n"+
        "If you have a gambling problem call 555-555-5555\n"
      )
    alert(
      "INSTRUCTIONS:\n"+
      "To start run roulette9000()\n"+
      "To spin run spin(BET, $ amount)\n"+
      "BET = a number 1 -36 or\n"+
      "'0' even, odd, '1 to 18' '19 to 36' or \n"+
      "'1st 12', '2nd 12', '3rd 12' \n"+
      "To check your cash run bankRoll()\n"+
      "To add cash run buyIn('Cash amount')\n"+
      "If you have a gambling problem call 555-555-5555\n"
      )
  }

instructions()

var bankRoll = function(){
  console.log('You are sitting on' + ' ' + this.cash)
}

var buyIn = function(cashAmount){
  this.cash += cashAmount
  console.log("you added" + " " + cashAmount + " " + bankRoll());
}

var evenVal = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
var oddVal = [0, 1, 3, 5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
var redVal = [1, 3, 5, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var blackVal = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33,35];

this.spinReturn = function(bool, money){
  console.log("the winning slot is" + " " + this.winningValue);
  if (bool){
    this.cash += money;
    console.log("CONGRATS!!! you won" + " " + money + " " + "you now have" + " " + this.cash);
  }
  else {
    this.cash -= money;
    console.log("OH NO, you lose" + money + "you now have"+ this.cash);
  }
}

this.spin = function(bet, amount) {

  console.log("spinning for" + " " + amount + " " + "on" + " " + bet);
  bet = String(bet).toLowerCase();

  this.winningValue = Math.floor(Math.random() * 36);

  if (amount > this.cash) {
    console.log("You don't have enough cash\n"+
                "to buy in run buyIn(cashAmount)\n");
    return;
  }

  //spin/bet conditions
  if (bet == 'even' || bet == 'odd'){
    if(bet == 'even'){
      if(evenVal.includes(this.winningValue)){
        this.spinReturn(true, amount)
      }
      else {
        this.spinReturn(false, amount)
      }
    }
    else if (bet == 'odd') {
      if(oddVal.includes(this.winningValue)){
        this.spinReturn(true, amount)
      }
      else {
        this.spinReturn(false, amount)
      }

    }
  }
  else if (bet == 'red' || bet == 'black') {
    if(bet == 'red'){
      if(redVal.includes(this.winningValue)){
        this.spinReturn(true, amount)
      }
      else {
        this.spinReturn(false, amount)
      }
    }
    else if (bet == 'black') {
      if(blackVal.includes(this.winningValue)){
        this.spinReturn(true, amount)
      }
      else {
        this.spinReturn(false, amount)
      }

    }
  }
  else if (bet == 'low' || bet == '1 to 18' || bet == 'high' || bet == '19 to 36') {
    if(bet == 'low' || bet == '1 to 18'){
      if(this.winningValue <= 18){
        this.spinReturn(true, amount)
      }
      else {
        this.spinReturn(false, amount)
      }
    }
    else if (bet == 'high' || bet == '19 to 36') {
      if(this.winningValue >= 19){
        this.spinReturn(true, amount)
      }
      else {
        this.spinReturn(false, amount)
      }

    }
  }
  else if (bet == '1st 12' || bet == '2nd 12' || bet == '3rd 12') {
    if(bet == '1st 12'){
      if(this.winningValue >= 1 && this.winningValue <= 12){
        this.spinReturn(true, amount * 2)
      }
      else {
        this.spinReturn(false, amount )
      }
    }
    else if (bet == '2nd 12') {
      if(this.winningValue >= 13 && this.winningValue <= 24){
        this.spinReturn(true, amount * 2)
      }
      else {
        this.spinReturn(false, amount )
      }

    }
    else if (bet == '3rd 12') {
      if(this.winningValue >= 25){
        this.spinReturn(true, amount * 2)
      }
      else {
        this.spinReturn(false, amount )
      }

    }
  }
  else if(bet == this.winningValue){
    this.spinReturn(true, amount * 35)
  }
  else {
    this.spinReturn(false, amount)
  }

}
