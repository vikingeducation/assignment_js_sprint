// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    arr.sort().reverse();
    return arr[0];
  },
  
  reversed: function(str){  
    var backwards = str.split("").reverse().join("");
    return backwards;
  },

  loudSnakeCase: function(str){  
    var imASnake = str.replace(/[^\w\s]/gi, '').replace("  ", " ").split(' ');
      for (var i = 0; i < imASnake.length; i++) {
        imASnake[i] = imASnake[i].charAt(0).toUpperCase() + imASnake[i].slice(1); 
      };
    return imASnake.join('_');
  },

  compareArrays: function(arr1, arr2){ 
    var length = 0;
    if (arr1.length === arr2.length){
      length = arr1.length;
    } else {
      console.log("Compare similar lists!")
    }
    var isEqual = false;
    for(i = 0; i < length; i++){
      if(arr1[i] === arr2[i]) {
        isEqual = true;
      } else {
        isEqual = false;
      }
    }
  return isEqual;
  },

  fizzBuzz: function(num){  
    var array = [];
    for (i = 1; i < num + 1; i++) {
      if(i % 5 === 0 && i % 3 === 0){
        array.push("FIZZBUZZ");
      } else if (i % 5 === 0) {
        array.push("BUZZ");
      } else if (i % 3 === 0) {
        array.push("FIZZ");
      } else {
        array.push(i);
      }
    }
    return array;
  },

  myMap: function(arr){
    var finalArray = arr.map(function(val){
      return val * 2;
    });
    return finalArray;
  },

  primes: function(num){  
  var primeList = [];
  for (n = 2; n <= num; n++) {
    var notPrime = false;
    for (var i = 2; i <= n; i++) {
      if (n % i === 0 && i !== n) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      primeList.push(n);
    }
  }
  return primeList;
  },
}