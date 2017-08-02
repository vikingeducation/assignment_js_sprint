// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arrayList){
    // your code here
    var largestElement = 0;
    for (var i = 0; i < arrayList.length; i++) {
      if (arrayList[i] > largestElement) {
        largestElement = arrayList[i];
      }
    }
    return largestElement;
  },

  reversed: function(stringForw){
    // your code here
    stringForw = stringForw.split("");

    var stringReve = [];
    for (var i = 0; i <= stringForw.length; i++) {
      stringReve[i] = stringForw[stringForw.length-i];
    }

    return stringReve.join("");
  },

  loudSnakeCase: function(stringCased){
    // your code here
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
      }
    //Set all letters to Capital
    var stringCased = stringCased.toUpperCase();
    var stringSnakeCased = "";

    for (var i = 0; i < stringCased.length; i++){
      //Reformat Spaces
      if (stringCased.charAt(i) == " " && (stringCased.charAt(i-1) != " ") && i > 0){
        stringSnakeCased = stringSnakeCased + "_";
      }
      else if (isLetter(stringCased.charAt(i)) ) {
        stringSnakeCased = stringSnakeCased + stringCased.charAt(i);
      }
    }
    //Convert capitals after first letter to lower case
    for (var i = 1; i < stringSnakeCased.length; i++) {
      if (isLetter(stringSnakeCased.charAt(i)) && isLetter(stringSnakeCased.charAt(i-1))) {
        stringSnakeCased = stringSnakeCased.slice(0,i) + stringSnakeCased.charAt(i).toLowerCase() + stringSnakeCased.slice(i+1,stringSnakeCased.length)
      }
    }
    return stringSnakeCased ;
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    //Check if lengths are the same
    if (array1.length != array2.length){
      return false;
    }
    //Check if content is the same
    else {
      var equal = true;
      for (var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i])
        {
          equal = false;
        }
      }
    }
    return equal;
  },

  fizzBuzz: function(number){
    // your code here
    if (number<0) {
      return false;
    }
    else {
      var array1 = [];
      for (var i = 0; i < number; i++) {
        if ( ((1+i)%5)===0 && ((1+i)%3)===0 ) {
          array1[i] = "FIZZBUZZ";
        }
        else if ((1+i)%3===0) {
          array1[i] = "FIZZ";
        }
        else if ((1+i)%5==0){
          array1[i] = "BUZZ";
        }
        else {
          array1[i] = i+1;
        }
      }
    }
    return array1;
  },

  myMap: function(array1, function1){
    // your code here
    if (array1.length < 0) {
      return false;
    }
    else {
      for (var i = 0; i < array1.length; i++){
        array1[i] = function1(array1[i]);
      }
    }
    return array1;
  },

  primes: function(number){
    // your code here
    if (number < 1) {
      return false;
    }
    else {
      var array1 = [];
      array1Index = -1;
      var bool = true;
      for (var i = 2; i <= number; i++) {
        bool = true;
        for (var j = i-1; j > 1; j--){
          if (!(i%j)) {
            bool = false;
          }
        }
        if (bool) {
          array1Index++;
          array1[array1Index] = i;
        }
      }
    }
    return array1;
  },
}

