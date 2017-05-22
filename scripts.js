// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
     var largeEl= arr[0]
     for(var i = 1; i < arr.length; i++){
       if (arr[i] > largeEl){
         largeEl= arr[i]
       }
     }
     return largeEl
  },

  reversed: function(string){
    var revString=""
    for (var i= string.length-1; i>=0; i--){
      revString+=string[i]
    }
    return revString;
  },

  loudSnakeCase: function(str){
    var adjustedString = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(/\s+/);
    var snakeCaseArray=[]
    adjustedString.forEach(function(word) {
      snakeCaseArray.push(word.charAt(0).toUpperCase() + word.substr(1));
    });
    return snakeCaseArray.join("_");
  },

  compareArrays: function(arrayAlpha, arrayBeta){
    if (arrayAlpha.join()===arrayBeta.join()){
      return true
    }
    else {
      return false
    }
  },

  fizzBuzz: function(number){
    var arrFB=[];
    for(i = 1; i <= number; i++) {
      if (i % 3===0 && i % 5===0){
        arrFB.push("FIZZBUZZ")
      }
      else if (i %3===0){
        arrFB.push("FIZZ")
      }
      else if (i % 5===0){
        arrFB.push("BUZZ")
      }
      else {
        arrFB.push(i)
      }
    }
    return arrFB
  },

  myMap: function(arr,funct){
    var outputArr=[]
    for (i = 0; i < arr.length; i++){
      outputArr.push(funct(arr[i]));
    }
    return outputArr;
  },

  primes: function(number){
    primeArr=[]
    for (i = 2; i<=number; i++){
      var prime = true
      for (n = 2; n<=(i/2); n++){
        if (i % n === 0){
          var prime = false;
        }
      }
      if (prime === true){
        primeArr.push(i)
      }
    }
    return (primeArr)
  },
}
