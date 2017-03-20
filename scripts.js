// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    for (var i = 0; i < array.length; i ++) {
      var a = 0;
      var b = 0;
      if (a < array[i]) {
        b = array[i];
      }
    }
    return b;
  },

  reversed: function(array){
    return array.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
    var otherOtherSnakeString = string.replace("  ", " ");
    var otherSnakeString = otherOtherSnakeString.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '');
    var snakeString = otherSnakeString.split(" ");
    var snakeArray = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
      }
    }

    snakeArray(snakeString);
    var snakeStringTwo = snakeString.join("_");
    return snakeStringTwo;


  },

  compareArrays: function(array1, array2){
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j <array2.length; j++) {
        if (array1[i] != array2[j]) {
          return false;
        }
        else {
          return true;
        }
      }
    }
  },


  fizzBuzz: function(n){
    var array = [];
    for (var i = 1; i <= n; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        array.push("FIZZBUZZ")
      }
      else if (i % 3 === 0) {
        array.push("FIZZ")
      }
      else if (i % 5 === 0) {
        array.push("BUZZ")
      }
      else {
         array.push(i)
      }
    }
      return array;
  },

  myMap: function(myArray, myFunction) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
      newArray.push(myFunction(myArray[i]));
    }
    return newArray;

  },

  primes: function(i){
    var array =[];
    for (var j = 0; j < i; j++) {
      if (isPrime(j)) {
        array.push(j);
      }
    }

    function isPrime(value) {
      for(var i = 2; i < value; i++) {
        if(value % i === 0) {
          return false;
        }
      }
      return value > 1;
    }

    return array;
  },
}
