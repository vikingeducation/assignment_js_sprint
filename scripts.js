// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
      array.sort(descendingOrder);
      return array[0];


    function descendingOrder(a, b) {
      if (typeof a == 'string') {
        if (a.length > b.length) {
          return -1;
        }
        if (a.length < b.length) {
          return 1;
        }
        return 0;
      }
      else
      {
        return b-a;
      }
    }
  },

  reversed: function(anystring) {
  var charArray = anystring.split('');
  var reversedArray = [];
  for (var i = charArray.length - 1; i >= 0; i--) {
    reversedArray.push(charArray[i]);
  };
  return reversedArray.join('')
  },

  loudSnakeCase: function(sentence) {
  var sentenceArray = sentence.split('');
  var noPunc = [];
  for (var i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] !== "!" && sentenceArray[i] !== "." && sentenceArray[i] !== ",") {
     noPunc.push(sentenceArray[i].toLowerCase())
    }
  }


  var words = noPunc.join('').split(' ')

  var words = words.filter(function(word) {
    return word !== "";
   });

   var upperFirst = function(x) {
   return x[0].toUpperCase() + x.slice(1)
   };

  return words.map(upperFirst).join('_');
  },

  compareArrays: function(array1, array2){
  var answer = true;
  for (var i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) {
      answer = false;
    }
  }
return answer

  },

  fizzBuzz: function(x){
  var fizzArray = []
    for (var i = 1; i <= x; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzArray.push("FIZZBUZZ")
      }
      else if (i % 5 === 0) {
        fizzArray.push("BUZZ")
      }
      else if (i % 3 === 0) {
        fizzArray.push("FIZZ")
      }
      else {
        fizzArray.push(i)
      }
    };
      return fizzArray;

  },

  myMap: function(array, someFunction){
    var returnArray=[]
    for (var i = 0; i < array.length; i++){
      returnArray.push(someFunction(array[i]))
    }
    return returnArray
  },

  primes: function(n) {
 var isPrime = function(num){
   for (var i = 2; i < num; i++) {
     if (num % i === 0) {
       return false;
     }
   }
   return true;
 }

  var primeArray =[2]
  for (var i = 3; i < n; i++) {
    if (isPrime(i)) {
      primeArray.push(i)
    }
  }
  return primeArray
},
}
