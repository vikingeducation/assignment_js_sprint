// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    array.sort();

    let last = array.length - 1;
    return array[last];
  },
  
  reversed: function(string){  
    let array = new Array;
    for (let i = 0; i < string.length; i++) {
      array.unshift(string[i]);
    }
    
    return array.join("");
  },

  loudSnakeCase: function(string){
    // turn string into an array
    let array = string.split(" ");

    // remove empty elements from the array
    let nonEmpty = array.filter(Boolean);

    // for every word in the array, keep only alphanumeric
    nonEmpty.forEach(word => {
      let charArray = word.split("");

      charArray.filter(function(char) {
        if (
          !(char in "abcdefghijklmnopqrstuvxywz".split("")) &&
          !(char in "ABCDEFGHIJKLMNOPQRSTUVXYWZ".split("")) &&
          !(char in "0123456789")) {
            char.replace(char, "");
          }
      )
      }
      };
    );
    
    let isalnum = function(char) {
    }

    // write every word in loud case
    let makeLoud = function(word) {
      let alnumWord = word.filter(isalnum(c));
      return alnumWord[0].toUpperCase() + alnumWord.slice(1, alnumWord.length);
    }
    
    // return the array as a string joined by underscore 
    return loud.join("_");
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