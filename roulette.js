function Roulette(initialCash){
  this.bank = initialCash,

  this.bankroll = () => {
    console.log(`You now have ${this.bank}`);
  },

  this.buyIn = (cash) => {
    if((typeof cash == 'number') && cash >= 0){
      this.bank += cash
      console.log(`You bought in ${cash}`);
      this.bankroll();
    } else {
      console.log("Invalid input");
    }
  },

  this.spin = (bet, place) => {
    if((place < 1) && (place > 36)){
      console.log("Please enter a number between 1 and 36");
    } else if ((bet > this.bank)) {
      console.log("You do not have the cash for that bet!");
    } else if (bet <= 0){
      console.log("That is not a valid bet");
    } else {

      this.bank -= bet;
      chickenDinner = Math.floor(Math.random() * 36)
      if(place === chickenDinner){
        let winnings = bet * 35
        this.bank += (winnings)
        console.log(`The spin was ${chickenDinner}! You Win ${winnings}`);
        this.bankroll();
      } else {
        console.log(`You Lose, the spin was ${chickenDinner}`);
        this.bankroll();
      }
    }
  }
}