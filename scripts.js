// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    return arr.sort().splice(-1);
  },

  reversed: function(str){
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){
    var sans_punctuation = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var sans_extra_spaces = sans_punctuation.replace(/\s{2,}/g," ").split(" ");
    var upper_case = [];

    sans_extra_spaces.forEach(function(word) {
      upper_case.push(word[0].toUpperCase() + word.slice(1));
    })

    return upper_case.join("_");
  },

  compareArrays: function(a1, a2){
    return JSON.stringify(a1) == JSON.stringify(a2);
  },

  fizzBuzz: function(num){
    var out = [];

    for (var i = 1; i <= num; i++) {
      if ( (i % 3 == 0) && (i % 5 == 0) ) {
        out.push("FIZZBUZZ");
      } else if (i % 3 == 0) {
        out.push("FIZZ");
      } else if (i % 5 == 0) {
        out.push("BUZZ");
      } else {
        out.push(i);
      }
    }
    return out;
  },

  myMap: function(arr, func){
    var out = [];

    arr.forEach( function(element) {
      out.push(func(element));
    })

    return out
  },

  primes: function(max){
    var numbers = [], primes = [], i, j, count = 0;

    for (i = 2; i < max; i++) numbers[i] = true;

    for (i = 2; i * i < max; i++) {
      if (numbers[i]) {
        for (j = 0; i * i + i * j < max; j++) {
          numbers[i * i + i * j] = false;
        }
      }
    }

    for ( i = 2; i < max; i++) {
      if (numbers[i]) {
        primes.push(i);
      }
    }

    return primes;
  },
}
