// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var max = arr[0];
    arr.forEach( function(el){
      if (el > max) {
        max = el;
      };
    });
    return max;
  },

  reversed: function(string){
    var result = "";
    for (var i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
    return result;
  },

  loudSnakeCase: function(sentence){
    // strip out punctuation
    var newSentence = sentence.replace(/[^\w\s]|_/g, "");
    // strip punctuation .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    // split words into array (" ")
    var words = newSentence.split(" ");

    var titlizedArray = [];
    console.log(words);
    for (var i = 0; i < words.length; i++ ) {
      var word = words[i];
      var restOfWord = word.length - 1;
      // word[0] returns undefined for an empty string
      titlizedArray.push(word.substr(0,1).toUpperCase() + word.substr(1, restOfWord));
    }

    // join the words by '_'
    var titlizedSentence = titlizedArray.join("_");
    return titlizedSentence;
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
