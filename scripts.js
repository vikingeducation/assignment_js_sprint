// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
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

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(number){
    // your code here
    var arr = []
    var i = 1
    while(true){
      arr << i
      i += 1
      if(i > number){break}
    }
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
