// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest)
      largest = array[i];
    }
    return largest;
  },

  reversed: function(string){
    var reversedString = "";
    for (var i = (string.length - 1); i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
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

  compareArrays: function(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    };

    var count = 0;
    while (arr1.length > count) {
      if (arr1[count] === arr2[count]) {
        arr1[count], arr2[count];
      } else {
        return false;
      }
      count++;
    }
    return true;
  },

  fizzBuzz: function(number){
    var arr = [];
    for (var i = 1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        arr.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        arr.push("FIZZ");
      } else if (i % 5 === 0) {
        arr.push("BUZZ");
      } else {
        arr.push(i);
      }
    }
    return arr
  },

  myMap: function(arr, funct){
    var newArray = [];
    arr.map(element => {
      newArray.push(funct(element));
    });
    return newArray;
  },

  primes: function(num) {
    var arr = [];
    for (var i = 2; i < num; i++) {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime) {
        arr.push(i);
      }
    }
    return arr;
  },
}
