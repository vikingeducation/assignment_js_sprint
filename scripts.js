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

  compareArrays: function(a1, a2){
    if ( a1.length > a2.length ) {
      return false;
    }
    else {
      for ( var i = 0; i < a1.length; i++) {
        if(a1[i] != a2[i]) {
          return false
        }
      }
    }
    return true;
  },

  fizzBuzz: function(number){
    var a = new Array;
    for( var i = 1; i <= number; i++ ) {
      if ( i % 3 == 0 && i % 5 == 0 ) {
        a.push("FIZZBUZZ");
      }
      else if ( i % 5 == 0 ) {
        a.push("BUZZ");
      }
      else if ( i % 3 == 0 ) {
        a.push("FIZZ");
      }
      else {
        a.push(i);
      }
    }
    console.log(a);
    return a;
  },

  myMap: function(a, f){
    var a2 = new Array;
    for ( i = 0; i < a.length; i++ ) {
      a2.push(f(a[i]));
    }
    return a2;
  },

  primes: function(number){
    var a = new Array;
    var test = true;
    for (var i = 2; i < number; i++) {
      for (var j = 2; j <= i/2; j++) {
        if (i % j == 0) {
          test = false;
        }
      }
      if (test) {
        a.push(i);
      }
      test = true;
    }
    console.log(a);
    return a;
  },
}
