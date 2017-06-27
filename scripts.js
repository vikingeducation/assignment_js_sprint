// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {



  // largestEl takes an array and returns the largest element.
  largestEl: function(userArray){

    var largestValue = userArray[0];
    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i] > largestValue) {
        largestValue = userArray[i];
      }
    }

    return largestValue;

  },

  // reversed takes a string and reverses it.
  reversed: function(string){

    var revString = "";
    for (var i = string.length - 1; i > -1; i--) {
      revString += string[i];
    }

    return revString;

  },

// loudSnakeCase takes a full sentence and puts it into "Loud_Snake_Case" format but strips out any non-character elements (like punctuation).
  loudSnakeCase: function(sentence){

    var snakeSentence = sentence.toLowerCase();
    snakeSentence = snakeSentence.replace("[^a-zA-Z\\s]", "");
    snakeSentence = snakeSentence.split(" ");

    for (var i = 0; i < snakeSentence.length; i++) {
      snakeSentence[i] = snakeSentence[i].charAt(0).toUpperCase() + snakeSentence[i].slice(1);
    }

    return snakeSentence.join('_');

  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
