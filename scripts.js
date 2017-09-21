// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
  	// Takes an array and returns the largest element.
  	largestNumber = arr[0]  
    for(var i = 1; i < arr.length; i++){
    	if(arr[i] > largestNumber){
    		largestNumber = arr[i];
    	}
    }
    return largestNumber;
  },
  
  reversed: function(str){  
  	// Takes a string and reverses it.
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  },

  loudSnakeCase: function(sentence){  
  	// Takes a full sentence and puts it into "Loud_Snake_Case" format but strips out any non-character elements (like punctuation).
	var stripNonCharElements = sentence.replace(/[^A-Za-z ]/g, '');
    var splitString = stripNonCharElements.split(" ");
    var answer = []
  	var newWord;
    
    for(var i = 0; i < splitString.length; i++){
      
      var firstLetter = splitString[i][0];
      var restOfWord = splitString[i].slice(1);
      
      if(splitString[i] !== ""){
        newWord = firstLetter.toUpperCase() + restOfWord;
        answer.push(newWord);
      }
    }
    return answer.join("_");
  },

  compareArrays: function(arr1, arr2){ 
  	// Takes two arrays and checks to see if they are equal (same contents in the same order). Assumes they're not nested.
  	lengthCheck = 0;
  	for(var i = 0; i < arr1.length; i++){
  		if(arr1[i] === arr2[i]){
  			lengthCheck++;
  			continue;
  		}
  		else{
  			return false;
  		}
  	}
  	if(lengthCheck === arr2.length){
  		return true;
  	}
  },

  fizzBuzz: function(number){  
  	// Takes an input of a number and returns an array containing all elements from 1 to that number.
  	// Each element divisible by 3 is replaced by "FIZZ"
  	// Each element divisible by 5 is replaced by "BUZZ"
  	// Each element divisible by 3 AND 5 is replaced by "FIZZBUZZ"
  	// e.g. fizzBuzz(6) => [1, 2, "FIZZ", 4, "BUZZ", "FIZZ"]
  	numberArray = [];
  	for(var i = 1; i <= number; i++){
  		if(i%3 === 0 && i%5 === 0){
  			numberArray.push("FIZZBUZZ");
  		}
  		else if(i%3 === 0){
  			numberArray.push("FIZZ");
  		}
  		else if(i%5 === 0){
  			numberArray.push("BUZZ");
  		}
  		else{
  			numberArray.push(i);
  		}
  	}
  	return numberArray;
  },

  myMap: function(arr, fun){
  	// Takes an array and a function. 
  	// It passes every element from the array into that function, in turn, running the function. 
  	// The returned array should be filled with each of the return statements from that function.
  	var newArray = [];
    for(i = 0; i < arr.length; i++){
    	newArray.push(fun(arr[i]));
    }
    return newArray;
  },

  primes: function(number){  
  	// Takes a number and outputs an array containing all prime numbers that occur prior to that number. 
  	// e.g. primes(8) => [2,3,5,7]
    var newArray = [];
    var isPrime = function(number){
    	if(number < 2){
    		return false;
    	}
    	
    	for(var i = 2; i < number; i++){
    		if(number % i === 0){
    			return false;
    		}
    	}

    	return true;
    }
    for(var i = 2; i <= number; i++){
    	if(isPrime(i)){
    		newArray.push(i);
    	}
    }
    return newArray;
  },
}

function Roulette(startingBankroll){
    console.log("Starting bankroll = " + startingBankroll);
	this.bankroll = startingBankroll;
	this.spin = function(bet, number){
        if(this.bankroll <= 0){
          console.log("You don't have enough money");
          return;
        }
        var theSpin = Math.floor(Math.random() * 38);
      
        if(this.betOn === "00"){
          number = 37;
          if(theSpin === 37){
              theSpin = "00";
          }
        if (theSpin === number){
            this.bankroll += bet*35;
			console.log("You win " + bet*35 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
		}
		else{
            this.bankroll -= bet;
			console.log("You lose " + bet + ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
        } 
        }
      
      
        else if(this.betOn === "0"){
          number = 0;
          if (theSpin === number){
              this.bankroll += bet*35;
              console.log("You win " + bet*35 +  ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          } 
        }
      
      
        else if(this.betOn === "1 to 18"){
          if(1 <= theSpin <= 18){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          } 
        }
      
      
      else if(this.betOn === "19 to 36"){
          if(19 <= theSpin <= 36){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "1st 12"){
          if(1 <= theSpin <= 12){
            this.bankroll += bet*2;
			console.log("You win " + bet*2 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "2nd 12"){
          if(13 <= theSpin <= 24){
            this.bankroll += bet*2;
			console.log("You win " + bet*2 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }  
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }    
      
      
      else if(this.betOn === "3rd 12"){
          if(25 <= theSpin <= 36){
            this.bankroll += bet*2;
			console.log("You win " + bet*2 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }   
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "Even"){
          if(theSpin !== 0 && theSpin % 2 === 0){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }  
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "Odd"){
          if(theSpin !== 37 && theSpin % 2 === 1){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }   
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else{
        if (theSpin === number){
            this.bankroll += bet*35;
			console.log("You win " + bet*35 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
		}
		else{
            this.bankroll -= bet;
			console.log("You lose " + bet + ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
		}
      }
      console.log("You are currently betting on: " + this.betOn.toUpperCase());
	}
	this.buyin = function(money){
      this.bankroll += money;
      console.log("You now have " + this.bankroll);
	}
    
    this.betOn = function(str){
      switch(str){
        case "00":
          console.log("You are now betting on 00.");
          break;
        case "0":
          console.log("You are now betting on 0.");
          break;
        case "1 to 18":
          console.log("You are now betting on 1 to 18.");
          break;
        case "19 to 36":
          console.log("You are now betting on 19 to 36.");
          break;
        case "1st 12":
          console.log("You are now betting on 1st 12.");
          break;
        case "2nd 12":
          console.log("You are now betting on 2nd 12.");
          break;
        case "3rd 12":
          console.log("You are now betting on 3rd 12.");
          break;
        case "Even":
          console.log("You are now betting on Even.");
          break;
        case "Odd":
          console.log("You are now betting on Odd.");
          break;
        default:
          console.log("You are now betting on a Single Number.")
      return str;
          
      }
    };
}