// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(inputArray){
    var largestElement = inputArray[0];
    for (i=1; i<inputArray.length+1; i++) {
      console.log(inputArray[i]);
      if (inputArray[i] > largestElement) {
        largestElement = inputArray[i];
      };
    };
    console.log(largestElement);
    return largestElement;
  },

  reversed: function(){
    // your code here
  },

  loudSnakeCase: function(){
    // your code here
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
