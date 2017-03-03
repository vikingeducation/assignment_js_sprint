// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    };

    return largest;
  },

  reversed: function(forwardString){
    var reversedString = "";
   for (var i = forwardString.length - 1; i >= 0; i--) {
     reversedString += forwardString[i];
   };

   return reversedString;
  },

  loudSnakeCase: function(sentence){
    var words = sentence.split(" ")
    var snakeSentence = "";

    for (var i = 0; i < words.length; i++)
    {
      var tempWord = words[i].replace(/\W/g, '');

      if (tempWord === "") {
        continue;
      }

      snakeSentence += tempWord.substring(0,1).toUpperCase() + tempWord.substring(1);

      if (i < words.length  -1) {
        snakeSentence += "_";
      }
    }

    return snakeSentence;
  },

  compareArrays: function(arr1, arr2){

    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        continue;
      }
      return false;
    }
    return true;;
  },

  fizzBuzz: function(number){
    var returnArray = [];

    for (i = 1; i <= number; i++) {
      if (i%3 === 0 && i%5 ===0) {
        returnArray.push("FIZZBUZZ");
      }
      else if (i%3 === 0 && i%5 !== 0) {
        returnArray.push("FIZZ");
      }
      else if (i%5 === 0 && i%3 !== 0) {
        returnArray.push("BUZZ");
      }
      else {
        returnArray.push(i);
      }
    };
      return returnArray;
  },

  myMap: function(arr, func){
    var returnArray = [];

    for (var i = 0; i < arr.length; i++) {
      returnArray[i] = func(arr[i]);
    };

    return returnArray;
  },

  primes: function(number){
    var primesArr = [];

    if (number == 2) {
      primesArr.push(2);
    }
    else {
      primesArr.push(2,3);
    }

    for (var i = 4; i < number; i++) {
      var root = Math.sqrt(i);
      var isAPrime = true;

      for (var j = 2; j <= root; j++) {
        if (i%j === 0) {
          isAPrime = false;
        }
        else {
          isAPrime = true;
        }

        if (!isAPrime) {
          j = root + 1;
        }
      };

      if (isAPrime) {
        primesArr.push(i);
      }
    };

    return primesArr;
  },
}
