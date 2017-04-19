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

  compareArrays: function(firstArray, secondArray){
    for (i=0; i<firstArray.length; i++) {
      if (firstArray[i] != secondArray[i]) {
        return false;
      };
    }
    return true;
  },

  fizzBuzz: function(upperLimit){
    var outputArray = [];
    for (i=0; i<=upperLimit; i++) {
      if (i%3 == 0) {
        if (i%5 == 0) {
          outputArray[i] = "FIZZBUZZ";
        } else {
          outputArray[i] = "FIZZ";
        };
      } else if (i%5 == 0) {
        outputArray[i] = "BUZZ";
      } else {
        outputArray[i] = i;
      };
    };
    outputArray.splice(0,1);
    return outputArray;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
