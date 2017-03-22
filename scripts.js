function Roulette(startingAmount){
  this.bankRoll = startingAmount;
  this.spin = function(){
  var placedBet = Number(prompt("Enter Bet amount"));
  var guess = Number(prompt("Enter Guess (1 - 36)"));
  var winningNumber = Math.floor((Math.random() * 36) + 1);
  var message = 'Sorry, you lost';

  this.spin = function(betAmount, guess){
    var message,
        winningNumber = Math.floor((Math.random() * 36) + 1);

    if (guess === winningNumber){
      this.bankRoll += (betAmount * 35);
      message = 'Win! Updated Bankroll: ' + this.bankRoll;
    } else {
      this.bankRoll -= betAmount;
      message = 'Loss! Updated Bankroll: ' + this.bankRoll;
    }
    console.log(message)
  };

  this.buyIn = function(amount){
    this.bankRoll += amount;
  };
}
}

var sprintFunctions = {

  bubbleSort: function(array){
    var start = true;

  	while (start) {
  	  var triggered = false;
  		for (var i = 0; i < (array.length - 1); i++){
  	    var pointer1 = array[i];
  	    var pointer2 = array[i + 1];

  	    if (pointer2 < pointer1){
  	      array[i] = pointer2;
  	      array[i + 1] = pointer1;
  	      triggered = true;
  	      break;
  	    }

  		}
  		if (!triggered) { start = false; }
  	}
  	return array;
  },

  mergeSort: function(array){
    var midIdx, leftHalf, rightHalf;
    if (array.length < 2) {
      return array;
    }

    midIdx = Math.floor(array.length / 2);
    leftArr = array.slice(0, midIdx);
    rightArr = array.slice(midIdx, array.length);


    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));

  },

  merge: function(leftArr, rightArr){
    var returnArray = [];

    while ((leftArr.length) && (rightArr.length)) {
      if (leftArr[0] <= rightArr[0]) {
        returnArray.push(leftArr.shift());
      } else {
        returnArray.push(rightArr.shift());
      }
    }

    return returnArray.concat(leftArr).concat(rightArr)
  },

  quickSort: function(array){

    return array;
  },

  largestEl: function(array){
    var descSorted = array.sort(function(a, b) {
      return b - a;
    });
    return descSorted[0];
  },

  reversed: function(string){
    var reversedString = "";
    for (var i = (string.length - 1); i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  },

  loudSnakeCase: function(string){;
    var fixedString = string.toLowerCase();
    fixedString = fixedString.replace("_", " ");
    fixedString = fixedString.replace(/[^a-z\s+]/g, '');

    fixedString = fixedString.split(/\s+/);

    var output = fixedString.map(function(el){
        return el[0].toUpperCase() + el.substring(1, el.length);
    });

    return output.join("_");
  },

  compareArrays: function(array1, array2){
    if (array1.length !== array2.length){
      return false;
    }

    for (var i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(endPoint){
    var output = [];

    for (var i = 1; i <= endPoint; i++){
      var fizzBuzz = "";

      if (i % 3 === 0){ fizzBuzz += "FIZZ"; }
      if (i % 5 === 0){ fizzBuzz += "BUZZ"; }

      fizzBuzz ? output.push(fizzBuzz) : output.push(i);
    }
    return output;
  },

  myMap: function(array, functionPassed){
    var output = [];

    for (var i = 0; i < array.length; i++){
      var el = array[i];
      var newEl = functionPassed(el);
      output.push(newEl);
    }
    return output;
  },

  primes: function(input){
    var range = [];
    for (var i = 2; i < input; i++){ range.push(i) }

    return range.filter(sprintFunctions.isPrime);
  },

  isPrime: function(n){
    for(var i = 2; i < n; i++){
      if (n % i === 0){
        return;
      }
    }
      return n;
    },
}

var arr = [3, 1, 2]

console.log('mergesort', sprintFunctions.mergeSort(arr))
// console.log('quicksort', sprintFunctions.quickSort(arr))