// FILL IN THE FUNCTIONS BELOW

var numbers = [2,4,2,1,5,2,5];

var sprintFunctions = {
	largestEl: function(){  
		// numbers.sort(function(a,b) {
		// 	return (b-a)
		// });
		// return numbers[0];
		

		// for (var index = 0; index < numbers.length; index++) {
		// 	for (var subIndex = 0; subIndex < numbers.length; subIndex++) {
		// 		if (numbers[index] > numbers[subIndex]) {
		// 			console.log(numbers[index] + ' > ' + numbers[subIndex]);

		// 		}
		// 	}
		// }
	},

	reversed: function(){  
		var string = "I am a special string!";
		var newArray = [];

		for (var i = 0; i < string.length; i++) {
			newArray.unshift(string[i]);
		}

		var newString = newArray.join("");
		
		return newString;
	},

	loudSnakeCase: function(){  
	// your code here
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