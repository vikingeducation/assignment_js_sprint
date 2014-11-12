// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function( arr ){
    return arr.sort()[arr.length - 1];
  },

  reversed: function( string ){
    return string.split('').reverse().join('');
  },

  loudSnakeCase: function( string ){
    var contentArray = string.split(/[^A-Za-z0-9]+/).map(function(item) { return item.charAt(0).toUpperCase() + item.substring(1); });

    if( contentArray[contentArray.length - 1] == "" ){ contentArray.pop(); }

    return contentArray.join('_');
  },

  compareArrays: function(arrayOne, arrayTwo){
    return arrayOne.every(function(n, index) { return n == arrayTwo[index]; });
  },

  fizzBuzz: function(endPoint){
    var resultArray = [];
    for (var i = 1; i <= endPoint; ++i) resultArray.push(i);
    resultArray.forEach(function(n, index) {
      if ( n%5 == 0 && n%3 == 0) {
        resultArray[index] = "FIZZBUZZ";
      } else if (n%3 == 0) {
        resultArray[index] = "FIZZ";
      } else if (n%5 == 0) {
        resultArray[index] = "BUZZ";
      }
    });
    return resultArray;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
};