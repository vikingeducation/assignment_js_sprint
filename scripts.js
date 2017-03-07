// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    // your code here
    return Math.max.apply(null, arr);
  },

  reversed: function(str){
    // your code here
    var arr = str.split('');
    arr.reverse();
    return arr.join('');
  },

  loudSnakeCase: function(str){
    // your code here
    str = str.replace(/\s/gi,'_');
    str = str.replace(/[^A-Za-z0-9_]/gi, '');
    str = str.replace(/\__/gi,'_');
    var arr = str.split('_');
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1);
    }
    str = arr.join('_');
    return str;
  },

  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    if(arr1.length !== arr2.length){
      return false;
    }
    for(var i = 0; i <arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(num){
    // your code here
    var arr = [];
    for(var i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        arr.push('FIZZBUZZ');
      }
      else if(i % 3 === 0){
        arr.push('FIZZ');
      }
      else if (i % 5 === 0) {
        arr.push('BUZZ');
      }
      else{
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(arr, func){
    // your code here
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      newArr.push(func(arr[i]));
    }
    return newArr;
  },

  primes: function(num){
    // your code here
    var arr = [];
    for(var i = 2; i < num; i++){
      var isPrime = true;
      for(var j = 2; j < i; j++){
        if(i % j === 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        arr.push(i);
      }
    }
    return arr;
  },
}
