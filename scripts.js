// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {
    var largest = 0;
    for ( var i = 0; i < array.length; i++) {
      if( array[i] > largest ) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(myString) {
    var temp = "";
    for ( var i = myString.length - 1; i >= 0; i-- ) {
      temp += myString[i];
    }
    return temp;
  },

  loudSnakeCase: function(s){
    var s1 = s.replace(/[!.]/g, "");
    var s2 = s1.replace(/ /g, "_");
    var s3 = "";
    var check = false;
    for (var i = 0; i < s2.length; i++) {
      if (s2[i] == "_") {
        if (s2[i+1] == "_") {

        }
        else {
          check = true;
          s3 += s2[i];
        }
      }
      else if (check) {
        s3 += s2[i].toUpperCase();
        check = false;
      }
      else {
        s3 += s2[i];
      }
    }
    console.log(s3);
    return s3;
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
