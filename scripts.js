// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    // This function takes in an array and returns the max element
    max = arr[0];
    for (var i=1; i<arr.length; i++) {
      max = arr[i] > max ? arr[i] : max
    }
    return max;
  },

  reversed: function(str){
    //This function takes a string and reverses it
    reverse = []
    for (var i=0; i<str.length; i++){
      reverse.unshift(str[i])
    }
    return reverse.join("");
  },

  loudSnakeCase: function(str){
    //This function takes in a string and returns it
    // In_Loud_Snake_Case_With_No_Punctuation
    return (
      str
        .replace(/[^\s+a-zA-Z]/g, "")
        .split(/\s+/)
        .map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("_")
      )
  },

  compareArrays: function(arr1, arr2){
    // This function takes in an two arrays and checks
    // for equality (same elements in same order)
    if (arr1.length == arr2.length){
      for (var i=0; i<arr1.length; i++){
        if (arr1[i] != arr2[i]){
          return false
        }
      }
      return true
    } else {
      return false
    }
  },

  fizzBuzz: function(num){
    // This function takes in a number and returns an array
    // containing all the elements from 1 to that number.
    // Each element divisible by 3 is replaced by "FIZZ",
    // each element divisible by 5 is replaced by "BUZZ"
    // and each element divisible by both 3 and 5 is replaced by "FIZZBUZZ".
    var output = [];
    for (var i=1; i<=num; i++){
      if ( i % 3 == 0 ){
        if ( i % 5 == 0 ){
          output.push("FIZZBUZZ");
        } else {
          output.push("FIZZ");
        }
      } else if ( i % 5 == 0 ){
        output.push("BUZZ");
      } else {
        output.push(i);
      }
    }
    return output;
  },

  myMap: function(arr,fn){
    // This function takes an array and a function. It passes every
    // element from the array into that function in turn,
    // running the function. The returned array should be filled with
    // each of the return statements from that function.
    var output = [];
    arr.forEach(function(e){
      output.push(fn(e));
    })
    return output;
  },

  primes: function(num){
    // This function takes a number and outputs an array containing
    // all prime numbers that occur prior to that number.
    var output = [];
    var isPrime = function(n){
      for( var i=2; i<n; i++){
        if (n % i == 0){
          return false
        }
      }
      return true
    };

    for (var i =2; i<num; i++){
      if (isPrime(i)) {
        output.push(i);
      }
    }
    return output;

  },
}