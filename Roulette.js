function Roulette(wallet) {
	this.spin = function(bet, ammt) {
		var x = Math.floor(Math.random() * (40))
		if (x === 39) {x = 00};
		if (bet === "even" && (x % 2) === false)
			console.log("You win $" + ammt + ", the spin was " + bet + "!!!");
			wallet = wallet + ammt
			console.log("You now have $" + wallet + ".");
		}
		else if (bet === "odd" && x % 2)
			console.log("You win $" + ammt + ", the spin was " + bet + "!!!");
			wallet = wallet + ammt
			console.log("You now have $" + wallet + ".");
		}
		else if (x === 0 && wallet >= 0) {
			console.log("You win $" + (ammt * 35) + ", the spin was " + bet + "!!!");
			ammt = (ammt * 35)
			wallet = wallet + ammt
			console.log("You now have $" + wallet + ".");
		}
		else if (x === bet && wallet >= 0 && x !== 0) {
			console.log("You win $" + (ammt * 36) + ", the spin was " + bet + "!!!");
			ammt = (ammt * 36)
			wallet = wallet + ammt
			console.log("You now have $" + wallet + ".");
		}
		else if (wallet <= 0) {
			console.log("You're out of money!!!");
		}
		else {
			console.log("You lose, the spin was " + x + " :(");
			wallet = wallet - ammt
			console.log("You now have $" + wallet + ".");
			if (wallet <= 0) {
				console.log("You're out of money!!!");
			}
		}
	}
	this.bankroll = function() {
		console.log("You now have $" + wallet + ".");
	}
	this.buyIn = function(ammt) {
		console.log("You bought in $" + ammt + ".");
		wallet = wallet + ammt
		console.log("You now have $" + wallet + ".");
	}
}