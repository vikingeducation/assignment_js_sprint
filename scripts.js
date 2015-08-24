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

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}