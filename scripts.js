// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(numbers){  
    // your code here
    function descending( a, b ) {
  		return b - a;
	}
		numbers.sort(descending);
		return numbers[0];
  },
  
  reversed: function(string){  
    // your code here
   var result = "";
	var index = string.length;
		for(var i = 0; i <= string.length; i++){
			index -= 1;
			result += string.charAt(index);
		}
	return result;
  },

  loudSnakeCase: function(string){  
    // your code here
		 var finalAnswer = "";
     for(i = 0; i < string.length; i++){
   	 var finalAnswer = string[0].toUpperCase();
     for(i = 1; i < string.length; i++){
        if (string[i] === " ") {
           finalAnswer = finalAnswer + "_";
          	 i++;
         		finalAnswer = finalAnswer + string[i].to_UpperCase();
          			finalAnswer = finalAnswer + string[i].toUpperCase();
        } else if ( string[i].match(/\w/) ) {
           finalAnswer = finalAnswer + string[i];
        }
     }
     return finalAnswer;
   }	
},

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
    var number = 0;
	for(var i = 0; i <= array1.length; i++){
		number += 1;
				if(array1[number + 1] == array2[number + 1]) {
					return true;
				} else {
						return false;
				}
	}
},

  fizzBuzz: function(x){  
    // your code here
    var array = [];
    	for(var i = 1;i <= x; i++) {
			if (i % 5 === 0 && i % 3 === 0){
					array.push("FIZZBUZZ");
			} else if(i % 5 === 0){
							array.push("BUZZ");
					} else if(i % 3 === 0){
								array.push("FIZZ");
							} else {
									array.push(i);
							}
		}
		  return array;
    },

  myMap: function(array){  
    // your code here
    var newArray = [];
		array.forEach( function(el){ return newArray.push(el * 2); } );
			return newArray;
  },

  primes: function(number){  
    // your code here
      var newArray = [], a, b, primes = [];
    for (a = 2; a <= number; i++) {
        if (!newArray[a]) {
            // a has not been marked -- it is prime
            primes.push(a);
            for (b = a << 1; b <= number; b += a) {
                newArray[b] = true;
            }
        }
    }
    return primes
  },
}