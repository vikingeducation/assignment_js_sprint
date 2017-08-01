// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arrayList){
    // your code here
    var largestElement = 0;
    for (var i = 0; i < arrayList.length; i++) {
      if (arrayList[i] > largestElement) {
        largestElement = arrayList[i];
      }
    }
    return largestElement;
  },

  reversed: function(stringForw){
    // your code here
    stringForw = stringForw.split("");

    var stringReve = [];
    for (var i = 0; i <= stringForw.length; i++) {
      stringReve[i] = stringForw[stringForw.length-i];
    }

    return stringReve.join("");
  },

  loudSnakeCase: function(stringCased){
    // your code here
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
      }
    //Set all letters to Capital
    var stringCased = stringCased.toUpperCase();
    var stringSnakeCased = "";

    for (var i = 0; i < stringCased.length; i++){
      //Reformat Spaces
      if (stringCased.charAt(i) == " " && (stringCased.charAt(i-1) != " ") && i > 0){
        stringSnakeCased = stringSnakeCased + "_";
      }
      else if (isLetter(stringCased.charAt(i)) ) {
        stringSnakeCased = stringSnakeCased + stringCased.charAt(i);
      }
    }
    //Convert capitals after first letter to lower case
    for (var i = 1; i < stringSnakeCased.length; i++) {
      if (isLetter(stringSnakeCased.charAt(i)) && isLetter(stringSnakeCased.charAt(i-1))) {
        stringSnakeCased = stringSnakeCased.slice(0,i) + stringSnakeCased.charAt(i).toLowerCase() + stringSnakeCased.slice(i+1,stringSnakeCased.length)
      }
    }
    return stringSnakeCased ;
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
