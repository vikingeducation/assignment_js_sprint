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
        if (return_string[-1] === "_") {
          return_string += string[i].toUpperCase();
        }
        else{
          return_string += string[i].toLowerCase();
        };
      }
      else {
        if (return_string[-1] !== "_") {
          if (i !== string.length - 1) {
            return_string += "_"; 
          };
        };
      };
    };
    return return_string;
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