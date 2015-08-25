var Roulette = function (init) {
  this.spin = function(bet, choice){
    this.bankroll -= bet;
    var odds;
    var winners = [];
    var i = 0;

    switch (choice) {
      case "A":
        odds = 2;
        while(++i <= 36) {
          if(i%2 === 0) {
            winners.push(i);
          }
        }
        break;
      case "B":
        odds = 2;
        while(++i <= 36) {
          if(i%2 === 1) {
            winners.push(i);
          }
        }
        break;
      case "C":
        odds = 2;
        while(++i <= 18) {
            winners.push(i);
        }
        break;
      case "D":
        odds = 2;
        i = 18;
        while(++i <= 36) {
            winners.push(i);
        }
        break;
      case "E":
        odds = 3;
        while(++i <= 12) {
          winners.push(i);
        }
        break;
      case "F":
        odds = 3;
        i = 12;
        while(++i <= 24) {
          winners.push(i);
        }
        break;
      case "G":
        odds = 3;
        i = 24;
        while(++i <= 24) {
          winners.push(i);
        }
        break;
      case "00":
        odds = 36;
        winners = [-1];
        break;
      default:
        odds = 36;
        winners.push(choice);
    }

    result = Math.floor((Math.random(1)*38) - 1);
    console.log(winners);
    console.log(result);
    if (winners.indexOf(result) >= 0){
      this.bankroll += bet*odds;
      console.log("You win " + bet*(odds-1));
    }
    else {
      console.log("You lost. The winning choice was " + result);
    }

    console.log("You have $" + this.bankroll + "left");
  };

  this.bet = function(){
    var bet_amount = prompt("How much would you like to bet?");
    var choice = prompt("What would you like to bet on? Evens (A), Odds (B), 1 to 18 (C), 19 to 36 (D), 1st 12 (E), 2nd 12 (F), 3rd 12 (G) or Number 0 to 36 (Num), or 00");
    this.spin(bet_amount, choice);
  };

  this.bankroll = init;

  this.buyIn = function(dollars){
    this.bankroll += dollars;
  };
};

r = new Roulette (10000);
r.bet();



