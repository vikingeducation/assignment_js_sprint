// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    // this assumes array of nums
    input.sort(function( a , b ) {
      return a - b
    });
    return input[input.length - 1]; //seriously.js?

    // return Math.max.apply(this, input); <-- fancy way

  },

  reversed: function(string){
    String.prototype.myReverse = function() {

      return this.split("").reverse().join("");

    };

    return string.myReverse() // more fancy stuff!

  },

  loudSnakeCase: function(string){

    String.prototype.toSnakeCase = function() {
      arr = [];
      // strips all punctuation
      // breaks code into an array
      arr = this.replace(/[\!\.\'\,\?]/g, "").split(/ +/);
      arr.forEach(function(word, index) {
        // caps the first letter of each word
        arr[index] = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
      });

      // joins with '_'
      return arr.join("_");
    };

    return string.toSnakeCase();
  },

  compareArrays: function(arr1, arr2){
    var x = true
    for ( i = 0; i < arr1.length; i++) {
      if (arr1.length == arr2.length && arr1[i] == arr2[i]) {
        x = true;
      } else {
        x = false;
        break;
      };
      x
    };
    return x
  },

  fizzBuzz: function(num){
    y = []
    for (i = 1; i <= num; i++ ) {
      if (i%15 == 0) { x = "FIZZBUZZ" }
      else if (i%3 == 0) { x = "FIZZ" }
      else if (i%5 == 0) { x = "BUZZ" } else { x = i }
      y[i -1] = x
    };
    return y;
  },

  myMap: function(arr, callback) {
    // takes an anonymous function
    // runs it on each element
    arr.forEach(function(obj, index){
      arr[index] = callback(obj);
    });
    return arr
  },

  primes: function(num){
    // This routine consists of dividing n by each integer
    // m that is greater than 1 and less than or equal to
    // the square root of n. If the result of any of these
    // divisions is an integer, then n is not a prime,
    // otherwise it is a prime

    result = []
    function isPrime(n) {
      var s = Math.sqrt(n);
      if (n == 2) return true; // hack as F
      if ( n<2 ||n%2 == 0 ) return false;
      for (i = 2; i <= s; i++ ) if (n % i == 0) return false;
      return true;
    };

    for (m = num; m > 0; m--) {
      if (isPrime(m)) result.unshift(m);
    }
    return result;
  },
}