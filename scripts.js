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

  compareArrays: function(arr1, arr2){
    if(arr1.length != arr2.length)
      return false;
    else {
      for(var i = 0; i < arr1.length; i++)
        if(arr1[i] != arr2[i])
          return false;
    }
    return true;
  },

  fizzBuzz: function(max){
    var result = [];
    for(var i = 1; i <= max; i++){
      var output = "";
      if(i % 3 == 0)
        output += "FIZZ";

      if(i % 5 == 0)
        output += "BUZZ";

      if(output=="")
        output = i;

      result.push(output);
    }
    return result;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
