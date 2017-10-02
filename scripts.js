// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var largest = arr[0]
    for(i = 1; i < arr.length; i++)
      if(largest < arr[i])
        largest = arr[i]
    return largest
  },

  reversed: function(str){
    var rev_str = ""
    for(i = str.length - 1; i >= 0 ; i--)
      rev_str += str[i]
    return rev_str
  },

  loudSnakeCase: function (sentence){
    return sentence
          .replace(/[^A-Za-z ]/g,"")
          .replace(/\s+/g, " ")
          .split(" ")
          .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
          })
          .join("_");
  },

  compareArrays: function(arr1, arr2){
    if(arr1.length != arr2.length)
      return false;
    else {
      for(var i = 0; i < arr1.length; i++)
        if(arr1[i] != arr2[i])
          return false;
    }
    return true;
  },

  fizzBuzz: function(max){
    var result = [];
    for(var i = 1; i <= max; i++){
      var output = "";
      if(i % 3 == 0)
        output += "FIZZ";

      if(i % 5 == 0)
        output += "BUZZ";

      if(output=="")
        output = i;

      result.push(output);
    }
    return result;
  },

  myMap: function(arr, func){
    var new_arr = [];
    arr.forEach(function(elem){
      new_arr.push(func(elem));
    });
    return new_arr;
  },

  primes: function(num){

    // Sieve of Eratosthenes Algorithm

    var sieve = [];

    for(var i = 2; i < num; i++)
      sieve[i] = true;

    var limit = Math.sqrt(num);

    for(var i = 2; i < limit; i++) {
      if(sieve[i]) {
        for(var j = i * i; j < num; j += i)
          sieve[j] = false;
      }
    }
    var prime_arr = [];
    sieve.forEach(function (isPrime, index) {
      if(isPrime)
        prime_arr.push(index);
    })
    return prime_arr;
  }
}
