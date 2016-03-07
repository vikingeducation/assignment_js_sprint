// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(inputArray){
    var max = 0;
    var arrayLength = inputArray.length;
    for (var i = 0; i < arrayLength; i++) {
      if (inputArray[i] > max) {
        max = inputArray[i];
      }
    }
    return max;
  },

  reversed: function(inputString){
    var max = inputString.length;
    var result = "";
    for (var i = max - 1; i >= 0; i--) {
      result += inputString[i];
    }
    return result;
  },

  loudSnakeCase: function(inputString){
    /*
    var words = input_string.split(" ");
    var max = words.length;
    var result = "";
    for (var i = 0; i < max; i++) {
      if (words[i]){
        result += "_";
        result += words[i][0].toUpperCase();
        result += words[i].substr(1).replace(/(\W+)/g, "");
      }
    }
    return result.substr(1);
    */
    var result = inputString.replace(/(\W+)/g, "_");
    result = result.replace(/_./g, function(v) { return "_" + v[1].toUpperCase() });
    result = result.substr(0, result.length - 1);
    return result;
  },

  compareArrays: function(array1, array2){
    var max1 = array1.length;
    var max2 = array2.length;
    if (max1 !== max2) return false;
    else {
      for (var i = 0; i < max1; i++) {
        if (array1[i] !== array2[i]) return false;
      }
    }
    return true;
  },

  fizzBuzz: function(number){
    var result = []
    for (var i = 1; i <= number; i++) {
      if (i % 15 === 0) result.push("FIZZBUZZ");
      else if (i % 5 === 0) result.push("BUZZ");
      else if (i % 3 === 0) result.push("FIZZ");
      else result.push(i);
    }
    return result;
  },

  myMap: function(array, function){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
