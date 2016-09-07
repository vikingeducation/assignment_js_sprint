//Roulette constructor
//Methods: spin, bankroll, buyIn, adjust_bankroll
//Properties: current_bankroll

function Roulette(starting_bankroll){
  this.current_bankroll = parseInt(starting_bankroll, 10);

  this.spin = function(bet, choice){
    result = Math.floor(Math.random()*36 + 1);

    switch (choice.toUpperCase()){
      case "E":
        this.check_even(bet, result);
        break;
      case "O":
        this.check_odd(bet, result);
        break;
      case "H1":
        this.check_range(bet, result, 1, 18);
        break;
      case "H2":
        this.check_range(bet, result, 19, 36);
        break;
      case "T1":
        this.check_range(bet, result, 1, 12);
        break;
      case "T2":
        this.check_range(bet, result, 13, 24);
        break;
      case "T3":
        this.check_range(bet, result, 25, 36);
        break;
      default:
        this.check_number(bet, result, choice);
    }

    this.bankroll();
  };

  this.check_even = function(bet, result){
    if(result % 2 === 0){
      this.current_bankroll += parseInt(bet, 10);
      alert("You win $"+ (bet).toString() + ", the spin was "+ result.toString() + "!!!");
    }
    else{
      this.current_bankroll -= bet;
      alert("You Lose, the spin was " + result.toString() + " :(");
    }
  };

  this.check_odd = function(bet, result){
    if(result % 2 !== 0){
      this.current_bankroll += parseInt(bet, 10);
      alert("You win $"+ (bet).toString() + ", the spin was "+ result.toString() + "!!!");
    }
    else{
      this.current_bankroll -= bet;
      alert("You Lose, the spin was " + result.toString() + " :(");
    }
  };

  this.check_range = function(bet, result, min, max){
    // find whether bet is a third or a half bet
    if(max-min === 17 ){
      var amount = bet;
    }
    else{
      var amount = 2*bet;
    }

    if(result <= max && result >= min){
      this.current_bankroll += parseInt(amount, 10);
      alert("You win $"+ (amount).toString() + ", the spin was "+ result.toString() + "!!!");
    }
    else{
      this.current_bankroll -= bet;
      alert("You Lose, the spin was " + result.toString() + " :(");
    }
  };

  this.check_number = function(bet, result, choice) {
    if (choice === result){
      this.current_bankroll += parseInt(bet * 35, 10);
      alert("You win $"+ (bet*35).toString() + ", the spin was "+ result.toString() + "!!!");
    } else{
      this.current_bankroll -= bet;
      alert("You Lose, the spin was " + result.toString() + " :(");
    }
  };

  this.bankroll = function(){
    alert("You now have $" + this.current_bankroll.toString());
  };

  this.buyIn = function(amount){
    this.current_bankroll += amount;
    alert("You bought in $" + amount.toString());
    alert("You now have $" + this.current_bankroll.toString());
  };

  this.play = function(){
    while(this.current_bankroll > 0){
      bet = prompt("You have $" + this.current_bankroll.toString() + " in the bank. How much is your bet?");
      if (bet === null){
        break;
      }
      number = prompt("What type of bet would you like to make? Put in a number or choose from the following options: E for even, O for odd, H1 for 1-18, H2 for 19-36, T1 for 1-12, T2 for 13-24, T3 for 25-36, 0 for 0, 00 for 00");
      if (number === null){
        break;
      }
      this.spin(bet, number);
    }
    alert("You lost!");
  }

}

r = new Roulette(100);
r.play();