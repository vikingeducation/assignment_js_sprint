// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    largest = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(string){
    string_array = string.split('');
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
    array = [];
    for (var i = 1; i <= length; i++) {
      output = "";
      if (i % 3 == 0) {
        output = output.concat("FIZZ");
      }
      if (i % 5 == 0) {
        output = output.concat("BUZZ");
      }
      if (output === "") {
        output = i;
      }
      array.push(output);
    }
    return array;
  },

  myMap: function(arr, func){
    arr.forEach(func);
    newArr = arr.slice();
    for (var i = 0; i < arr.length; i++) {
      newArr[i] = func(arr[i]);
    }
    return newArr;
  },

  primes: function(length){
    // function isPrime(number) {
    // }
    array = [];
    for (var i = 2; i < length; i++) {
      array.push(i);
    }
    for (var j = 0; j < array.length; j++) {
      current = array[j];
      if (current % array[j] == 0) {
        array[j] = null;
      }
    }
  },
};
