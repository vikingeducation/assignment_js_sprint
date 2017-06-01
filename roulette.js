var Roulette=  function(startCash) {
    var cash= startCash;
    var betCash= 0;
    var betTarget= 0;
    var results= 0;
    var winnings= 0;
    this.bankroll= function() {
      console.log(`You now have \$${cash}.`)
    };


    this.buyIn= function(moreMoney) {
      cash+= moreMoney;
      this.bankroll();
    };

  var rouletteGetResults= function() {
    results= (Math.floor(Math.random() * 36)-1)
  };

  var winnings= function() {
    if ((Number.isInteger(betTarget) && betTarget > 0 && betTarget <=36) || betTarget=== "0" || betTarget=== "00") {
      if (betTarget===results) {
         cash+= (betCash*35)
         console.log(`You Win \$${betCash*35}, the spin was ${results}!!!`);
         return;
       }
    }
    if (betTarget=== "Even"){
      if ((results % 2===0)&& (results > 0)) {
        cash+= (betCash)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }
    if (betTarget=== "Odd"){
      if ((results % 2!==0)&& (results > 0)) {
        cash+= (betCash)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }
    if (betTarget=== "1 to 18"){
      if ((results < 19) && (results > 0)) {
        cash+= (betCash)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }
    if (betTarget=== "19 to 36"){
      if ((results > 18) && (results > 0)) {
        cash+= (betCash)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }
    if (betTarget=== "1st 12"){
      if ((results < 13) && (results > 0)) {
        cash+= (betCash*2)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }
    if (betTarget=== "2nd 12"){
      if ((results < 25)  && (results > 12)) {
        cash+= (betCash*2)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }
    if (betTarget=== "3rd 12"){
      if (results > 24) {
        cash+= (betCash*2)
        console.log(`You Win \$${betCash}, the spin was ${results}!!!`);
        return;
      }
    }

    console.log(`You Lose, the spin was ${results} :(`);
    cash-= betCash
  }



  this.spin= function(c, t) {
    betCash= c
    betTarget= t
    rouletteGetResults();
    if (results=== -1){
      results= "00"
    }else if (results=== 0) {
      results= "0"
    }
    winnings();
    this.bankroll()
  };
};

//For TESTING
r = new Roulette( 100 );
//r.spin( 10, 24 )
//r.spin( 50, 13 )
//r.spin( 50, "Even" )
//r.spin( 50, "Odd" )
//r.spin( 50, "1 to 18")
//r.spin( 50, "19 to 36" )
//r.spin( 50, "1st 12" )
//r.spin( 50, "2nd 12" )
//r.spin( 50, "3rd 12")
//r.bankroll()
//r.buyIn( 1000 )
