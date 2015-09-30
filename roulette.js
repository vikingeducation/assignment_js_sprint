var Roulette = function(bank){


	// Show our bankroll information
	this.bank = bank;


	this.spin =  function(bet, guess){
	   

		// You need to have enough money to bet!
		if(bet > this.bank){
			console.log("You don't have enough to bet!");
			return false;
		}
	    

		// Set our result to a random  number between 1-38.
		// We use 37-38 to represent 0 and 00 respectively. 
		// mathematically it doesn't really matter what they
		// are so I just added them to the top of the range.  
		result = Math.floor((Math.random() * 38)+1);


		// Allow us to bet 0 and 00 like regular roulette
		if(result == 37){
			result = "0";
		} else if (result == 38) {
			result = "00";
		}
		

		// If the user just guesses a number then 
		// we'll just use the basic guess method.
		// QUESTION: is there a way to impliment PRIVATE
		// methods in JS?
		if((guess <= 36 && guess >= 1) || guess == "0" || guess == "00"){
			return this.basicGuess(result, guess, bet);	
		} else {
			return this.advancedGuess(result, guess, bet);
		}
	}


	// More advanced guesses for when a user wants to bet 
	//something more complicated
	this.advancedGuess = function(result, guess, bet){
		// 0 and 00 don't apply to any of these bets
		if(result == '0' || result == '00'){
			playerLoses(bet, this);
			return false;
		}


		// Our multiple switch cases for all of the more advanced bets.
		// QUESTION: Is there a better way to accomplish this than via
		// switch cases?
		switch(guess){
			case 'Even':
				if((result % 2 == 0) && (result)){
					return playerWins(bet, 1, this);
					break;
				}
				playerLoses(bet, this);
				break;
			case 'Odd': 
				if((result % 2 == 1) && (result)){
					return playerWins(bet, 1, this);
					break;
				}
				playerLoses(bet, this);
				break;
			case '1 to 18':
				if((result >= 1) && (result <= 18)){
					return playerWins(bet, 1, this);
					break;
				}
				playerLoses(bet, this);
				break;
			case '19 to 36':
				if(result >= 19 && result <= 36){
					return playerWins(bet, 1, this);
					break;
				}
				playerLoses(bet, this);
				break;
			case '1st 12':
				if(result >= 1 && result <= 12){
					return playerWins(bet, 2, this);
					break;
				}
				playerLoses(bet, this);
				break;
			case '2nd 12':
				if(result >= 13 && result <= 24){
					return playerWins(bet, 2, this);
					break;
				}
				playerLoses(bet, this);
				break;
			case '3rd 12':
				if(result >= 25 && result <= 26){
					return playerWins(bet, 2, this);
					break;
				}
				playerLoses(bet, this);
				break;
			default:
				playerLoses(bet, this);
		}
	}


	// Basic guess for when a user just bets on a specific number.
	this.basicGuess = function(result, guess, bet){
		if(result == guess){
			playerWins(bet, 35, this);
		} else {
			playerLoses(bet, multiplier, this);
		}
	}


	// Player wins
	function playerWins(bet, multiplier, obj){
		console.log("You've won $" + multiplier * bet + "! The spin was " + result);
		obj.bank += multiplier * bet;
		obj.displayBank();
		return true;
	}


	// Player loses
	function playerLoses(bet, obj){
		console.log("You lose, the spin was " + result + " :(");
		obj.bank -= bet;
		obj.displayBank();
		return false;
	}


	// Allow the user to buy in more ca$$$$h
	this.buyIn = function(amount){
		this.bank += amount;
		this.displayBank();
	}
	

	// Display the bankroll info
	this.displayBank = function(){
		console.log("You now have $" + this.bank);
	}
}