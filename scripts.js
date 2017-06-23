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






















