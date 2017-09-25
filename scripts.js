// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    arr = arr.sort();
    return arr[arr.length-1];
  },

  reversed: function(str){
    var result = []
      for (var i = 0; i < str.length; i++) {
        result.unshift(str[i]);
      }
    return result.join('');
  },

  loudSnakeCase: function(str){
    var words = str.split(' '),
        punctuation = '!,.;:-',
        result = [],
        result2 = [];

    // elminates multiple consecutive spaces
    words = words.filter(function(word){
      return word.length > 0;
    });


    words.forEach(function(word){
      var letters = word.split(''),
          temp = [];

        letters.forEach(function(letter,index){
            if (punctuation.includes(letter) === false){
              if (index === 0) {
                temp.push(letter.toUpperCase());
              } else {
                temp.push(letter.toLowerCase());
              }
            }
        });

        result.push(temp.join(''));
    });

    return result.join('_');
  },

  compareArrays: function(arr1,arr2) {
    var answer = true;

    arr1.forEach(function(element,index){
      if (arr1[index] !== arr2[index]) {
        answer = false;
      }
    });

    return answer;
  },

  fizzBuzz: function(n) {
  var result = [];

  for (i=1; i < n+1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("FIZZBUZZ");
    } else if (i % 5 === 0) {
      result.push("BUZZ");
    } else if (i % 3 === 0) {
      result.push("FIZZ");
    } else
      result.push(i);
  }

  return result;
},

  myMap: function(arr,func) {
    var result = [];

    arr.forEach(function(element) {
      result.push(func(element));
    });

    return result;
},

  primes: function(n) {

  //helper function to test for primality
  var isPrime = function (n){
 if (n < 2) {
   return false;
 }

  //creating range
  var range = [];
  for (var i = 2; i < n; i++) {
    range.push(i);
  }

  var prime = true;

  //checking for primality
  range.forEach(function(divisor){
    if (n % divisor === 0) {
      prime = false;
    }
  });

  return prime;
}

  //checking all numbers from 2 to input parameter
  var result = [];
  if (n < 2) {
   return result;
 } else
   for (var i = 2; i < n; i++) {
     if (isPrime(i)) {
       result.push(i);
     }
   }

 return result;
},
}
