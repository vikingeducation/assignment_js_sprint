function Roulette(starting_money){
	this.money = starting_money;
	this.bankroll = function(){
		return "You now have $" + this.money.toString() + "."
	};
	this.spin = function(bet, squares){
		var result = Math.floor(Math.random() * 37);
		//squares is an array

		if (squares.includes(result)) {
			mult = 36/(squares.length)-1
			this.money += bet * mult;
			console.log("You win $" + (bet * mult).toString() + "!!!");
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
		this.spin(bet)
	}
}
