// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){  
    var largestNum = arguments[0][0];
    for(var i = 1; i < arguments[0].length; i++) {
      if(arguments[0][i] > largestNum) {
        largestNum = arguments[0][i];
      }
    }
    return largestNum;
  },
  
  reversed: function(){  
    return arguments[0].split("").reverse().join("");
  },

  loudSnakeCase: function(){
    var str = arguments[0].replace(/\s\s+/g, " ");
    var arr = str.split(" ");
    for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    var newStr = arr.join(" ");
    var strUnderScore = newStr.replace(/\s/g, "_");
    return strUnderScore.replace(/\W/g, "");
  },

  compareArrays: function(){
    var arr1 = arguments[0];
    var arr2 = arguments[1];
    for(var i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(){  
    var arr = [];
    var num = arguments[0];
    for( var i = 1; i <= num; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        arr.push("FIZZBUZZ");
      } else if(i % 5 === 0 && i % 3 !== 0) {
        arr.push("BUZZ");
      } else if(i % 3 === 0 && i % 5 !== 0) {
        arr.push("FIZZ");
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(){  
    var arr = arguments[0];
    var func = arguments[1];
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
      newArr.push(func(arr[i]));  
    }
    return newArr;
  },

  primes: function(){  
    function isPrime(num) {
      for(var i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    }
    var arr = [];
    var input = arguments[0];
    for(var i = 2; i <= input; i++) {
      if(isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;
  },
}
