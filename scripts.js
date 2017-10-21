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
    let newStr = str.split(" ").filter(Boolean);
    for(let i = 0; i<newStr.length; i++) {
      newStr[i] = newStr[i].replace(/\W/g,"");
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join("_");
  },

  compareArrays: function(arr,comparedArr){
    return arr.every((x,i)=> x===comparedArr[i]);
  },

  fizzBuzz: function(n){
    const arr = [];
    for(let i =1; i<=n; i++) {
      i % 3 === 0 && i % 5 === 0 ? arr.push("FIZZBUZZ"):
      i % 3 === 0 ? arr.push("FIZZ"):
      i % 5 === 0 ? arr.push("BUZZ"):arr.push(i);
    }
    return arr;
  },

  myMap: function(arr,func){
  },

  primes: function(n){
    
    let sqrtNum;
    const storePrimes = [];
    if(n===2) {return [2]}
    if(n>2) {storePrimes.push(2,3)}

    for(let i =1; i<n; i++) {
      sqrtNum = Math.sqrt(i);
    if(Number.isInteger(sqrtNum) === true || i % 2 === 0 || i % 3 ===0) {
      continue;
      }
    storePrimes.push(i);
  }

return storePrimes;
  },
}

console.log(sprintFunctions.largestEl(["dragon","bunny","dodragog","monkey"]));
console.log(sprintFunctions.reversed("dragon"));
console.log(sprintFunctions.loudSnakeCase("how is   .th%&e w#!eather"));
console.log(sprintFunctions.compareArrays([1,2,3],[1,2,3]));
console.log(sprintFunctions.fizzBuzz(15));
console.log(sprintFunctions.myMap([1,2,3,4,5]));
console.log(sprintFunctions.primes(25));
console.log(sprintFunctions.myMap([5,7,3,2]));
