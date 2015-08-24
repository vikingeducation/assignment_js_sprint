// r = new Roulette( 100 )  // starting bankroll $100
// r.spin( 10, 24 )         // bet 10 on 24
// // You Win $350, the spin was 24!!!
// // You now have $440.
// r.spin( 50, 13 )
// // You Lose, the spin was 11 :(
// // You now have $390
// r.bankroll()
// // You now have $390
// r.buyIn( 1000 )
// // You bought in $1000
// // You now have $1390

// Roulette obj with method: spin, bankroll, buyIn

function Roulette(starting_amt){
  this.spin = function(amt, guess){
    //random number
    console.log("You bet $"+ amt+ "on "+ guess);
    // var result = Math.floor(Math.random() * 37);
    var result = 37;
    if (result===37){
      result = "00";
    }
    console.log("Spun number: " + result);
    //check against guess
    switch(guess){
      case(result):
        this.bankroll += amt*35;
        console.log("You won $" + amt*35);
        break;
      case("00"):
        this.bankroll += amt*35;
        console.log("You won $" + amt*35);
        break;
      case("even"):
        if (result%2 === 0 && guess !== "00"){
          this.bankroll += amt;
          console.log("You won $" + amt);
        }else {
          this.bankroll -= amt;
          console.log ("You lost $" + amt);
        }
        break;
      case("odd"):
        if (result%2 !== 0){
          this.bankroll += amt;
          console.log("You won $" + amt);
        }else {
          this.bankroll -= amt;
          console.log ("You lost $" + amt);
        }
        break;
      default:
        this.bankroll -= amt;
        console.log ("You lost $" + amt);
    }
  };
  this.bankroll = starting_amt;
  this.buyIn = function(amt){
    this.bankroll += amt;
  };
}