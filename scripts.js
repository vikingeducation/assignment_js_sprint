// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
	var biggest=array[0];
    for(i=0;i<array.length;i++){
		if(array[i]>biggest){
			biggest=array[i]
		}
	}
	return biggest;
  },
  
  reversed: function(string){ 
	var reversedString="";
    for(i=string.length-1;i>-1;i=i-1){
		reversedString=reversedString+string[i];
	}
	return reversedString;
  },

  loudSnakeCase: function(string){  
    var snakeCaseString="";
	for(i=0;i<string.length;i++){
		if(string[i-1]==" "||undefined){
			snakeCaseString=snakeCaseString+string[i].toUpperCase();
		}
		else{
			snakeCaseString=snakeCaseString+string[i];
		}
	}
	snakeCaseString=snakeCaseString.replace(/\s+/g,"_");
	snakeCaseString=snakeCaseString.replace(/\W+/g,"");
	return snakeCaseString;
  },

  compareArrays: function(array1,array2){ 
    if(array1.length!==array2.length){
		return false;
	}
	else{
		for(i=0;i<array1.length;i++){
			if(array1[i]!==array2[i]){
				return false;
			}
			else if(array1[i]==array2[i] && i==array1.length-1){
				return true;
			}
		}
	}
  },

  fizzBuzz: function(number){
	var array=[];
    number=parseInt(number);
	for(i=1;i<number+1;i++){
		if(i%3==0 && i%5==0){
			array.push("FIZZBUZZ");
		}
		else if(i%3==0){
			array.push("FIZZ");
		}
		else if(i%5==0){
			array.push("BUZZ");
		}
		else{
			array.push(i);
		}
	}
	return array;
  },

  myMap: function(array,arrayFunction){
	var returnArray=[];
	returnArray.push(arrayFunction(array[0]));
	for(i=1;i<array.length;i++){
    	returnArray.push(arrayFunction(array[i]));
	};
	return returnArray;
  },

  primes: function(number){  
	var array=[];
    for(i=2;i<number;i++){
		for(j=2;j<number;j++){
			if(i%j==0 && i!==j){
				break;
			}
			else if(j==number-1){
				array.push(i);
			}
		}
	}
	return array;
  }
}

function Roulette(bankroll){
	var roll={
		spin:function(amount,bet){
			var number=Math.floor(Math.random() * (36 - 1)) + 1;
			if(number!==bet){
				this.bankroll(0,amount)
				console.log("You Lose, the spin was "+number+". You now have $"+bankroll);
			}
			else if(number==bet){
				this.bankroll(amount,0)
				console.log("You Win! the spin was "+number+". You now have $"+bankroll);
			}
		},
		bankroll:function(wins,losses){
			bankroll=bankroll+wins-losses;
		},
		buyIn:function(amount){
			bankroll=bankroll+amount;
			console.log("You bought in $"+amount+". You now have $"+bankroll)
		}
	};
	return roll;
}