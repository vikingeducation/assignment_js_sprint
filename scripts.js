var sprintFunctions = {
  largestEl: function(array){ 
    return Math.max.apply( Math, array);
  },
  
  reversed: function(str){  
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){  
    var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var finalString = punctuationless.replace(/\s{2,}/g," ");
    var strArray = finalString.split("");
    for ( i = strArray.length - 1; i > -1; i--) {
      if (strArray[i-1] == " ") {
        strArray[i] = strArray[i].toUpperCase();
      }
      if (strArray[i] == " "){
        strArray[i] = "_"
      }
    }
    strArray[0] = strArray[0].toUpperCase();
    str = strArray.join("");
    return str
  },

  compareArrays: function(x, y){ 
    var answer = true;
    for (i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        answer = false;
      }
    }
    return answer
  },

  fizzBuzz: function(x){ 
    var array = []
    for (i = 1; i <= x; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        array.push("FIZZBUZZ")
      }
      else if (i % 5 === 0) {
        array.push("BUZZ")
      }
      else if (i % 3 === 0) {
        array.push("FIZZ")
      }
      else {
        array.push(i)
      }
    }
    return array
  },

  myMap: function(x, f){ 
    for (i = 0; i < x.length; i++) {
      x[i] = f(x[i]);
    }
    return x
  },

  primes: function(x){ 
    function isPrime(y) {
      for (j = 2; j < y; j++)
        if (y % j === 0) return false;
        return y !== 1;
      }
    var primeArray = []
    for (i = 1; i <= x; i++) {
      if (isPrime(i)) {
        primeArray.push(i)
      }
    }
  return primeArray
  },
}