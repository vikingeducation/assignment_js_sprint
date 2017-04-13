/* FILL IN THE FUNCTIONS BELOW*/

var sprintFunctions = {
  largestEl: function(myArray){
    var largest = 0;
    for(var i = 0; i < myArray.length;i++){
      if(myArray[i] > myArray[largest]){
        largest = i;
      }
    }
    return myArray[largest]
  },

  reversed: function(string){
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(str){
    str = str.replace(/\W/g,'_');
    var arr = [];

    str.split('_').forEach(function(element){
      if (element.match(/\w/)) {
        arr.push(element.charAt(0).toUpperCase()+element.slice(1).toLowerCase());
      }
    });
    return arr.join('_');
  },

  compareArrays: function(arr1,arr2){
    if(arr1.length !== arr2.length){
    return false;
    }

    for(var i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]){
      }else{
        return  false;
      }
    }return true;
    // your code here (replace the return)
  },


  fizzBuzz: function(number){
    // your code here
    var fizzBuzzArr =[];
    for(var i = 1; i<=number;i++){
      if(i % 3 === 0 && i % 5 === 0){
        fizzBuzzArr.push("FIZZBUZZ");
      }else if(i % 3 === 0){
        fizzBuzzArr.push("FIZZ");
      }else if(i % 5 === 0){
        fizzBuzzArr.push("BUZZ")
      }else{
        fizzBuzzArr.push(i);
      }

    }
  return fizzBuzzArr;
  },

  myMap: function(someArray,someFunction){
    // your code here
     result = [];
    someArray.forEach(function (item) {
      result.push(someFunction(item));
    });

    return result;
  },

  primes: function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
}