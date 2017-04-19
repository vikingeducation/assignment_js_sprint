// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(inputArray){
    var largestElement = inputArray[0];
    for (i=1; i<inputArray.length+1; i++) {
      if (inputArray[i] > largestElement) {
        largestElement = inputArray[i];
      };
    };
    return largestElement;
  },

  reversed: function(inputString){
    var reversedString = "";
    for (i=inputString.length-1; i>=0; i--) {
      reversedString += inputString[i];
    };
    return reversedString;
  },

  loudSnakeCase: function(inputString){
    //iterate through string
    var splitOutputString = [];
    var splitInputString = inputString.split(/\W+/);
    splitInputString.pop();
    splitInputString.forEach(function(item) {
      splitOutputString.push(item.charAt(0).toUpperCase() + item.substr(1));
    });
    //if character at that location is greater than digits, replace with underscore
    return splitOutputString.join("_");
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
