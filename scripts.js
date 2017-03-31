// Justin Flores (jeflores91@gmail.com)

var sprintFunctions = {
  largestEl: function(arr){
    let max = -Infinity
    arr.forEach((el) => {
      max = el > max ? el : max;
    })
    return max;
  },

  reversed: function(str){
    let rev = ''
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i]
    }
    return rev
  },

  loudSnakeCase: function(str){
    let result = ''
    for (let i = 0; i < str.length; i++) {
      const isLetterOrSpace = Array.isArray(str[i].match(/[a-zA-Z]/i)) || str[i] === " "
      const caps = i === 0 || str[i - 1] === " "
      if (isLetterOrSpace) {
        if (str[i] === ' ' && result.length > 1) {
          if (result[result.length - 1] === "_") {
            continue;
          }
        }
        result += (str[i] === " ") ? "_" : (caps ? str[i].toUpperCase() : str[i])
      }
    }
    return result
  },

  compareArrays: function(arr1, arr2){
    let arrAreEqual = true
    return arr1.every((el, idx) => {
      return arr2[idx] === el
    })
  },

  fizzBuzz: function(num){
    let arr = []
    const fizz = "FIZZ"
    const buzz = "BUZZ"
    const fizzBuzz = fizz + buzz
    for (let i = 1; i <= num; i++) {
      const divisibleBy3 = Math.floor(i / 3) === i / 3
      const divisibleBy5 = Math.floor(i / 5) === i / 5
      if (divisibleBy5 && divisibleBy3) {
        arr.push(fizzBuzz)
      } else if (divisibleBy5) {
        arr.push(buzz)
      } else if (divisibleBy3) {
        arr.push(fizz)
      } else {
        arr.push(i)
      }
    }
    return arr
  },

  myMap: function(arr, func){
    let result = []
    for (let i = 0; i < arr.length; i++) {
      result.push(func(arr[i]))
    }
    return result
  },

  primes: function(num){
    const isPrime = function(x) {
      for (let i = 2; i < x; i++) {
        if (Math.floor(x / i) === x / i) {
          return false
        }
      }
      return true
    }
    let arr = []
    for (let i = 2; i < num; i++) {
      if (isPrime(i)) {
        arr.push(i)
      }
    }
    return arr
  },
}
