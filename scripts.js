// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var biggest = 0;
    for(i = 0; i < array.length; i++){
      if (array[i] > biggest){
        biggest = array[i];
      }
    }
    return biggest;
  },

  reversed: function(myString){
    var starterSchwad = ""
    for(i = (myString.length - 1); i >= 0; i--){
      starterSchwad = starterSchwad + myString[i];
    }
    return starterSchwad;
  },

  loudSnakeCase: function(myString){
    var finalAnswer = myString[0].toUpperCase();
    for(i = 1; i < myString.length; i++){
      if (myString[i] === " ") {
         finalAnswer = finalAnswer + "_";
         i++;
         finalAnswer = finalAnswer + myString[i].toUpperCase();
      } else if ( myString[i].match(/\w/) ) {
         finalAnswer = finalAnswer + myString[i];
      }
    }
    return finalAnswer;
  },

  compareArrays: function(array1, array2){
    if (array1 === array2){
      return true;
    } else {
      return false;
    }
  },

  fizzBuzz: function(num){
    var answerArray = [];
    for (i = 1; i < (num + 1); i++){
      if (i % 3 === 0 && i % 5 === 0){
          answerArray.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
          answerArray.push("FIZZ");
      } else if (i % 5 === 0) {
          answerArray.push("BUZZ");
      } else {
          answerArray.push(i);
      }
    }
    return answerArray
  },

  myMap: function(){

  },

  primes: function(num){
    function isPrime(number){
      for(i = 2; i < number; i ++){
        if(number % i === 0){
          return false;
          break;
        }
      }
      return true;
    }
    aryPrimes = [];
    for (i = 2; i < (num + 1); i++){
      if (isPrime(i)){
      aryPrimes.push(i);
      }
    }
    return aryPrimes
  },
}