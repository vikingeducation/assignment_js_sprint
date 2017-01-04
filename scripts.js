var sprintFunctions = {
  largestEl: function(array){
    var descSorted = array.sort(function(a, b) {
      return b - a;
    });
    return descSorted[0];
  },

  reversed: function(string){
    var reversedString = "";
    for (var i = (string.length - 1); i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  },

  loudSnakeCase: function(string){;
    var fixedString = string.toLowerCase();
    fixedString = fixedString.replace("_", " ");
    fixedString = fixedString.replace(/[^a-z\s+]/g, '');

    fixedString = fixedString.split(/\s+/);

    var output = fixedString.map(function(el){
        return el[0].toUpperCase() + el.substring(1, el.length);
    });

    return output.join("_");
  },

  compareArrays: function(array1, array2){
    if (array1.length !== array2.length){
      return false;
    }

    for (var i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(endPoint){
    var output = [];

    for (var i = 1; i <= endPoint; i++){
      var fizzBuzz = "";

      if (i % 3 === 0){ fizzBuzz += "FIZZ"; }
      if (i % 5 === 0){ fizzBuzz += "BUZZ"; }

      fizzBuzz ? output.push(fizzBuzz) : output.push(i);
    }
    return output;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
