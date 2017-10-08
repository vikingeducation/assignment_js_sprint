//in the console, roulette is an instance of the Roulette class
//to play, use roulette.spin(your bet, what you're betting on)
//to bet on 00, use the string '00'
//to see your money, use roulette.bankroll();
//to add money, use roulette.buyIn(extra money)


class Roulette {
  constructor(startingMoney){
    this.money = startingMoney;
    this.money =this.money || 100;
    this.bankroll = function(){
      console.log("You now have $"+this.money);
    };
    this.payOuts= {
      "00":36,
      Even: 2,
      Odd: 2,
      "1 to 18": 2,
      "19 to 36": 2,
      "1st 12": 3,
      "2nd 12": 3,
      "3rd 12": 3,
      "number":36
    };
    this.spin= function(betSize, betOn){
      var valid = this.validInput(betSize, betOn);
      if (!valid[0]){
        console.log(valid[1]);
        return undefined;
      }

      var outcome = this.determineOutcome(this.land(), betOn);
      this.money = this.money - betSize;
      if (outcome[0]){
        console.log("You win, the spin was "+outcome[1]);
        if (Number.isInteger(betOn)){
          betOn = 'number';
        }
        this.money += betSize * this.payOuts[betOn];
      }
      else{
        console.log("You lose, the spin was "+outcome[1]);
      }
      this.bankroll();
    };

    this.buyIn = function(extraMoney){
      this.money += extraMoney;
      console.log("You bought in $"+extraMoney);
      this.bankroll();
    };

    this.land = function(){
      var stop = Math.floor(Math.random()*38);
      if (stop ===37){
        stop = '00';
      }
      return stop;
    };

    this.determineOutcome = function(stop, betOn){
      var win = false;
      if (Number.isInteger(betOn)){
        if (betOn == stop){
          win = true;
        }
      }
      else{
        switch (betOn) {
          case "00":
            if (stop === "00"){
              win= true;
            }
            break;
          case "Even":
            if (((stop%2)==0) && stop>0){
              win = true;
            }
            break;
          case "Odd":
            if (((stop+1)%2==0) && stop<37){
              win=true;
            }
            break;
          case "1 to 18":
            if ((stop>0)&&(stop<19)){
              win=true;
            }
            break;
          case "19 to 36":
            if ((stop>18)&&(stop<37)){
              win=true;
            }
            break;
          case "1st 12":
            if ((stop>0)&&(stop<13)){
              win=true;
            }
            break;
          case "2nd 12":
            if ((stop>12)&&(stop<25)){
              win=true;
            }
            break;
          case "3rd 12":
            if ((stop>24)&&(stop<37)){
              win=true;
            }
            break;
        }
      }
      var outcome = [win, stop];
      return outcome;
    }

    this.validInput = function(betSize, betOn){
      var valid= false;
      var message="";
      if (!Number.isInteger(betSize)){
        message= "You have to enter an Integer bet";
      }
      if (betSize > this.money){
        message= "You don't have enough money for this bet";
      }
      if (betSize < 0){
        message= "You can't bet negative money";
      }

      if ((typeof betOn !== "string") && (typeof betOn !== "number")){
        message= "You have to bet on a number or a string";
      }

      if ((typeof betOn == "number")&&((betOn<0) || (betOn > 36))) {
        message= "You have bet on a number between 0 and 36 inclusive";
      }

      if ((typeof betOn == "string")&&(!this.payOuts[betOn])) {
        message= "The string you entered doesn't corrsepond to a possible bet";
      }
      if (message===""){
        valid = true;
      }
      
      var outcome = [valid, message];
      return outcome;

    }

  }


}


var roulette = new Roulette();