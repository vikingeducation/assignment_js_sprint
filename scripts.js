// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(ary){  
    var largest = 0;
    ary.forEach( function(el) {
      if (el > largest) {
        largest = el;
      }
    });
    return largest;
  },
  
  reversed: function(str){  
    reverse_ary = [];
    for (var i = (str.length -1); i >= 0; i--) {
      reverse_ary.push(str[i]);
    };
    return reverse_ary.join("");
  },

  loudSnakeCase: function(sentence){  
    ary = [];
    start = true;
    for (let i = 0; i < sentence.length; i++) {
      if (/[a-zA-Z]/.test(sentence[i])) {
        if (start) {
          ary.push(sentence[i].toUpperCase()) 
        } else { 
          ary.push(sentence[i].toLowerCase()) 
        };
        start = false;
      } else if (/\s/.test(sentence[i])) {
        if (!(ary[ary.length - 1] == "_")) {
          ary.push("_");
          start = true;
        };
      };
    };
    return ary.join("");
  },

  compareArrays: function(ary1, ary2){ 
    if (!(ary1.length == ary2.length)) {
      return false;
    };
    for (let i = 0; i < ary1.length; i++) {
      if (!(ary1[i] == ary2[i])) {
        return false;
      };
    };
    return true;
  },

  fizzBuzz: function(num){  
    ary = [];
    for (let i = 1; i <= num; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        ary.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        ary.push("FIZZ");
      } else if (i % 5 === 0) {
        ary.push("BUZZ");
      } else {
        ary.push(i);
      };
    };
    return ary;
  },

  myMap: function(ary, func){
    return_ary = [];
    ary.forEach(function(el){
      return_ary.push(func(el));
    });
    return return_ary;
  },

  primes: function(num){  
    primes_array = [2];
    for (let i = 3; i <= num; i++) {
      prime = true;
      for (let p = 0; p < primes_array.length; p++) {
        if (i % primes_array[p] === 0) {
          prime = false;
        };
      };
      if (prime) {
        primes_array.push(i);
      };
    };
    return primes_array;
  },
}



