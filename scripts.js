// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
	largestEl: function(){  

		var numbers = [2,4,2,1,5,2,5];

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
			} else if (array[x] % 3 === 0) {
				array[x] = "FIZZ";
			} else if (array[x] % 5 === 0) {
				array[x] = "BUZZ";
			} else {
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

	primes: function(){  
	// your code here
	},
}






















