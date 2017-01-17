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

  compareArrays: function(array1, array2){
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
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