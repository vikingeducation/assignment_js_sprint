function Roulette (bankroll) {
  var rangeWin = function(spinResult, lo, hi) {
    ((spinResult >= lo) && (spinResult <= hi)) ? true : false;
  }

  this.bankrollVal = bankroll;

  this.bankroll = function() {
    return 'You now have $' + this.bankrollVal;
  };

  this.spin = function (wager, num) {
    var spinResult = Math.floor((Math.random() * 38));
    var multiplier = 1;
    var winning = false;
    switch(num) {
      case "00":
        winning = (spinResult === 37);
        break;
      case "Odd":
        winning = ( spinResult % 2 === 1);
        break;
      case "Even":
        winning = ( spinResult % 2 === 0);
        break;
      case "1 to 18":
        winning = rangeWin(num, 1, 18);
        break;
      case "19 to 36":
        winning = rangeWin(num, 19, 36);
        break;
      case "1st 12":
        winning = rangeWin(num, 1, 12);
        multiplier = 2;
        break;
      case "2nd 12":
      winning = rangeWin(num, 12, 24);
        multiplier = 2;
        break;
      case "3rd 12":
        winning = rangeWin(num, 24, 36);
        multiplier = 2;
        break;
      default:
        num = parseInt(num);
        winning = (num === spinResult)
        break
    }
    if (winning) {
      this.bankrollVal += wager * multiplier;
      console.log(this.bankroll());
      return 'You Win, the Spin landed on [' + spinResult + ']'
    } else {
      this.bankrollVal -= wager;
      console.log(this.bankroll());
      return 'You Lose, the Spin landed on [' + spinResult + ']'
    }
  };
  
  this.buyIn = function (amnt) {
    this.bankrollVal += amnt;
  }
}

r = new Roulette(100);

console.log(r);
console.log(r.spin(10,"Odd") );
console.log(r.spin(50,"Even") );