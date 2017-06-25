// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
	largestEl: function(num){  

		var largest = 0;

		for (var i = 0; i <= largest; i++) {
			
			if (num[i] > largest) {
				var largest = num[i];
			} 
		}
		return largest;
	},

	reversed: function(input){  
		var newArray = [];

		for (var i = 0; i < input.length; i++) {
			newArray.unshift(input[i]);
		}

		var newString = newArray.join('');

		return newString;
	},

	loudSnakeCase: function(str){  
		var array = [];
		var i;

		for (i = 0; i < str.length; i++) {
			if (str[i] === " ") {
				array.push("_");
			} else if ((str[i] !== ".") && (str[i] !== "!") && (str[i] !== " ")) {
				array.push(str[i]);
			} 
		}

		for (i = 1; i < array.length; i++) {
			if (array[i -1] === "_") {
				array[i] = array[i].toUpperCase();
			} else if (array[i] === "_" && array[i - 1] === "_") {
				array.splice(i - 1, 1);
			}
		}

		for (i = 1; i < array.length; i++) {
			if (array[i] === "_" && array[i - 1] === "_") {
				array.splice(i - 1, 1);
			}
		}

		var newString = array.join('');

		return newString;
	},

	compareArrays: function(array1, array2){ 

		console.log("array1 = " + array1);
		console.log("array2 = " + array2);

		if (array1.join() === array2.join()) {
			console.log("match");
			return true;
		} else {
			console.log("mo match");
			return false;
		}

	},

	fizzBuzz: function(input){  

		var array = [];

		for (var i = 1; i <= input; i++) {
			array.push(i);
		}

		for (var x = 0; x < array.length; x++) {
			if ((array[x] % 3 == 0) && (array[x] % 5 == 0)) {
				array[x] = "FIZZBUZZ";
			} 
			else if (array[x] % 3 === 0) {
				array[x] = "FIZZ";
			} 
			else if (array[x] % 5 === 0) {
				array[x] = "BUZZ";
			} 
			else {
				array[x] = array[x];
			}
		}
		return array;
	},

	myMap: function(arr, fun){  

		var returnedArray = [];
		
		for (var i = arr.length - 1; i >= 0; i--) {
			var arrayInput = fun(arr[i]);
			returnedArray.unshift(arrayInput);
		}
		return returnedArray;
	},

	primes: function(input){  
		var primeArray = [];
		var sieve = [];
		var i;
		var j;

		for (i = 2; i < input; i++) {

			if (sieve[i] !== true) {
				primeArray.push(i);

				for (j = i << 1; j <= input; j += i){
					sieve[j] = true;
				}
			}
		}
		return primeArray;
	},
}

