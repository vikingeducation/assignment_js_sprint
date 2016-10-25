// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(str) {
    return str.split("")
              .reverse()
              .join("");
  },

  loudSnakeCase: function(str) {

    var strArr = str.replace(/[^\w\s]/gi, '')
                    .split(/[ ]+/)
    for (var i = 0; i < strArr.length; i++ ) {
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join("_");
  },

  compareArrays: function(arr1, arr2) {
    var arr1Length = arr1.length;
    var arr2Length = arr2.length;
    if ( arr1Length != arr2Length) {
      return false;
    } else {
      for(var i = 0; i < arr1Length; i++) {
        if (!(arr1[i] === arr2[i])) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(num) {
    var arr = [];
    for (var i = 1; i <= num; i++ ) {
      if ( (i % 3 === 0) && (i % 5 === 0) ) {
        arr.push("FIZZBUZZ");
      } else if (i % 5 === 0) {
        arr.push("BUZZ");
      } else if (i % 3 === 0) {
        arr.push("FIZZ");
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(arr, fn){
    for (var i = 0; i < arr.length; i++) {
      arr[i] = fn(arr[i]);
    }
    return arr;
  },

  primes: function(number){
    var isPrime = function (num) {
      if (num === 2) {
       return true;
      }
      var i = 2;
      while (i < num) {
       if (num % i == 0) {
        return false;
       }
       i++;
      }
      return true;
    }
    var arr = [];
    for(var j = 2; j < number; j++) {
      if (isPrime(j) == true) {
        arr.push(j)
      }
    }
    return arr;
  },
}