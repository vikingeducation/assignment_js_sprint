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

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    //Check if lengths are the same
    if (array1.length != array2.length){
      return false;
    }
    //Check if content is the same
    else {
      var equal = true;
      for (var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i])
        {
          equal = false;
        }
      }
    }
    return equal;
  },

  fizzBuzz: function(number){
    // your code here
    if (number<0) {
      return false;
    }
    else {
      var array1 = [];
      for (var i = 0; i < number; i++) {
        if ( ((1+i)%5)===0 && ((1+i)%3)===0 ) {
          array1[i] = "FIZZBUZZ";
        }
        else if ((1+i)%3===0) {
          array1[i] = "FIZZ";
        }
        else if ((1+i)%5==0){
          array1[i] = "BUZZ";
        }
        else {
          array1[i] = i+1;
        }
      }
    }
    return array1;
  },

  myMap: function(array1, function1){
    // your code here
    if (array1.length < 0) {
      return false;
    }
    else {
      for (var i = 0; i < array1.length; i++){
        array1[i] = function1(array1[i]);
      }
    }
    return array1;
  },

  primes: function(number){
    // your code here
    if (number < 1) {
      return false;
    }
    else {
      var array1 = [];
      array1Index = -1;
      var bool = true;
      for (var i = 2; i <= number; i++) {
        bool = true;
        for (var j = i-1; j > 1; j--){
          if (!(i%j)) {
            bool = false;
            console.log(i);
          }
        }
        if (bool) {
          array1Index++;
          array1[array1Index] = i;
        }
      }
    }
    return array1;
  },
}
