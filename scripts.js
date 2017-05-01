// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    let sortedArr = array.sort();
    return sortedArr[sortedArr.length - 1];
  },

  reversed: function(string){
    return string.split('').reverse().join('')
  },

  loudSnakeCase: function(sentence){
    let filtered = sentence.split(/\W/);
    let newArr = []
    for (var i=0; i<filtered.length; i++){
      let word = filtered[i];
      if (word != ''){
        newArr.push(word[0].toUpperCase() + word.slice(1))
      }
    }
    return newArr.join('_')
  },

  compareArrays: function(arr1, arr2){
    for (var i=0; i<arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false
      }
    }
    return true
  },

  fizzBuzz: function(input){
    var solution = [];
    for (var i=1; i<=input; i++)
      if (i % 3 === 0 && i % 5 === 0){
        solution.push('FIZZBUZZ')
      }
      else if (i % 5 === 0){
        solution.push('BUZZ')
      }
      else if (i % 3 === 0){
        solution.push('FIZZ')
      }
      else {solution.push(i)}
      return solution;
  },

  myMap: function(array, funct){
    let newArr = [];
    for (var i=0; i<array.length; i++){
      newArr.push(funct(array[i]));
    };
    return newArr;
  },

  primes: function(num){
    let primes = [];
    function primeCheck(num){
      if (num >= 2){
        for (var j=num-1; j>=2; j--){
          if (num % j === 0){ return false; }
        }
        return true;
      }
      else {return false};
    }
    for (var i=2; i<=num; i++){
      if (primeCheck(i)){
        primes.push(i);
      }
    }
    return primes;
  }

}
