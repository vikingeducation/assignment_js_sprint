// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var highest_element = array[0];
    for(var i = 1; i < array.length; i++){
      if (array[i] > highest_element){
        highest_element = array[i];
      }
    }
    return highest_element;
  },
  
  reversed: function(string){  
    var reversed = '';
    for(var i = string.length - 1; i >= 0; i-- ){
      reversed += string[i] 
    }
    return reversed
  },

  loudSnakeCase: function(string){  
    // your code here
    var words = string.split(" ");
    for(var i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
    return words.join("_")
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