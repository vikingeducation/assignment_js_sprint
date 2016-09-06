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
    words = sentence.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ").split(" ");
    new_words = words.map(function(word) { 
                return word[0].toUpperCase() + word.substring(1).toLowerCase();
              });

    return new_words.join("_")

  },

  compareArrays: function(arr_1, arr_2){
    if (arr_1.length !== arr_2.length){
      return false;
    }
    for (var i = 0; i < arr_1.length; i++){
      if (arr_1[i] !== arr_2[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(input){
    var result = []
    for (var i = 1; i <= input; i++){
      if (i%15===0){
        result[i-1] = "FIZZBUZZ";
      }
      else if (i%5===0){
        result[i-1] = "BUZZ";
      }
      else if (i%3===0){
        result[i-1] = "FIZZ";
      }
      else{
        result[i-1] = i;
      }
    }
    return result
  },

  myMap: function(arr, callback){
    //var result = [];
    arr = arr.forEach(callback);
    return arr;
  },

  primes: function(){
    // your code here
  },
}