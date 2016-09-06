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
    var words = sentence.split(" ");

    words.forEach( function(word, index) {
      var new_word = "";
      for (var i = 0; i < word.length; i++) {
        if ('A' <= word[i] <= 'Z' ||  'a' <= word[i] <= 'z')
          new_word += word[i];
      }
      words[index] = new_word;
    })
    
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