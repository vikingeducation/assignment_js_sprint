
function Roulette(starting_amt){
  
  this.spin = function(amt, guess){
    //random number
    if( canPlay(amt) ){

      console.log("You bet $"+ amt+ "on "+ guess);
      var result = Math.floor(Math.random() * 37);
      
      if (result===37){
        result = "00";
      }
      console.log("Spun number: " + result);

      guessChecker(guess, amt, result);
    }
  };

  var guessChecker = function(guess, amt, result){
    //check against guess
    switch(guess){
      case(result):
        win(amt, 35);
        break;
      case("00"):
        win(amt, 35);
        break;
      case("even"):
        if (result !== "00" && result%2 === 0 ){
          win(amt, 1);
        }else {
          loss(amt);
        }
        break;
      case("odd"):
        if (result%2 !== 0){
          win(amt, 1);
        }else {
          loss(amt);
        }
        break;
      case("1 to 18"):
        if (result >= 1 && result <= 18){
          win(amt, 1);
        } else{
          loss(amt);
        }
        break;
      
      case("19 to 36"):
        if (result >= 19 && result <= 36){
          win(amt, 1);
        } else{
          loss(amt);
        }
        break;
      
      case("1st 12"):
        if (result <= 12 && result >= 1){
          win(amt, 2);
        } else{
          loss(amt);
        }
        break;
      
      case("2nd 12"):
        if (result <= 24 && result >= 13){
          win(amt, 2);
        } else{
          loss(amt);
        }
        break;
      
      case("3rd 12"):
        if (result <= 36 && result >= 25){
          win(amt, 2);
        } else{
          loss(amt);
        }
        break;

      default:
        loss(amt);
    }
  };

  var canPlay = function(amt){
    if( amt < 1 ){
      console.log("Please make a positive bet");
      return false;
    }
    else if( piggyBank <= 0 || piggyBank - amt < 0 ){
      console.log("Insufficient funds");
      return false;
    }
    else{
      return true;
    }
  };

  var win = function(amt, odds){
    piggyBank += amt*odds;
    console.log("You won $" + amt*odds);
  };

  var loss = function(amt){
    piggyBank -= amt;
    console.log ("You lost $" + amt);

  };

  var piggyBank = starting_amt;

  this.bankroll = function(){
    return piggyBank;
  };
  
  this.buyIn = function(amt){
    this.bankroll += amt;
  };
}