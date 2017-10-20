// FILL IN THE FUNCTIONS BELOW

// STRING METHODS & PROPERTIES
// split()
// toUpperCase()
// slice()
// charAt()
// replace()

// ARRAY METHODS & PROPERTIES
// sort()
// pop()
// reverse()
// join()
// filter()
// map()
// every()
// push()




var sprintFunctions = {

  largestEl: function(arr){  
    return arr.sort((a, b) => a - b).pop();
  },
  
  reversed: function(str){
    let result = str.split(' ').reverse();
    result = result.map( (el) => el.split('').reverse().join('') ).join(' ');
    return result;
  },

// 

  loudSnakeCase: function(str){  
    let result = str.split(' ');
    result = result.filter( (el) => el.length > 0);
    result = result.map( (el) => {
      el = el.replace(/[^A-Za-z0-9_]/g,"");
      el = el.charAt(0).toUpperCase() + el.slice(1);
      return el;
    }).join('_');
    return result;
  },

  compareArrays: function(arr1, arr2){ 
    let result = arr1.every( (el, i, array) => arr1[i] == arr2[i] );
    return result;
  },

  fizzBuzz: function(number){  
    let result = [];
    for(let i = 1; i <= number; i++){
      if(i % 3 === 0 && i % 5 === 0){
        result.push('FIZZBUZZ');
      } else if(i % 3 === 0){
        result.push('FIZZ');
      } else if(i % 5 === 0){
        result.push('BUZZ');
      } else {
        result.push(i);
      }
    }
    return result
  },

  myMap: function(arr, fn){  
    let result = arr.map( (el, i, arr) => fn(el) );
    return result;
  },

  primes: function(number){  
    let arr = [];
    for(let i = 2; i <= number; i++){
      arr[i] = true;
    }
    for(let i = 2; i <= number; i++){
      for(let j = i * i; j <= number; j+=i) {
        arr[j] = false;
      }
    }

    let primes = [];
    for(let i = 0; i <= arr.length; i++){
      if( arr[i] ){
        primes.push(i);
      }
    }
    return primes
  },
}











