// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    return array.sort(function(a, b) { return a - b; })[array.length - 1];
  },
  
  reversed: function(string){  
    // your code here
    var rev_string = "";

    for (var i = string.length - 1; i >= 0; i--) {
      rev_string += string[i];
    }

    return rev_string;
  },

  loudSnakeCase: function(sentence){  
    var words = [];
    var new_word = "";
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i].match(/[a-zA-Z]/)) {
        if (new_word)
          new_word += sentence[i];
        else
          new_word += sentence[i].toUpperCase();
      }
      else {
        if (new_word) {
          words.push(new_word);
          new_word = "";
        }
      }
    }
    
    return words.join("_");
  },

  compareArrays: function(array1, array2){ 
    if (array1.length !== array2.length) return false;

    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }

    return true; 
  },

  fizzBuzz: function(last){  
    var results = [];

    for (var i = 1; i <= last; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        results.push("FIZZ");
      } else if (i % 5 === 0) {
        results.push("BUZZ");
      } else {
        results.push(i);
      }
    }

    return results;
  },

  myMap: function(array, method){  
    var result = [];

    array.forEach(function(element) {
      result.push(method(element));
    });

    return result;
  },

  primes: function(number){  
    var results = [];

    var prime = function(integer) {
      if (integer === 2) return true;
      if (integer % 2 === 0) return false;
      for (var i = 3; i <= Math.sqrt(integer); i += 2) {
        if (integer % i === 0) return false;
      }
      return true;
    };

    for (var i = 2; i <= number; i++) {
      if (prime(i)) results.push(i);
    }
    return results;
  },

  bubbleSort: function(original_array) {
    var array = original_array;
    var again = true;
    while(again) {
      again = false;

      for(var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          again = true;
        }
      }
    }

    return array;
  },

  mergeSort: function(original_array) {
    var array = original_array;
    var middle = array.length / 2;

    if (array.length === 1) return array;

    var left = sprintFunctions.mergeSort(array.slice(0, middle));
    var right = sprintFunctions.mergeSort(array.slice(middle));

    var left_index = 0, right_index = 0;
    for (var i = 0; i < array.length; i++) {
      if (left_index >= left.length) {
        array[i] = right[right_index];
        right_index++;
      } else if (right_index >= right.length) {
        array[i] = left[left_index];
        left_index++;
      }
      else if (left[left_index] < right[right_index]) {
        array[i] = left[left_index];
        left_index++;
      } else {
        array[i] = right[right_index];
        right_index++;
      }
    }

    return array;
  },

  quickSort: function(original_array) {
    var array = original_array;
    var pivot = array[array.length - 1];
    var left = [], right = [];

    if (array.length < 2) return array;

    for(var i = 0; i < array.length - 1; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    left = sprintFunctions.quickSort(left);
    right = sprintFunctions.quickSort(right);
    left.push(pivot);
    return left.concat(right);
  }
}

function Roulette(start) {
  var bank = start;
  
  this.spin = function() {
    var result = Math.floor(Math.random() * 38 + 1);

    if (result === 37) result = '0'
    if (result === 38) result = '00'

    var amount = getAmount();

    var choice = getChoice();

    if (choice === '1') {
      var number = getNumber();
    }

    var results = {
      '1': function() {
        if (number === result) {
          console.log("Wow, you win $" + amount * 35 + "! The spin was " + result);
          bank += amount * 35;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '2': function() {
        if (result === '0') {
          console.log("Wow, you win $" + amount * 35 + "! The spin was " + result);
          bank += amount * 35;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '3': function() {
        if (result === '00') {
          console.log("Wow, you win $" + amount * 35 + "! The spin was " + result);
          bank += amount * 35;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '4': function() {
        if (result !== '0' && result !== '00' && result % 2 === 0) {
          console.log("Wow, you win $" + amount + "! The spin was " + result);
          bank += amount;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '5': function() {
        if (result !== '0' && result !== '00' && result % 2 !== 0) {
          console.log("Wow, you win $" + amount + "! The spin was " + result);
          bank += amount;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '6': function() {
        if (result !== '0' && result !== '00' && result < 19) {
          console.log("Wow, you win $" + amount + "! The spin was " + result);
          bank += amount;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '7': function() {
        if (result !== '0' && result !== '00' && result > 18) {
          console.log("Wow, you win $" + amount + "! The spin was " + result);
          bank += amount;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '8': function() {
        if (result !== '0' && result !== '00' && result >= 1 && result <= 12) {
          console.log("Wow, you win $" + amount * 2 + "! The spin was " + result);
          bank += amount * 2;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '9': function() {
        if (result !== '0' && result !== '00' && result >= 13 && result <= 24) {
          console.log("Wow, you win $" + amount * 2 + "! The spin was " + result);
          bank += amount * 2;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      },
      '10': function() {
        if (result !== '0' && result !== '00' && result >= 25 && result <= 36) {
          console.log("Wow, you win $" + amount * 2 + "! The spin was " + result);
          bank += amount * 2;
        } else {
          console.log("You LOSE! The spin was " + result);
          bank -= amount;
        }
      }
    }

    results[choice]();
    this.bankroll();
    
  };

  this.bankroll = function() {
    console.log("You now have $" + bank);
  };

  this.buyIn = function(amount) {
    bank += amount;
    this.bankroll();
  };

  var getChoice = function() {
    var menu = "Betting Menu:\n1: number\n2: 0\n3: 00\n4: Even\n5: Odd\n6: 1 to 18\n7: 19 to 36\n8: 1st 12\n9: 2nd 12\n10: 3rd 12\n";
    return prompt("What do you want to bet on?\n" + menu, "Enter bet");
  };

  var getAmount = function() {
    return prompt("How much do you want to bet?")
  };

  var getNumber = function() {
    return prompt("What number do you want to bet on?")
  };

}