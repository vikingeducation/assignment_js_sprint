var sprintFunctions = {
  allNum: function(num){
    var n = 1
    var arr = []
    while(true){
      arr.push(n)
      if(n >= num){break}
      n += 1
    }
    return arr
  },

  primeQuestion: function(number){
    divisors = sprintFunctions.allNum(number-1)
    divisors.shift()
    question = true
    divisors.forEach(function(x){
      if (number % x == 0) {question = false}
    })
    return question
  },

  largestEl: function(array){
    // your code here
    return array.sort().pop()
  },

  reversed: function(string){
    // your code here
    return string.split("").reverse().join("")
  },

  loudSnakeCase: function(string){
    // your code here
    var i = 0
    while(true){
      string = string.replace(/[.!@#$%^&*()<>,.?]/,"")
      i += 1
      if (i > 100) {break}
    }
    while(true){
      string = string.replace(" ", "_")
      i += 1
      if (i > 200) {break}
    }
    string = string.replace("__", "_")
    return string.split("_").map(function(str){
      return str.charAt(0).toUpperCase() + str.slice(1)
    }).join("_");
  },

  compareArrays: function(startarr, diffarr){
    // your code here
    question = true
    var i = startarr.length - 1
    while(true){
      if (startarr[i] != diffarr[i]) {question = false}
    return question
    }
    //return true
  },

  fizzBuzz: function(number){
    // your code here
    var arr = []
    var i = 1
    while(true){
      if (i % 3 == 0 && i % 5 == 0){arr.push("FIZZBUZZ")}
      else if(i % 3 == 0){arr.push("FIZZ")}
      else if(i % 5 == 0){arr.push("BUZZ")}
      else{arr.push(i)}
      i += 1
      if(i > number){break}
    }
    return arr
  },

  myMap: function(input, func){
    arr = []
    input.forEach(function(x){
      arr.push(func(x))
    })
    return arr
  },

  primes: function(thenumber){
    array = []
    posnum = sprintFunctions.allNum(thenumber)
    posnum.shift()
    posnum.pop()
    //return posnum
    posnum.forEach(function(x){
      if(sprintFunctions.primeQuestion(x) == true){
        array.push(x);
        //console.log(array);
      }
    })
    return array
  },
}

console.log(sprintFunctions.primes(12));
