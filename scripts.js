// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = 0;
    for (var i=0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(string){
    var newArray = [];
    for (var i=0; i < string.length; i++) {
      newArray.unshift(string[i]);
    }
    return newArray.join("");
  },

  loudSnakeCase: function(sentence){
    var punctuation = /\W/g;
    sentence = sentence.toLowerCase().replace(/ /g, "_").replace(punctuation, "").replace(/_(?=_)/g, "");
    sentence = sentence.split("_");
    for (var i=0; i < sentence.length; i++) {
      sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join("_");
  },

  compareArrays: function(arr1, arr2){
    equal = true;
    for (var i=0; i<arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        equal = false;
      }
    }
    return equal;
  },

  fizzBuzz: function(number){
    var outputArr = [];
    for (var i=1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        outputArr.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        outputArr.push("FIZZ");
      } else if (i % 5 === 0) {
        outputArr.push("BUZZ");
      } else {
        outputArr.push(i);
      }
    }
    return outputArr;
  },

  myMap: function(arr, func){
    var returnArr = [];
    for (var i = 0; i < arr.length; i++) {
      returnArr.push(func(arr[i]));
    }
    return returnArr;
  },

  primes: function(number){
    // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Algorithm_and_variants
    var integers = [undefined, undefined];
    for (var i = 2; i < number; i++) {
      integers[i] = true;
    }
    for (var i = 2; i < (Math.sqrt(number)); i++) {
      if (integers[i]) {
        for (var j = i*i; j < number; j += i) {
          integers[j] = false;
        }
      }
    }
    primeArr = [];
    for (var k = 2; k < number; k++) {
      if (integers[k]) {
        primeArr.push(k);
      }
    }
    return primeArr;
  },
}
