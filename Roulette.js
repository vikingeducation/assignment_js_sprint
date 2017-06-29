// PROGRAM FOR ROULETTE GAME

function Roulette(bankroll) {
	this.bankroll = bankroll;
		this.buyIn = function(amount) {
			console.log("You bought in " + amount);
				this.bankroll += amount;
					console.log("You now have " + this.bankroll);
		}

		this.spin = function(amount, number) {
			this.amount = amount;
				if(this.amount > this.bankroll) {
						alert('INSUFFICIENT FUNDS');
							return this.bankroll;
				}

				this.bankroll -= this.amount;
					this.number = number;
						if(this.number > 36){
							alert('Numbers must be between 1-36');
								return this.number;
						}

			var bonus = 35;
				var spinResult = Math.floor(Math.random() * ((36-1)+1) + 1);
 					if(spinResult == this.number) {
						this.amount *= bonus;
							this.bankroll += this.amount;
								console.log('you win ' + this.amount + " the spin was " + spinResult);
									console.log("You now have " + this.bankroll);
					} else {
						console.log('you lose,the spin was ' + spinResult);
							console.log("You now have " + this.bankroll);
					}
    }
}

// GAMEPLAY

// playerName = new Roulette(enter your bankroll here)

// playername.spin(amount you would like to bet, number you're betting on)

// repeat till bankroll == 0

// to buy more cash, enter playerName.buyIn(amount you want to buy in)

// ENJOY!!!