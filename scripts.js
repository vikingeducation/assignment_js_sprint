// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0];  
    for(let i = 1; i <= array.length-1; i++) {
      if(array[i] > largest) {
        largest = array[i];
      }  
    }
  },
  
  reversed: function(string){  
    
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  },

  /* 
  
  Alternative Method for Reversing String 
  
  reversed: function(string){
    
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    return newString;
  }
  
  */



  loudSnakeCase: function(){  
    // your code here
  },

  compareArrays: function(arr1, arr2){
    
    var firstLength = arr1.length;
    var secondLength = arr2.length;

    if (firstLength === secondLength) {
      for(let i = 0; i <= firstLength.length-1; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    else {
      return false;
    }
    
  },

  fizzBuzz: function(number){  
    numArr[];
    for(let i=0; i<=number; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        numArr.push("FIZZBUZZ");
      }
      else if(i % 3 === 0) {
        numArr.push("FIZZ");
      }
      else if (i % 5 === 0 && i % 3 !== 0) {
        numArr.push("BUZZ");
      }
    }

    return numArr;
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}