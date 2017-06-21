// FILL IN THE FUNCTIONS BELOW

var numbers = [2,4,2,1,5,2,5];

var sprintFunctions = {
	largestEl: function(){  
		// numbers.sort(function(a,b) {
		// 	return (b-a)
		// });
		// return numbers[0];

		var largest = 0;

		for (var i = 0; i <= largest; i++) {
			if (numbers[i] > largest) {
				var largest = numbers[i];
			} 
		}

		return largest;

	},

	reversed: function(){  
		var string = "I am a special string!";
		var newArray = [];

		for (var i = 0; i < string.length; i++) {
			newArray.unshift(string[i]);
		}

		var newString = newArray.join('');

		return newString;
	},

	loudSnakeCase: function(){  
		var string = "I am a strange code. I like it though!";
		var array = [];

		for (var i = 0; i < string.length; i++) {
			if (string[i] === " ") {
				array.push("_");
			} else if ((string[i] !== ".") && (string[i] !== "!") && (string[i] !== " ")) {
				array.push(string[i]);
			} 
		}

		for (var i = 1; i < array.length; i++) {
			if (array[i -1] === "_") {
				array[i] = array[i].toUpperCase();
			}
		}

		var newString = array.join('');

		return newString;
	},

	compareArrays: function(){ 
	// your code here (replace the return)
	return "Finish compareArrays first!" 
	},

	fizzBuzz: function(){  
	// your code here
	},

	myMap: function(){  
	// your code here
	},

	primes: function(){  
	// your code here
	},
}