//Roulette Game
Roulette = function(startingMoney) {
  //Starting bank
  this.bank = startingMoney;
  //Spinning Wheel
  this.spinWheel = function () {
    var spinningNumber = Math.floor(Math.random() * 38);
    if (spinningNumber === 37) {
      spinningNumber = "00";
    }
    return spinningNumber;
  };
  //Win
  this.lose = function(spunNumber,bet) {
    console.log("You Lose, the spin was" + " " + spunNumber +  ":(");
    this.bank = this.bank - bet;
    this.bankroll();
    return true;
  };
  //Lose
  this.win = function(spunNumber, bet, winFactor) {
    console.log ("You Win $" + (bet * winFactor) + ", the spin was" + " " + spunNumber + "!!!");
    this.bank = this.bank + (bet * winFactor);
    this.bankroll();
    return true;
  }
  //Checking bet input
  this.betCheck = function (bet) {
    if (bet < 0) {
      console.log ("You have to bet something");
      return false;
    }
    else if (bet > this.bank) {
      console.log("You don't have that much money, try betting under $" + this.bank);
        if (this.bank === 0){
          console.log("Try adding money with .buyIn()");
        }
      return false;
    }
    //Checks if not a number
    else if (isNaN(bet) || ("00")) {
      return true;
    }
    else {
      return false;
    }
  };
  //Checking bet on number input
  this.betOnCheck = function (betOn) {
    //Betting above board
    if (betOn > 36) {
      console.log ("You have to bet on a space under 36");
      return false;
    }
    //Betting below board
    else if (betOn < 0) {
      console.log("You have to bet on a space above 0");
      return false;
    }
    else {
      return true;
    }
  };
  //Spinning the wheel after betting 1 number
  this.spin = function (betOn, bet) {
    //Input check
    if ((this.betCheck (bet))&&(this.betOnCheck (betOn)) ) {
      //Spinning
      var spinningNumber = this.spinWheel();
      //Winning
      if (spinningNumber === betOn){
        console.log ("You Win $" + (bet * 35) + ", the spin was" + " " + spinningNumber + "!!!");
        this.bank = this.bank + (bet*35);
        this.bankroll();
      }
      //Losing
      else if (spinningNumber != betOn){
        console.log("You Lose, the spin was" + " " + spinningNumber +  ":(");
        this.bank = this.bank - bet;
        this.bankroll();

      }
    }
  };
  //Betting on Odd or Even
  this.betOddOrEven = function (section, bet) {
    //Check input
    if (this.betCheck(bet)){
      if ( (section === "Odd") || (section === "Even") )
      {
        var spunNumber = this.spinWheel();
        //If 0
        if ((spunNumber === 0) || (spunNumber === "00")) {
          this.lose(spunNumber, bet);
        }
        //If odd win and lose
        else if (section === "Odd"){
          if (spunNumber%2) {
            this.win(spunNumber,bet,1);
          }
          else {
            this.lose(spunNumber,bet);
          }
        }
        //if even win and lose
        else {
          if (spunNumber%2) {
            this.lose(spunNumber,bet);
          }
          else {
            this.win(spunNumber,bet,1);
          }
        }
      }
      //Wrong input
      else {
       console.log("Please pick a side (Odd or Even)");
     }
   }
  };
  //Bet on top or bottom half
  this.betHalf = function (section, bet) {
    //Input check
    if (this.betCheck(bet)){
      if ( (section === "Top") || (section === "Bottom") ) {
        var spunNumber = this.spinWheel();
        if ( (spunNumber === 0) || (spunNumber === "00") ) {
          this.lose(spunNumber,bet);
        }
        else if ( (section === "Top") && (spunNumber <= 18) ) {
          this.win(spunNumber,bet,1);
        }
        else if ( (section === "Bottom") && (spunNumber > 18) ) {
          this.win(spunNumber,bet,1);
        }
        else {
          this.lose(spunNumber,bet);
        }
      }
      else {
        console.log("Please enter Top or Bottom");
      }
    }

  };
  this.betThird = function (section, bet) {
    //Input check
    if (this.betCheck(bet)){
      if ( (section === "Top") || (section ==="Middle") (section === "Bottom") ) {
        var spunNumber = this.spinWheel();
        if ( (spunNumber === 0) || (spunNumber === "00") ) {
          this.lose(spunNumber,bet);
        }
        else if ( (section === "Top") && (spunNumber <= 12) ) {
          this.win(spunNumber,bet,2);
        }
        else if ( (spunNumber < 12) || (section === "Middle") && (spunNumber <= 18) ) {
          this.win(spunNumber,bet,2);
        }
        else if ( (spunNumber > 18) || (section === "Bottom") ) {
          this.win(spunNumber,bet,2);
        }
        else {
          this.lose(spunNumber,bet);
        }
      }
      else {
        console.log("Please enter Top, Middle or Bottom");
      }
    }
  };
  //Checking money
  this.bankroll = function () {
    console.log("You now have $" + this.bank);
  };
  //Adding money
  this.buyIn = function (amountMoney) {
    console.log("You bought in $" + amountMoney);
    this.bank = this.bank + amountMoney;
    console.log("You now have $" + this.bank);
  };
  return console.log ("Welcome, starting bank roll is $" + this.bank + "\n try .spin(bet,betOn {00-36}) \n or .bankroll() to check your balance");
};
