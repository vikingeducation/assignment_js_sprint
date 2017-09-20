// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    var largestNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > largestNum) { largestNum = arr[i] };
    }
    return largestNum;
  },
  
  reversed: function(str){  
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(sentence){
    return sentence.replace(/[^a-z A-Z]|\s+/g, function(firstMatch, secondMatch) {
      if (!!firstMatch.match(/[^a-z A-Z]/g)) {
        return "";
      } else {
        return "_";
      }
    }).replace(/_[a-z]/g, function(match) {
      return match.toUpperCase();
    })
  },

  compareArrays: function(arr1, arr2){
    if (arr1.length !== arr2.length) { return false };    
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) { return false };
    }
    return true;
  },

  fizzBuzz: function(num){  
    var arr = [];
    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0 ) {
        arr.push("FIZZBUZZ");
      } else if (i % 5 === 0 && i % 3 !== 0) {
        arr.push("BUZZ");
      } else if (i % 3 === 0 && i % 5 !== 0) {
        arr.push("FIZZ");
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(arr, func){  
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(func(arr[i]));
    }
    return newArr;
  },

  primes: function(num){  
    function isPrime(n) {
      for(var i = 2; i < n; i++) {
        if(n % i === 0) {
          return false;
        }
      }
      return true;
    }
    var arr = [];
    for(var i = 2; i <= num; i++) {
      if(isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;
  },
}
