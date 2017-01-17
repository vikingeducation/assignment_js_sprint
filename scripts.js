// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(myArray){
    return Math.max.apply(Math, myArray);
  },

  reversed: function(string){
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(sentence){
    var result = "";
    sentence.split("").forEach(function(element, index) {
      if (element.match(/[a-z]/i)) {
        if (result.length === 0 || !result[result.length-1].match(/[a-z]/i)) {
          result += element.toUpperCase();
        } else{
          result += element;
        }
      } else{
        if (result[result.length-1] !== "_" && index != sentence.length - 1) {
          result += "_";
        }
      }
    });
    return result;
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