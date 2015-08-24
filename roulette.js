function Roulette(starting_money){
	this.money = starting_money;
	this.bankroll = function(){
		return "You now have $" + this.money.toString() + "."
	};
	this.spin = function(bet, square){
		var result = Math.ceil(Math.random() * 36);
		if (result === square) {
			this.money += bet * 35;
			console.log("You win $" + (bet * 35).toString() + "!!!");
			console.log(this.bankroll());
		} else {
			this.money -= bet;
			console.log("You lose $" + bet.toString() + "...");
			console.log(this.bankroll());
		}
	};
	this.buyIn = function(buyin){
		this.money += buyin;
		console.log("You bought in $" + buyin.toString() + ".");
		console.log(this.bankroll());
	};
	this.oneToNinteenSpin = function(bet){
		this.spin(bet, )
	}
}
