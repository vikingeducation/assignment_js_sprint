// FILL IN THE FUNCTIONS BELOW
'use strict'
var sprintFunctions = {
  largestEl: function(arr){
    let bigEl = arr[0];
    for(let i=1; i< arr.length; i++) {
      if(bigEl.length<arr[i].length) {
        bigEl=arr[i];
      }
    }
    return bigEl;
  },

  reversed: function(str){
    let newStr="";
    for(let i=str.length-1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  },

  loudSnakeCase: function(str){
    let newStr = str.replace("/\w/g","s");

    return newStr;
  },

  compareArrays: function(arr,comparedArr){
    return arr.every((x,i)=> x===comparedArr[i]);
  },

  fizzBuzz: function(n){
    const arr = [];
    for(let i =1; i<=n; i++) {
      i % 3 === 0 && i % 5 === 0 ? arr.push("FizzBuzz"):
      i % 3 === 0 ? arr.push("Fizz"):
      i % 5 === 0 ? arr.push("Buzz"):arr.push(i);
    }
    return arr;
  },

  myMap: function(){
    // your code here
  },

  primes: function(n){


  },
}

console.log(sprintFunctions.largestEl(["dragon","bunny","dog","monkey"]));
console.log(sprintFunctions.reversed("dragon"));
console.log(sprintFunctions.loudSnakeCase("how is . the weather"));
console.log(sprintFunctions.compareArrays([1,2,3],[1,2,3]));
console.log(sprintFunctions.fizzBuzz(15));
