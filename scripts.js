// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    return Math.max(...array)
  },
  
  reversed: function(str){  
    return str.split("").reverse().join("")
  },

  loudSnakeCase: function(str){  
    let newStr = str.replace(/[^\w\s]|_/g, "")
                      .replace(/\s+/g, "_")
                      .split("_")
    for(let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i].replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }
    
    return newStr.join("_")
  },

  compareArrays: function(array1, array2){ 
    return (array1.length == array2.length) && array1.every((element, index) => element === array2[index])
  },

  fizzBuzz: function(num){
    let numbers = []

    for(let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 == 0) {
        numbers.push("FIZZBUZZ")
      } else if (i % 3 == 0) {
        numbers.push("FIZZ")
      } else if (i % 5 == 0) {
        numbers.push("BUZZ")
      } else {
        numbers.push(i)
      }
    }
    return numbers
  },

  myMap: function(array, cb){  
    return array.map(cb)
  },

  primes: function(num){  
    let primes =[]
    let isPrime = function(number) {
      let start = 2
      while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false
      }
      return number > 1
    }

    for(let i = 0; i < num; i++) {
      if (isPrime(i)) {
        primes.push(i)
      }
    }
    return primes
  },
}