function Roulette(startBankroll) {
  this.funds = startBankroll;
  this.spin = function(betAmount, bet) {
    var spinResult = Math.floor(Math.random() * 38)
    this.funds -= betAmount
    if (typeof bet === "number") {
      if (spinResult === bet) {
        this.win(betAmount, multiplier, spinResult)
      } else {
        this.lose(spinResult)
      }
    } else {
      switch (bet) {
        case "0":
        if (spinResult === 37) {
          this.win(betAmount, 35, "0")
        }
        break;
        case "00":
        if (spinResult === 38) {
          this.win(betAmount, 35, "00")
        }
        break;
        case "Even":
        if (spinResult % 2 === 0) {
          this.win(betAmount, 2, spinResult)
        }
        break;
        case "Odd":
        if (spinResult % 2 === 1) {
          this.win(betAmount, 2, spinResult)
        }
        break;
        case "1 to 18":
        if (spinResult < 19) {
          this.win(betAmount, 2, spinResult)
        }
        break;
        case "19 to 36":
        if (spinResult >= 19 && spinResult < 37) {
          this.win(betAmount, 2, spinResult)
        }
        break;
        case "1st 12":
        if (spinResult < 13) {
          this.win(betAmount, 3, spinResult)
        }
        break;
        case "2nd 12":
        if (spinResult >= 13 && spinResult < 25) {
          this.win(betAmount, 3, spinResult)
        }
        break;
        case "3rd 12":
        if (spinResult >= 26 && spinResult < 37) {
          this.win(betAmount, 3, spinResult)
        }
        break;
        default:
        this.lose(spinResult);
      };
    };
  };
  this.bankroll = function() {
    console.log(`You now have $${this.funds}`)
  };
  this.buyIn = function(additionalFunds) {
    this.funds += additionalFunds
    console.log(`You bought in $${additionalFunds}`)
    this.bankroll()
  };
  this.win = function(betAmount, multiplier, spinResult) {
    this.funds += (betAmount * multiplier)
    console.log(`You win $${betAmount * multiplier}, the spin was ${spinResult}!!!`);
    this.bankroll()
  };
  this.lose = function(spinResult) {
    console.log(this)
    console.log(`You lose, the spin was ${spinResult} :(`);
    this.bankroll()
  };
};
