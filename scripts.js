// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  largestEl: function(array){
    var largest = array[0];
    for(i = 0; i < array.length; i += 1) {
      if(array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(string){
    var newString = "";
    for (i = (string.length - 1); i >= 0; i -= 1) {
      newString += string[i];
    }
    return newString;
  },

  loudSnakeCase: function(string){
    var newString = "";
    var alphaNum = /^[a-z0-9]+$/i;
    if(alphaNum.test(string[0])) {
       newString += string[0].toUpperCase();
     }
     else if (string[0] === " ") {
       newString += "_"
     }
     else { newString += ""}
    for (i = 1; i < string.length; i += 1) {
      switch (string[1] === string[1]) {
        case (alphaNum.test(string[i]) === false && string[i] !== " "):
      newString += "";
      break;
      case (alphaNum.test(string[i]) === true && (alphaNum.test(string[i-1]) !== true || (string[i-1] === " ") === true)):
        newString += string[i].toUpperCase();
      break;
  case (alphaNum.test(string[i]) === true && string[i-1] !== " "):
          newString += string[i];
      break;
case (string[i] === " " && string[i+1] === " "):
         newString += "";
      break;
      case (string[i] === " "):
          newString += "_";
      break;
    }
    }
  return newString;
},

  compareArrays: function(array1, array2){
    var arrayLength = 0;
         if(array1.length === array2.length) {
  for(i = 0; i < array1.length; i += 1) {
        if (array1[i] === array2[i]) {
          arrayLength += 1;
        }
      }
    }
    if (array1.length === arrayLength) {
      return true
    }
    else {return false
         }
  },

  fizzBuzz: function(end){
    var FIZZBUZZ = [];
    for(i = 1; i <= end; i++) {
      if (i % 15 === 0) {
        FIZZBUZZ.push("FIZZBUZZ");
      }
      else if (i % 5 === 0) {
        FIZZBUZZ.push("BUZZ");
      }
      else if (i % 3 === 0) {
        FIZZBUZZ.push("FIZZ");
      }
      else FIZZBUZZ.push(i);
    }
    return FIZZBUZZ;
  },

  myMap: function(array1, funct1) {
    var returnArray = [];
    for (i = 0; i < array1.length; i++) {
      returnArray.push(funct1(array1[i]));
    }
    return returnArray;
  },

  primes: function(end){
    var primesArr = [];
    var checkPrime = function(input){
      var outputArr = [];
        for(j = 1; j <= input; j++) {
          if(input % j === 0) {
            outputArr.push(input);
          }
        }
      return outputArr.length;
      };
      for(i = 1; i <= end; i++) {
        if (checkPrime(i) === 2) {
        primesArr.push(i);
      }
    }
    return primesArr;
  },
}
