// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = 0;
    array.forEach(function(element){
      if (element > largest) {
        largest = element;
      };
    });
    return largest;
  },

  reversed: function(string){
    var rstring = "";
    for (i = string.length - 1; i >= 0; i--) {
      rstring += string[i];
    };
    return rstring;
  },

  loudSnakeCase: function(string){
    var lsc = ""
    for (i = 0; i < string.length; i++) {
      if (string[i].match(/W/)) {
        lsc[i] = "";
      } else if (string[i] === " ") {
        lsc[i] = "_";
      } else {
        lsc[i] = string[i];
      };
      if (string[i - 1] === "_") {
        lsc[i] = lsc[i].toUpperCase();
      };
    };
    console.log(lsc);
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
