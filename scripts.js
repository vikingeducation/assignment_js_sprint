"use strict";
// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var maxValue = array[0];
    for(var i=0; i < array.length; i++){
      if(array[i] > maxValue){
        maxValue = array[i];
      }
    }
    return maxValue;
  },

  reversed: function(string){
    // your code here
    var reversedString = "";
    for(var i=string.length-1; i > -1; i--){
      reversedString+= string[i];
    }
    return reversedString;
  },

  loudSnakeCase: function(string){
    // your code here
    var loud = [];
    string = string.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.replace(/\s+/g, " ");
    var string_array = string.split(" ");
    for(var i=0; i< string_array.length; i++){
      loud[i] = string_array[i][0].toUpperCase() + string_array[i].slice(1,string_array[i].length);
    }
    loud = loud.join("_");
    return loud;
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    if ( array1.length === array2.length ){
      for( var i = 0; i < array1.length; i++ ){
        if (array1[i] != array2[i] ){
          return false;
        }
      }
      return true;
    }
    else{
      return false;
    }
  },

  fizzBuzz: function(num){
    // your code here
    var arr = [];
    for( var i = 1; i <= num; i++ ){
      if( i%3 === 0 && i%5 === 0){
        arr[i-1] = "FIZZBUZZ";
      }
      else if( i%3 === 0){
        arr[i-1] = "FIZZ";
      }
      else if( i%5 === 0){
        arr[i-1] = "BUZZ";
      }
      else{
        arr[i-1] = i;
      }
    }
    return arr;
  },

  myMap: function(array, fn){
    // your code here
    var mapArray = [];
    for( var i = 0; i < array.length; i++ ){
      mapArray[i] = fn(array[i]);
    }
    return mapArray;
  },

  primes: function(num){
    // your code here
    var primeArray = [];
    var primeChecker = true;
    if(num < 2){
      return primeArray;
    }
    else{
      for( var i = 2; i < num; i++ ){
        primeChecker = true;
        
        for( var j = 1; j < i; j++ ){
          if( i%j === 0 && j != 1 ){
            primeChecker = false;
          }

        }
        if(  primeChecker ){
          primeArray.push(i);
        }
      }
    }
    return primeArray;
  },
}



