class Roulette {

	//start with a balance
	constructor(amount) {
		this.balance = amount;
	}
	
	//print out current balance
	bankroll() {
		console.log("You now have " + this.balance);
	}

	//buy some credit
	buyIn(buy) {
		console.log("You bought in " + buy);
		this.balance += buy;
		this.bankroll();
	}

	//place a `bet` amount on a `betOn` (number (0 -36) or "00" or "Even"/"Odd"/"1 to 18"/"19 to 36" or
	//"1st 12"/"2nd 12"/"3rd 12) " 
	spin(bet, betOn) {

		//odds
		let multiplier = 0; 

		//if bet placed on a number
		if (typeof(betOn) === "number") {

			if ((betOn < 0)	 || (betOn > 36)) {
				console.log(betOn + " is not a valid entry, please enter a valid roulette number between 0 - 36");
			} else {
				multiplier = 35;
			}

		} else {
			//bet placed on `outside bets`
			switch (betOn) {
				case "00" : 
					multiplier = 35;
					break;
				case "Even" :
				case "Odd" :
				case "1 to 18" :
				case "19 to 36" :
					multiplier = 1;
					break;
				case "1st 12" :
				case "2nd 12" :
				case "3rd 12" :
					multiplier = 2;
					break;
				default:
					//none of the above
					console.log(betOn + " not a valid entry, please try again!"); 
			}
		}

		//first check if valid bet placed
		if (multiplier > 0) {

			//next, check if you have enough balance to cover the bet
			if (this.balance > bet) {

				//randomly get a win or lose and change balance based on it
				if (Math.round(Math.random()) > 0) {
					console.log("You win " + (bet * multiplier) + "!");
					this.balance += (bet * multiplier);
				} else {
					console.log("You lose " + bet + "!");
					this.balance -= bet;
				}

				//notify user of current balance
				this.bankroll();
			} else {

				//notify user of insufficient funds and to get more credit
				console.log("Not enough money to cover the bet, please buy in some more!");
			}
		}
	}
}

let r = new Roulette(100);
r.bankroll();
r.spin(50, 20);
r.spin(100, 15);			//may cause error due to insufficient funds
r.buyIn(500);
r.spin(100, 21);
r.spin(200, 12);
r.spin(100, "2nd 12");		//2:1
r.buyIn(1000);
r.spin(300, "19 to 36");	//1:1
r.spin(200, 54);			//should raise an error
r.spin(200, "X");	  		//should raise an error
r.spin(200, 36);
