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

  myMap: function(inputArr,inputFunc){
    // your code here
    for (var i = 0; i <= inputArr.length-1; i++){
      inputArr[i] = inputFunc(inputArr[i]);
    }
    return inputArr;
  },

  primes: function(limit){
    // your code here
    var arr = [];
    var result = [];

    for(var i = 0; i < limit; i++){
      arr.push(true)
    }

    for(var j = 2; j <= Math.sqrt(limit); j++){
      if (arr[j]) {
        for(var k = j*j; k < limit; k+=j){arr[k] = false;}
      }
    }

    for(var m = 2; m < limit; m++) {
      if (arr[m]) {result.push(m);}
    }
    return result;
  },

  bubbleSort: function(inputArr){
    var swapped = true;

    // Repeat this loop until we have not had to swap values
    while (swapped){
      swapped = false;
      // Iterate through the array
      for(var i = 0; i < inputArr.length - 1; i++){
        // If a given value is more than the next, swap them
        if (inputArr[i] > inputArr[i+1]){
          swapped = true;
          var tmp = inputArr[i];
          inputArr[i] = inputArr[i+1];
          inputArr[i+1] = tmp;
        }
      }
    }
    return inputArr;
  },

  mergeBack: function(left, right){
    var smallest = [];
    while (left.length > 0 && right.length > 0){
      if (left[0] <= right[0]) {smallest.push(left.shift())} 
        else {smallest.push(right.shift())};
    };
    return smallest.concat(left).concat(right);
  },
  mergeSort: function(arr){
    if (arr.length<=1) {return arr}
      var right = arr.splice(arr.length/2);
      var left = arr;

      var rightSort = this.mergeSort(right);
      var leftSort = this.mergeSort(left);
 
      return this.mergeBack(leftSort,rightSort );
  }
}
