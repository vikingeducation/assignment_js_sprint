// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    return array.sort()[array.length - 1];
  },
  
  reversed: function(string){  
    // your code here
    var rev_string = "";

    for (var i = string.length - 1; i >= 0; i--) {
      rev_string += string[i];
    }

    return rev_string;
  },

  loudSnakeCase: function(sentence){  
    var words = [];
    var new_word = "";
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i].match(/[a-zA-Z]/)) {
        if (new_word)
          new_word += sentence[i];
        else
          new_word += sentence[i].toUpperCase();
      }
      else {
        if (new_word) {
          words.push(new_word);
          new_word = "";
        }
      }
    }
      // console.log(new_word[0]);
      // new_word[0] = new_word[0].toUpperCase();
    
    return words.join("_");
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