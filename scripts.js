// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    var greatest = null;
    for (var i = 0; i < input.length; i++) {
         if (input[i] === null || input[i] > greatest) {
          greatest = input[i];  


         }
       }
        return greatest; 
 
    },
  
  reversed: function(input){  
    var newStr = ""; 
    for (var i = input.length-1; i >= 0; i--) {
    newStr += input[i] 

    } 

    return newStr;
  },

  loudSnakeCase: function(input){  
   var removePunt = function(word){
  var punctuation = ["!", "?", ".", ","];
  var letters = word.split("");
    var newWord = ""; 
  for (var i = 0; i < letters.length; i++){
    if (punctuation.indexOf(letters[i]) == -1) { 
      newWord += letters[i]
    }
  }
  return newWord[0].toUpperCase() + newWord.slice(1);
   }
   var input = input.replace(/ +/g, ' ');
   var words = input.toLowerCase().split(" "); 
   var snakeStr = [];

   for (var i = 0; i < words.length; i++){
    snakeStr.push(removePunt(words[i]))

   }

  return snakeStr.join("_");
   
  },

  compareArrays: function(arr1, arr2){ 
   if (arr1.length != arr2.length) {
    return false;
   } else { 
     for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false; 
      }

     }
   }
   return true;
  },

  fizzBuzz: function(input){ 
  var result = []; 
  for (var i = 1; i <= input; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FIZZBUZZ")
    } else if 
    (i % 3 === 0) {
      result.push("FIZZ")
    } else if  
      (i % 5 === 0) {
        result.push("BUZZ")
      } else {result.push(i)}
    }
      return result;
    },

  myMap: function(arr,funct){  
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(funct(arr[i]))
    } 
    return result;
  },

  primes: function(numb){  
  var isPrime = function(num){
  if (num === 2 ) {
    return true} else {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    } 

  }
  return true;
  }
}
  var result = []; 
  if (numb < 2) {
    return result;

  }  else if 
     (numb === 2) {
      result.push(numb)
     } else { 
  for (var i = 2; i < numb; i++) {
    if (isPrime(i)) {
      result.push(i)

    }

  } 

  }
  return result;
  },
}
function bankroll() {
  return "you now have"+ this.cash
  
  
}

function buyIn(money){
  this.cash += money;
  return "You now have"+this.cash;
  
}
function spin(bet,spin) {
  var wheel = [0,00,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
var result = wheel[Math.floor(Math.random() * wheel.length)];
if (spin === "Odd" && result % 2 !== 0 && result !== 0 && result !== 00) {
this.cash += bet * 2} 
else if (spin === "Even" && result % 2 === 0 && result !== 0 && result !== 00) {this.cash += bet*2 } 
else if (spin === "1-18" && result >=1 && result <=18 )
{this.cash+= bet*2 
  return " Nice! the spin was " + result + " you now have " + this.cash
} 
else if (spin === "19-36" && result >=19 && result <=36 )
{this.cash+= bet*2 
return " Nice! the spin was " + result + " you now have " + this.cash} 
else if (spin === "1st 12" && result >=1 && result <=12 )
{this.cash+= bet + (bet*2) 
  return " Nice! the spin was " + result + " you now have " + this.cash
} 
else if (spin === "2nd 12" && result >=13 && result <=24 )
{this.cash+= bet + (bet*2) 
  return " Nice! the spin was " + result + " you now have " + this.cash
} 
else if (spin === "3rd 12" && result >=25 && result <=36 )
{this.cash+= bet + (bet*2) 
  return " Nice! the spin was " + result + " you now have " + this.cash
} 
else if (spin === 00 && result === 00) 
{this.cash = bet + (bet * 35)
  return " WOW! the spin was " + result + " you now have " + this.cash
} 
else if (spin === 0 && result === 0) 
{this.cash = bet + (bet * 35)
  return "WOW! the spin was " + result + " you now have " + this.cash
}
else if (spin === result) 
{this.cash = bet + (bet * 35)
return "WOW! the spin was" + result + "you now have" + this.cash}

else {this.cash -= bet 
  return "sorry! the spin was " + result + " you now have " + this.cash
}


}


var Roullete = function(cash){
  this.cash = cash
  this.spin = spin
  this.bankroll = bankroll
  this.buyIn = buyIn
}


