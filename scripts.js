// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {
  let bigEl = [0];
  for(let i = 0; i <= (array.length-1); i++) {
     if(array[i] > bigEl[0]) {
      bigEl[0] = array[i];
    }
  }
  return bigEl[0];
},

  reversed: function(string) {
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }
    return newString;
  },

  loudSnakeCase: function(inputString) {
        let outputString = "";
      	for(let i = 0; i <= inputString.length -1; i++) {
      		if ((inputString[i+1] !== " ") && (inputString[i] === " ")) {
      			outputString += "_";
      		} else if (inputString[i-1] === " ") {
      			outputString += inputString[i].toUpperCase();
      		} else if(i === 0) {
      			outputString += inputString[i].toUpperCase();
      		} else if((inputString.charCodeAt(i) >= 97 && inputString.charCodeAt(i) <= 122) ||
      		 (inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <= 90)) {
      			outputString += inputString[i].toLowerCase();
      		}
      	}
      	return(outputString);
      },

  compareArrays: function(array1, array2) {
    let sameArrayNum = 0;
    let longerArray = [];
    if(array1.length > array2.length) {
      longerArray = array1;
    } else {
      longerArray = array2;
    };

    for(let i = 0; i <= longerArray.length; i++) {
      if (array1[i] !== array2[i]) {
        sameArrayNum++;
      }
    }

    if (sameArrayNum > 0) {
      var bool= Boolean(false);
      return bool;
    } else {
      var bool= Boolean(true);
      return bool;
    }

    let answer = compareArrays(array1, array2);
    alert(answer);
},

  fizzBuzz: function(number){
      newArray = [];
      for(var i = 1; i <= number; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
          newArray.push("FIZZBUZZ");
        } else if (i % 3 === 0) {
          newArray.push("FIZZ");
        } else if (i % 5 === 0) {
          newArray.push("BUZZ");
        } else {
          newArray.push(i);
        }
      }
      return newArray;
    },

  myMap: function(array, passedFunction) {
      let newArray = [];
      for(i = array.length - 1; i >= 0; i--) {
        let result = passedFunction(array[i]);
        let totalElements = newArray.push(result);
      }
    return newArray.reverse();
  },

  primes: function(number){
    var notPrime = 0;
    var primeArray = [];
      for(i = number; i >= 2; i--) {
        notPrime = 0;
        for(j = (i - 1); j >=2; j--) {
          if((i % j === 0)) {
            notPrime++;
          }
        }
        if(notPrime === 0) {
          primeArray.push(i);
        }
      }
      return(primeArray.reverse());
    },
}
