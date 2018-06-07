// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    return array.reduce(function(a, b) {
        return Math.max(a, b);
    });
  },

  reversed: function(string){
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
    string = string.replace(/[^\w\s]/gi, '').replace(/ +(?= )/g,'').split(' ');
    string = string.map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1);
    });
    return string.join("_");
  },

  compareArrays: function(a, b){
    var areEqual = a.length === b.length && a.every((item, index) => b[index] === item);
    return areEqual;
  },

  fizzBuzz: function(num){
    var array = [];
    for (var i = 1; i <= num; i++) {
      var f = i % 3 == 0, b = i % 5 == 0;
      array.push(f ? b ? "FIZZBUZZ" : "FIZZ" : b ? "BUZZ" : i);
    }
    return array;
  },

  myMap: function(array, func){
    var results = [];
    array.map(function(el) {
       results.push(func(el));
    });
    return results;
  },

  primes: function(num){
    var results = [];
    function isPrime(n) {
      if(n <= 1) return false;
      const limit = Math.floor(Math.sqrt(n));
      for(let i = 2; i <= limit; i++) {
          if(n % i === 0) return false;
      }
      return true;
    }
    for(let i = 2; i <= num; i++) {
        if(isPrime(i))
          results.push(i);
    }
    return results;
  },
}
