// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){
    var inputArray = arguments[0];
    var largest = inputArray[0];
    for (var i = 1; i <= inputArray.length; i++){
      if (inputArray[i] > largest){
        var largest = inputArray[i];
      };
    };
    return largest;
  },

  reversed: function(){
    var inputString = arguments[0];
    var reversed = [];
    for (var i = 0; i <= inputString.length; i++){
      reversed.unshift(inputString[i]);
    };
    return reversed.join("");
  },

  loudSnakeCase: function(){
    var inputSentence = arguments[0];
    var loudCase = [];
    var inputArray = inputSentence.replace(/\W+/g, " ")
                                  .trim()
                                  .split(" ");
    for (var i = 0; i < inputArray.length; i++){
      var word = inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1)
      loudCase.push(word);
    };
    return loudCase.join("_");
  },

  compareArrays: function(){
    var array1 = arguments[0];
    var array2 = arguments[1];
    if (array1.length !== array2.length){
      return false
    };
    for (var i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]){
        return false;
      };
    };
    return true;
  },

  fizzBuzz: function(){
    var numberArray = [];
    for (var i = 1; i <= arguments[0]; i++){
      if (i % 15 === 0){
        numberArray.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        numberArray.push("FIZZ");
      } else if (i % 5 === 0) {
        numberArray.push("BUZZ");
      } else {
        numberArray.push(i);
      };
    };
    return numberArray;
  },

  myMap: function(){
    var my_array = arguments[0];
    var my_func = arguments[1];
    var resultArray = [];
    for (var i = 0; i < my_array.length; i++){
      resultArray.push(my_func(my_array[i]));
    };
    return resultArray;
  },

  primes: function(){
    var lastNumber = arguments[0];
    resultPrimes = [];
    for (var counter = 2; counter < lastNumber; counter++){
      var notPrime = false;
      for (var i = 2; i < counter; i++){
        if (counter % i === 0){
          notPrime = true;
        };
      };
      if (notPrime === false){
        resultPrimes.push(counter);
        console.log(counter);
      };
    };
    return resultPrimes;
    console.log(resultPrimes);
  },

  bubbleSort: function(){
    var sortItem = arguments[0];
    var n = sortItem.length;
    while (n !== 0){
      var newn = 0;
      for (var i = 1; i <= n - 1; i++){
        if (sortItem[i - 1] > sortItem[i]){
          var temp = sortItem[i];
          sortItem[i] = sortItem[i - 1];
          sortItem[i - 1] = temp;
          newn = i
        };
      };
      n = newn
    };
    return sortItem;
  },
}

var merge = function(left, right){
  var result = [];
  while (left.length > 0 && left.length > 0){
    if (left[0] <= right[0]){
      result.push(left[0]);
      left = left.slice(1);
    } else {
      result.push(right[0]);
      right = right.slice(1);
    };
  };
  while (left.length > 0){
    result.push(left[0]);
    left = left.slice(1);
  };
  while (right.length > 0){
    result.push(right[0]);
    right = right.slice(1);
  };
  return result;
};

var mergeSort = function(){
  var sortItem = arguments[0];
  if (sortItem.length <= 1){
    return sortItem;
  };
  var left = [];
  var right = [];
  sortItem.forEach(function(el, index){
    if (index % 2 === 1){
      left.push(el);
    } else {
      right.push(el);
    };
  })
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
};


// var partition = function(A, lo, hi){
//   pivot = A[lo];
//   i = lo - 1;
//   j = hi + 1;
//   while (true){
//     do {
//       i = i + 1;
//     } while (A[i] < pivot);
//     do {
//       j = j - 1;
//     } while (A[j] > pivot);
//     if (i >= j){
//       return j;
//     };
//     var temp = A[j];
//     A[j] = A[i];
//     A[i] = temp;
//   };
// };
//
// var quicksort = function(A, lo, hi){
//   if (lo < hi){
//     var p = partition(A, lo, hi);
//     quicksort(A, lo, p);
//     quicksort(A, p + 1, hi);
//   };
// };


function quicksort(arr)
{
//if array is empty
if (arr.length === 0) {
return [];
}
  var left = [];
  var right = [];
  var pivot = arr[0];
  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}


function Roulette( startMoney ){
  this.yourMoney = startMoney;
  this.bankroll = function(){
    console.log("You now have $" + this.yourMoney)
  };
  this.spin = function(bet, num){
    var spinNum = Math.floor((Math.random() * 38) + 1)
    if (num === spinNum){
      this.yourMoney += bet
      console.log("You Win, the spin was " + spinNum + "!!!");
      this.bankroll();
    } else {
      this.yourMoney -= bet
      console.log("You lose, the spin was " + spinNum + ": D");
      this.bankroll();
    };
  };
  this.buyIn = function( money ){
    this.yourMoney += money;
    this.bankroll();
  };
}
