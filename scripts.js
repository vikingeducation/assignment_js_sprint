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

	newBalance: function(currentAccount, bet, spinner){
		// var balance = 100;
		// return balance;

		console.log("Current account is " + currentAccount);
		console.log("Wager was " + bet);
		if (spinner === bet) {
			alert("Congratualtions! Your wager was correct! Try again to increase your earnings!");
			return currentAccount + bet;
		} else {
			alert("Sorry, your wager was incorrect. Better luck next time! Try again to win that money back.");
			return currentAccount - bet;
		}
	},

	// Player places wager on spin results
	wager: function(){
		var wagerInput = prompt("The possible wagers and odds are as follows:\n" + 
			"'0' (35:1),\n'00' (35:1),\n'Even' (1:1),\n'Odd' (1:1),\n'1 to 18' (1:1),\n" +
			"'19 to 36' (1:1),\n'1st 12' (2:1),\n'2nd 12' (2:1), or\n'3rd 12' (2:1).\n\n" + 
			"What do you think the ball will land on?");
		return wagerInput;
	},

	// Place your bets
	bet: function() {
		var betInput = prompt("How much do you bet?");
		return betInput;
	},

	// spin function - calculates a number between 1 and 36
	spin: function(){
		var spinResult = Math.floor(Math.random() * 36); 
		return spinResult;
	},


	main: function(){

		var account = 100;
		var wager;
		var bet;
		var spinResults;
		var newBalance = function(){
								console.log("made it this far");
								console.log(account());
								console.log("the bet was " + bet);
								return account() - bet;
							};

		// Welcome
		// alert("Hello and welcome to this very entertaining game of Roulette.");

		// Intro
		// alert("Roulette is French for 'little wheel.'\n" + 
		// 	"On this wheel are numbers 1 through 36, a '0', and a '00'.\n" + 
		// 	"Bets are placed on the table, correlating with the slots \n" + 
		// 	"the ball can possibly land in.");

		// Starting Account Balance
		alert("Before we start the betting, your current account is $" + account + ".");


		while (confirm("Play game?") === true) {

			wager = +(this.wager());
			console.log("The wager was " + wager);

			bet = this.bet();
			console.log("The bet was " + bet);

			alert("And the wheel is spinning!");


			// Spin Results
			var spinner = this.spin();
			alert("The spinner landed on " + spinner);



			// Calculate NEW account balance
			account = this.newBalance(account, bet, spinner);

			alert("Your current account is $" + account + ".");

		}

		
	}

}


// The starting balance is 100
// var account = 100;

// 1st time through: when the user makes a bet, the less is subtracted from the startBalance
// account = account - bet;

// 2nd time through: when the user makes a bet the loss is subtracted from the current balance
// account = account - bet
























