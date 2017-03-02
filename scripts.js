// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var largest = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i]
      }
    }
    return largest
  },
  
  reversed: function(string){  
    // your code here
    array = string.split("")
    for (let i = 0; i < array.length / 2; i++) {
      var hold = array[i]
      array[i] = array[array.length - 1 - i] 
      array[array.length - 1 - i] = hold
    }
    return array.join("")
  },

  loudSnakeCase: function(string){  
    var result = string.replace(/[\.!]/g, "")
    result = result.replace(/\s/g, ",")
    result = result.split(",")    
    var array = []
    for(let i = 0; i < result.length; i++) {
      var string = result[i]
      if (string != "") {
        array.push(string[0].toUpperCase() + string.substr(1).toLowerCase())
      }
    }

    return array.join("_")
  },

  compareArrays: function(arr1, arr2){ 
    // your code here (replace the return)
    for(var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false 
      }
    }
    return true
  },

  fizzBuzz: function(input){  
    // your code here
    var array = []
    for(var i = 1; i <= input; i++) {
      if (i % 5 == 0 && i % 3 == 0) {
        array.push("FIZZBUZZ")
      } else if (i % 5 == 0) {
        array.push("BUZZ")
      } else if (i % 3 == 0) {
        array.push("FIZZ")
      } else {
        array.push(i)
      }
    }
    return array
  },

  myMap: function(arr, func){ 
    var array = [] 
    for(let i = 0; i < arr.length; i++) {
      var result = func(arr[i])
      array.push(result)
    }
    return array
  },

  primes: function(input){  
    var array = []
    for(let i = 2; i < input; i++) {
      var count = 0
      var j = 2 
      while (true) {
        if (i % j == 0) {
          count += 1
        }
        if (i == j) {
          break;
        }
        j += 1
      }
      if (count == 1) {
        array.push(i)
      }
    }
    return array
  },
}