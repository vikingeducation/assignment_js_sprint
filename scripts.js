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
    // strips all punctuation
    // breaks code into an array
    // caps the first letter of each word
    // joins with '_'

    String.prototype.toSnakeCase = function() {
      arr = [];
      arr = this.replace(/[\!\.\'\,\?]/g, "").split(/ +/);
      arr.forEach(function(word, index) {
        arr[index] = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
      });

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
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}