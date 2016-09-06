//Roulette constructor
//Methods: spin, bankroll, buyIn, adjust_bankroll
//Properties: current_bankroll

function Roulette(starting_bankroll){
  this.current_bankroll = starting_bankroll;
  this.spin = function(bet, number){
              result = Math.floor(Math.random()*36 + 1);
              if (number === result){
                this.current_bankroll += bet*35;
                console.log("You win $"+ (bet*35).toString() + ", the spin was "+ result.toString() + "!!!");
              }
              else{
                current_bankroll -= bet;
                console.log("You Lose, the spin was " + result.toString() =" :(");

              }
              this.bankroll();
  };
  this.bankroll = function(){
    console.log("You now have $" + this.current_bankroll.toString());
  };
  this.buyIn = function(amount){
    this.current_bankroll += amount;
    console.log("You bought in $" + amount.toString());
    console.log("You now have $" + this.current_bankroll.toString());
  };
  this.play = function(){
    while(this.current_bankroll>0){
      bet = prompt("How much is your bet?");
      number = prompt("Bet on which number?");
      this.spin(bet, number);
    }
  }

}