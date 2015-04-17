// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var biggest = 0;
    for(i = 0; i < array.length; i++){
      if (array[i] > biggest){
        biggest = array[i];
      }
    }
    return biggest;
  },

  reversed: function(myString){
    var starterSchwad = ""
    for(i = (myString.length - 1); i >= 0; i--){
      starterSchwad = starterSchwad + myString[i];
    }
    return starterSchwad;
  },

  loudSnakeCase: function(myString){
    var finalAnswer = ""
    for(i = 0; i < myString.length; i++){
      if (myString[i] === " ") {
         finalAnswer = finalAnswer + "_";
         i++;
         finalAnswer = finalAnswer + myString[i].to_UpperCase();
      } else if ( myString[i].match(/\w/) ) {
         finalAnswer = finalAnswer + myString[i];
      }
    }
    return finalAnswer;
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