

class Roulette {
  constructor(bankroll) {
    this._bankroll = bankroll;
  }

  spin(betQuantity, bet) {
    if (this._bankroll === 0) {
      console.log("Your bankroll is empty, you must refill it to continue playing")
      return;
    }
    let spinnum = this.randomNum();
    if (spinnum === `${bet}`) {
      this._bankroll += betQuantity*35;
      this.winMessage(`${bet}`, betQuantity*35, spinnum);
    } else if (`${bet}` === "0" && parseInt(spinnum) === 37) { // need one for single 0
      this._bankroll += betQuantity*35;
      this.winMessage(`${bet}`, betQuantity*35, spinnum);
    } else if (`${bet}` === 'Even' && parseInt(spinnum) % 2 === 0) {
      this._bankroll += betQuantity;
      this.winMessage("Even", betQuantity, spinnum);
    } else if (`${bet}` === 'Odd' && parseInt(spinnum) % 2 !== 0) {
      this._bankroll += betQuantity;
      this.winMessage("Odd", betQuantity, spinnum);
    } else if (`${bet}` === '1 to 18' && (parseInt(spinnum) >= 1 && parseInt(spinnum) <= 18) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '19 to 36' && (parseInt(spinnum) >= 19 && parseInt(spinnum) <= 36) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '1st 12' && (parseInt(spinnum) >= 1 && parseInt(spinnum) <= 12) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '2nd 12' && (parseInt(spinnum) >= 13 && parseInt(spinnum) <= 24) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '3rd 12' && (parseInt(spinnum) >= 26 && parseInt(spinnum) <= 36) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else {
      this._bankroll -= betQuantity;
      console.log(`You lose, the spin was ${spinnum}`)
      console.log(`You not have $${this._bankroll}`)
    }
  }
  winMessage(typeOfBet, amountWon, spinnerVal) {
    var spinval;
    if (typeOfBet === "Even") {
      spinval = "even";
    } else if (typeOfBet === "Odd") {
      spinval = "odd";
    } else if (typeOfBet === "0") {
      spinval = "0";
    } else {
      spinval = spinnerVal;
    }
    console.log(`You win $${amountWon}, the spin was ${spinval}!!!`)
    console.log(`You now have $${this._bankroll}`)
  }

  randomNum() {
    return [Math.round(Math.random() * 3), Math.round(Math.random() * 7)].join('')
  }

  get bankroll() {
    return this._bankroll;
  }

  buyIn(addAmount) {
    this._bankroll += addAmount;
    console.log(`You bought in $${addAmount}`);
  }

}
