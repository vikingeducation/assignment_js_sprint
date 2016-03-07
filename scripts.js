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

    // var words = input_string.split(" ");
    // var max = words.length;
    // var result = "";
    // for (var i = 0; i < max; i++) {
    //   if (words[i]){
    //     result += "_";
    //     result += words[i][0].toUpperCase();
    //     result += words[i].substr(1).replace(/(\W+)/g, "");
    //   }
    // }
    // return result.substr(1);

    var result = inputString.replace(/(\W+)/g, "_");
    var max = result.length;
    result = result.replace(/_./g, function(v) {
      return "_" + v[1].toUpperCase()
    });
    if (result[max - 1] === "_") result = result.substr(0, max - 1);
    return result;
  },

  compareArrays: function(array1, array2){
    var max1 = array1.length;
    var max2 = array2.length;
    if (max1 !== max2) {
      return false;
    }
    for (var i = 0; i < max1; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(number){
    var result = [];
    for (var i = 1; i <= number; i++) {
      if (i % 15 === 0) result.push("FIZZBUZZ");
      else if (i % 5 === 0) result.push("BUZZ");
      else if (i % 3 === 0) result.push("FIZZ");
      else result.push(i);
    }
    return result;
  },

  myMap: function(array, inputFunction){
    var max = array.length;
    var result = []
    for (var i = 0; i < max; i++) result.push( inputFunction(array[i]) )

    return result;
  },

  primes: function(limit){
    //Implementing Sieve of Eratosthenes
    var list = [null, null];
    var result = [];
    for (var i = 2; i <= limit; i++) list.push(i);

    var sqrt = Math.floor(Math.sqrt(limit));
    for (var i = 2; i <= sqrt; i++) {
      for (var j = i * i; j <= limit; j += i) {
        list[j] = null;
      }
    }

    for (var i = 0; i <= limit; i++) if (list[i]) result.push(list[i]);
    return result;
  },

  bubble: function(array) {
    var temp;
    var max = array.length;
    for (var i = 0; i < max; i++) {
      for (var j = 0; j < max - 1; j++) {
        if (array[j] > array[j + 1]) {
          temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  },

  merge: function(array) {
    if (array.length < 2) return array;
    var left = this.merge(array.slice(0, Math.floor(array.length/2)));
    var right = this.merge(array.slice(Math.floor(array.length/2)));

    var result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push( left.shift() );
      } else {
        result.push( right.shift() );
      }
    }
    if (left.length) {
      result = result.concat(left);
    } else {
      result = result.concat(right);
    }

    return result;
  },

  quick: function(array) {
    if (array.length === 0) return [];

    var left = [];
    var right = [];
    var pivot = array[0];

    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return this.quick(left).concat(pivot, this.quick(right));
  },

}
