// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    var bigEl = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i] > bigEl){
        bigEl = array[i];
      }
    }
    return bigEl;
  },
  
  reversed: function(string){  
    // your code here
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(str){  
    // your code here
     var words = [];
  var replaced = str.replace(/[\W]+/g, " ");
  var split = replaced.trim().split(" ");
    for(var i = 0; i < split.length; i++){
     words.push(split[i][0].toUpperCase() + split[i].slice(1));
    }
  return words.join('_');
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