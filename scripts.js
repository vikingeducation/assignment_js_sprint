// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(string){
    var string_array = string.split('');
    return string_array.reverse().join('');
  },

  loudSnakeCase: function(phrase){
    phrase = phrase.replace(/[^\w\s]/g, '');
    phrase = phrase.replace(/\s+/g, ' ');
    phrase_array = phrase.split('');
    phrase_array[0] = phrase_array[0].toUpperCase();
    while (phrase_array.indexOf(' ') > -1) {
      index_value = phrase_array.indexOf(' ');
      phrase_array[index_value] = '_';
      phrase_array[index_value + 1] = phrase_array[index_value + 1].toUpperCase();
    }
    return phrase_array.join('');
  },

  compareArrays: function(arr1, arr2){
    if (arr1.length != arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(length){
    var array = [];
    for (var i = 1; i <= length; i++) {
      output = "";
      if (i % 3 === 0) {
        output = output.concat("FIZZ");
      }
      if (i % 5 === 0) {
        output = output.concat("BUZZ");
      }
      array.push(output || i);
    }
    return array;
  },

  myMap: function(arr, func){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(func(arr[i]));
    }
    return newArr;
  },

  primes: function(length){
    var array = [];
    for (var i = 2; i <= length; i++) {
      if (this.isPrime(i)) { array.push(i); }
    }
    return array;
  },

  isPrime: function(number){
    if (number < 2) { return false; }
    for (var j = 2; j <= Math.floor(Math.sqrt(number)); j++) {
      if (number % j === 0) { return false; }
    }
    return true;
  }
};
