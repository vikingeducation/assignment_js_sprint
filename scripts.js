// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var biggest = 0;
    for (i=0;i<array.length;i++){
      if(array[i]>biggest) {
        biggest = array[i];
      }
    }
    return biggest;
  },

  reversed: function(str){
    var revstr = "";
    for (i = str.length-1; i >= 0; i--) {
      revstr += str[i];
    }
    str = revstr;
    return str;
  },

  loudSnakeCase: function(str){
    for (i = 0; i < str.length; i++) {
      n = str.charCodeAt(i);

      if(!(n >= 97 && n <= 122 || n >= 65 && n <= 90 || n == 32)) {
        str = str.slice(0, i) + str.slice(i+1, str.length);
      }

      if(n == 32) {
        v = str.charCodeAt(i-1);
        if (v == 32) {
          str = str.slice(0, i) + str.slice(i+1, str.length);
        }
      }
    }
    var newstr = str.split(" ");
    for (var i = 0; i < newstr.length; i++) {
      newstr[i] = newstr[i].substring(0,1).toUpperCase() + newstr[i].substring(1);
    }

    return newstr.join("_");

  },

  compareArrays: function(array1, array2){
    var same = true;
    for (i = 0; i < array1.length; i++) {
      if(array1[i] != array2[i]) {
        same = false;
      }
    }
    return same;
  },

  fizzBuzz: function(num){
    var fizzArray = [];
    for (i = 0; i < num; i++) {
      if ((i+1) % 3 == 0 && (i+1) % 5 == 0) {
        fizzArray.push("FIZZBUZZ");
      }
      else if ((i+1) % 3 == 0) {
        fizzArray.push("FIZZ");
      }
      else if ((i+1) % 5 == 0) {
        fizzArray.push("BUZZ");
      }
      else {
        fizzArray.push(i+1);
      }
    }
    return fizzArray;
  },

  myMap: function(array, theFunction){
    var newarray = array.map(theFunction);
    return newarray;
  },

  primes: function(num){
    var primeArray = [];
    for (i = 2; i < num; i++) {
      if (i === 2 || i === 3) {
        primeArray.push(i);
      }
      else {
        var isPrime = true;
        for (j=2; j<i; j++) {
          if(i % j == 0) {
            isPrime = false;
          }
        }
        if(isPrime == true) {
          primeArray.push(i);
        }
      }
    }
    console.log (primeArray);
    return primeArray;
  },
}
