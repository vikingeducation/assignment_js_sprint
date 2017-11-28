
var sprintFunctions = {

// takes an array and returns the largest element.
  largestEl: function(array) {
      var highest = 0;
      var counter = 0;
    while (counter < array.length) {
      if (highest < array[counter]) {
        highest = array[counter];
      }
      counter += 1
    }
      return highest;
  },

//takes a string and reverses it.
  reversed: function(string) {
    return string.split("").reverse().join("");
  },

/*takes a full sentence and puts it into "Loud_Snake_Case" format but strips
out any non-character elements (like punctuation).*/
  loudSnakeCase: function(sentence) {
    var lowered = sentence.toLowerCase();
    var onlySpacesAndLetters = lowered.replace(/[^A-Za-z ]/g,"");
    var singleSpace = onlySpacesAndLetters.replace(/ +/g," ");
    var capFirstLetter = singleSpace.replace(/\b./g, function(firstletter){ return firstletter.toUpperCase(); });
    var spaceToUnderscore = capFirstLetter.replace(/ /g,"_");
    return spaceToUnderscore;
  },

/*takes two arrays and checks to see if they are equal (same contents in the
same order). Assume they're not nested.*/
  compareArrays: function(array1,array2) {
    return array1.join(',') === array2.join(',');
},

/*takes an input of a number and returns an array containing all the elements
from 1 to that number. Each element divisible by 3 is replaced by "FIZZ", each
element divisible by 5 is replaced by "BUZZ" and each element divisible by
both 3 and 5 is replaced by "FIZZBUZZ". Eg. fizzBuzz(6) => [ 1, 2, "FIZZ", 4,
"BUZZ", "FIZZ" ]*/
  fizzBuzz: function(number) {
      var count = 1;
      var patternoutput = [];
    while (count <= number) {
      if (count % 3 === 0 && count % 5 === 0) {
        patternoutput.push('FIZZBUZZ');
      } else if (count % 3 === 0) {
          patternoutput.push('FIZZ');
        } else if (count % 5 === 0) {
            patternoutput.push('BUZZ');
          } else {
            patternoutput.push(count);
            }
      count += 1;
    }
      return patternoutput;
  },

/*takes an array and a function. It passes every element from the array into
that function, in turn, running the function. The returned array should be
filled with each of the return statements from that function.*/
  myMap: function(AnArray, aFunction) {
    return AnArray.map(aFunction);
  },

/*takes a number and outputs an array containing all prime numbers that occur
prior to that number, e.g. primes(8) => [2,3,5,7]*/
  primes: function(aNumber) {
      var options = [];
    if (aNumber > 2) {
        var increment = 2;
      while (increment < aNumber) {
        if (increment % 2 !== 0 || increment === 2) {
          options.push(increment);
        }
        increment += 1;
      }
      function primeFind(integer) {
          var check = integer - 1;
          var primey = true;
        while (check > 1) {
          if (integer % check === 0) {
            primey = false
            break;
          }
          check -= 1;
        }
        return primey
      }
        var primes = options.filter(primeFind);
          return primes;
    } else {
      return options;
    }
  },
}
