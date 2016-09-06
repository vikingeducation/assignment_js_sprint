// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    // your code here
    return Math.max(...arr);
  },

  reversed: function(str){
    return str.split('').reverse().join('');
  },

  loudSnakeCase: function(sentence){
    // your code here
    words = sentence.replace(/[^\x00-\x7F]/g, "").split(" ");
    words.map(function(word) { toUpperCase(word[0]); });

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