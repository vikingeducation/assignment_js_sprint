  //var inputArr = [1,2,3,4,5];
  //var inputFunc = function(el){ return el*2; };
  //var exp = [2,4,6,8,10];
  //var actual = this.sprintObj.myMap(inputArr,inputFunc);
  //if (typeof actual === 'undefined') { actual = [] };
  //this.results.myMap = ( this.sprintObj.compareArrays(exp, actual) );

  var allNum = function(num){
    var n = 1
    var arr = []
    while(true){
      arr.push(n)
      if(n >= num){break}
      n += 1
    }
    return arr
  }

  var primeQuestion = function(number){
    divisors = allNum(number)
    divisors.pop()
    divisors.shift()
    question = true
    divisors.forEach(function(x){
      if (number % x == 0) {question = false}
    })
    return question
  }

  var primes = function(thenumber){
    array = []
    posnum = allNum(thenumber)
    posnum.pop()
    posnum.shift()
    posnum.forEach(function(x){
      if(primeQuestion(x)){
        array.push(x)
      }
    })
    return array
  }

  console.log(primes(12))
//replace(" " || "  ", "_")
