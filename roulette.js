var r = {
  startingBank: 100,
  guess: 0,
  bet: 0,
  outcome: 0,
  placeBet: function(){
  	this.bet = parseInt(prompt("Place your bets!!!"));
    return this.bet;
  },
  guessNum: function(){
    this.guess = parseInt(prompt("Choose your number..."));
    return this.guess;
  },
  spin: function(){
    this.outcome = Math.floor(Math.random() * 39);
    console.log("The winning number is " + this.outcome);
  },
  compare: function(){
    if(r.guess === r.outcome){
		this.bankRoll = this.bankRoll + this.bet;
		console.log("You WIN!");
		console.log("Now you have $" + this.bankRoll);
		return this.bankRoll;
    } else {
    	this.bankRoll = this.bankRoll - this.bet;
    	console.log("You lost.");
      	console.log("Now you have $" + this.bankRoll);
		return this.bankRoll;
    }
  },
  checkBank: function(){
    if(this.bankroll <= 0){
    	console.log("You lost all your money!");
    }
  },
  anotherGame: function(){
    answer= parseInt(prompt("Play another round? Y/N?"));
    if(answer === N || answer === n){
      playAgain = false;
    } else {
      play();
    }
  },
  play: function(){
    bankRoll = this.startingBank;
    playAgain = true;
    while(playAgain === true){
      r.placeBet();
      r.guessNum();
      r.spin();
      r.compare();
      r.checkBank();
      }
  },
}


r.play();
