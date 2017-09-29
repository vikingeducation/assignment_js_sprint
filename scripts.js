// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var largest = arr[0]
    for(i = 1; i < arr.length; i++)
      if(largest < arr[i])
        largest = arr[i]
    return largest
  },

  reversed: function(str){
    var rev_str = ""
    for(i = str.length - 1; i >= 0 ; i--)
      rev_str += str[i]
    return rev_str
  },

  loudSnakeCase: function (sentence){
    return sentence
          .replace(/[^A-Za-z ]/g,"")
          .replace(/\s+/g, " ")
          .split(" ")
          .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
          })
          .join("_");
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
