// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(myArray){  
    var largest = 0;

    for(var i = 0; i < myArray.length; i++) {
      if(myArray[i] > myArray[largest]){
        largest = i;
      }
    }
    return myArray[largest];
  },
  
  reversed: function(string){  
    return string.split('').reverse('').join('');
  },

  loudSnakeCase: function(){  
    // your code here
  },

  compareArrays: function(arr1, arr2){
    if (arr1.length == arr2.length) {
      for(var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) 
          return false;
        };
    } 
    else {
      return false;
    }
    return true;
    // return "Finish compareArrays first!" 
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