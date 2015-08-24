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
    var single_spaced = "";
    if (sentence.includes ("  ")) {
        single_spaced = sentence.replace("  ", " ");
        sentence = single_spaced;
    };
    var result = sentence[0].toUpperCase();

    for(var i = 1; i < sentence.length; i++ ) {
      if (sentence[i] === " ") {
        result += "_" + sentence[i+1].toUpperCase();
      } else if (punctuation.includes(sentence[i])) {

      } else if (sentence[i-1] !== " ") {
        result += sentence[i];
      };
    };
    return result;
  },

  compareArrays: function(arr1, arr2){
    result = true;
    if (arr1.length !== arr2.length) {
      result = false;
    } else {
      for(var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          result = false;
        };
      };
    };
    return result;
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