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

  loudSnakeCase: function(str){  
    // your code here
    str = str.replace(/\W/g,'_');
    var arr = [];

    str.split('_').forEach(function(element){
      if (element.match(/\w/)) {
        arr.push(element.charAt(0).toUpperCase()+element.slice(1).toLowerCase());
      };
    });

    return arr.join('_');
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

  fizzBuzz: function(number){  
    // your code here
    var i = 1;
    var arr = [];

    while(i <= number) {
      if(i % 3 === 0 && i % 5 === 0){
        arr.push("FIZZBUZZ");
      }
      else if(i % 3 === 0){
        arr.push("FIZZ");
      }
      else if(i % 5 === 0){
        arr.push("BUZZ");
      }
      else {
        arr.push(i);
      }
      i++;
    }
    return(arr);
  },

  myMap: function(myArray, myFunction){  
    // your code here
    var returnArray = [];
      for (var i = 0; i < myArray.length; i++) {
        returnArray.push(myFunction(myArray[i]));
      }
    return returnArray;
  },

  primes: function(number){
    var arr = [];
    for(var i = 2; i < number; i++){
      var isPrime = true;
      for(var j = 2; j < i; j++){
        if(i % j === 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        arr.push(i);
      }
    }
    return arr;
    },
}