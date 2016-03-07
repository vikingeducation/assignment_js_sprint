// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    // your code here
    var largest = arr[0];
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  },
  
  reversed: function(str){  
    // your code here
    var len = str.length;
    var arr = [];
    for(var i = 0; i < len/2; i++) {
      arr[i] = str[len - 1 - i];
      arr[len - 1 - i] = str[i];
    }
    arr = arr.join("");
    return arr;
  },

  loudSnakeCase: function(str){  
    // your code here
    //var str = "I am a strange code.  I like it though!";
    var len = str.length;
    var arr = [];
   
    for (var i = 0; i < len; i++) {

      if (str[i] == " " && str[i+1] != " ") {
        arr.push("_");
        if (++i < len ) {
          arr.push(str[i].toUpperCase());
        }
      } else if (str[i] != "," && str[i] != "." && str[i] != "!" && str[i] != " ")  {
        arr.push(str[i]);
      }
    }

    arr = arr.join("");
    return arr;
  },

  compareArrays: function(arr1,arr2){ 
   
    if (arr1.length != arr2.length) {
      return false;
    };

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      };

    };
    return true;
  },

  fizzBuzz: function(num){ 
    
    var arr = [];

    for (var i = 1; i <= num; i++) {

      if (i % 15 == 0) {
        arr.push("FIZZBUZZ");
      } else if (i % 5 == 0) {
        arr.push("BUZZ");
      } else if (i % 3 == 0) {
        arr.push("FIZZ");
      } else {
        arr.push(i);
      };  
    };
    return arr;
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}