function Roulette(init) {
  this.spin = function(bet, choice){
    this.bankroll -= bet;

    result = Math.floor((Math.random(1)*36) + 1);
    if (result == choice){
      this.bankroll += bet*36;
      console.log("You win " + bet*35);
    }
    else {
      console.log("You lost. The winning choice was " + result);
    }

    console.log("You have $" + this.bankroll + "left" );
  },

  this.bankroll = init,

  this.buyIn = function(dollars){
    this.bankroll += dollars;
  };
};



r = new Roulette (10000);


while (r.bankroll <= 10000){
  r.spin(5, 18)
}