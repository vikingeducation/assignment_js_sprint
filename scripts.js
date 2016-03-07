// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var largest = 0;
    array.forEach(function(el){
      if (el > largest){
        largest = el;
      }
    });
    return largest;
  },

  reversed: function(string){
    // your code here
    var array = [];
    for (var i = string.length - 1; i >= 0; i--){
      array += string[i];
    }
    return array;
  },

  loudSnakeCase: function(str){
    var stripped = str.replace(/[^a-z0-9]/, "");
    var arr = stripped.split(' ');
    arr.forEach(function(el){
      el.toUpperCase();
    });
    return arr.join("_");
  },

  fizzBuzz: function(number){
    var array = [];
    for (var i = 1; i <= number; i++) {
      if (i % 5 === 0 && i % 3===0) {
        array.push("FIZZBUZZ");
      }
      else if (i % 3 === 0) {
       array.push("FIZZ");
      }
      else if (i % 5 === 0) {
        array.push("BUZZ");
      }
      else {
        array.push(i);
      }
    }
    console.log(array)
   return array;
  },

  compareArrays: function(array_1, array_2){
    // your code here (replace the return)
    for (var i = 0; i < array_1.length; i++) {
      if (array_1[i] !== array_2[i]) {
        return false;
      }
    }
    return true;
  },

  myMap: function(array, function(){

  }){
    // your code here
  },

  primes: function(){
    // your code here
  },
};