var roulette = {

	// Player guesses results of spin
	guess: function(){
		do {
			var guessInput = prompt("The possible wagers and odds are as follows:\n" + 
				"Input 1 for '0' (35:1),\nInput 2 for 'Even' (1:1),\nInput 3 for 'Odd' (1:1),\nInput 4 for '1 to 18' (1:1),\n" +
				"Input 5 for '19 to 36' (1:1),\nInput 6 for '1 to 12' (2:1),\nInput 7 for '13 to 24' (2:1), or\nInput 8 for '25 to 36' (2:1).\n\n" + 
				"What do you think the ball will land on?");
			var guessCheck = this.guessCheck(guessInput);
		} while (guessCheck === false)
		return guessInput;
	},

	guessCheck: function(wagerInput){
		if ((wagerInput >= 1) && (wagerInput <= 8)) {
			return true
		} else {
			alert("Please input a number between 1 and 8.")
			return false;
		}
	},
	// End player guess

	// Start Betting
	bet: function(account) {
		do {
			var betInput = prompt("How much do you bet? The minimum is $1.");
			var betCheck = this.betCheck(betInput, account);
		} while (betCheck === false);
		return betInput;
	},

	betCheck: function(betInput, account){
		if ((betInput >= 1) && (betInput <= account)) {
			return true;
		} else {
			alert("You cannot bet less that $1 or more than you have in your account.\n" + 
				"Remember, your account balance is $" + account);
			return false;
		}
	},
	// End Betting 

	// Check to see if a number is odd or even
	oddOrEven: function(guess){
		if (guess % 2 === 0) {
			return true;
		} else {
			return false;
		}
	},

	// Start Odds Calculations
	oneTOone: function(account, bet){
		return +account + +bet;
	},

	twoTOone: function(account, bet){
		return +account + (2 * +bet);
	},
	thirty5TOone: function(account, bet){
		return +account + (35 * +bet);
	},
	// End Odds Calculations

	spin: function(){
		var spinResult = Math.floor(Math.random() * 36); 
		return spinResult;
	},

	goodGuess: function(){
		alert("Congratualtions! Your guess was correct! Try again to increase your earnings!");
		return;
	},

	spinVSguess: function(account, bet, guess, spinner){
		var newBalance;

		if ((guess === 1) && (spinner === 0)) {
			this.goodGuess();
			newBalance = this.thirty5TOone(account, bet);
			return newBalance;
		}
		else if ((guess === 2) && (this.oddOrEven(spinner) === true)) {
			this.goodGuess();
			newBalance = this.oneTOone(account, bet);
			return newBalance;
		}
		else if ((guess === 3) && (this.oddOrEven(spinner) === false)) {
			this.goodGuess();
			newBalance = this.oneTOone(account, bet);
			return newBalance;
		}
		else if ((guess === 4) && (spinner >= 1 && spinner <= 18)) {
			this.goodGuess();
			newBalance = this.oneTOone(account, bet);
			return newBalance;
		}
		else if ((guess === 5) && (spinner >= 19 && spinner <= 36)) {
			this.goodGuess();
			newBalance = this.oneTOone(account, bet);
			return newBalance;
		}
		else if ((guess === 6) && (spinner >= 1 && spinner <= 12)) {
			this.goodGuess();
			newBalance = this.twoTOone(account, bet);
			return newBalance;
		}
		else if ((guess === 7) && (spinner >= 13 && spinner <= 24)) {
			this.goodGuess();
			newBalance = this.twoTOone(account, bet);
			return newBalance;
		}
		else if ((guess === 8) && (spinner >= 25 && spinner <= 36)) {
			this.goodGuess();
			newBalance = this.twoTOone(account, bet);
			return newBalance;
		}
		else {
			alert("Sorry, your guess was incorrect. Better luck next time! Try again to win that money back.");
			return account = account - bet
		}

	},

	// Guess Reminder on console
	guessReminder: function(guess){
		switch(guess) {
			case 1: 
				console.log("You guess was 1: spinner will land on '0'.");
				break;
			case 2: 
				console.log("You guess was 2: spinner will land on an even number.");
				break;
			case 3: 
				console.log("You guess was 3: spinner will land on an odd number.");
				break;
			case 4: 
				console.log("You guess was 4: spinner will land on '1 to 18'.");
				break;
			case 5: 
				console.log("You guess was 5: spinner will land on '19 to 36'.");
				break;
			case 6: 
				console.log("You guess was 6: spinner will land on '1 to 12'.");
				break;
			case 7: 
				console.log("You guess was 7: spinner will land on '13 to 24'.");
				break;
			case 8: 
				console.log("You guess was 8: spinner will land on '25 to 36'.");
				break;
		}
		return;
	},

	main: function(){

		var account = 100;
		var guess;
		var bet;
		var spinner;
		var results;

		// Welcome
		alert("Hello and welcome to this very entertaining game of Roulette.");

		// Intro
		alert("Roulette is French for 'little wheel.'\n" + 
			"On this wheel are numbers 0 through 36.\n" + 
			"Bets are placed on the table, correlating with the slots the ball can possibly land in.");

		// Starting Account Balance
		alert("Before we start the betting, your current account is $" + account + ".");

		do {

			guess = +(this.guess());
			this.guessReminder(guess);

			bet = this.bet(account);
			console.log("The bet was " + bet);

			alert("And the wheel is spinning!");

			spinner = this.spin();
			alert("The spinner landed on " + spinner);

			account = this.spinVSguess(account, bet, guess, spinner);

			alert("Your current account is $" + account + ".");

		} while (confirm("Continue game?") === true);

		alert("Thanks for playing!");
	}
}