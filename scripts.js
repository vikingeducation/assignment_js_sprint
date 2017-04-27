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

  compareArrays: function(arg, arg2){ 
    // your code here (replace the return)
    return String(arg) === String(arg2); 
  },

  fizzBuzz: function(num){  
    // your code here
     var answer = [];
    for(var i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        answer.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        answer.push("FIZZ");
      }  else if (i % 5 === 0) {
        answer.push("BUZZ");
      }
      else {
        answer.push(i);
      }
    }
    return answer;
  },

  myMap: function(array, func){
   var newArr = []

    for (var i = 0; i < array.length; i++) {
      newArr.push(func(array[i]));
    }
    return newArr;
},

  primes: function(){  
    // your code here
    //this led me to waste quite a bit of time, so I skipped it and moved on.
  },
}