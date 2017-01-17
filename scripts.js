// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var longestEl = -Infinity
    for (var i = 0; i < array.length; i++)
      if (array[i] > longestEl)
        longestEl = array[i]
    return longestEl
  },

  reversed: function(string){
    var newString = ""
    for (var i = string.length - 1; i >= 0; i--)
      newString += string[i]
    return newString
  },
  loudSnakeCase: function(string){
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var newSentence = []
    var string = string.split(" ")
    for (var i = 0; i < string.length; i++) {
      var word = string[i]
      var newWord = ""
      for (var j = 0; j < word.length; j++) {
        if (alphabet.indexOf(word[j]) !== -1 && j === 0)
          newWord += word[j].toUpperCase()
        else if (alphabet.indexOf(word[j]) !== -1)
          newWord += word[j]
        }
      newSentence.push(newWord)
    }
   return newSentence.join("_")

  },

  compareArrays: function(array1, array2){
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  },

  fizzBuzz: function(number){
    var newArray = []
    for (var i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0)
        newArray.push("FIZZBUZZ")
      else if (i % 3 === 0 || i % 5 === 0)
        newArray.push("FIZZ")
      else
        newArray.push(i)
      }
    return newArray
  },

  myMap: function(array, cb){
    var mapped = []
    for (var i = 0; i < array.length; i++)
      mapped.push(cb(array[i]))
    return mapped
  },

  isPrime: function(num) {
    if (num < 2)
      return false
    for (var i = 2; i < num; i++)
      if ((num % i) === 0)
        return false
    return true
  },


  primes: function(number) {
    var primeNums = []
    for (var i = number; i >= 2; i--) {
      if (sprintFunctions.isPrime(i))
        primeNums.unshift(i)
      }
    return primeNums
  },
}
