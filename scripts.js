// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  largestEl: function(arr){
    var largest = arr[0];
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] > largest){
        largest = arr[i];
      }
    }
    return largest;
  },

  reversed: function(str){
    result = "";
    for(var i = (str.length - 1); i >= 0; i--) {
      result = result + str[i];
    }
    return result;
  },

  loudSnakeCase: function(sentence){
    var punctuation = ".:;'\"?[]{}|!";
    var result = sentence[0].toUpperCase();
    for(var i = 1; i < sentence.length; i++ ) {
      if (sentence[i] === " ") {
        result = result + "_" + sentence[i+1].toUpperCase();
      } else if (punctuation.includes(sentence[i])) {

      } else if (sentence[i-1] !== " ") {
        result = result + sentence[i];
      }
    }
    return result;
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