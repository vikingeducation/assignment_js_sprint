// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  //takes an array and returns the largest element
  largestEl: function(array){
    array.sort();
    return array[array.length - 1];
  },

// takes a string and reverses it
  reversed: function(string){
    var arr =  string.split("");
    arr = arr.reverse();
    return arr.join("");
  },

  /* Takes a full sentence and puts it into "Loud_Snake_Case"
  strips out any non-character elements (like punctuation) */
  loudSnakeCase: function(str){
    var arr = str.toLowerCase().replace(/\s{2,}/g, ' ').split(' ');

    for (i = 0; i < arr.length; i++) {
      arr[i] = arr[i].match(/[^\W]+/g).join('');
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

    var newStr = arr.join('_');
    return newStr;

  },

//takes two arrays and checks to see if they are equal (same contents in the same order)
  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    var check = true;

    if (arr1.length == arr2.length) {
      for(var i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
          continue;
        } else {
          check = false;
          break;
        }
      }
    } else {
      check = false;
    }

    return check;
  },

  /* takes number input and returns array containing all the elements from 1 to number
  Each element divisible by both 3 and 5 is replaced by "FIZZBUZZ"
  Each element divisible by 3 is replaced by "FIZZ"
  Each element divisible by 5 is replaced by "BUZZ"*/
  fizzBuzz: function(num){
    var arr = new Array();

    for (var i = 1; i <= num; i++) {
     if ((i % 3) === 0 && (i % 5) === 0) {
       arr.push("FIZZBUZZ");
     } else if ((i % 3) === 0) {
       arr.push("FIZZ");
     } else if ((i % 5) === 0) {
       arr.push("BUZZ");
     }
    else {
      arr.push(i);
    }
  }

  return arr;
  },

/*takes an array and a function.
passes every element from the array into that function, in turn, running the function
returned array should be filled with each of the return statements from that function.*/
  myMap: function(arr, fun){

  var newArr = arr.map(function(el){
    return fun(el);
  });

  return newArr;
  },

//takes a number and outputs an array containing all prime numbers that occur prior to that number
  primes: function(limit){
    var arr = new Array();

    for (var counter = 2; counter <= limit; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
              arr.push(counter);
        }
    }

    return arr;
  },
}
