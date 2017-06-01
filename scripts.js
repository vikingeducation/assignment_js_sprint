var sprintFunctions = {
  largestEl: function(arr){
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  },

  reversed: function(str){
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){
    var removePunc = /[^A-Za-z0-9_]/g;
    str = str.toLowerCase().replace(/ /g,"_").replace(removePunc, "")
    .split("_");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join("_");
  },

  compareArrays: function(arr1, arr2){
    if (arr1.join() === arr2.join()) {
      return true;
    }
    else {
      return false;
    }
  },

  fizzBuzz: function(num){
    var arrFizz = [];
    for (var i = 1; i <= num; i++) {
      if (i%3 === 0 && i%5 === 0) {
        arrFizz.push("FIZZBUZZ");
      }
      else if (i%3 === 0) {
        arrFizz.push("FIZZ");
      }
      else if (i%5 === 0) {
        arrFizz.push("BUZZ");
      }
      else {
        arrFizz.push(i);
      }
    }
    return arrFizz;
  },

  myMap: function(arr, funct){
    var newArray = arr.map(funct);
    return newArray;
  },

  primes: function(num){
    var primesArr = [];
    for (i = 2; i < num; i++){
      if (i%i === 0) {
        var primeNum = true;
        for (j = 2; j < 101; j++) {
          if (j !== i && i%j === 0) {
            primeNum = false;
          }
        }
        if (primeNum) {
          primesArr.push(i);
        }
      }
    }
    return primesArr;
  }
}

//function for myMap
function myMapFunct(num) {
  return num += 10;
}

//user input prompts
var largestElInput = prompt("Enter a list of numbers (separted by commas) and the largest number will be returned.")
.replace(/ /g,"").split(",").map(Number);
var reversedInput = prompt("Enter a string and it will be reversed.");
var loudSnakeCaseInput = prompt("Enter a full sentence and it will be turned into Loud_Snake_Case.");
var arr1Input = prompt("Enter a list of elements (separated by commas) to be compared to another list.")
.replace(/ /g,"").split(",");
var arr2Input = prompt("Enter another list of elements (separated by commas) to be compared to the previous list.")
.replace(/ /g,"").split(",");
var fizzBuzzInput = prompt("Enter a number for the FizzBuzz array.");
var myMapArrInput = prompt("Enter a list of numbers.").replace(/ /g,"").split(",").map(Number);
var primesInput = prompt("Enter a positive number greater than 1 and less than 100 to receive all prime numbers that occur prior to that number.");;
primesInput = Number(primesInput);

//runs functions with user inputs, prints to HTML
document.getElementById("largest-el").innerHTML = sprintFunctions.largestEl(largestElInput);
document.getElementById("reversed").innerHTML = sprintFunctions.reversed(reversedInput);
document.getElementById("loud-snake-case").innerHTML = sprintFunctions.loudSnakeCase(loudSnakeCaseInput);
document.getElementById("compare-arrays").innerHTML = sprintFunctions.compareArrays(arr1Input, arr2Input);
document.getElementById("fizz-buzz").innerHTML = sprintFunctions.fizzBuzz(fizzBuzzInput);
document.getElementById("my-map").innerHTML = sprintFunctions.myMap(myMapArrInput, myMapFunct);
document.getElementById("primes").innerHTML = sprintFunctions.primes(primesInput);
