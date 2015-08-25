function Roulette(starting_money){
	this.range = 36;
	this.money = starting_money;
	this.bankroll = function(){
		return "You now have $" + this.money.toString() + "."
	};
	this.spin = function(bet, squares){
		var result = Math.floor(Math.random() * 37);
		//squares is an array
		console.log(squares);
		console.log("The end result is a " + result.toString() + ".");

		if (squares.indexOf(result) !== -1) {
			mult = 36/(squares.length) - 1
			var winnings = Math.round(bet * mult * 100)/100;
			this.money += winnings;
			console.log("You win $" + winnings.toString() + "!!!");
		} else {
			this.money -= bet;
			console.log("You lose $" + bet.toString() + "...");
		}
		console.log(this.bankroll());
	};

	this.buyIn = function(buyin){
		this.money += buyin;
		console.log("You bought in $" + buyin.toString() + ".");
		console.log(this.bankroll());
	};

	this.singleSpin = function(bet, square){
		this.spin(bet, [square])
	};

	this.evenSpin = function(bet){
		this.spin(bet, (function(range){
			evenNumbers = [];
			for (var i = 2; i <= range; i += 2){
				evenNumbers.push(i);
			}
			return evenNumbers;
		}(this.range)));
	};

	this.oddSpin = function(bet){
		this.spin(bet, (function(range){
			oddNumbers = [];
			for (var i = 1; i <= range; i += 2){
				oddNumbers.push(i);
			}
			return oddNumbers;
		}(this.range)));
	};

	this.firstHalfSpin = function(bet){
		this.spin(bet, (function(range){
			firstHalfNumbers = [];
			for (var i = 1; i <= range / 2; i++){
				firstHalfNumbers.push(i);
			}
			return firstHalfNumbers;
		}(this.range)));
	};

	this.lastHalfSpin = function(bet){
		this.spin(bet, (function(range){
			lastHalfNumbers = [];
			for (var i = range/2 + 1; i <= range; i++){
				lastHalfNumbers.push(i);
			}
			return lastHalfNumbers;
		}(this.range)));
	};

	this.first12Spin = function(bet){
		this.spin(bet, (function(){
			first12Numbers = [];
			for (var i = 1; i <= 12; i++){
				first12Numbers.push(i);
			}
			return first12Numbers;
		}()));
	};

	this.second12Spin = function(bet){
		this.spin(bet, (function(){
			second12Numbers = [];
			for (var i = 13; i <= 24; i++){
				second12Numbers.push(i);
			}
			return second12Numbers;
		}()));
	};

	this.third12Spin = function(bet){
		this.spin(bet, (function(){
			third12Numbers = [];
			for (var i = 25; i <= 36; i++){
				third12Numbers.push(i);
			}
			return third12Numbers;
		}()));
	};

}
