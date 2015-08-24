// FILL IN THE FUNCTIONS BELOW
"use strict";

var sprintFunctions = {
  largestEl: function(input){
    // input is an array
    return input.sort()[input.length - 1];
  },

  reversed: function(input){
    // input is a string
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(input){
    // input is a string

    var stripped = input.replace(/[!.?]/g,"");
    // Two or more spaces are replaced with one space
    stripped = stripped.replace(/[ ]{2,}/g, " ");
    var stripped_arr =  stripped.split(" ");

    for (var el in stripped_arr){
      stripped_arr[el] = stripped_arr[el].charAt(0).toUpperCase() + stripped_arr[el].slice(1);
    }

    return stripped_arr.join("_");

  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    if (array1.length !== array2.length){
      return false;
    }

    for (var i = 1; i < array1.length; i++){
      if (array1[i] !== array2[i]){
        return false;
      }
    }

    return true;
  },

  fizzBuzz: function(limit){
    var result = [];
    for (var i = 1; i <= limit; i++){
      result.push((function(current_val){
        var current = "";
        if (current_val % 3 == 0){ current += "FIZZ"; }
        if (current_val % 5 == 0){ current += "BUZZ"; }
        return (current.length ? current : current_val);
      })(i));
    }
    return result;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
