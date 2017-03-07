// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    let sortedArray = array.sort()
    return sortedArray[sortedArray.length - 1]
  },
  
  reversed: function(myString){  
    return myString.split("").reverse().join("")
  },

  loudSnakeCase: function(myString){  
    let myArray = myString.replace(/[^\w\s]/gi, "").replace(/\s+/g, " ").split(" ")
    let myArray2 = myArray.map(function(el) {
      return el.charAt(0).toUpperCase() + el.substr(1, el.length - 1)
    }).join("_")
    return myArray2
  },

  compareArrays: function(array1, array2){ 
    
    return array1.toString() === array2.toString()
  },

  fizzBuzz: function(num){  
    myArray = []
    for(let i = 1; i <= num; i++) {
      if(i % 3 == 0 && i % 5 == 0) {
        myArray.push("FIZZBUZZ")
      } else if(i % 3 == 0) {
        myArray.push("FIZZ")
      } else if(i % 5 == 0) {
        myArray.push("BUZZ")
      } else {
        myArray.push(i)
      }
    }

   return myArray
  },

  myMap: function(myArray, myFunction){  
    myArray2 = myArray.map(function(el) {
      return myFunction(el)
    })
    return myArray2
  },

  primes: function(num){  
    myArray = []
    for(let i = 2; i < num; i++) { //goes through 2..11
  
      let counter = 0 
      for(let j = 2; j <= i - 1; j++) { //divides i with 2 to (i - 1)
        if(i % j == 0) {
          counter ++ 
          break
        }
      }

      if(counter == 0) {
        myArray.push(i)
      }

    }
    return myArray
  },
}