// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = 0;
    array.forEach(function(element){
      if (element > largest) {
        largest = element;
      };
    });
    return largest;
  },

  reversed: function(string){
    var rstring = "";
    for (i = string.length - 1; i >= 0; i--) {
      rstring += string[i];
    };
    return rstring;
  },

  loudSnakeCase: function(string){
    var lsc = [];
    var arr = string.split(/\s+/);
    arr.forEach(function(element) {
      var word = element.replace(/\W/, "")
      var letter = word[0].toUpperCase()
      var rest = word.slice(1)
      var result = letter + rest
      lsc.push(result)
    })
    return lsc.join("_");
  },

  compareArrays: function(array1, array2){
    if (array1.length !== array2.length) {
      return false;
    };
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      };
    };
    return true
  },

  fizzBuzz: function(number){
    var result = [];
    for (i = 1; i <= number; i++) {
      if (i % 15 === 0) {
        result.push("FIZZBUZZ");
      } else if (i % 3 === 0){
        result.push("FIZZ");
      } else if (i % 5 === 0){
        result.push("BUZZ");
      } else {
        result.push(i);
      };
    };
    return result;
  },

  myMap: function(array, fun){
    for (i = 0; i < array.length; i++) {
      array[i] = fun(array[i]);
    };
    return array;
  },

  primes: function(number){
    var primes = [2]
    for (var i = 2; i <= number; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          break
        }
        if (j === i - 1) {
          primes.push(i)
        }
      }
    };
    // primes.sort()
    console.log(primes)
    return primes
  },
}
