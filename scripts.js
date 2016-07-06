// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    var largestEl = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > largestEl) {
        largestEl = array[i];
      }
    }
    return largestEl;
  },
  
  reversed: function(string){  
    // your code here
    var result = "";
    for (var i = (string.length - 1); i > -1; i--) {
      result += string[i];
    }
    return result;
  },

  loudSnakeCase: function(sentence){  
    // your code here
    var sentence = sentence.replace(/\s\s+/g, " ")
    var sentence = sentence.replace(/[^a-zA-Z\s]/g, "");
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words = words.join("_");
  },

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(number){  
    // your code here
    var result = [];
    for (var i = 1; i < number + 1; i++) {
      tempResult = "";
      if (i % 3 === 0) {
        tempResult += "FIZZ";
      }
      if (i % 5 === 0) {
        tempResult += "BUZZ";
      }
      if (tempResult === "") {
        tempResult = i;
      }
      result.push(tempResult);
    }
    return result;
  },

  myMap: function(array, mapping){  
    // your code here
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.push( mapping(array[i]) );
    }
    return result;
  },

  primes: function(number){  
    // your code here
    var primes = [];
    if (number > 3) {
      for(var i = 2; i < number; i++) {
        var is_prime = true;
        for (var j = 2; j < i; j++) {
          if (i % j === 0) {
            is_prime = false;
            break;
          }
        }
        if (is_prime) {
          primes.push(i);
        }
      }
    }
    return primes;
  },

  bubbleSort: function(array) {
    var is_sorting = true;
    while (is_sorting) {
      is_sorting = false;
      for (var i = 1; i < array.length; i++) {
        if (array[i-1] > array[i]) {
          var tmp = array[i-1];
          array[i-1] = array[i];
          array[i] = tmp;
          is_sorting = true;
        }
      }
    }
    return array;
  },

  merge: function(arrayLeft, arrayRight) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < arrayLeft.length && ir < arrayRight.length) {
      if (arrayLeft[il] < arrayRight[ir]) {
        result.push(arrayLeft[il]);
        il++;
      } else {
        result.push(arrayRight[ir]);
        ir++;
      }
    }
    return result.concat(arrayLeft.splice(il)).concat(arrayRight.splice(ir));
  },

  mergeSort: function(array) {
    if (array.length < 2) {
      return array;
    }

    var middle = Math.floor(array.length/2);
    var leftArray = array.splice(0, middle);
    var rightArray = array;
    return sprintFunctions.merge(sprintFunctions.mergeSort(leftArray), sprintFunctions.mergeSort(rightArray));
  },

  quickSort: function(array) {
    if (array.length === 0) {
      return [];
    }

    var left = [],
        right = [],
        pivot = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return sprintFunctions.quickSort(left).concat(pivot, sprintFunctions.quickSort(right));
  }
}

function Roulette(bankRoll) {
  this.bank = bankRoll,

  this.spin = function(money, bet) {
    if (this.bank - money > 0) {
      this.bank -= money;
      var result = Math.floor(Math.random() * 37);
      var hasWin = false;

      function win(moneyWin) {
        this.bank += moneyWin;
        console.log("You Win " + moneyWin + " $, the result was " + result)
        hasWin = true;
      }

      switch(bet) {
        case "Even" :
          if (result % 2 === 0) {
            win.call(this, money * 2);
          }
          break;

        case "Odd" :
          if (result % 2 !== 0) {
            win.call(this, money * 2);
          }
          break;

        case "1 to 18" : 
          if (result > 0 && result < 19) {
            win.call(this, money * 2);
          }
          break;

        case "19 to 36" :
          if (result > 18 && result < 37) {
            win.call(this, money * 2);
          }
          break;

        case "1st 12" :
          if (result > 0 && result < 13) {
            win.call(this, money * 3);
          }
          break;

        case "2nd 12" :
          if (result > 12  && result < 25) {
            win.call(this, money * 3);
          }
          break;

        case "3rd 12" :
          if (result > 24 && result < 37) {
            win.call(this, money * 3);
          }
          break;

        case (parseInt(bet) >= 0 && parseInt(bet) <= 36): 
          if (result === bet) {
            win.call(this, money * 35);
          } 
          break;

        default:
          console.log("I don't know what " + bet + " means")
      }

      if (hasWin === false) {
        console.log("You loose, the result was " + result);
      }
      this.bankRoll();

    } else {
      console.log("You don't have enough money");
    }

  },

  this.bankRoll = function() {
    console.log("You now have " + this.bank);
  },

  this.buyIn = function(money) {
    this.bank += money;
    console.log("You bought in " + money + " $");
    this.bankRoll();
  } 

}





