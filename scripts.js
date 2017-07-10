// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    return Math.max.apply(null, input);
  },

  reversed: function(input){
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(input){
    //remove the punctuation
    var modified = input.replace(/[^\w+-]+/g, ' ');

    //remove any remaining trailing spaces
    modified = modified.replace(/[ \t]+$/,'');

    //break words into an array
    modified = modified.split(" ");

    //cap the first letter and lower the rest
    modified = modified.map(function(word){
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });

    //join the words back together with _
    modified = modified.join("_");

    //output the result
    return modified;
  },

  compareArrays: function(array1, array2){
    return array1 === array2;
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
