// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    array.sort(function(a,b) {
      return (b-a)
    });
    return array[0];
},

  reversed: function(string){
    var newString = "";
      for (var i=string.length-1; i>=0; i--){
        newString += string[i];
      }
      return newString;
  },

  loudSnakeCase: function(){
    // your code here
  },

  compareArrays: function(arr1, arr2){
    if (arr1.join()===arr2.join()) {
      return true;
    } else {
      return false;
    }
  },

  fizzBuzz: function(number){
    var arr = [];
    for (var i = 1; i<=number; i++){
      if (i % 3 === 0 && i % 5 === 0){
        arr.push("FIZZBUZZ");
    }
    else if (i%3===0) {
        arr.push("FIZZ");
    }
    else if (i%5===0) {
        arr.push("BUZZ");
    }
    else {
        arr.push(i);
    }
  }
  return arr;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
