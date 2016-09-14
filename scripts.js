// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0]
    for (i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        var largest = array[i];
      };
    };
    return largest
    // your code here
  },

  reversed: function(string){
    var reversed = ""
    for (i = string.length-1; i >= 0; i--) {
      reversed += string[i];
    };
    return reversed;
    // your code here
  },

  loudSnakeCase: function(string){
    var goal = string.replace("!", "");
    goal = goal.replace(".", "");
    goal = goal.replace("  ", " ");
    var arr = goal.split(" ");
    var goal = "";
    for (i = 0; i < arr.length; i++) {
      goal += arr[i][0].toUpperCase() + arr[i].substring(1);
      if (i < arr.length - 1) {
        goal += "_";
      };

    };
    return goal;
    // your code here
  },

  compareArrays: function(arr1, arr2) {
    if (arr1.length === arr2.length) {
      var same = true;
      for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          same = false;
        };
      };
      return same;
    };
    return false;
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(num){
    arr = []
    for (i = 1; i <= num; i++) {
      if (i % 15 == 0) {
        arr.push("FIZZBUZZ");
      }
      else if (i % 5 == 0 ) {
        arr.push("BUZZ");
      }
      else if (i % 3 == 0 ) {
        arr.push("FIZZ");
      }
      else {
        arr.push(i);
      };
    };
    return arr;
    // your code here
  },

  myMap: function(arr, func){
    result = [];
    for (i = 0; i < arr.length; i++) {
      result.push(func(arr[i]));
    }
    return result;
    // your code here
  },

  primes: function(num){
    var arr = [];
    for (i = 2; i < num; i++) {
      var prime = true
      for (j = 2; j < i; j++) {
        if (i%j == 0) {
          prime = false;
        };
      };
      if (prime) {
        arr.push(i);
      };
    };
    return arr;

    // your code here
  },

  bubbleSort: function(array) {
    if (array.length < 2) {
      return array;
    };
    var exes;
    arr = array;
    do {
      exes = 0
      for (i = 0; i < array.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          exes += 1;
        };
      };
    } while (exes !== 0);
    return arr;
  },

  mergeSort: function(array) {
    if (array.length < 2) {
      return array;
    };

    var i = Math.floor(array.length/2);
    var arr1 = this.mergeSort(array.slice(0, i));
    var arr2 = this.mergeSort(array.slice(i));
    return this.merge(arr1, arr2);


  },

  merge: function(arr1, arr2) {
    var arr = [];
    var i = 0;
    var j = 0;
    while (i !== arr1.length && j !== arr2.length) {
      if (arr1[i] < arr2[j]) {
        arr.push(arr1[i]);
        i += 1;
      }
      else {
        arr.push(arr2[j]);
        j += 1;
      };
    };
    while (i !== arr1.length) {
      arr.push(arr1[i]);
      i += 1;
    };
    while (j !== arr2.length) {
      arr.push(arr2[j]);
      j +=1;
    };
    return arr;
  },

  quickSort: function(array) {
    if (array.length < 2) {
      return array;
    };
    //
    var pivot = array[Math.floor(array.length/2)];
    var arr1 = [];
    var arr2 = [];
    for (i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        arr1.push(array[i]);
      }
      else if (array[i] > pivot) {
        arr2.push(array[i]);
      };
    };
    var arr = this.quickSort(arr1).concat([pivot]);
    arr = arr.concat(this.quickSort(arr2));
    return arr;

    //
  }
}

function Roulette(num) {
  var bankroll = num;
  this.bankroll = function() {
    console.log("You now have $" + bankroll);
  };
  this.buyIn = function(num) {
    bankroll += num;
  };
  this.spin = function(bet, number) {
    var spin = Math.ceil(Math.random()*36);
    if (number === spin) {
      bankroll += bet*35;
      console.log("You win! you're bankroll is now " + bankroll);
    }
    else {
      bankroll -= bet;
      console.log("you lose, bankroll is now " + bankroll);
    };
  }
}
