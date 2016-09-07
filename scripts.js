// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return Math.max.apply(null, arr);
  },
  
  reversed: funcFtion(str){
    var new_str = [];
    for (var i = 0; i < str.length; i++) {
      new_str.unshift(str[i]);
    };  
    return new_str.join("");
  },

  loudSnakeCase: function(str){  
    var match, matches = [];
    var spaces = new RegExp(/\W+/);
    while (str.match(spaces)) {
      str = str.replace(spaces, "_");
    };
    var firstChars = new RegExp(/_[a-z]/);
    while (str.match(firstChars)) {
      var someMatch = str.match(firstChars);
      var replacementChar = str[someMatch.index + 1].toUpperCase();
      str = str.replace(someMatch, "_" + replacementChar);
    };
    if (str[str.length -1] === "_") {
      str = str.substring(0, str.length-1);
    };
    return str
  },

  compareArrays: function(arr1, arr2) { 
    if (arr1.length != arr2.length) {
      return false
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false
      }
    }
    return true
  },

  fizzBuzz: function(num) {
    var arr = [];
    var index = 0;
    for (var i = 1; i <= num; i++) {
      if ( ((i % 3) === 0) && ((i % 5) === 0 )) {
        arr[index] = "FIZZBUZZ";
      } 
      else if ( (i % 3) === 0 ) {
        arr[index] = "FIZZ";
      }
      else if ( (i % 5) === 0 ) {
        arr[index] = "BUZZ";
      }
      else {
        arr[index] = i;
      }
      index++;
    }
    return arr
  },

  myMap: function(arr, func) {
    var newArr = [];
    arr.forEach(function(val, index) {
      newArr[index] = func(val);
    });
    return newArr
  },

  primes: function(num){  
    var arr = [];
    var isPrime = function(value) {
      for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
      }
    }
    for (var i = 2; i <= num; i++) {
      if (isPrime(i) != false)
      {
        arr.push(i);
      }
    }
    console.log(arr);
    return arr
  },
}