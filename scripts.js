// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(theArray){
		return Math.max.apply(null, theArray);  
  },
  
  reversed: function(theString){ 
		return theString.split("").reverse().join(""); 
  },

  loudSnakeCase: function(theString){
		theString = theString.toLowerCase();
		theString = theString.replace(/[^a-z]+/g, '_');
		theString = theString.replace(/^_|_$/g, '');
		var arr = theString.split("_");
		arr = arr.map(function(el){
			return el.charAt(0).toUpperCase() + el.slice(1);
		});
		return arr.join("_");
  },

  compareArrays: function(arr1, arr2){
		return arr1.join("") === arr2.join("");
  },

  fizzBuzz: function(num){  
    var result = [];
		for (var i = 1; i <= num; i++)
		{
			if (i % 3 == 0)
			{
				if (i % 5 == 0)
				{
					result.push("FIZZBUZZ");
				}
				else
				{
					result.push("FIZZ");
				}
			}
			else if (i % 5 == 0)
			{
				result.push("BUZZ");
			}
			else
			{
				result.push(i);
			}
		}
		return result;
  },

  myMap: function(arr, func){
		var result = [];
		arr.forEach(function(el){
			result.push(func(el));
		});
		return result;
  },

  primes: function(num){
		var result = [];
		for (var candidatePrime = 2; candidatePrime < num; candidatePrime++)
		{
			var isPrime = true;
			for (var i = 2; i < candidatePrime; i++)
			{
				if (candidatePrime % i == 0)
				{
					isPrime = false;
					break;
				}
			}
			if (isPrime)
			{
				result.push(candidatePrime);
			}
		}
		return result;
  },
};

function Roulette(balance)
{
	this.balance = balance;
	
	this.bettingStrategy = ["00", "Even", "Odd", "1 to 18", "19 to 36", "1st 12", "2nd 12", "3rd 12"];
	this.winTable = [[37],
									 [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
									 [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],
									 [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
									 [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
									 [1,2,3,4,5,6,7,8,9,10,11,12],
									 [13,14,15,16,17,18,19,20,21,22,23,24],
									 [25,26,27,28,29,30,31,32,33,34,35,36]];
	this.multiplierTable = [35, 1, 1, 1, 1, 2, 2, 2];
	
	console.log("Welcome to Roulette");
	this.displayBalance();
}

Roulette.prototype.spin = function(amount, typeOfBet)
{
	//	Accepts:
	//	numbers 0...36 to bet on single numbers;
	//	string "0" to bet on zero;
	//	string "00" to bet on double zero;
	//	string "Even" to bet on even numbers;
	//	string "Odd" to bet on odd numbers;
	//	string "1 to 18" to bet on numbers 1 ...18;
	//	string "19 to 36" to bet on numbers 19...36;
	//	string "1st 12" to bet on numbers 1...12;
	//	string "2nd 12" to bet on numbers 13...24;
	//	string "3rd 12" to bet on numbers 25...36;
	
	var winningPositions = [];
	var multiplier = 35;
	
	if (isNaN(amount) || amount <= 0 || amount > this.balance)
	{
		console.log("You cannot place a bet of $" + amount);
		this.displayBalance();
		return;
	}
	
	if (typeOfBet === "0")
	{
		typeOfBet = 0;
	}
	
	if (typeof(typeOfBet) === "number")
	{
		if (typeOfBet > 36)
		{
			console.log("Illegal bet type: " + typeOfBet);
			this.displayBalance();
			return;
		}
		
		winningPositions.push(typeOfBet);
	}
	else if (typeof(typeOfBet) === "string")
	{
		var strategy = this.bettingStrategy.indexOf(typeOfBet);
		
		if (strategy < 0)
		{
			console.log("Illegal betting strategy: " + typeOfBet);
			this.displayBalance();
			return;
		}
		
		winningPositions = this.winTable[strategy];
		multiplier = this.multiplierTable[strategy];
		typeOfBet = this.bettingStrategy[strategy];
	}
	else
	{
		console.log("Illegal bet type: " + typeOfBet);
		this.displayBalance();
		return;
	}
	
	console.log("You bet $" + amount + " on " + typeOfBet);
	
	//	0    = 0
	//	1-36 = 1..36
	//	37   = 00
	var ballPosition = Math.floor(Math.random() * 38);
	
	this.balance -= amount;
	
	var winnings = 0;
	winningPositions.forEach(function(el){if (el == ballPosition) {winnings = amount * multiplier;}});
	
	if (winnings)
	{
		this.balance += winnings;
		console.log("You Win $" + winnings + ", the spin was " + ((ballPosition > 36) ? "00" : ballPosition) + "!!!");
	}
	else
	{
		console.log("You Lose, the spin was " + ((ballPosition > 36) ? "00" : ballPosition) + " :(");
	}
	this.displayBalance();
}

Roulette.prototype.bankroll = function()
{
	this.displayBalance();
}

Roulette.prototype.buyIn = function(amount)
{
	this.balance += amount;
	console.log("You have bought in $" + amount);
	this.displayBalance();
}

Roulette.prototype.displayBalance = function()
{
	console.log("You have $" + this.balance + " to play with");
}
