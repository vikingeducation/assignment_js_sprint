// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] >= largest) {
        largest = array[i];
      };
    };
    return largest;
  },
  
  reversed: function(string){  
    var reverse = "";
    for (var i = string.length - 1; i >= 0; i--) {
      reverse += string[i];
    };
    return reverse;
  },

  loudSnakeCase: function(string){  
    // your code here
    var return_string = "";
    for (var i = 0; i < string.length; i++) {
      var letter = string[i].toLowerCase();
      if (letter.match(/[a-z]/)) {
        if (i == 0 || return_string.slice(-1) === "_") {
          return_string += string[i].toUpperCase();
        }
        else{
          return_string += string[i].toLowerCase();
        };
      }
      else {
        if (return_string.slice(-1) !== "_") {
          if (i !== string.length - 1) {
            return_string += "_"; 
          };
        };
      };
    };
    return return_string;
  },

  compareArrays: function(array1, array2){ 
    if (array1.length !== array2.length) {
      return false;
    };
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      };
    };
    return true;
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(max){
  var finalFizzBuzz = [];
  for(var i = 1; i <= max; i++) {
    if(i % 15 === 0) {
      finalFizzBuzz.push("FIZZBUZZ");
    }
    else if (i % 3 === 0) {
      finalFizzBuzz.push("FIZZ");
    }
    else if(i % 5 === 0) {
      finalFizzBuzz.push("BUZZ");
    }
    else {
      finalFizzBuzz.push(i);
    };
  };  
  return finalFizzBuzz;  
  },

  myMap: function(array, func){  
    var finalArray = [];
    for(var i = 0; i < array.length; i++) {
      finalArray.push(func(array[i]));
    };
    return finalArray;
  },

  primes: function(){  
    // your code here
  },
}