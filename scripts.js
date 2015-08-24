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

  fizzBuzz: function(num){
    var arr = [];
    for (var i = 1; i <= num; i++){
      if (i % 15 == 0) {
        arr.push("FIZZBUZZ");
      }
      else if (i % 3 == 0){
        arr.push("FIZZ");
      }
      else if (i % 5 == 0){
        arr.push("BUZZ");
      }
      else {
        arr.push(i);
      };
    };
    return arr;
  },

  myMap: function(arr, func){
    results = [];
    for (var i = 0; i < arr.length; i++) {
      results.push(func(arr[i]));
    };
    return results;
  },

  primes: function(num){
    var results = [];
    var prime;
    for (var i = 2; i < num; i++){
      prime = true;
      for (var j = i-1; j > 1; j--){
        if (i % j == 0){
          prime = false;
        };
      };
      if (prime){
        results.push(i);
      };
    };
    return results;
  },
}