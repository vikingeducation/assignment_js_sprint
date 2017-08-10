// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){

  },

  reversed: function(string) {
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }
    return newString;
  },

  loudSnakeCase: function(){
    // your code here
  },

  compareArrays: function(array1, array2) {
    let sameArrayNum = 0;
    let longerArray = [];
    if(array1.length > array2.length) {
      longerArray = array1;
    } else {
      longerArray = array2;
    };

    for(let i = 0; i <= longerArray.length; i++) {
      if (array1[i] !== array2[i]) {
        sameArrayNum++;
      }
    }

    if (sameArrayNum > 0) {
      var bool= Boolean(false);
      return bool;
    } else {
      var bool= Boolean(true);
      return bool;
    }

    let answer = compareArrays(array1, array2);
    alert(answer);
},

  fizzBuzz: function(number){
      newArray = [];
      for(var i = 1; i <= number; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
          newArray.push("FIZZBUZZ");
        } else if (i % 3 === 0) {
          newArray.push("FIZZ");
        } else if (i % 5 === 0) {
          newArray.push("BUZZ");
        } else {
          newArray.push(i);
        }
      }
      return newArray;
    },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
