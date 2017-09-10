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
}

console.log(sprintFunctions.primeQuestion(11));
